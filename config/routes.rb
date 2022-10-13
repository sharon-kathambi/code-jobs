Rails.application.routes.draw do

  resources :jobs, only: [:index, :show, :create, :destroy, :update]
  resources :companys, only: [:index, :show]
  resources :rectruiters, only: [:index]

  post '/login', to: 'sessions#create'
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }


end
