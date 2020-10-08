# Ruby OO Relationships/Associations (One to Many)



## Questions
- Where is our (Single) Source of Truth? ==> SSOT
- Belongs to & has many
- Default arg in performer and then creating instances *** explore this at the end!!

## Agenda
- X Review Performer (attrs, class variables & methods)
- X Create Fan Class to review
- X Where / How to test your code

- Types of Associations 
- One to Many/Has Many, Belongs to


## Types of Associations
- One to Many
    - has_many
    - belongs_to
    - RULE! the belongs_to holds the reference (like a collar) to the one it belongs to 

    Examples
    - Performer has many Fans, and a Fan belongs to Performer 
    - Author has many Books, and Book belongs to an Author
    - Manufacturere has many car models
    - performer has many talent ( we could build this out!!! )
    - person has many clothes_items
    - factory has many types_of_candy
    - team has many players, player belongs to team 

- Many to Many ====> just more than one one-to-many
    - theater has many movies...? maybe... or would that be better as many to many...?


## Deliverables 
Build Fan Class
- A `Fan` class with a name string (read and write-able), isSuperFan boolean (read and write-able) and birthMonth string (readable)
- `Fan.all` should return a list of all fan instances

`Performer#collaborate` is an instance method because of # 

Build Performer & Fan Relationship 
- a fan needs to belong to a performer
- a fan needs to know who its performer is 
- a performer should also know who all of its fans are

Add Relationship Methods
- Let's think of some together! 
- `Performer#fans` returns an array of all fan instances related to that performer
- `Fan#performer` returns the performer instance associated with the fan 
- `Fan#num_shows` return the number of shows a Fan has attended... might need some additional info for this 

- `Performer#birthday_fans`  returns all the fans with a birthday in a certain month 
- `Performer#vip_fans` returns an array of VIP fans aka isSuperFan is true 
- `Fan.superfans` returns a list of all super fan Fan instances

## Want More Practice???
- `Performer#give_vip_passes` print vip pass greetings to all vip fans ==> HALP
- `Performer#tantrum` performer loses one fan (one random fan) ==> HALP 
- `Fan#my_genre_performers` returns an array of all performers who have the same genre as their favorite performer. Try to make sure this does not include their current performer. 
- `Performer#sign_autographs` prints out an autograph addressed to each fan by name

- Build a Show class which has a date (string like 10/07/20) and time (string like 10:00pm) (other instance variables are up to you!)
- A Performer has many shows and a show Belongs to a Performer
- You will need to build...
    - `Performer#shows` returns an array of all Show instances associated with the Performer
    - `Show#performer` returns the Performer instance associated with the Show
    - `Performer#shows_by_date(date)` returns an array of all associated shows occuring on that date
    - Whatever methods make you happy!!!
- Next level: Each Show must belong to a headliner (Performer instance) and have an opening_act (Performer instance but can be nil)


## Icebox
- testing in repl.it 