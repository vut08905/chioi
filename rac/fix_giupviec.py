import os
import re

giupviec_dir = r"d:\chioi\Giupviec"

# Nav bar template
NAV_TEMPLATE = """
<!-- Navigation Shell -->
<nav class="fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-md z-50 flex justify-around items-center px-4 py-3 rounded-full bg-white shadow-xl border border-surface-container-high">
    <!-- Trang chủ -->
    <a class="flex flex-col items-center justify-center {home_active_class} transition-transform" href="trangchutasker.html">
        <span class="material-symbols-outlined text-[28px]" {home_style}>home</span>
        <span class="text-label-sm font-label-sm">Trang chủ</span>
    </a>
    <!-- Lịch sử -->
    <a class="flex flex-col items-center justify-center {history_active_class} transition-colors" href="lichsudonhang.html">
        <span class="material-symbols-outlined text-[28px]" {history_style}>history</span>
        <span class="text-label-sm font-label-sm font-medium">Lịch sử</span>
    </a>
    <!-- Thống kê -->
    <a class="flex flex-col items-center justify-center {stats_active_class} transition-colors" href="thunhapvathongke.html">
        <span class="material-symbols-outlined text-[28px]" {stats_style}>monitoring</span>
        <span class="text-label-sm font-label-sm font-medium">Thống kê</span>
    </a>
    <!-- Tài khoản -->
    <a class="flex flex-col items-center justify-center {profile_active_class} transition-colors" href="hosocanhan.html">
        <span class="material-symbols-outlined text-[28px]" {profile_style}>person</span>
        <span class="text-label-sm font-label-sm font-medium">Cá nhân</span>
    </a>
</nav>
"""

# Active/Inactive classes
ACTIVE_CLASS = "text-primary active:scale-95"
INACTIVE_CLASS = "text-on-surface-variant hover:text-primary active:scale-95"
ACTIVE_STYLE = 'style="font-variation-settings: \'FILL\' 1;"'
INACTIVE_STYLE = ''

def get_nav(filename):
    context = {
        'home_active_class': INACTIVE_CLASS, 'home_style': INACTIVE_STYLE,
        'history_active_class': INACTIVE_CLASS, 'history_style': INACTIVE_STYLE,
        'stats_active_class': INACTIVE_CLASS, 'stats_style': INACTIVE_STYLE,
        'profile_active_class': INACTIVE_CLASS, 'profile_style': INACTIVE_STYLE,
    }
    
    if filename == 'trangchutasker.html':
        context['home_active_class'] = ACTIVE_CLASS
        context['home_style'] = ACTIVE_STYLE
    elif filename == 'lichsudonhang.html':
        context['history_active_class'] = ACTIVE_CLASS
        context['history_style'] = ACTIVE_STYLE
    elif filename == 'thunhapvathongke.html':
        context['stats_active_class'] = ACTIVE_CLASS
        context['stats_style'] = ACTIVE_STYLE
    elif filename == 'hosocanhan.html':
        context['profile_active_class'] = ACTIVE_CLASS
        context['profile_style'] = ACTIVE_STYLE
        
    return NAV_TEMPLATE.format(**context)

gradient_div = '\n<div class="absolute top-0 left-0 w-full h-[300px] z-0 pointer-events-none" style="background: linear-gradient(rgb(255, 126, 54) 0%, rgb(252, 249, 248) 100%);"></div>'

for filename in os.listdir(giupviec_dir):
    if not filename.endswith('.html'):
        continue
    filepath = os.path.join(giupviec_dir, filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Replace nav bar
    if '<nav' in content and '</nav>' in content:
        # Regex to match the entire <nav>...</nav> block
        content = re.sub(r'<nav.*?</nav>', get_nav(filename), content, flags=re.DOTALL)
    else:
        # If no nav but it's one of the main files, append before </body>
        if filename in ['trangchutasker.html', 'lichsudonhang.html', 'thunhapvathongke.html', 'hosocanhan.html']:
            content = content.replace('</body>', get_nav(filename) + '\n</body>')

    # 2. Add gradient background at top if not exists
    if 'rgb(255, 126, 54)' not in content:
        content = content.replace('<body', '<body') # ensure it's there
        # Inject right after <body ...>
        content = re.sub(r'(<body[^>]*>)', r'\1' + gradient_div, content)

    # 3. Make header transparent
    # Find header and replace its bg classes
    if '<header' in content:
        # remove background colors
        content = re.sub(r'bg-primary-container|dark:bg-primary|bg-surface\b', '', content)
        # make text white for better contrast on orange bg
        content = content.replace('text-on-primary', 'text-white').replace('text-on-surface', 'text-white')
        # add bg-transparent to header
        content = re.sub(r'(<header[^>]*class="[^"]*)', r'\1 bg-transparent relative z-40', content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Fixed {filename}")

print("All done!")
