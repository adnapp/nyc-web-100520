# Dog Walkers

Today you’re going to make a Rails app from scratch that allows us to book walks for our cherished canine family members. The requirements for this app are listed below; how you choose to implement solutions to each requirement is up to you. 

1. When I go to /walkers/new I should see a form that allows me to create a new dog walker. A dog walker should have a first name, last name, email address, and an image url that holds a link to their picture. All of these attributes are required in order to be saved in the database and the combination of first name and last name must be unique. You should choose where to direct the user after a new dog walker is created. You are encouraged to use form helpers we haven’t talked about before (e.g., https://apidock.com/rails/ActionView/Helpers/FormHelper/email_field). 

* build out a walker model/routes/controller/migration
* new action in the contoller with a form
* create action in the controller that redirects somewhere?
* validation on the user model

2. Similar to requirement 1, when I go to /dogs/new I should see a form that allows me to create a new dog. Dogs should have the following attributes: name, breed, age, sex. All of these attributes are required and sex has to be either M or F (bonus: use a radio button for the sex attribute - https://api.rubyonrails.org/v5.1.7/classes/ActionView/Helpers/FormTagHelper.html#method-i-radio_button_tag).

* build out dog model/routes/controller/migration
* new and create actions in controller
* validation on the dog model

3. Users need the ability to book a walk with the walker and the dog of their choice on a specific day and time. How will you build this functionality out? What endpoint will this be at? 

* join model between walker and dog (walk) - migrations etc.
* new/create action for walk with forms etc. 
* build out walks/new view

4. When I go to the dogs index page I should see a list of all the dogs in the system with individual links that show me each individual dog’s details. Included on this details page should be a list of all the dog's past walks including their dates and the walkers they were with. These should be organized by date with the most recent walk at the top. Each walk should also have a button next to it that allows me to delete it from the system.

* build out index/show route/view for dog
* sort walks by date
* build out delete functionality on the walk

5. When I go to /walkers/:id, I should see all the details of a given walker (including their image), as well as a link to a page that allows me to edit their attributes.

* build out the walkers show/edit route/controller/view

If you finish everything above feel free to add whatever other bells and whistles you would like. Maybe a nav bar? How can you get the same Nav bar on each page while keeping your code DRY? Maybe you want full CRUD functionality for every model? Maybe there are additional models you think your application needs? Don’t forget about seed data!!