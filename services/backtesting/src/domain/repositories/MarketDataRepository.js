class MarketDataRepository {
    constructor() {
      this.marketDataCollection = []; // Use MongoDB or other database
    }
  
    save(marketData) {
      this.marketDataCollection.push(marketData);
    }
  
    findBySymbol(symbol) {
      return this.marketDataCollection.find(data => data.symbol === symbol);
    }
  }
  
export default MarketDataRepository
  