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

    # setter methods -> .....
    # def talent=(new_talent)
    #     @talent = new_talent
    # end

    # def genre=(new_genre)
    #     @genre = new_genre
    # end


    # getter methods -> same as attr_reader
    # def talent 
    #     @talent
    # end
    # def name
    #     @name
    # end

    # def talent
    #     @talent
    # end

    # def hit_songs
    #     @hit_songs
    # end

    # def genre
    #     @genre
    # end
end
