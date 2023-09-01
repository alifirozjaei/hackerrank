function sockMerchant(n, ar) {
    let itemCounter = {}; 
    
    // Counting the occurrences of each item
    for(let item of ar){
        if(item in itemCounter){
            itemCounter[item] += 1;
        } else {
            itemCounter[item] = 1; 
        }
    }
    
    // Finding the number of pairs for each item
    let itemPairsCounter = Object.values(itemCounter).map(item => parseInt(item/2)); 
    
    // Calculating the sum of pairs
    let totalPairsCount = itemPairsCounter.reduce((acc, value)=> acc + value, 0);
    
    return totalPairsCount;
}
