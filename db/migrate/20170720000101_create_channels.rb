class CreateChannels < ActiveRecord::Migration[5.1]
  def change
    create_table :channels do |t|
      t.string :channel_name, null: false
      t.integer :owner_id, null: false
      t.string :video_url
      t.string :stream_name, null: false
      t.text :stream_description
      t.string :banner_image_url, null: false

      t.timestamps
    end
    
    add_index :channels, :channel_name, unique: true
    add_index :channels, :owner_id, unique: true
  end
end
