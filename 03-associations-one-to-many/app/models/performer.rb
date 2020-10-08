# require 'pry'

class Performer

    attr_reader :hit_songs
    attr_accessor :name, :talent, :genre, :networth

    # binding.pry
    @@all = []

    def initialize(name, talent, hit_songs, genre, height, networth) # lets give height a default later
        @name = name
        @talent = talent
        @hit_songs = hit_songs
        @genre = genre
        @height = height
        @networth = networth
        @@all << self
    end

    def fans
        Fan.all.select { |fan| fan.performer == self }
    end

    # when we do this correctly, why dont we need to require?
    def add_to_fanbase(fan) #fan instance
        fan.performer = self # self is the current perofmer
        # fan.performer is our setter on the fan instance
    end

    def self.all
        @@all
    end

    def self.high_networth_club
        @@all.select do |performer|
            performer.networth > 5000
        end
    end

    def self.performer_count
        @@all.count
    end


    def collaborate(performer)
        backstage
        puts "#{self.name} is collaborating with #{performer.name}"
    end

    def praise
        puts "#{self.name} is such an awesome performer!! <333"
    end

    def perform
        moonwalk_dance
        increase_networth
    end

    private
    def backstage
        puts self
        puts "this is a private method"
    end

    def increase_networth
        self.networth += 600
    end

    def moonwalk_dance
        puts "#{@name} just danced the moonwalk! Such talent 💯"
    end

end
