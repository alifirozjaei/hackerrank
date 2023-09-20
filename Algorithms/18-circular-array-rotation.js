function circularArrayRotation(a, k, queries) {
    for(let rotate=0; rotate<k; rotate++){
        a.unshift(a.pop());
    }
    
    let result = queries.map(query => a[query]); 
    return result;
}
