class Fan
    attr_reader :birthMonth
    attr_accessor :name, :isSuperFan, :performer
    @@all = []

    # Fan.all 
    # readers & writers / getters & setters
    # initialize name, isSuperFan, birthMonth
    def initialize(name, isSuperFan, birthMonth, performer=nil)
        @name = name
        @isSuperFan = isSuperFan
        @birthMonth = birthMonth
        @performer = performer
        @@all << self #self is instance being created here 
    end

    def self.all
        @@all 
    end
end