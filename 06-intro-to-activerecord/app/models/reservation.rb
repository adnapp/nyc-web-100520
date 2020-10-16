class Reservation < ActiveRecord::Base
    belongs_to :traveler
    belongs_to :hotel
end