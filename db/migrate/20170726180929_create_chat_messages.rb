class CreateChatMessages < ActiveRecord::Migration[5.1]
  def change
    create_table :chat_messages do |t|
      t.integer :chatroom_id, null: false
      t.integer :user_id, null: false
      t.string :body, null: false

      t.timestamps
    end
    add_index :chat_messages, :chatroom_id
    add_index :chat_messages, :user_id
  end
end
