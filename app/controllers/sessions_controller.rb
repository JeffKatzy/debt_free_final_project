class SessionsController < ApplicationController
  skip_before_action :authenticate_user, only: [:new, :create]

  def create
    user = User.find_by(email: params[:auth][:email])
    if user.authenticate(params[:auth][:password])
      jwt = Auth.issue({user_id: user.id})
      # byebug
      render json: {jwt: jwt, user_id: user.id}
    end
  end
  
end
