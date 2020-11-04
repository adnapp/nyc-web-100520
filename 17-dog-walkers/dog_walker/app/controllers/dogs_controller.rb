class DogsController < ApplicationController
  def new
    @dog = Dog.new

    render :new
  end

  def show
    @dog = Dog.find(params[:id])
    sorted_walks = @dog.walks.sort_by { |walk| walk.date }
    @walks = sorted_walks.map do |walk|
      {
        date: walk.date.strftime('%B %-d, %Y'),
        time: walk.time.strftime('%l:%M %P'),
        walker: walk.walker.full_name
      }
    end

    render :show
  end

  def create
    dog = Dog.create!(dog_params)
    byebug
    redirect_to dog_path(dog)
  end

  private

  def dog_params
    params.require(:dog).permit(:name, :breed, :sex, :age)
  end
end