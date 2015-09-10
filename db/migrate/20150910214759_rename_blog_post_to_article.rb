class RenameBlogPostToArticle < ActiveRecord::Migration
  def self.up
  	rename_table :blog_posts, :articles
  end
  def self.down
  	rename_table :articles, :blog_posts
  end
end
