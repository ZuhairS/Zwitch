if logged_in?
  json.extract! user, :id, :username, :profile_image_url
end
