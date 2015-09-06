class AddImageLinkToBlogPosts < ActiveRecord::Migration
  def change
    add_column :blog_posts, :imagelink, :string
  end
end
