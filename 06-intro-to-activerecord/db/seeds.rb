Hotel.destroy_all
Traveler.destroy_all
Reservation.destroy_all


bates = Hotel.create(name: "Bates Motel", location: "New Jersey", number_of_rooms: 471,  pool: false, rating: 1, description: "....")
hilton = Hotel.create(name: "Hilton Hotel", location: "NYC", number_of_rooms: 10,  pool: true, rating: 8, description: "Useful")
pryatt = Hotel.create(name: "Pryatt Hotel", location: "NYC", number_of_rooms: 100,  pool: false, rating: 7, description: "Useful")
tilton = Hotel.create(name: "Tilton Hotel", location: "Atlanta", number_of_rooms: 75,  pool: true, rating: 9, description: "Useful")

travelers = [
    {
        name: "raffy",
        email_address: "raffy@email.com",
        age: 9,
        smoker: false,
        swimmer: true,
        current_location: "NYC"
    },
    {
        name: "Mary",
        email_address: "koenke@sas.upenn.edu",
        age: 34,
        smoker: false,
        swimmer: true,
        current_location: "Mays Landing, NJ"
    },
    {
        name: "Demetrio",
        email_address: "dlima@gmail.com",
        age: 30,
        smoker: false,
        swimmer: false,
        current_location: "Brooklyn, NY"
    }
]

Traveler.create(travelers)
# travelers.each { |traveler| Traveler.create(traveler)}
# Traveler.create()

raffy = Traveler.first
mary = Traveler.second
demetrio = Traveler.third

Reservation.create(start_date: "10/16/20", num_nights: 2, price: 1172.47, room_type: "single", hotel_id: bates.id, traveler: raffy )
Reservation.create(start_date: "10/16/20", num_nights: 3, price: 172.47, room_type: "double", hotel_id: tilton.id, traveler: mary)
Reservation.create(start_date: "10/16/20", num_nights: 1, price: 10000000.47, room_type: "single", hotel_id: bates.id, traveler: demetrio)