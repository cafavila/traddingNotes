class StrategyRepository {
    constructor() {
      this.strategies = [];
    }
  
    save(strategy) {
      this.strategies.push(strategy);
    }
  
    findByName(name) {
      return this.strategies.find(strategy => strategy.name === name);
    }
  }
  
export default StrategyRepository
  