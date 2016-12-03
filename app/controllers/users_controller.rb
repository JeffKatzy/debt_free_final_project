class UsersController < ApplicationController
  skip_before_action :authenticate_user, only: [:new, :create]

  def show
    user = User.find(params[:id])
    jwt = Auth.issue({user_id: user.id})
    render json: {jwt: jwt}
  end

  def create
    user = User.new(user_params)
    if user.save
      jwt = Auth.issue({user_id: user.id})
      render json: {jwt: jwt, user_id: user.id, user: user}
    else
      render json: {error: 'user not unique'}
    end
  end

  def user_params
    params.require(:auth).permit(:name, :email, :password)
  end
end
