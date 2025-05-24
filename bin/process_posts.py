import os
import shutil
import re
from datetime import datetime
import yaml
import frontmatter

def slugify(text):
    # Convert to lowercase and replace spaces with hyphens
    text = text.lower().replace(' ', '-')
    # Remove special characters
    text = re.sub(r'[^a-z0-9-]', '', text)
    # Remove multiple consecutive hyphens
    text = re.sub(r'-+', '-', text)
    return text

def process_posts():
    source_dir = 'output/posts'
    target_dir = '_posts'
    
    # Create target directory if it doesn't exist
    os.makedirs(target_dir, exist_ok=True)
    
    # Process each markdown file in the source directory
    for filename in os.listdir(source_dir):
        if filename.endswith('.md'):
            source_path = os.path.join(source_dir, filename)
            
            # Read the frontmatter
            with open(source_path, 'r', encoding='utf-8') as f:
                post = frontmatter.load(f)
            
            # Get the date from frontmatter or use file modification time
            date_str = post.get('date', datetime.fromtimestamp(os.path.getmtime(source_path)))
            if isinstance(date_str, str):
                date = datetime.strptime(date_str, '%Y-%m-%d')
            else:
                date = date_str
            
            # Create new filename with date prefix
            new_filename = f"{date.strftime('%Y-%m-%d')}-{slugify(filename[:-3])}.md"
            target_path = os.path.join(target_dir, new_filename)
            
            # Copy the file
            shutil.copy2(source_path, target_path)
            print(f"Processed: {filename} -> {new_filename}")

if __name__ == '__main__':
    process_posts() 