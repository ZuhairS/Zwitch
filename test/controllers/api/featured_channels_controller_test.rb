require 'test_helper'

class Api::FeaturedChannelsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_featured_channels_index_url
    assert_response :success
  end

end
