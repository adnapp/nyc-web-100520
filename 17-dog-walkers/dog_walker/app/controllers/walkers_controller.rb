class WalkersController < ApplicationController
  def new
    @walker = Walker.new

    render :new
  end

  def show
    @walker = Walker.find(params[:id])

    render :show
  end
  
  def create
    walker = Walker.create(walker_params)

    redirect_to walker_path(walker)
  end

  private

  def walker_params
    params.require(:walker).permit(:first_name, :last_name, :email, :image_url)
  end
end