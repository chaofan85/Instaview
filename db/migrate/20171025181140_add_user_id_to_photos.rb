class AddUserIdToPhotos < ActiveRecord::Migration[5.1]
  def change
    add_column :photos, :user_id, :integer, null: false
    add_index :photos, :user_id
  end
end
