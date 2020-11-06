class Cat < ApplicationRecord
  has_many :endorsements
  has_many :users, through: :endorsements 

  # Cat must have a name 
  # Cats name must not be duplicated
  
  validates :name, :softness, :age, presence: true
  validates :name, uniqueness: true
  # softness must be high, low or medium
  validates :softness, inclusion: {in: ["low", "medium", "high"]}
  # age must be greater than 0 less than 25
  validates :age, numericality: {greater_than: 0, less_than: 26}

  # validate :our_validation

  # def our_validation
  # end 

end
