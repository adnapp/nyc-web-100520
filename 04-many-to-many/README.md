Many to Many Relationships
===

## SWBATs
- Implement both sides of a many to many relationship
- Practice keeping groups of data related to classes on the class as a class variable
- Demonstrate Single Source of Truth by not storing collections of objects on other objects
- Demonstrate Single Source of Truth by not storing one object in multiple collections


## Objectives
- [ ] Review relationships (one to many => **has many**, **belongs to**)
- [ ] Come up with examples of many-to-many relationships
- [ ] Implement a many-to-many relationship in Ruby
- [ ] *if there's time* add additional methods that use the relationships

## Examples





## Key Questions

> How can I describe a many-to-many relationship?

X -< Y >- Z

X has many Y
X has many Z, through Y

Y belongs to X
Y belongs to Z

Z has many Y
Z has many X, through Y

**Example:** 

Doctor -< Appointments >- Patients

Doctor has many Appointments
Doctor has many Patients, through Appointments

Appointment belongs to Doctor
Appointment belongs to Patient

Patient has many Appointments
Patient has many Doctors, through Appointments

We can also express these steps in pseudocode:

1. For one instance of a Doctor, find all the Appointments
2. For each of those Appointments, get the Patient's info

> Is this a good name for a model? 

Make sure it:
- is a noun (it should represent one specific "thing" or "object")
- has attributes: what are the attributes that make up that object?
- has a singular name (not plural; not a collection)

> How can I figure out the relationship between two models?

Let's take a Twitter domain (User and Tweet) as an example.

Ask yourself:
- For every one (X), how many (Y)?
  - For every one Tweet, there is only one User
  - Therefore, a Tweet _belongs to_ a User
- For every one (Y), how many (X)?
  - For every one User, there are many Tweets
  - Therefore, a User _has many_ Tweets

> How does one class know about the other class?

For a _one to many_ relationship:

Let's use the Twitter domain (User -< Tweet) again as an example.

- each Tweet instance needs a _reference_ to the user instance that it _belongs to_
- a User instance can get access to the Tweets it _has many_ of by looking through _all_ the Tweet instances, and selecting the Tweets that belong to the User

```rb
class Tweet
  attr_reader :message, :user

  @@all = []

  def initialize(message, user)
    @message = message
    
    # user is an INSTANCE of the User class
    # we're passing a REFERENCE to this instance when we create the new tweet
    @user = user 

    @@all << self
  end

  def self.all
    @@all
  end

end # end of Tweet class

class User
  attr_reader :username
  attr_accessor :bio

  @@all = []

  def initialize(username, bio)
    @username = username
    @bio = bio
    @@all << self
  end

  def tweets
    # look through the single source of truth for all tweets
    Tweet.all.select do |tweet_instance|
      # find all the tweets that belong to this user (self)
      tweet_instance.user == self
    end
  end

  def self.all
    @@all
  end

end # end of User class

# test data
coffee_dad = User.new("@coffee_dad", "just a dad who loves his coffee")

tweet1 = Tweet.new("havin #a coffee", coffee_dad) # pass in a REFERENCE to the User instance
tweet2 = Tweet.new("coffee > tea", coffee_dad) # pass in a REFERENCE to the User instance

tweet1.user # returns the instance of user that this tweet belongs to

coffee_dad.tweets # returns the array of tweets that this user has many of
```
