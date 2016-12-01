Rails.application.routes.draw do
  get 'sessions/new'

  get 'user/new'
  post 'authenticate' => 'auth#authenticate'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
