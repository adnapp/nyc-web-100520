class CatsController < ApplicationController
  before_action :find_cat, only: [:show, :edit, :update, :destroy]
  skip_before_action :authorization, only: [:show]
  

  def index
    @cats = Cat.all
    # render :index
  end

  def show
    # @cat = Cat.find(params[:id])
    if session[:page_count]
      session[:page_count] = session[:page_count] + 1
    else
      session[:page_count] = 1
    end 
    # render :show
  end 

  def new 
    @cat = Cat.new

    render :new
  end

  def create 
    @cat = Cat.create(cat_params)
    # cat = Cat.new(cat_params)
    
    # if cat.save
    if @cat.valid?   
      redirect_to cat_path(@cat)
    else 
      flash[:cat_errors] = @cat.errors.full_messages
      redirect_to new_cat_path 
    end 
    # render :show
  end 

  def edit 
    # @cat = Cat.find(params[:id])
    
    render :edit
  end
  
  def update 
    # @cat = Cat.find(params[:id])
    if @cat.update(cat_params)
      redirect_to cat_path(@cat)
    else
      flash[:cat_errors] = @cat.errors.full_messages
      redirect_to edit_cat_path
    end 
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
