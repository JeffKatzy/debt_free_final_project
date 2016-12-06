class PeriodsController < ApplicationController

  def create
    period = Period.new(period_params)
    if period.save
      render json: {period: period}
    else
      render json: {error: 'something is wrong with your data'}
    end
  end

  def update
    # this method is completely untested in the wild as we do not have a form for it yet! 
    # refactor HTK
    period = Period.find(params[:id])
    period.update(period_params)
    render json: {period: period}
  end
  
  def destroy
    period = Period.find(params[:id])
    sendName = period.name
    period.delete 
    render json: {name: sendName}
  end

  def period_params
    params.require(:period).permit(:name, :start_month, :start_year, :end_month, :end_year, :expenditure, :payment, :credit_card_id)
  end
end
