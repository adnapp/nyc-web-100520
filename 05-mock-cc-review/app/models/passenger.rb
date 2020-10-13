class Passenger
    attr_reader :name
    @@all = []

    def self.all
        @@all
    end
    
    def initialize(name)
        @name = name 
        @@all << self 
    end

    def rides
        Ride.all.select { |ride| ride.passenger == self }
        # getting all the ones that belongs to the current passenger 
    end

    def drivers
        # [<Ride 00x0>, <Ride 00x0>, <Ride 00x0>, <Ride 00x0>]
        # [<Driver 00x20>, <Driver 00x20>, <Driver 00x20>, <Driver 00x20>]
        self.rides.map { |ride| ride.driver }.uniq
    end

    def total_distance
        self.rides.map { |ride| ride.distance }.sum
        # self.rides.sum { |ride| ride.distance }
    end

    def self.premium_members
        self.all.find_all { |pass_inst| pass_inst.total_distance > 100} 
        # premium_passengers = []
        # if(Passenger.total_distance > 100)
        #     premium_passengers << self
        # end
    end
end