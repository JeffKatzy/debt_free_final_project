class PeriodsController < ApplicationController

  def create
    #are we going to have a "current credit card method in state??" 
    period = Period.new(month: params[:month], year: params[:year], expenditure: params[:expenditure], payment: params[:payment], credit_card_id: current_credit_card)
    #is it current_user or current_user.id 
    if period.save 
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
