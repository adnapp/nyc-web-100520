class WalksController < ApplicationController
  def new
    @walk = Walk.new

    render :new
  end

  def create
    walk = Walk.create!(walk_params)

    redirect_to dog_path(walk.dog_id)
  end

  private

  def walk_params
    params.require(:walk).permit(:dog_id, :walker_id, :date, :time)
  end
end