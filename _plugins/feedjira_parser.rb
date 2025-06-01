require 'feedjira'
require 'feedjira/parser/rss_entry'
require 'feedjira/parser/rss'

Feedjira.configure do |config|
  config.parsers = [
    Feedjira::Parser::RSS,
    Feedjira::Parser::Atom,
    Feedjira::Parser::AtomFeedBurner,
    Feedjira::Parser::GoogleDocsAtom,
    Feedjira::Parser::ITunesRSS,
    Feedjira::Parser::RSSFeedBurner
  ]
end 