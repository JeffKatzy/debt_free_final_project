class CreditCardsController < ApplicationController
  skip_before_action :authenticate_user
  
  def create
    card = CreditCard.new(card_params)
    # byebug
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

  def card_params
    params.require(:card).permit(:name, :debt, :interest_rate, :user_id, :min_payment)
  end 

end
