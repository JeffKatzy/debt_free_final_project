class PeriodsController < ApplicationController

  def create
    # byebug
    period = Period.new(period_params)
    # start_month: params[:month], start_year: params[:year], end_month: params[:month], end_year: params[:year], expenditure: params[:expenditure], payment: params[:payment], credit_card_id: params[:credit_card_id]
    if period.save
      render json: {period: period} #something
    else
      render json: {error: 'something is wrong with your data'}
    end
  end

  # def update
  # end
  #
  # def destroy
  # end

  def period_params
    params.require(:period).permit(:name, :start_month, :start_year, :end_month, :end_year, :expenditure, :payment, :credit_card_id)
  end
end
