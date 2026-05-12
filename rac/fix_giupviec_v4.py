import os
import re

giupviec_dir = r"d:\chioi\Giupviec"

# Fix 1: Make gradient fade to transparent for all files
for filename in os.listdir(giupviec_dir):
    if not filename.endswith('.html'): continue
    filepath = os.path.join(giupviec_dir, filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the gradient style and force it to be transparent
    content = re.sub(
        r'style="background: linear-gradient[^"]+"',
        'style="background: linear-gradient(180deg, rgba(255,126,54,0.9) 0%, rgba(255,126,54,0) 100%); pointer-events: none;"',
        content
    )
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

# Fix 2: Rewrite trangchutasker.html with exact Nav and Map
filepath_home = os.path.join(giupviec_dir, 'trangchutasker.html')
with open(filepath_home, 'r', encoding='utf-8') as f:
    home_content = f.read()

# Replace the map image
old_img = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAK-8vGHUSnwheRf36bf1I31_oFpLczOP50uTG6kHxuaTDdjyKp_-6YSD5XycdX2FwdHD7LkeD4b9uG7JnCRYW7N7jWlcBpAszoFxeL5DjDupTr47P3Z_5vyrLEkyrq3_XSMERIdYiVYX4edLOntEFPQYBC9ScEHTNSV-bCth77QIy8IRWYn8kAbURvTKuFighj8yNK4KO9Bvn3htY33RcSq9a4TSONhZkI600o8MHBSwmFy1KmBwsalyUQo0dd-RjtJdM-G9N0CE8'
home_content = home_content.replace(old_img, 'map.png')

# Fix Nav bar to be exact
nav_bar_exact = """<nav class="fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-md z-50 flex justify-around items-center px-4 py-3 rounded-full bg-white shadow-xl border border-surface-container-high">
    <!-- Trang chủ -->
    <a class="flex flex-col items-center justify-center text-primary active:scale-95 transition-transform" href="trangchutasker.html">
        <span class="material-symbols-outlined text-[28px]" style="font-variation-settings: 'FILL' 1;">home</span>
        <span class="text-label-sm font-label-sm">Trang chủ</span>
    </a>
    <!-- Lịch sử -->
    <a class="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary active:scale-95 transition-colors" href="lichsudonhang.html">
        <span class="material-symbols-outlined text-[28px]" >history</span>
        <span class="text-label-sm font-label-sm font-medium">Lịch sử</span>
    </a>
    <!-- Thống kê -->
    <a class="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary active:scale-95 transition-colors" href="thunhapvathongke.html">
        <span class="material-symbols-outlined text-[28px]" >monitoring</span>
        <span class="text-label-sm font-label-sm font-medium">Thống kê</span>
    </a>
    <!-- Tài khoản -->
    <a class="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary active:scale-95 transition-colors" href="hosocanhan.html">
        <span class="material-symbols-outlined text-[28px]" >person</span>
        <span class="text-label-sm font-label-sm font-medium">Cá nhân</span>
    </a>
</nav>"""

# Replace the <nav> block
home_content = re.sub(r'<nav.*?</nav>', nav_bar_exact, home_content, flags=re.DOTALL)

with open(filepath_home, 'w', encoding='utf-8') as f:
    f.write(home_content)

print("Applied final fixes to all Giupviec files.")
