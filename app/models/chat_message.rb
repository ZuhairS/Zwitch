class ChatMessage < ApplicationRecord

  validates :chatroom, :user, :body, presence: true
  validates :body, length: { maximum: 400 }

  belongs_to :chatroom
  belongs_to :user

end
