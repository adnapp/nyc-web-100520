Intro to ActiveRecord
===

## SWBATs
- [ ] Describe how gems work and the value of shared code
- [ ] Implement ActiveRecord in their projects
- [ ] Explain how `rake` works and how to run rake tasks
- [ ] Practice creating migrations for updating the database structure
- [ ] Practice with `ActiveRecord::Base` instance and class methods
- [ ] Perform persistent CRUD actions on one model using ActiveRecord


____

### Outline
* Recap of purpose of databases, SQL, & ORMs
* Review project setup
* Show how to use `rake` tasks
* Set up ActiveRecord on one of our models
  * Demonstrate how to work with migration files: `migrate` and `rollback`
  * Write CRUD on a model using ActiveRecord
* Review seeding
* Talk about pluralization/singularization
* Set up ActiveRecord on second model

* To complete on your own or with a partner:
  - Set up ActiveRecord on third model



  hotel -< reservation >- traveller

____

### ActiveRecord

What are the steps for setting up ActiveRecord on a model?

1. Create model
  - create the file and class definition
2. Create migration
  - set of instructions for how to change the database
  - `rake db:create_migration NAME=create_games`
```rb
class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      # attributes?
      # title, rating, goals, genre
      t.string :title
      t.integer :rating
      t.string :goals
      t.string :genre
 
      t.timestamps
    end
  end
end
```
3. Run migration
 - `rake db:migrate`

4. Check your schema
  - `rake db:migrate:status`
  - and check your schema.rb file!

5. Test!

____

### Rake

Rake lets us save some set instructions we want the computer to run into a command that we can call in the terminal using `rake` ie: `rake db:create_migration NAME="create_tweets"`

If we want to check what tasks we have available to us, we can do `rake --tasks` or `rake -T`

____

### Migrations
Migrations are ActiveRecord keeps track of database changes over time. Think of migrations as *version control* (like git) for your database.

We specify how we want the database to change in the migration file: [docs](https://guides.rubyonrails.org/active_record_migrations.html)

* We can create migrations using `rake db:create_migration NAME="the_name_we_want`
* We can check what migrations have been run so far using `rake db:migrate:status`
* We tell ActiveRecord to apply what we wrote in the migration files to the database using `rake db:migrate`


____


### ActiveRecord Conventions
ActiveRecord relies heavily on naming conventions to do its metaprogramming (aka *magic*), and following those naming conventions is important if you want ActiveRecord to work as intended.

For ActiveRecord to connect between a model and a table, the model name should be *singular* and the table name should be *plural*. ActiveRecord comes with `.singularize` and `.pluralize` methods that you can call on strings to check what how to follow naming convention:

```rb
  "tweet".pluralize
  # => "tweets"

  "tweets".singularize
  # => "tweet"

  "person".pluralize
  # => people

  "human".pluralize
  # => humen (????)
```

____


### Methods from ActiveRecord

* Model.new - creates a new instance in local memory without persistence
* Model#save - inserts or updates instance in db
* Model.create - Model.new + Model#save
* Model.all - all instances
* Model.first - instance with the lowest ID in the db
* Model.last - instance with the highest ID in the db
* Model.find - find one instance by id
* Model.find_by(attribute: value) - can find one instance by attribute-value pair(s)
* Model.where(attribute: value) - can find many instances by attribute-value pair(s)
* Model#update - takes a hash and updates an instance in db
* Model#destroy - delete a row in the database
* Model.destroy_all - delete all rows in a table


____
# Active Record Associations

## Agenda
1. Go over agenda 🙃
2. Review!
3. Questions!
4. Build traveler class together and test! 
5. Talk strategy for building out our domain. 
6. Map out our domain ( Hotel, Reservation, Traveler )
7. BUILD ALL THE THINGS AND TEST ALL THE THINGS

### Review
1. What are some common rake commands youll use in terminal?
rake console, 
rake db:create_migration, 
rake db:migrate, 
rake db:migrate:status
rake db:rollback
rake db:seed
rake -T

2. What's the point of the seeds file? 
dummy data / starter data
populate the db
Why? To help us test our application and any data we need before the user interacts

3. What do migration ( files ) do? 
What are some common commands you'll use in migrations?
Alter the db 
Any changes to our db or tables ===> AR, rake, migrations 
    as opposed to... any changes to our models ===> Ruby
- create_table
- add_column
- remove_column

4. What are some conventions / rules in AR? 
pluralization rules (aka single model, plural table)
snake_case (files, table names) vs CamelCase (ModelNames)
Time stamping / ordering migration files 
create vs new&save
seeds.rb must be named that way! 

5. What does AR write for us that we had to write in OOP? What DON'T we write anymore?
- SQL... under the hood writes the SQL for us
- attr_macros ===> we don't write these anymore! 
- associations... we still need to write a little something 
- initialize 


### Icebox / Questions
- What is the difference between a stored proc and a queue (Michael)
- find_or_create_by(hash)... what it sounds like 


### Associations in ActiveRecord

#### Strategy
1. Map out / draw out your domain
2. Create / update migration files and models
3. Seed
4. Test


* When do you need tables and classes, when can you have just a class? * 
Classes / Models ==> Ruby
Tables / DB ===> AR / Rake / Migrations 
  We need DB to store info; to *persist* information

Rules:
1. Anytime you want to persist info you need a table
2. If you have table, you want to have a related class. Otherwise you cant interact with the info. 
3. If you have a class, you only need table to persist. 


### Next Steps
- What does this look like for a more complex model? Try with https://github.com/cmccarthy15/mod1_cc_retake_practice
- So what about those aggregate and association methods we still have to write? 

____


### Resources
- [ActiveRecord Basics](https://guides.rubyonrails.org/active_record_basics.html)
- [ActiveRecord Migrations](https://guides.rubyonrails.org/active_record_migrations.html)
- [ActiveRecord Querying](https://guides.rubyonrails.org/active_record_querying.html)