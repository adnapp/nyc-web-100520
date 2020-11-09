class CreateEndorsements < ActiveRecord::Migration[6.0]
  def change
    create_table :endorsements do |t|
      t.integer :cat_id
      t.integer :user_id
      t.string :content
      t.integer :rating

      t.timestamps
    end
  end
end
