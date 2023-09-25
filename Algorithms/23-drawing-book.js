function pageCount(n, p) {
    let startFromOne = Math.floor(p / 2); 
    let startFromEnd = Math.floor((n-p) / 2);
    return Math.min(startFromEnd, startFromOne) ; 
}
