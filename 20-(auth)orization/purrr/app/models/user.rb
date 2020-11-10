class User < ApplicationRecord
  has_many :endorsements 
  has_many :cats, through: :endorsements 

  has_secure_password

  # def password 
  # end

  # def password=(secret)
  #   spw = BCrypt::Password.create(secret)

  #   self.password_digest = spw
  # end 

end
