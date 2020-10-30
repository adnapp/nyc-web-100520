class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :user_name
      t.integer :age
      t.integer :cats_owned

      t.timestamps
    end
  end
end
