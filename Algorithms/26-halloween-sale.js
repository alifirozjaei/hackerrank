function howManyGames(p, d, m, s) {
    let total = 0; 
    let counter = 0; 
    let price = 0; 
    while(total <= s){
        // calculate game price
        if(counter == 0){
            price = p;
        } else if(m < price - d){
            price -= d; 
        } else {
            price = m;
        }
        
        // check have enough money
        if(s < total + price){
            break; 
        }
        
        // buy game
        total += price; 
        counter += 1; 
    }
    
    return counter; 
}
