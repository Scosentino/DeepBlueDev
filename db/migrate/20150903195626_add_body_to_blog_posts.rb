class AddBodyToBlogPosts < ActiveRecord::Migration
  def change
    add_column :blog_posts, :body, :text
  end
end
