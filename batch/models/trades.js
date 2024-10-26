import mongoose from 'mongoose'

const tradeSchema = new mongoose.Schema({
    position: Number,
    symbol: String,
    type: String,
    timeOpened: Date,
    timeClosed: Date,
    priceOpen: Number,
    priceClose: Number,
    swap: Number,
    profit: Number,
    comment: String
    // Agrega más campos según tu archivo CSV
});

export default mongoose.model('Trade', tradeSchema)
