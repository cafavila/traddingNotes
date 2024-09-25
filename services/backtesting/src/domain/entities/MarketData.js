class MarketData {
    constructor(symbol, timeSeries) {
      this.symbol = symbol;
      this.timeSeries = timeSeries; // Array of price data (open, high, low, close, volume)
    }
  
    getLatestPrice() {
      return this.timeSeries[this.timeSeries.length - 1];
    }
  }
  
  export default MarketData;
  