function viralAdvertising(n) {
    let recipients = 5;
    let cumulativeLike = 0;  
    for(let i=0; i<n; i++){
        let peopleLikeOnDay = Math.floor(recipients / 2);
        recipients = peopleLikeOnDay * 3; 
        cumulativeLike += peopleLikeOnDay; 
    }
    
    return cumulativeLike; 
}
