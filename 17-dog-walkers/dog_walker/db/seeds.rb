# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Walker.destroy_all

Walker.create!(first_name: "Steven", last_name: "Doran", email: "steven@email.com", image_url
: "https://cdn153.picsart.com/220032587025202.jpg?type=webp&to=crop&r=256")

Dog.destroy_all

Dog.create!(name:"George", breed: "Ewok", age: 10, sex: "M")