class CampersController < ApplicationController
  def index
    @campers = Camper.all
  end

  def new
    @camper = Camper.new
  end

  def create
    camper = Camper.new(camper_params)

    if camper.save 
      redirect_to camper_path(camper)
      # could pass the errors to flash and all that jazz but my brain is fried
    else
      redirect_back(fallback_location: campers_path)
    end

  end
  
  def show
    @camper = Camper.find(params[:id])
  end

  private

  def camper_params
    params.require(:camper).permit(:age, :name)
  end
end
