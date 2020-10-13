require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end

demetrio = Driver.new("Demetrio")
vivek = Driver.new("Vivek")
caryn = Driver.new("Caryn")

# Driver.mileage_cap(90)

eitan = Passenger.new("Eitan") # 57.25
brian = Passenger.new("Brian") # 158.12

ride1 = Ride.new(demetrio, eitan, 10.25)
ride2 = Ride.new(vivek, brian, 98.12)
ride3 = Ride.new(caryn, eitan, 47.00)
ride4 = Ride.new(demetrio, brian, 10)
ride5 = Ride.new(demetrio, brian, 20)
ride6 = Ride.new(demetrio, brian, 30)

# mileage_cap(90) ==> vivek
# mileage_cap(70) ==> vivek, demetrio


# Put your variables here~!

binding.pry
