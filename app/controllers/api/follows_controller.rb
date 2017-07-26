class Api::FollowsController < ApplicationController
  before_action :require_logged_in

  def index
    @follows = current_user.follows
  end

  def create
    @follow = current_user.follows.new(follow_params)

    if @follow.save!
      @follows = current_user.follows
      render "api/follows/index"
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @follow = current_user.follows.find_by_followed_channel_id(params[:id])
    @follow.destroy
    @follows = current_user.follows
    render "api/follows/index"
  end

  private

  def follow_params
    params.require(:follow).permit(:follower_id, :followed_channel_id)
  end
end
