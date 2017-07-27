require 'test_helper'

class Api::ChatMessagesControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_chat_messages_create_url
    assert_response :success
  end

end
