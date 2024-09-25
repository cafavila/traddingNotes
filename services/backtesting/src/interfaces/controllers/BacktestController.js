class BacktestController {
    constructor(backtestService) {
      this.backtestService = backtestService;
    }
  
    async run(req, res) {
      console.log('[INFO] - Running backtest')
      const { symbol, strategyName } = req.body
      try {
        const result = this.backtestService.runBacktest(symbol, strategyName);
        res.status(200).json(result.getSummary());
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  }
  
export default BacktestController
  