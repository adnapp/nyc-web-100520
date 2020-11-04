class CreateWalks < ActiveRecord::Migration[6.0]
  def change
    create_table :walks do |t|
      t.references :dog, null: false, foreign_key: true
      t.references :walker, null: false, foreign_key: true
      t.date :date
      t.time :time
      t.timestamps
    end
  end
end
