Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, default: {format: :json} do
    resources :users, only: [:create, :update] do
      post :follow, on: :member
      delete :unfollow, on: :member
    end
    get "users/:username", to: "users#show"
    resource :session, only: [:create, :destroy]
    resources :photos, only: [:create, :destroy, :show] do
      post :like, on: :member
      delete :unlike, on: :member
    end
    resources :comments, only: [:create, :destroy]
    # resources :follows, only: [:create, :destroy]
  end
end
