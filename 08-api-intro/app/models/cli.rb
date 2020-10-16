require "tty-prompt"
require "pry"
require 'rest-client'  
require 'json' 

class CLI
    @@prompt = TTY::Prompt.new
    @@artii = Artii::Base.new :font => 'slant'
    @@user = nil

    def welcome
        system('clear')
        puts @@artii.asciify("Welcome to")
        puts @@artii.asciify("Jeopardy ( Lite )!")
        self.auth_sequence
    end

    def auth_sequence
        choices = { "Log In" => 1,
            "Sign Up" => 2
        }
        choice = @@prompt.select("Would you like to sign up or log in?", choices)
        if choice == 1
            @@user = User.login
            if @@user
                self.display_menu
            else
                self.auth_sequence
            end
        else
            @@user = User.signup
            if @@user
                self.display_menu
            else
                self.auth_sequence
            end
        end
    end

    def display_menu
        choices = { "Play a random category" => 1,
                "Search for a category" => 2, 
                "See my game results" => 3,
                "See leaderboard" => 4
            }
        action = @@prompt.select("What would you like to do?", choices)
        case action
        when 1
            self.random_game
        when 2
            puts "You chose to search"
        when 3
            puts "You chose to see results"
        when 4
            puts "You chose to see your game results"
        end
    end

    def random_game
        random_cat = Category.all.sample
        get_category = RestClient.get("http://jservice.io/api/category?id=#{random_cat.api_id}")
        category_data = JSON.parse(get_category)
        category_data["clues"].slice(0,5).map do |clue|
            self.give_clue_prompt(category_data["title"], clue)
        end
        binding.pry
    end

    def give_clue_prompt(title, clue)
        attempts = 0
        while attempts < 3
            system('clear')
            puts @@artii.asciify(title)
            puts "Your clue... \n"
            puts "#{clue["question"]} \n"
            guess = @@prompt.ask("What is your answer?")
            if guess == clue["answer"]
                puts "You did it!! Correct answer! \n\n"
                sleep(1.5)
                return clue["value"]
            end
            puts "Wrong! Try Again!" if attempts < 2
            sleep(0.5)
            attempts += 1
        end
        puts "Alas, you ran out of tries. The correct answer was: #{clue["answer"]} \n\n"
        sleep(1.5)
        return 0
    end

    # login
    # signup
    
    # get random category
    # search by category

    # play game
    
    # see your game results 
    # see leaderboard


end