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


## Want More Practice???


## Icebox
- testing in repl.it 