class CreateHotels < ActiveRecord::Migration[6.0]
  def change
    create_table :hotels do |t|
      t.string :name
      t.string :location
      t.integer :number_of_rooms
      t.boolean :pool
      t.integer :rating
      t.text :description
      t.timestamps
    end
  end
end
