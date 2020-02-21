class AlphaVantage
  AlphaVantageURL = "https://www.alphavantage.co/query"
  API_KEY = "<YOUR API KEY HERE>"

  def self.daily(ticker)
    response = Faraday.get(AlphaVantageURL, { function: "TIME_SERIES_DAILY", symbol: ticker, apikey: API_KEY })
    JSON.parse response.body
  end
end
