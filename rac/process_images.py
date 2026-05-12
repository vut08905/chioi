from PIL import Image
import os

def process_image(filepath):
    img = Image.open(filepath).convert("RGBA")
    datas = img.getdata()
    
    newData = []
    for item in datas:
        # If pixel is close to white, make it transparent
        if item[0] > 235 and item[1] > 235 and item[2] > 235:
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)
            
    img.putdata(newData)
    
    # Crop the image to remove empty transparent space around it
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
        
    img.save(filepath, "PNG")

assets = [
    r"d:\chioi\chioi_customer\assets\images\donnha.png",
    r"d:\chioi\chioi_customer\assets\images\muaho.png",
    r"d:\chioi\chioi_customer\assets\images\trongtre.png"
]

for asset in assets:
    if os.path.exists(asset):
        process_image(asset)
        print(f"Processed {asset}")
    else:
        print(f"Not found: {asset}")
