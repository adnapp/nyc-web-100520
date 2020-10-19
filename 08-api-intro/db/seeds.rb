require 'pry'
require 'rest-client' # let you actually make the requests to the URLs 
require 'json'

Category.destroy_all
User.destroy_all
Game.destroy_all

# AI: Seed with 100 categories from the API 

api_response = RestClient.get("http://jservice.io/api/categories?count=100")
api_data = JSON.parse(api_response)

api_data.each do |category|
    Category.create(
        title: category["title"],
        api_id: category["id"],
    )
end
# binding.pry
# Category.create(api_data) WILL NOT WORK CAUSE EXTRA KEYS!!!

User.create(username: "Caryn", password: "12345")
