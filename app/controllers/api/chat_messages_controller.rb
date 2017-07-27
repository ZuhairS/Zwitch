class Api::ChatMessagesController < ApplicationController



  def create
    @chat_message = ChatMessage.new(chat_message_params)

    if @chat_message.save!
      render "api/chat_messages/show"
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
