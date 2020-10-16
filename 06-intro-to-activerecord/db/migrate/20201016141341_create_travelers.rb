class CreateTravelers < ActiveRecord::Migration[6.0]
  def change
    create_table :travelers do |t|
      t.string :name
      t.string :email_address
      t.integer :age
      t.boolean :smoker
      # t.boolean :backpacker
      t.boolean :swimmer
      t.string :current_location
      t.timestamps
    end
  end
end
