class User < ApplicationRecord
  has_many :endorsements 
  has_many :cats, through: :endorsements 
end
