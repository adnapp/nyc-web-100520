class Planet 
  attr_reader :name, :size, :liveable

  @@all = []

  def initialize(name, size, liveable)
    @name = name
    @size = size
    @liveable = liveable

    @@all << self
  end


  # Planet has many Colonies
  def colonies
    # look at the single src of truth for the colonies
    Colony.all.select do |colony_instance|
      # pick the ones that belong to me
      colony_instance.planet == self
    end
  end

  # Planet has many AlienSpecies, through Colonies
  def alien_species
    # go through my colonies
    self.colonies.map do |my_colony|
      # get the information about each alien_species the colony is on
      my_colony.alien_species
    end
  end

  def self.all
    @@all
  end

end # end of Planet class