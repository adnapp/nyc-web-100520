class Performer

    attr_reader :hit_songs
    attr_accessor :name, :talent, :genre

    def initialize(name, talent, hit_songs,genre, height, networth)
        @name = name
        @talent = talent
        @hit_songs = hit_songs
        @genre = genre
        @height = height
        @networth = networth
    end

    def moonwalk_dance
        puts "#{@name} just danced the moonwalk! Such talent 💯"
    end

end
