class toTrades {
    constructor(trackRecord) {
        this.trackRecord = trackRecord
    }

    toTrackRecord() {
        const newTrackRecord = this.trackRecord.map(item => {
            const trade = {}
            trade.position = item.Position
            trade.symbol = item.Symbol
            trade.type = item.Type
            trade.timeOpened = item['Open time']
            trade.timeClosed = item['Close time']
            trade.priceOpen= item['Open price'],
            trade.priceClose = item['Close price'],
            trade.swap = item.Rollover,
            trade.profit = item['Net profit'],
            trade.comment = item.Comment
            return trade
        })
    }
}
export default toTrades