class CreateChatrooms < ActiveRecord::Migration[5.1]
  def change
    create_table :chatrooms do |t|
      t.integer :channel_id, null: false

      t.timestamps
    end
    add_index :chatrooms, :channel_id, unique: true
  end
end
