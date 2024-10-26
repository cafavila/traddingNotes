class BacktestRepository {
    constructor() {
      this.backtestCollection = [];
    }
  
    save(backtestResult) {
      this.backtestCollection.push(backtestResult);
    }
  
    getAll() {
      return this.backtestCollection;
    }
  }
  
export default BacktestRepository
  