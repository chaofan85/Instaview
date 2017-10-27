class CreateLikes < ActiveRecord::Migration[5.1]
  def change
    create_table :likes do |t|
      t.integer :photo_id, null: false
      t.integer :liker_id, null: false

      t.timestamps
    end
    add_index :likes, :photo_id
    add_index :likes, :liker_id
  end
end
