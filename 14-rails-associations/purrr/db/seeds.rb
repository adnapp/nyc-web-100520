# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


puts "🙀 Destroying your catz 😿"

Endorsement.destroy_all
Cat.destroy_all
User.destroy_all

puts "😻 Creating your catz 😽"

Cat.create!(name: "Houdini", softness: "pretty soft", age: 14)
Cat.create!(name: "Edgar", softness: "impressively soft", age: 10)
Cat.create!(name: "Melba", softness: "prickly", age: 14)

puts "Creating Humans"
20.times do 
  User.create(name: Faker::FunnyName.name, user_name: Faker::Internet.username, age: rand(0..100), cats_owned: rand(15..500))
end 


puts "Creating Endorsements"
50.times do 
  Endorsement.create(user_id: User.all.sample.id, cat_id: Cat.all.sample.id, content: Faker::Movies::BackToTheFuture.quote, rating: rand(0..5))
end 