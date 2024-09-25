class Strategy {
    constructor(name, rules) {
      this.name = name;
      this.rules = rules; // Object with indicators and conditions
    }
  
    execute(marketData) {
      // Logic to evaluate if conditions are met
      // Return true for entry signal, false otherwise
    }
  }
  
  export default Strategy;
  