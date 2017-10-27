Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, default: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :photos, only: [:create, :destroy]
  end
end
