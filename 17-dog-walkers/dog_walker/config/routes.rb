Rails.application.routes.draw do
  get '/walkers/new', to: 'walkers#new', as: 'new_walker'
  get 'walkers/:id', to: 'walkers#show', as: 'walker'
  post '/walkers', to: 'walkers#create', as: 'walkers'

  get '/dogs/new', to: 'dogs#new', as: 'new_dog'
  get 'dogs/:id', to: 'dogs#show', as: 'dog'
  post '/dogs', to: 'dogs#create', as: 'dogs'
  
  get '/walks/new', to: 'walks#new', as: 'new_walk'
  post '/walks', to: 'walks#create', as: 'walks'
end
