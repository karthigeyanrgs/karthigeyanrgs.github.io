# Get all markdown files in _posts directory
$posts = Get-ChildItem -Path "_posts" -Filter "*.md"

foreach ($post in $posts) {
    $content = Get-Content $post.FullName -Raw
    
    # Extract the existing frontmatter
    if ($content -match "(?s)^---\s*\n(.*?)\n---") {
        $frontmatter = $matches[1]
        $newFrontmatter = @"
layout: post
$frontmatter
giscus_comments: true
related_posts: true
toc:
  sidebar: left
"@
        
        # Replace the old frontmatter with the new one
        $newContent = $content -replace "(?s)^---\s*\n.*?\n---", "---`n$newFrontmatter`n---"
        
        # Save the file
        $newContent | Set-Content $post.FullName -NoNewline
        Write-Host "Updated frontmatter for $($post.Name)"
    }
} 