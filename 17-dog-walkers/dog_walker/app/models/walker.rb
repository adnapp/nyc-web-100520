class Walker < ApplicationRecord
  has_many :walks
  has_many :dogs, through: :walks

  validates_presence_of :first_name, :last_name, :email, :image_url
  validates :first_name, uniqueness: { scope: :last_name, message: "has already been used with this last name" }


  def full_name
    "#{self.first_name} #{self.last_name}"
  end
end