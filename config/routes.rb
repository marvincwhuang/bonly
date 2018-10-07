Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :posts do
  	put :favorite, on: :member
  end
  resources :favorite_posts
  get 'admin/index'
  root 'main#index'
end
