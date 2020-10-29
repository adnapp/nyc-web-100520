class CatsController < ApplicationController
  before_action :find_cat, only: [:show, :edit, :update, :destroy]
  

  def index
    @cats = Cat.all
    # render :index
  end

  def show
    # @cat = Cat.find(params[:id])
    # render :show
  end 

  def new 
    @cat = Cat.new

    render :new
  end

  def create 
    cat = Cat.create(cat_params)

    # render :show
    redirect_to cat_path(cat)
  end 

  def edit 
    # @cat = Cat.find(params[:id])
    
    render :edit
  end
  
  def update 
    # @cat = Cat.find(params[:id])
    @cat.update(cat_params)
    
    redirect_to cat_path(@cat)
  end 
  
  def destroy 
    # @cat = Cat.find(params[:id])
    @cat.destroy
    
    redirect_to cats_path
  end 

  private
  
  def cat_params
    params.require(:cat).permit(:name, :softness, :age)
    # {name: "Robin", age: 15, softness: "high"} permitted: true
  end 

  def find_cat
    @cat = Cat.find(params[:id])
  end 
  
end
