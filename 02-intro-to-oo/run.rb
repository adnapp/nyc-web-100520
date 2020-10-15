require_relative 'performer.rb'
require 'pry'

# name, talent, hit songs, age, genre, height, net worth
p1 = Performer.new("Cher", "vocalist", "believe","pop", "tall", 10000)
p2 = Performer.new("Britney", "vocalist", "OOPS", "pop", "average", 10000000000000)
p3 = Performer.new("Bon Jovi", "vocalist", "OOPS", "pop", "average", 200)
p4 = Performer.new("Selena", "vocalist", "OOPS", "pop", "average", 300)

class Test
    def initialize(name, *args)
        puts args
        @increase_impatience = 0
        @name = name
        @list_of_docs = list_of_docs
        @speciality = speciality
        # @@collect  << self

    end
end



binding.pry