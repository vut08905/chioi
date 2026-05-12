import os
import re

giupviec_dir = r"d:\chioi\Giupviec"

# Better gradient that fades to transparent
transparent_gradient = '\n<div class="absolute top-0 left-0 w-full h-[300px] z-[5]" style="background: linear-gradient(180deg, rgba(255,126,54,0.9) 0%, rgba(255,126,54,0) 100%); pointer-events: none;"></div>'

def fix_css_corruptions(content):
    # Revert all the broken classes
    content = content.replace('-container', 'bg-surface-container')
    content = content.replace('bg-surface-bg-surface-container', 'bg-surface-container') # just in case
    content = content.replace('text-white-variant', 'text-on-surface-variant')
    content = content.replace('text-white/80', 'text-on-surface-variant')
    
    # We want text-white in the header, but elsewhere we need to restore text-on-surface
    # Instead of a complex regex, let's just find the header and protect it.
    header_match = re.search(r'<header.*?</header>', content, flags=re.DOTALL)
    header_content = header_match.group(0) if header_match else ""
    
    # Globally replace text-white with text-on-surface (this fixes the body)
    content = content.replace('text-white', 'text-on-surface')
    
    # Restore text-white in the header specifically
    if header_content:
        new_header = header_content.replace('text-on-surface', 'text-white')
        content = content.replace(header_content, new_header)
        
    # Also buttons like "NHẬN ĐƠN" with `gradient-primary` should have `text-white`
    content = content.replace('gradient-primary text-on-surface', 'gradient-primary text-white')
    content = content.replace('bg-primary text-on-surface', 'bg-primary text-white')
    content = content.replace('bg-secondary text-on-surface', 'bg-secondary text-white')
    
    return content

for filename in os.listdir(giupviec_dir):
    if not filename.endswith('.html'):
        continue
    filepath = os.path.join(giupviec_dir, filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Apply CSS fixes
    content = fix_css_corruptions(content)

    # Fix the old bad gradient if present
    content = re.sub(r'<div class="absolute top-0 left-0 w-full h-\[300px\] z-0 pointer-events-none".*?</div>', '', content)
    
    # Insert new transparent gradient right after <body...>
    content = re.sub(r'(<body[^>]*>)', r'\1' + transparent_gradient, content)

    # Specific JS and ID injection for trangchutasker.html
    if filename == 'trangchutasker.html':
        # Add IDs to the modal and buttons
        content = content.replace('<div class="relative z-10 w-full max-w-sm px-md">', '<div id="modal-don-moi" class="relative z-10 w-full max-w-sm px-md">')
        content = content.replace('BỎ QUA', 'BỎ QUA') # anchor point
        content = content.replace('<button class="flex-1 py-3 px-4 rounded-full border-2 border-outline-variant text-on-surface-variant', '<button onclick="boQuaDon()" class="flex-1 py-3 px-4 rounded-full border-2 border-outline-variant text-on-surface-variant')
        content = content.replace('<button class="flex-1 py-3 px-4 rounded-full gradient-primary text-white', '<button onclick="nhanDon()" class="flex-1 py-3 px-4 rounded-full gradient-primary text-white')
        
        # Add JS and Toast HTML
        if 'function boQuaDon()' not in content:
            js_code = """
<!-- Toast Notification -->
<div id="toast-notify" class="hidden fixed top-20 left-1/2 -translate-x-1/2 z-[100] bg-surface-container-lowest text-on-surface px-6 py-3 rounded-full shadow-xl border border-primary-container font-title-sm flex items-center gap-2 transition-all">
    <span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">check_circle</span>
    <span id="toast-msg">Thành công</span>
</div>
<script>
function boQuaDon() {
    document.getElementById("modal-don-moi").style.display = "none";
    showToast("Đã bỏ qua đơn hàng. Chú ý tỷ lệ nhận đơn!");
}
function nhanDon() {
    document.getElementById("modal-don-moi").style.display = "none";
    showToast("Đã nhận đơn thành công! Hãy di chuyển đến điểm dọn dẹp.");
}
function showToast(msg) {
    var toast = document.getElementById("toast-notify");
    document.getElementById("toast-msg").innerText = msg;
    toast.classList.remove("hidden");
    setTimeout(function() { toast.classList.add("hidden"); }, 3000);
}
</script>
"""
            content = content.replace('</body>', js_code + '\n</body>')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Fixed {filename}")

print("All Giupviec files fixed thoroughly!")
