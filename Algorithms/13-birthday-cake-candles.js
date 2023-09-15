function birthdayCakeCandles(candles) {
    let maxItem = Number.NEGATIVE_INFINITY; 
    let maxItemFreq = 0; 
    candles.forEach(candle => {
        if(candle > maxItem){
            maxItem = candle; 
            maxItemFreq = 1; 
        } else if ( candle == maxItem){
            maxItemFreq += 1; 
        }
    }); 
    return maxItemFreq; 
}
