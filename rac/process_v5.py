from PIL import Image, ImageOps

def normalize_icons(input_path, output_path, target_size=(128, 128)):
    try:
        img = Image.open(input_path).convert("RGBA")
        bg_color = img.getpixel((0, 0))
        
        width, height = img.size
        pixels = img.load()
        
        tolerance = 50
        def color_dist(c1, c2):
            return sum(abs(c1[i] - c2[i]) for i in range(3))
            
        visited = set()
        queue = [(0, 0), (width-1, 0), (0, height-1), (width-1, height-1)]
        
        while queue:
            x, y = queue.pop(0)
            if (x, y) in visited: continue
            if x < 0 or x >= width or y < 0 or y >= height: continue
            
            visited.add((x, y))
            p_color = pixels[x, y]
            
            if p_color[3] > 0 and color_dist(p_color, bg_color) < tolerance:
                pixels[x, y] = (255, 255, 255, 0)
                queue.append((x+1, y))
                queue.append((x-1, y))
                queue.append((x, y+1))
                queue.append((x, y-1))
                
        # Remove any remaining white-ish pixels if they are very bright
        for x in range(width):
            for y in range(height):
                p = pixels[x, y]
                if p[3] > 0 and p[0] > 240 and p[1] > 240 and p[2] > 240:
                    pixels[x, y] = (255, 255, 255, 0)

        # 1. Crop tight to the actual icon content
        bbox = img.getbbox()
        if bbox:
            img = img.crop(bbox)
            
        # 2. Pad to square and resize to exact target size, keeping aspect ratio intact!
        img = ImageOps.pad(img, target_size, method=Image.Resampling.LANCZOS, color=(255, 255, 255, 0))
        
        img.save(output_path, "PNG")
        print(f"Saved {output_path} with uniform padded size {target_size}")
    except Exception as e:
        print(f"Error processing {input_path}: {e}")

assets = [
    (r"d:\chioi\donnha.png", r"d:\chioi\chioi_customer\assets\images\donnha_v5.png"),
    (r"d:\chioi\muaho.png", r"d:\chioi\chioi_customer\assets\images\muaho_v5.png"),
    (r"d:\chioi\trongtre.png", r"d:\chioi\chioi_customer\assets\images\trongtre_v5.png")
]

for in_p, out_p in assets:
    normalize_icons(in_p, out_p)
