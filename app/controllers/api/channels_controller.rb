class Api::ChannelsController < ApplicationController

  before_action :require_logged_in, only: [:update]

  def index
    @channels = Channel.all_channels
  end

  def show
    @channel = Channel.find(params[:id])
  end

  def update
    @channel = Channel.find_by_id(params[:id])

    if @channel.update_attributes(channel_params)
      render "api/channels/show"
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  private

  def channel_params
    params.require(:channel)
      .permit(:channel_name,
              :video_url,
              :stream_name,
              :stream_description,
              :banner_image_url)
  end

end
