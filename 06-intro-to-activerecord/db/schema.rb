# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_10_16_144221) do

  create_table "hotels", force: :cascade do |t|
    t.string "name"
    t.string "location"
    t.integer "number_of_rooms"
    t.boolean "pool"
    t.integer "rating"
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "reservations", force: :cascade do |t|
    t.integer "hotel_id"
    t.integer "traveler_id"
    t.string "start_date"
    t.integer "num_nights"
    t.float "price"
    t.string "room_type"
  end

  create_table "travelers", force: :cascade do |t|
    t.string "name"
    t.string "email_address"
    t.integer "age"
    t.boolean "smoker"
    t.boolean "swimmer"
    t.string "current_location"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
