class Api::V1::UsersController < ApplicationController

  def signup
    user = User.new(user_params)
    if user.save
      render json: { token: Auth.create_token(user) }
    else
      render json: { errors: user.errors.full_messages }, status: 500
    end
  end

  private

    def user_params
      params.require(:user).permit(:username, :password, :email)
    end

end
