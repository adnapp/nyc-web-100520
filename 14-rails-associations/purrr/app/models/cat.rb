class Cat < ApplicationRecord
  has_many :endorsements
  has_many :users, through: :endorsements 

end
