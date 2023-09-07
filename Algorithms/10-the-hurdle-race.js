function hurdleRace(k, height) {
    let maxHeight = Math.max(...height); 
    let doses = maxHeight - k <= 0 ? 0 : maxHeight - k; 
    return doses; 
}
