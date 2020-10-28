Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # get('/cats', {to: "cats#index"})
  get '/cats', to: 'cats#index', as: "cats"
  get '/cats/new', to: 'cats#new', as: "new_cat"
  get '/cats/:id', to: 'cats#show', as: "cat"

  post '/cats', to: 'cats#create'

end