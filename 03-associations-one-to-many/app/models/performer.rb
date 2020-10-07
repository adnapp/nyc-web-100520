require 'pry'

class Performer

    attr_reader :hit_songs
    attr_accessor :name, :talent, :genre, :networth

    # binding.pry
    @@performer_count = 0
    @@all = []

    def initialize(name, talent, hit_songs, genre, height, networth)
        @name = name
        @talent = talent
        @hit_songs = hit_songs
        @genre = genre
        @height = height
        @networth = networth
        @@performer_count += 1
        @@all << self

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
        @@performer_count
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
