function minimumDistances(a) {
    let items = {} ; 
    a.forEach((value, index) => {
        if(items[value]){
            items[value].push(index); 
        } else {
            items[value] = [index];
        }
    }); 
    
    let maxDistance = Infinity; 
    for(let key in items){
        if(items[key].length > 1){
            let distance = items[key][items[key].length - 1] - items[key][0]; 
            if(distance < maxDistance){
                maxDistance = distance; 
            }
        }
    }
    
    
    maxDistance = (maxDistance == Infinity) ? -1 : maxDistance; 
    
    return maxDistance; 
}
