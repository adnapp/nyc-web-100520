class Driver
    attr_accessor :name
    @@all = []

    def initialize(name)
        @name = name
        @@all << self
    end

    def self.all
        @@all
    end

    def rides
        Ride.all.select { |ride| ride.driver == self }
    end

    def passengers 
        self.rides.map { |ride| ride.passenger }
    end

    def passenger_names
        self.passengers.map { |pass| pass.name }.uniq
        # TODOOOOO self.rides.map { |ride| ride.passenger.name }.uniq
    end

    def total_mileage #return the total distance driven by this driver 
        total = 0 
        rides.each { |ride| total += ride.distance.to_f }
        total 
        # could also use sum here
    end

    def self.mileage_cap(distance)
        # IF COMPARING DISTANCE TO TOTAL DISTANCE OF EACH DRIVERS RIDES
        self.all.select { |driver| driver.total_mileage > distance }
        
        # IF COMPARING DISTANCE TO SINGLE RIDE DISTANCE
        # Ride.all.select { |ride| ride.distance > distance}
        #     .map{ |ride| ride.driver }.uniq
    end
end

