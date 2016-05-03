Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :posts
  end

  root to: 'home#home'

  get '/' => 'home#home'
  get '/home' => 'home#home'
  get '/posts' => 'home#home'



end
