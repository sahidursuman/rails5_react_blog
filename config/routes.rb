Rails.application.routes.draw do
  namespace :api, constraints: { format: 'json' } do
    resources :posts
  end
  root 'home#index'
  # get "*path", to: "home#index"
end
