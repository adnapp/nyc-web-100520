class CatsController < ApplicationController
  def index
    @cats = Cat.all

    # render :index
  end

  def show
    @cat = Cat.find(params[:id])

    # render :show
  end 

  def new 
    @cat = Cat.new

    render :new
  end

  def create 
    strong_params = params.require(:cat).permit(:name, :age, :softness)
                    # {name: "Wade", age: 6, softnes: "High"} permitted: true
    cat = Cat.create(strong_params)

    # render :show
    redirect_to cat_path(cat)
    
  end 

end
