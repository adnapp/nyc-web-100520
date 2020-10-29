# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


puts "🙀 Destroying your catz 😿"

Cat.destroy_all

puts "😻 Creating your catz 😽"

Cat.create!(name: "Houdini", softness: "pretty soft", age: 14)
Cat.create!(name: "Edgar", softness: "impressively soft", age: 10)
Cat.create!(name: "Melba", softness: "prickly", age: 14)