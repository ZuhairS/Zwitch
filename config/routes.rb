Rails.application.routes.draw do

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

  mount ActionCable.server => '/cable'

  root to: 'static_pages#root'
end
