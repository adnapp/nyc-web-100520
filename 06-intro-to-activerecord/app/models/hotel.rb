class Hotel < ActiveRecord::Base

    # Create
    # Hotel.new -> create a new ruby instance
    # Hotel#save -> insert into the DB
    # Hotel.create -> new + save at the same time

    # Read
    # Hotel.all -> returns all the instances from the DB as an array of Ruby objects
    # Hotel.first/last/second/third -> return the first/last/second/third instance
    # Hotel.find(id) -> return the instance with that id
    # Hotel.find_by() -> gets the first instance that meets the criteria passed in
    # Hotel.where(hash)  -> returns all the instances that match the specified column value pair/s OR the condition passed in

    # Update
    # Hotel#save -> update the instance in the DB
    # Hotel#update(hash) -> update whatever column/value pairs you specified in the instance in the DB
    # Hotel.update(hash) -> update all the instances in the DB

    # Delete
    # Hotel#destroy -> destros instance from the DB
    # Hotel.destroy_all -> destroy everything from the table in the DB

end