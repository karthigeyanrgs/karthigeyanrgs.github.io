source 'https://rubygems.org'

# Basic dependencies
gem 'jekyll', '~> 4.3.2'  # Updated to Jekyll 4.x
gem 'webrick'  # Required for Ruby 3
gem 'csv'  # Required for Ruby 3.4+
gem 'css_parser'  # Required for download-3rd-party.rb

# RSS feed parsing
gem 'nokogiri', '~> 1.15.5'  # Single entry for all platforms
gem 'feedjira', '~> 2.1.4'  # Using version 2.x for better parser compatibility
gem 'rss'  # Required for RSS parsing
gem 'httparty', '~> 0.21.0'

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

group :jekyll_plugins do
    gem 'jekyll-feed'
    gem 'jekyll-sitemap'
    gem 'jekyll-paginate-v2'
    gem 'jemoji'
    gem 'jekyll-email-protect'
    gem 'jekyll-scholar'
    gem 'jekyll-seo-tag'  # Added for better SEO
    gem 'jekyll-archives'  # Added for category/tag support
    gem 'jekyll-get-json'
    gem 'jekyll-imagemagick'
    gem 'jekyll-jupyter-notebook'
    gem 'jekyll-link-attributes'
    gem 'jekyll-regex-replace'
    gem 'jekyll-tabs'
    gem 'jekyll-toc'
    gem 'jekyll-twitter-plugin'
end

# Windows platform-specific dependencies
platforms :mingw, :x64_mingw, :mswin do
    gem 'wdm', '>= 0.1.0'
    # Use pre-compiled version for Windows
    gem 'eventmachine', '1.2.7', platforms: [:mingw, :x64_mingw, :mswin]
end
