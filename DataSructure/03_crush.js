function arrayManipulation(n, queries) {
    let array = new Array(n).fill(0);
    queries.forEach(query => {
        for (let i=query[0]; i<=query[1]; i++){
            array[i-1] += query[2];
        }
    })
    return Math.max(...array); 
    
}
