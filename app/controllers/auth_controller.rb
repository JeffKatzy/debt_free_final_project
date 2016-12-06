class AuthController < ApplicationController
  def authenticate
    byebug
    user = User.find_by_credentials(params[:email], params[:password])
    if user
      render json: authentication_payload(user)
    else
      render json: { errors: ['Invalid email or password'] }, status: :unauthorized
    end
  end

  private

  def authentication_payload(user)
    return nil unless user && user.id
    {
      byebug
      auth_token: AuthToken.encode({ user_id: id }),
      user: { id: user.id, email: user.email }
    }
  end
end
# hey, why don't we ever hit either of these byebugs in the authentication methods when we're logging in to the site? 
# refactor HTK what the heck? 