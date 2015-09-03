class CreateBlogs < ActiveRecord::Migration
  def change
    create_table :blogs do |t|
      t.text :title
      t.text :body
      t.string :author

      t.timestamps null: false
    end
  end
end
