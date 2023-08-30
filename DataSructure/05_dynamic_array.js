function dynamicArray(n, queries) {
    let array = []; 
    let lastAnswer = 0; 
    let answersArray = [];
    
    for (let i=0; i<n; i++){
        array.push([]); 
    }
    
    queries.forEach(([query, x, y]) => {
        if (query == 1){
            let idx = ((x^lastAnswer)%n);
            array[idx].push(y);
        } else if (query == 2){
            let idx = ((x^lastAnswer)%n); 
            lastAnswer = array[idx][y%array[idx].length]; 
            answersArray.push(lastAnswer);
        }
    }); 
    
    return answersArray; 
}
