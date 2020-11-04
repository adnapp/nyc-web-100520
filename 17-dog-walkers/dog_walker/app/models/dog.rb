class Dog < ApplicationRecord
  has_many :walks
  has_many :walkers, through: :walks
  
  validates_presence_of :name, :breed, :sex, :age
  validates :sex, inclusion: { in: ["M", "F"], message: "must be either 'M' or 'F'" }

end