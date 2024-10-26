class BacktestService {
    constructor(marketDataRepository, strategyRepository, backtestRepository) {
      this.marketDataRepository = marketDataRepository;
      this.strategyRepository = strategyRepository;
      this.backtestRepository = backtestRepository;
    }
  
    runBacktest(symbol, strategyName) {
      const marketData = this.marketDataRepository.findBySymbol(symbol);
      const strategy = this.strategyRepository.findByName(strategyName);
      
      let trades = [];
      marketData.timeSeries.forEach(dataPoint => {
        const entrySignal = strategy.execute(dataPoint);
        if (entrySignal) {
          // Simulate a trade
          trades.push({
            buyPrice: dataPoint.close,
            timestamp: dataPoint.timestamp
          });
        }
      });
  
      const performance = this.calculatePerformance(trades);
      const result = new BacktestResult(strategy, performance, trades);
      this.backtestRepository.save(result);
      
      return result;
    }
  
    calculatePerformance(trades) {
      // Example logic to calculate performance from trades
      return {
        totalProfit: trades.reduce((acc, trade) => acc + (trade.sellPrice - trade.buyPrice), 0)
      };
    }
  }
  
export default BacktestService
  