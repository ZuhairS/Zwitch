Rails.application.routes.draw do

  namespace :api do
    get 'chat_messages/create'
  end

  namespace :api do
    get 'chatrooms/show'
  end

  namespace :api, defaults: { format: :json } do
    resources :users, only: :create
    resource :session, only: [:create, :destroy]
    resources :channels, only: [:index, :show, :update]
    resources :featured_channels, only: :index
    resource :featured, only: :show
    resources :follows, only: [:index, :create, :destroy]
    resources :chatrooms, only: :show do
      resources :chat_messages, only: [:create, :show]
    end
  end

  root to: 'static_pages#root'
end
