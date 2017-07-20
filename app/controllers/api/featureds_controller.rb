class Api::FeaturedsController < ApplicationController

  def show
    @channel = Channel.featured_channel
  end

end
