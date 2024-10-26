import express from 'express'
import BacktestController from '../controllers/BacktestController.js'
const router = express.Router();

const backtestController = new BacktestController(); // Inject service dependencies

router.post('/backtest', backtestController.run);

export default router
