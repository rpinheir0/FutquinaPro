from PIL import Image
import pytesseract
import sys
import urllib.request
from io import BytesIO

url = "https://storage.googleapis.com/maca-artifacts-prod-us-central1/2156eb6000e008ba8c2ad16a3a7c6f093010b986e6802e9bc20857313a48e7ba/screenshot.png"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req) as response:
    img = Image.open(BytesIO(response.read()))

# Crop the top right area
width, height = img.size
cropped = img.crop((width // 2, 0, width, height // 4))

text = pytesseract.image_to_string(cropped, lang='por')
print("OCR TEXT:", text)
