Rails.application.routes.draw do

  post 'user_token' => 'user_token#create'
  resources :sessions
  resources :users 
  post 'authenticate' => 'auth#authenticate'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
