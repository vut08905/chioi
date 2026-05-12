from PIL import Image

def force_uniform_square(input_path, output_path, target_size=(128, 128)):
    try:
        img = Image.open(input_path).convert("RGBA")
        width, height = img.size
        pixels = img.load()
        
        # find bounding box of non-white
        min_x, min_y, max_x, max_y = width, height, 0, 0
        for y in range(height):
            for x in range(width):
                r, g, b, a = pixels[x, y]
                if a > 0 and not (r > 240 and g > 240 and b > 240):
                    min_x = min(min_x, x)
                    max_x = max(max_x, x)
                    min_y = min(min_y, y)
                    max_y = max(max_y, y)
                    
        # Crop to exactly the non-white area (the orange box)
        if min_x < max_x and min_y < max_y:
            cropped = img.crop((min_x, min_y, max_x + 1, max_y + 1))
            # Force resize to a perfect square (stretching slightly)
            resized = cropped.resize(target_size, Image.Resampling.LANCZOS)
            
            # Make the outer white corners transparent
            # Since the orange box has rounded corners, there might be white pixels left outside the rounded corners
            # Let's do a flood fill from the 4 corners of the resized image
            pixels = resized.load()
            w, h = resized.size
            bg_color = pixels[0, 0]
            if bg_color[0] > 240 and bg_color[1] > 240 and bg_color[2] > 240:
                visited = set()
                queue = [(0, 0), (w-1, 0), (0, h-1), (w-1, h-1)]
                
                while queue:
                    x, y = queue.pop(0)
                    if (x, y) in visited: continue
                    if x < 0 or x >= w or y < 0 or y >= h: continue
                    
                    visited.add((x, y))
                    p = pixels[x, y]
                    if p[0] > 240 and p[1] > 240 and p[2] > 240:
                        pixels[x, y] = (255, 255, 255, 0)
                        queue.append((x+1, y))
                        queue.append((x-1, y))
                        queue.append((x, y+1))
                        queue.append((x, y-1))
                        
            resized.save(output_path, "PNG")
            print(f"Saved {output_path} forced to {target_size}")
    except Exception as e:
        print(f"Error processing {input_path}: {e}")

assets = [
    (r"d:\chioi\donnha.png", r"d:\chioi\chioi_customer\assets\images\donnha_v6.png"),
    (r"d:\chioi\muaho.png", r"d:\chioi\chioi_customer\assets\images\muaho_v6.png"),
    (r"d:\chioi\trongtre.png", r"d:\chioi\chioi_customer\assets\images\trongtre_v6.png")
]

for in_p, out_p in assets:
    force_uniform_square(in_p, out_p)
