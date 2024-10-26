class BacktestResult {
    constructor(strategy, performance, trades) {
      this.strategy = strategy;
      this.performance = performance; // Object containing performance metrics like profit, drawdown, etc.
      this.trades = trades; // List of all trades made during the backtest
    }
  
    getSummary() {
      return {
        strategy: this.strategy.name,
        profit: this.performance.totalProfit,
        trades: this.trades.length
      };
    }
  }
  
export default BacktestResult
  