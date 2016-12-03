class CreditCardsController < ApplicationController
  skip_before_action :authenticate_user
  
  def create
    card = CreditCard.new(name: params[:name], debt: params[:debt], interest_rate: params[:interest_rate], user_id: params[:user_id], min_payment: params[:min_payment])
    byebug
    if card.save
      render json: {card: card}
    else
      render json: {error: 'something is wrong with your data'}
    end
  end

  def show
    card = CreditCard.find(params[:id])
    render json: card
  end 

  def index
    cards = CreditCard.all
    render json: cards
  end 

  def update
  end

  def destroy
  end

end
