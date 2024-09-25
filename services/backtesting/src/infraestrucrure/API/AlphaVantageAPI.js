class AlphaVantageAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  async getDailyData(symbol) {
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${this.apiKey}`;
    let response
    await fetch(url).then(res => response)
    return response.data['Time Series (Daily)']; // Returns price data
  }
}

export default AlphaVantageAPI