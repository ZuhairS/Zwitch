Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :users, only: :create
    resource :session, only: [:create, :destroy]
    resources :channels, only: [:index, :show, :update]
    resources :featured_channels, only: :index
    resource :featured, only: :show
  end

  root to: 'static_pages#root'
end
