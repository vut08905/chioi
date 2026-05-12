import os
import re

giupviec_dir = r"d:\chioi\Giupviec"

# The Tailwind Config block from lichsudonhang.html
tailwind_config = """<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    <script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "errorContainer": "#ffdad6",
                    "inverse-on-surface": "#ffede6",
                    "secondary": "#895032",
                    "on-tertiary": "#ffffff",
                    "onPrimaryContainer": "#642600",
                    "on-tertiary-fixed": "#001f28",
                    "on-tertiary-fixed-variant": "#004d61",
                    "on-surface": "#241914",
                    "surfaceContainerHighest": "#f4ded5",
                    "primaryContainer": "#ff7e36",
                    "tertiary-container": "#00b1da",
                    "on-background": "#241914",
                    "tertiary-fixed": "#b8eaff",
                    "primary": "#a04100",
                    "secondary-fixed": "#ffdbcc",
                    "on-secondary-container": "#794226",
                    "surface-variant": "#f4ded5",
                    "background": "#fff8f6",
                    "surface-bright": "#fff8f6",
                    "surface-tint": "#a04100",
                    "outline-variant": "#dfc0b3",
                    "error": "#ba1a1a",
                    "on-primary-fixed": "#351000",
                    "tertiary": "#006780",
                    "outline": "#8b7266",
                    "on-primary-fixed-variant": "#7a3000",
                    "on-surface-variant": "#584238",
                    "surfaceContainerLow": "#fff1eb",
                    "primary-fixed-dim": "#ffb693",
                    "on-secondary": "#ffffff",
                    "surfaceContainerHigh": "#fae4da",
                    "surface": "#fff8f6",
                    "surface-dim": "#ecd6cc",
                    "inverse-primary": "#ffb693",
                    "on-tertiary-container": "#003f4f",
                    "inverse-surface": "#3b2e28",
                    "on-error": "#ffffff",
                    "surfaceContainer": "#ffeae1",
                    "primary-fixed": "#ffdbcc",
                    "tertiary-fixed-dim": "#52d5ff",
                    "on-secondary-fixed": "#351000",
                    "on-secondary-fixed-variant": "#6d391d",
                    "secondary-fixed-dim": "#ffb693",
                    "secondary-container": "#feb28e",
                    "on-error-container": "#93000a",
                    "surfaceContainerLowest": "#ffffff",
                    "on-primary": "#ffffff"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
            },
            "spacing": {
                    "xl": "32px",
                    "xs": "4px",
                    "md": "16px",
                    "lg": "24px",
                    "container-padding": "16px",
                    "sm": "8px",
                    "stack-gap": "12px",
                    "base": "4px"
            },
            "fontFamily": {
                    "label-caps": ["Be Vietnam Pro"],
                    "headline-md": ["Be Vietnam Pro"],
                    "display-lg": ["Be Vietnam Pro"],
                    "body-lg": ["Be Vietnam Pro"],
                    "title-sm": ["Be Vietnam Pro"],
                    "body-sm": ["Be Vietnam Pro"]
            },
            "fontSize": {
                    "label-caps": ["12px", {"lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "700"}],
                    "headline-md": ["24px", {"lineHeight": "32px", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                    "display-lg": ["32px", {"lineHeight": "40px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                    "body-lg": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                    "title-sm": ["18px", {"lineHeight": "24px", "fontWeight": "600"}],
                    "body-sm": ["14px", {"lineHeight": "20px", "fontWeight": "400"}],
                    "label-sm": ["11px", {"lineHeight": "16px", "fontWeight": "500"}]
            }
          }
        }
      }
    </script>"""

for filename in os.listdir(giupviec_dir):
    if not filename.endswith('.html'): continue
    filepath = os.path.join(giupviec_dir, filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # REMOVE .header-gradient from the class list of <header>
    content = content.replace('header-gradient ', '')
    content = content.replace('class="header-gradient"', 'class=""')
    
    # REMOVE the .header-gradient CSS rule
    content = re.sub(r'\.header-gradient\s*\{[^}]+\}', '', content)

    # For trangchutasker.html, inject the Tailwind config!
    if filename == 'trangchutasker.html':
        content = re.sub(
            r'<script src="https://cdn\.tailwindcss\.com\?plugins=forms,container-queries"></script>',
            tailwind_config,
            content
        )

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("Removed header-gradient from all files and injected Tailwind config to trangchutasker.html.")
