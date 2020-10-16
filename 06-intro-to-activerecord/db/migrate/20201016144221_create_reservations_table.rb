class CreateReservationsTable < ActiveRecord::Migration[6.0]
  def change
    create_table :reservations do |t|
      t.integer :hotel_id
      t.integer :traveler_id
      t.string :start_date #should be datetime but Caryn is annoyed by ruby dates
      t.integer :num_nights
      t.float :price
      t.string :room_type
    end
  end
end
