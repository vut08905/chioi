import os
import re

giupviec_dir = r"d:\chioi\Giupviec"

for filename in os.listdir(giupviec_dir):
    if not filename.endswith('.html'): continue
    filepath = os.path.join(giupviec_dir, filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Clean up CSS class corruptions
    content = re.sub(r'bg-surface(bg-surface)+', 'bg-surface', content)
    content = re.sub(r'border-surface(bg-surface)+', 'border-surface', content)
    content = re.sub(r'primarybg-surface-container', 'primary-container', content)
    content = re.sub(r'border-surface-container-high', 'border-surface-container-high', content) # fix nav border
    
    # Fix the double "border-surfacebg-surface-container-high" specifically
    content = re.sub(r'border-surface(bg-surface)?-container-high', 'border-surface-container-high', content)
    
    # 2. Fix the Header
    # Remove any backgrounds from the header
    header_match = re.search(r'(<header[^>]*>)(.*?)(</header>)', content, flags=re.DOTALL)
    if header_match:
        header_tag = header_match.group(1)
        header_body = header_match.group(2)
        
        # Remove background/shadow classes from header tag
        header_tag = re.sub(r'\bbg-gradient-to-r\b', '', header_tag)
        header_tag = re.sub(r'\bfrom-primary\b', '', header_tag)
        header_tag = re.sub(r'\bto-primary-container\b', '', header_tag)
        header_tag = re.sub(r'\bto-primary\b', '', header_tag)
        header_tag = re.sub(r'\bbg-primary\b', '', header_tag)
        header_tag = re.sub(r'\bbg-surface\b', '', header_tag)
        header_tag = re.sub(r'\bshadow-md\b', '', header_tag)
        
        # Ensure it has transparent and z-40
        if 'bg-transparent' not in header_tag:
            header_tag = header_tag.replace('class="', 'class="bg-transparent relative z-40 ')
            
        # Change text-on-surface to text-white inside header
        header_body = header_body.replace('text-on-surface', 'text-white')
        
        content = content[:header_match.start()] + header_tag + header_body + '</header>' + content[header_match.end():]
        
    # 3. Fix the top gradient div
    # In trangchutasker, fade to transparent over the map.
    # In others, fade to body background color (rgb(255, 248, 246))
    if filename == 'trangchutasker.html':
        grad_style = 'style="background: linear-gradient(180deg, rgba(255,126,54,0.9) 0%, rgba(255,126,54,0) 100%); pointer-events: none;"'
    else:
        grad_style = 'style="background: linear-gradient(180deg, rgb(255, 126, 54) 0%, rgb(255, 248, 246) 100%); pointer-events: none;"'
        
    # Replace the existing gradient div
    # It might be z-[5] or z-0
    new_grad = f'<div class="absolute top-0 left-0 w-full h-[300px] z-0" {grad_style}></div>'
    
    # Try to replace existing
    content = re.sub(r'<div class="absolute top-0 left-0 w-full h-\[300px\] z-[^>]+></div>', new_grad, content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
        
    print(f"Cleaned {filename}")
