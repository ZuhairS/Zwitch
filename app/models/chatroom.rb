class Chatroom < ApplicationRecord

  validates :channel, presence: true

  belongs_to :channel
  has_many :chat_messages

end
