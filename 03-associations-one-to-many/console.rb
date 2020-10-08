# I use console.rb to test
# run.rb to hold my CLI behavior 

require 'pry'
require_relative './app/models/fan'
require_relative './app/models/performer'

lizzo = Performer.new("Lizzo", "Everything", "Coconut Oil", "pop", 'average', 10000000)
janelle = Performer.new("Janelle Monae", "Acting", "Turntables", "alt pop", 1000)
van = Performer.new("Van Halen", "Guitar playing", "Panama", "Rock", "5'11", 5000)
paak = Performer.new("Anderson Paak",  "vocal and drums", "Come down", "alt pop",  "5,11”", 500000)
# 21 savage, rapping, savage mode, rap, 6’2, 1000000

caryn = Fan.new("Caryn", true, "May", paak) #association needs to be with the whole instance 
mary = Fan.new("Mary", false, "Oct", paak)
raffy = Fan.new("Raffy", true, "Sept", van)

# paak.add_to_fanbase(caryn)
# paak.add_to_fanbase(mary)
# van.add_to_fanbase(raffy)

# paak.birthday_fans("Oct")
# paak.birthday_fans("Sept")




# caryn.performer.name

binding.pry