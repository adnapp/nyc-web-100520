# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


cats = [
  "https://media1.popsugar-assets.com/files/thumbor/YX-2J4ndcYxiFDtqpJ0Ed8NkMfM/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2014/08/08/878/n/1922507/9ed5cdef48c5ef69_thumb_temp_image32304521407524949/i/Funny-Cat-GIFs.jpg",
  "https://i1.wp.com/katzenworld.co.uk/wp-content/uploads/2019/06/funny-cat.jpeg?fit=1920%2C1920&ssl=1",
  "https://images-na.ssl-images-amazon.com/images/I/71FcdrSeKlL._AC_SL1001_.jpg",
  "https://lh3.googleusercontent.com/proxy/C_PDoIC9fTbnPewCNxfXK6rjULelmoXtOD-lOLrlktaYBHZqwltRKz1vxR8lWochZ34ACOq4E2bjFSkh9s0K_3Fj2DjAoX2seXtZimsDMdivo64-sOh9XCcZfFlcqgiUJwIP-g4",
  "https://ae01.alicdn.com/kf/HTB1Gu2IaUT1gK0jSZFrq6ANCXXaP/Funny-Cat-Cosplay-Lion-Mane-For-A-Cat-Costumes-Pet-Lion-Hair-Wig-Cap-For-Dogs.jpg_Q90.jpg_.webp",
  "https://pbs.twimg.com/profile_images/565437237962100736/BOQdFa9P.jpeg",
  "https://i.pinimg.com/originals/3f/fd/b2/3ffdb2fec6cb4f3cf5fcb9eb08d499e8.jpg",
  "https://ae01.alicdn.com/kf/HTB17mPFbdfvK1RjSspfq6zzXFXa1/Funny-Cats-Costume-Cap-katten-For-Pets-Warm-Rabbit-Hat-Christmas-Cosplay-Dogs-Accessories-Headwear-puppy.jpg_q50.jpg",
  "https://i.pinimg.com/originals/4f/b7/52/4fb75276a8ac7e72b3f3bbd7b296320f.jpg",
  "https://yt3.ggpht.com/a/AATXAJy08pKezOig9wup4S-lsHGlIATLThvscXJR_ku_=s900-c-k-c0x00ffffff-no-rj",
  "https://i.pinimg.com/originals/81/85/3b/81853b016b2f1e1abd37bcae167295d4.jpg",
  "https://1.bp.blogspot.com/-ZVIVGpN0AFk/WRyhA8KMZcI/AAAAAAABwvM/JTuWMXlS314t3E_2gIhBckLtJhb8Qn6XQCLcB/s1600/funny-cat-259-24.jpg",
  "https://i.pinimg.com/originals/d8/bf/e6/d8bfe611a4cd36145c24c92cd8f410aa.jpg",
  "https://i.pinimg.com/originals/51/37/5d/51375de427697d922aff18a0fc6012b6.jpg"
]

soft_levels = ["low", "medium", "high"]

puts "🙀 Destroying your catz 😿, Users 😢, and Endorsements 🚫🤝"

Endorsement.destroy_all
Cat.destroy_all
User.destroy_all

puts "😻 Creating your catz 😽"

cats.each {|cat_img| Cat.create(img_url: cat_img, name: Faker::Creature::Cat.name, age: rand(0..30), softness: soft_levels.sample, bio: Faker::TvShows::NewGirl.quote)}

puts "🙍‍♀️ Creating Humans 🙍‍♂️"
20.times do 
  User.create(name: Faker::FunnyName.name, user_name: Faker::Internet.username, age: rand(0..100), cats_owned: rand(15..500))
end 


puts "🤝 Creating Endorsements 🤝"
50.times do 
  Endorsement.create(user_id: User.all.sample.id, cat_id: Cat.all.sample.id, content: Faker::Movies::BackToTheFuture.quote, rating: rand(0..5))
end 