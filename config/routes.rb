Rails.application.routes.draw do

  namespace :api do
  end

  root to: 'static_pages#root'
end
