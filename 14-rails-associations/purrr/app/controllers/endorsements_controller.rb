class EndorsementsController < ApplicationController  
  def new 
    @endorsement = Endorsement.new
  end 

  def create 
    endorsement = Endorsement.create(endorsement_params)

    redirect_to cat_path(endorsement.cat)

  end 

  private 

  def endorsement_params
    params.require(:endorsement).permit(:user_id, :cat_id, :content, :rating)
  end 
end
