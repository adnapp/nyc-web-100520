require_relative 'performer.rb'
require 'pry'

# name, talent, hit songs, age, genre, height, net worth
p1 = Performer.new("Cher", "vocalist", "believe","pop", "tall", 10000)
p2 = Performer.new("Britney", "vocalist", "OOPS", "pop", "average", 10000000000000)

binding.pry