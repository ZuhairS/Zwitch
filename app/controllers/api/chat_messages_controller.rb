class Api::ChatMessagesController < ApplicationController

  before_action :require_logged_in

  def create
    @chat_message = ChatMessage.new(chat_message_params)

    if @chat_message.save!

      ActionCable.server.broadcast 'messages',
        id: @chat_message.id,
        body: @chat_message.body,
        username: @chat_message.user.username,
        channel_id: @chat_message.chatroom.channel.id
      head :ok

      # render "api/chat_messages/show"
    else
      render json: @chat_message.errors.full_messages, status: 422
    end
  end

  def show
    @chat_message = ChatMessage.find(params[:id])
  end

  private

  def chat_message_params
    params.require(:chat_message).permit(:chatroom_id, :user_id, :body)
  end
end
