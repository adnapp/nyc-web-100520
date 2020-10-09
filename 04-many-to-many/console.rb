require 'pry'
require_relative './app/models/alien_species'
require_relative './app/models/planet'
require_relative './app/models/colony'

# test our code by creating instances of our classes!

# AlienSpecies.new(race, temperment, age)
humans = AlienSpecies.new("human", "good and evil", 150_000)
martians = AlienSpecies.new("martians", "super chill", 10)

earth = Planet.new("earth", "Medium", true)
mars = Planet.new("mars", "Medium", true)
pluto = Planet.new("Pluto", "Smol", false)
x376 = Planet.new("X376", "HUUUUGE", true)

# (name, population, alien_species, planet)
nyc = Colony.new("nyc", 8000000, humans, earth)
crash_site = Colony.new("crash site", 10, humans, x376)
bk = Colony.new("brooklyn", 3000000, martians, earth)

binding.pry
