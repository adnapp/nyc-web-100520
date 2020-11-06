Rails.application.routes.draw do
  resources :endorsements
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # get('/cats', {to: "cats#index"})
  get '/cats', to: 'cats#index', as: "cats"
  get '/cats/new', to: 'cats#new', as: "new_cat"
  get '/cats/:id', to: 'cats#show', as: "cat"
  get '/cats/:id/edit', to: 'cats#edit', as: "edit_cat"

  delete '/sessions/page_reset', to: 'sessions#page_reset', as: 'page_reset'

  post '/cats', to: 'cats#create'
  patch '/cats/:id', to: 'cats#update'
  delete '/cats/:id', to: 'cats#destroy'
end