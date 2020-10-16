require 'rest-client'  
require 'json' 
require 'pry'

Category.destroy_all

response = RestClient.get("http://jservice.io/api/categories?count=100")
data = JSON.parse(response)

# binding.pry

data.each do |api_category|
    Category.create(
        title: api_category["title"], 
        api_id: api_category["id"]
    )
end
