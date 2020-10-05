require 'pry'
# 1. I am building a Pets application. I need to a way to hold all the information (name, type) about a SPECIFIC pet. Which datatype should I use?
# 2. Now, I need a way to hold a list of all of the pets in my app. Which datatype should I use? 
# 3. I want a list of only the names of each pet. How do I do that? What datatype should be returned?
# 4. I want to be to find all pets that are dogs. What iterator should I use? What datatype should be returned?
# 5. I want to be able to find a single dog with a specific name. How do I do that? What datatype should be returned?

# 1. show a list of all the names of all my pets
# 2. show me a list of just the pets that are... cats?
# 3. let me search for pet by name


# tom - .each v .map

all_animals = [
    {name: "alpha", species:"lion", sound: "meow"},
    {name: "Cloud", species: "cat", sound: "pteradactyl roar"}, # name, species, noise
    {name: "Foxy Brown", species:"dog", sound: "ruff"},
    {name: "Anise", species:"cat", sound: "mew"},
    {name: "Nami", species:"dog", sound: "snore"},
    {name: "alpha", species:"beta fish", sound: "bloop"}
]

# what if dealing with HoH? 

# a collection of the same kind of info but no need to label each one ==> array
# a collection of info where you need to label each piece ==> hash

def run(animals)  # adding the run word to the dictionary metaphorically
    puts "Welcome to the Pet Shop!!!"
    puts "Please make a selection:"
    puts "1. View a list of all animal names"
    puts "2. View all cats" # view all cat names, not all cat instances
    puts "3. Search for an animal by name"
    choice = gets.chomp  # remove whitespace and newlines ie "1\n" vs "1"
    
    if choice == "1"
        puts animals.map do |animal| #use do/end for multiline blocks, {} for single line
            puts "saw #{animal[:name]}"
            animal[:name]
        end
        # YOU CANNNN DO THIS WITH EACH BUT MAP/COLLECT IS BETTER
        # just_names = []
        # all_animals.each { |ele| just_names <<  ele[:name]}
        # just_names
    elsif choice == "2" 
        puts animals.filter { |animal| animal[:species] == "cat" } # an array of cat hashes
        # chaining enumberables! 
        # puts animals.filter { |animal| animal[:species] == "cat" }.map { |cat| cat[:name]} # change this to print a list of cat names
    elsif choice == "3"
        puts "What is the animal's name?"
        search = gets.chomp
        puts animals.find { |ani| ani[:name] == search }
    else
        puts "Give me a valid choice please!"
        run(animals)
    end

    # binding.pry # to stop me to inspect animals, choice etc
end


binding.pry # is to stop me so i can run run(all_animals)
