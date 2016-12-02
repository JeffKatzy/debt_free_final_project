class CreditCardController < ApplicationController

  def create

    card = CreditCard.new(name: params[:name], debt: params[:debt], interest_rate: params[:interest_rate], user_id: params[:user_id], min_payment: params[:min_payment])
    #I think it's .id  
    if card.save 
      render json: {card: card}
    else 
      render json: {error: 'something is wrong with your data'}
    end 

  end

  def show
    card = CreditCard.find(params[:id])
  end 

  def update
  end

  def destroy
  end

end
