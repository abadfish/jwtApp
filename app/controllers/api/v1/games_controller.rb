require 'Auth'

class Api::V1::GamesController < ApplicationController

  def index
    token = request.env["HTTP_AUTHORIZATION"]
    if token && Auth.decode_token(token)
      render json: Game.all
    else
      render json: { error: { message: "You must have a valid token!" } }, status: 500
    end
  end

end
