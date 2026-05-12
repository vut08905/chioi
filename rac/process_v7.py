from PIL import Image

def process_exact(input_path, output_path, crop_box, target_size=(128, 128)):
    try:
        img = Image.open(input_path).convert("RGBA")
        
        # 1. Crop to the exact known bounding box
        cropped = img.crop(crop_box)
        
        # 2. Force resize to perfect square
        resized = cropped.resize(target_size, Image.Resampling.LANCZOS)
        
        # 3. Make corners transparent
        pixels = resized.load()
        w, h = resized.size
        # Pick color from corners
        corners = [(0, 0), (w-1, 0), (0, h-1), (w-1, h-1)]
        
        for cx, cy in corners:
            bg_color = pixels[cx, cy]
            if bg_color[0] > 230 and bg_color[1] > 230 and bg_color[2] > 230:
                visited = set()
                queue = [(cx, cy)]
                while queue:
                    x, y = queue.pop(0)
                    if (x, y) in visited: continue
                    if x < 0 or x >= w or y < 0 or y >= h: continue
                    
                    visited.add((x, y))
                    p = pixels[x, y]
                    
                    # If it's whitish, make it transparent
                    if p[0] > 230 and p[1] > 230 and p[2] > 230 and p[3] > 0:
                        pixels[x, y] = (255, 255, 255, 0)
                        queue.append((x+1, y))
                        queue.append((x-1, y))
                        queue.append((x, y+1))
                        queue.append((x, y-1))

        # Additional pass to clean up any straggling white pixels around the border
        for x in range(w):
            for y in range(h):
                p = pixels[x, y]
                if p[0] > 240 and p[1] > 240 and p[2] > 240 and p[3] > 0:
                    pixels[x, y] = (255, 255, 255, 0)
                        
        resized.save(output_path, "PNG")
        print(f"Saved {output_path} forced to {target_size}")
    except Exception as e:
        print(f"Error processing {input_path}: {e}")

assets = [
    (r"d:\chioi\donnha.png", r"d:\chioi\chioi_customer\assets\images\donnha_v7.png", (219, 172, 803, 793)),
    (r"d:\chioi\muaho.png", r"d:\chioi\chioi_customer\assets\images\muaho_v7.png", (241, 205, 779, 725)),
    (r"d:\chioi\trongtre.png", r"d:\chioi\chioi_customer\assets\images\trongtre_v7.png", (263, 191, 761, 701))
]

for in_p, out_p, crop_box in assets:
    process_exact(in_p, out_p, crop_box)
