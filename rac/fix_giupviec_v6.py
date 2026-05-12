import os
import re

giupviec_dir = r"d:\chioi\Giupviec"

for filename in os.listdir(giupviec_dir):
    if not filename.endswith('.html'): continue
    filepath = os.path.join(giupviec_dir, filename)
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # If label-sm is not in the config, inject it after body-sm
    if '"label-sm"' not in content:
        # Find the line with "body-sm" inside the fontSize block
        content = re.sub(
            r'("body-sm": \["14px", \{"lineHeight": "20px", "fontWeight": "400"\}\])',
            r'\1,\n                    "label-sm": ["11px", {"lineHeight": "16px", "fontWeight": "500"}]',
            content
        )
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)

print("Injected label-sm to all tailwind configs.")
