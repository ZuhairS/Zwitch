class Api::FeaturedChannelsController < ApplicationController

  def index
    @channels = Channel.featured_channels
  end

end
