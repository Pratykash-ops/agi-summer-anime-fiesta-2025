import os
import json
import requests
from urllib.parse import urlparse
from pathlib import Path

# Path to your JSON file (update this)
json_file_path = 'src/data/agentInfo.json'
download_folder = 'public/assets/d01/'  # Folder to save the images

# Ensure the download folder exists
Path(download_folder).mkdir(parents=True, exist_ok=True)

# Load the JSON data
with open(json_file_path, 'r') as f:
    characters = json.load(f)['data']

# Function to download the image
def download_image(image_url, file_name):
    try:
        # Send GET request to fetch the image
        response = requests.get(image_url, stream=True)
        if response.status_code == 200:
            # Save the image locally
            image_path = os.path.join(download_folder, file_name)
            with open(image_path, 'wb') as img_file:
                for chunk in response.iter_content(1024):
                    img_file.write(chunk)
            print(f"Downloaded: {image_url} -> {image_path}")
            return image_path
        else:
            print(f"Failed to download image: {image_url}")
            return None
    except Exception as e:
        print(f"Error downloading image: {image_url} -> {e}")
        return None

# Function to update the JSON object with the new image URL
def update_json_with_local_path():
    for char in characters:
        image_url = char.get("image")
        if image_url:
            # Generate a valid file name (from the URL)
            parsed_url = urlparse(image_url)
            file_name = os.path.basename(parsed_url.path)

            # Download and update the image
            local_image_path = download_image(image_url, file_name)
            if local_image_path:
                # Update the JSON with local path (in the form of '/assets/d01/{file_name}')
                local_image_url = f"/assets/d01/{file_name}"
                char["image"] = local_image_url

    # Save the updated JSON data back to the file
    with open(json_file_path, 'w') as f:
        json.dump(characters, f, indent=4)
    print(f"Updated JSON file saved to: {json_file_path}")

# Run the script
update_json_with_local_path()
