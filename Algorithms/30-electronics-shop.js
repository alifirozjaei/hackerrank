function getMoneySpent(keyboards, drives, b) {
    let maxCost = -1; 
    for (let keyboard of keyboards){
        for (let drive of drives){
            let cost = keyboard + drive;
            if ((cost <= b) && (maxCost < cost)){
                maxCost = cost; 
            }
        }
    }
    return maxCost; 
}
