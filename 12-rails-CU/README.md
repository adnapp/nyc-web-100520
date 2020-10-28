# Rails Index and Show

## SWBATs

* [ ] explore the options for the `rails new` command
* [ ] discuss RESTful conventions and understand the core RESTful routes
* [ ] use Rails errors to guide development
* [ ] create routes, migrations, model, controllers, and views *from scratch!!*
* [ ] create dynamic routes and explain how route variables get added to the params
* [ ] utilize view helpers to create HTML

### Outline

* come up with app domain
* create new Rails app, explore options
* discuss RESTful conventions
* use Rails errors to drive code
* create Index and Show pages with links

### Our App

* Cat Tindr - Tindr for Cats!!

#### User Story 1

* As a user, when I go to /cats I should see a list of all the cats in the system.

### ActionView Helpers

* `button_to`: generates a `<form>` tag with a submit button

```ruby
<%= button_to 'Delete', @student, method: :delete %>

# => "<form class="button_to" method="post" action="/students/1">
#       <input type="hidden" name="_method" value="delete">
#       <input type="submit" value="Delete">
#       <input type="hidden" name="authenticity_token" value="...">
#     </form>"
```