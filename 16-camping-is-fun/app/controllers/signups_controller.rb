class SignupsController < ApplicationController
  def new
    @signup = Signup.new
  end

  def create
    signup = Signup.create!(signup_params)

    redirect_to camper_path(signup.camper_id)
  end

  private

  def signup_params
    params.require(:signup).permit(:time, :activity_id, :camper_id)
  end
end