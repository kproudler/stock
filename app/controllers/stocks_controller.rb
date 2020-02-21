class StocksController < ApplicationController
  def get
    data = AlphaVantage::daily(params[:ticker])
    render json: data, status: :ok
  end
end
