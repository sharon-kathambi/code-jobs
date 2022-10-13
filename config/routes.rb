Rails.application.routes.draw do

  resources :jobs, only: [:index, :show, :create, :destroy, :update]
  resources :companys, only: [:index]
  resources :rectruiters, only: [:index]
  resources :members

  post '/login', to: 'sessions#create'
  delete "/logout", to: "sessions#destroy"

  get '/me', to: 'companys#show'
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }


end
