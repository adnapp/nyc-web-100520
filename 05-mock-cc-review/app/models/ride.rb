class Ride
    attr_accessor :driver, :passenger, :distance
    @@all = []

    def self.all ## need this to get all rides to find out say... 
        @@all ## all of a certain passengers rides 
    end

    def initialize(driver, passenger, distance)
        @driver = driver
        @passenger = passenger
        @distance = distance.to_f
        @@all << self 
    end

    def self.distance_count 
        # total distances across all rides 
        self.all.sum { |ride| ride.distance }
    end

    def self.average_distance
        # self.distance_count / self.all.count 
        self.all.sum { |ride| ride.distance } / self.all.count
        # alternatives: .map.sum / .count, .each & .count, .reduce 
        # probably best though... .sum&.count or .reduce
        # self.all.map { |ride| ride.distance }.sum / self.all.count
    end
end
