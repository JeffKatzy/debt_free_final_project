class CreditCardController < ApplicationController

  def create
    card = CreditCard.new(name: params[:name], debt: params[:debt], interest_rate: params[:interest_rate], user_id: current_user.id)
    #I think it's .id  
    if card.save 
      render #something 
    else 
      render json: {error: 'something is wrong with your data'}
    end 

  end

  def update
  end

  def destroy
  end

end
