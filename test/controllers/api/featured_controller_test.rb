require 'test_helper'

class Api::FeaturedControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get api_featured_show_url
    assert_response :success
  end

end
