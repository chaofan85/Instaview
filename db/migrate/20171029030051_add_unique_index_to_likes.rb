class AddUniqueIndexToLikes < ActiveRecord::Migration[5.1]
  def change
    add_index :likes, [:liker_id, :photo_id], unique: true
  end
end
