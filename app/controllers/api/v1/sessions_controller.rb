
# require 'JWT'
require 'Auth'

class Api::V1::SessionsController < ApplicationController

  def login
    user = User.find_by(email: params[:user][:email])
    if user && user.authenticate(params[:user][:password])
      render json: { 
        user: user,
        token: Auth.create_token({ username: user.username, id: user.id, email: user.email }) }
    else
      render json: { errors: { message: "Unable to find a user with that email or password" } }, status: 500
    end
  end

end
