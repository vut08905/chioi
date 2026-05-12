import os
import re

giupviec_dir = r"d:\chioi\Giupviec"

for filename in os.listdir(giupviec_dir):
    if not filename.endswith('.html'): continue
    filepath = os.path.join(giupviec_dir, filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Fix tailwind config kebab-case mapping
    content = content.replace('"surfaceContainerLowest"', '"surface-container-lowest"')
    content = content.replace('"surfaceContainerLow"', '"surface-container-low"')
    content = content.replace('"surfaceContainerHigh"', '"surface-container-high"')
    content = content.replace('"surfaceContainerHighest"', '"surface-container-highest"')
    content = content.replace('"surfaceContainer"', '"surface-container"')
    content = content.replace('"primaryContainer"', '"primary-container"')
    content = content.replace('"onPrimaryContainer"', '"on-primary-container"')
    content = content.replace('"errorContainer"', '"error-container"')
    
    # 2. Fix <main> tag to have relative z-10 and NO negative margin!
    # For lichsudonhang.html, we also change -mt-44 to pt-6
    if filename == 'lichsudonhang.html':
        content = re.sub(r'<main\s+class="[^"]*-mt-44[^"]*">', '<main class="pt-6 px-md relative z-10">', content)
        
        # 3. Delete the "Cần người hỗ trợ thêm?" block from lichsudonhang.html
        # Using a regex to find the block up to its closing </div>
        # Let's just find the text and remove its parent container.
        # It's better to just do string slicing if we know the bounds, or a more precise regex.
        start_str = '<div class="relative overflow-hidden rounded-2xl bg-primary h-32 flex items-center p-md">'
        end_idx = content.find(start_str)
        if end_idx != -1:
            # Find the closing </div> of this block. It has 2 child divs, so it's 3 </div>s total.
            # But let's just use string replace for the exact known block.
            block_to_remove = """<div class="relative overflow-hidden rounded-2xl bg-primary h-32 flex items-center p-md">
<div class="z-10">
<h4 class="text-on-surface font-bold text-title-sm">Cần người hỗ trợ thêm?</h4>
<button class="mt-2 px-4 py-1.5 bg-white text-primary text-label-caps rounded-full font-bold shadow-lg">Đặt ngay</button>
</div>
<div class="absolute right-0 top-0 h-full opacity-30">
<span class="material-symbols-outlined text-[120px] translate-x-1/4 translate-y-1/4" data-icon="cleaning_services">cleaning_services</span>
</div>
</div>"""
            if block_to_remove in content:
                content = content.replace(block_to_remove, '')
            else:
                # Try to regex it out if formatting is slightly different
                content = re.sub(r'<div class="relative overflow-hidden rounded-2xl bg-primary h-32 flex items-center p-md">.*?Cần người hỗ trợ thêm.*?</button>\s*</div>\s*<div class="absolute right-0 top-0 h-full opacity-30">.*?</span>\s*</div>\s*</div>', '', content, flags=re.DOTALL)
    
    else:
        # For other files, ensure <main> has relative z-10
        # If it doesn't have relative z-10, inject it.
        # Be careful not to duplicate.
        def inject_z10(match):
            cls = match.group(1)
            if 'relative' not in cls:
                cls += ' relative'
            if 'z-10' not in cls:
                cls += ' z-10'
            # Also remove any negative margin just in case
            cls = re.sub(r'-mt-\d+', '', cls)
            return f'<main class="{cls.strip()}">'
            
        content = re.sub(r'<main\s+class="([^"]+)">', inject_z10, content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("Fixed tailwind config keys, z-index, and removed 'Cần người hỗ trợ thêm' block.")
