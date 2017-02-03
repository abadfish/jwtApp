Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      post '/signup', to: "users#signup"
      post '/login', to: "sessions#login"
      get '/games', to: "games#index"
    end
  end

  root "application#angular"
end
