import csv
import requests
import base64

# === CONFIG ===
input_csv = "characters_with_qr.csv"         # Existing CSV file with image URLs
output_csv = "characters_embedded.csv"  # New CSV with base64 image data
image_url_column = "qr_image_url"           # Column name containing image URLs

def image_to_data_uri(url):
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        content_type = response.headers.get("Content-Type", "image/png")
        base64_str = base64.b64encode(response.content).decode("utf-8")
        return f"data:{content_type};base64,{base64_str}"
    except Exception as e:
        print(f"[⚠️] Failed for {url}: {e}")
        return ""

def convert_csv_images_to_data_uri(input_path, output_path, image_column):
    with open(input_path, newline='', encoding="utf-8") as infile:
        reader = csv.DictReader(infile)
        rows = list(reader)

    for row in rows:
        url = row.get(image_column)
        if url:
            row[image_column] = image_to_data_uri(url)

    with open(output_path, "w", newline='', encoding="utf-8") as outfile:
        writer = csv.DictWriter(outfile, fieldnames=rows[0].keys())
        writer.writeheader()
        writer.writerows(rows)

    print(f"✅ Saved with base64 image data at: {output_path}")

# === EXECUTE ===
if __name__ == "__main__":
    convert_csv_images_to_data_uri(input_csv, output_csv, image_url_column)
