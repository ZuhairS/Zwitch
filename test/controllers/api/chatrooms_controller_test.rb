require 'test_helper'

class Api::ChatroomsControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get api_chatrooms_show_url
    assert_response :success
  end

end
