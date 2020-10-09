class AlienSpecies 
  attr_reader :race, :temperment, :age

  @@all = []

  def initialize(race, temperment, age)
    @race = race
    @temperment = temperment
    @age = age

    @@all << self
  end

  # AlienSpecies has many Colonies
  def colonies
    # look at the single src of truth for the colonies
    Colony.all.select do |colony_instance|
      # pick the ones that belong to me
      colony_instance.alien_species == self
    end
  end

  # AlienSpecies has many Planets, through Colonies
  def planets
    # go through my colonies
    self.colonies.map do |my_colony|
      # get the information about each planet the colony is on
      my_colony.planet
    end
  end

  def self.all
    @@all
  end

end # end of AlienSpecies class