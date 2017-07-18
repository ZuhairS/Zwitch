if logged_in?
  json.extract! user, :username, :profile_image_url
end
