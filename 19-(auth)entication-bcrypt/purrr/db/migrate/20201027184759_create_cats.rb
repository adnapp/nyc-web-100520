class CreateCats < ActiveRecord::Migration[6.0]
  def change
    create_table :cats do |t|
      t.string :name
      t.string :softness
      t.integer :age
      t.string :img_url
      t.string :bio
      t.timestamps
    end
  end
end
