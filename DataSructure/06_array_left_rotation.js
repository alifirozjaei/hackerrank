function rotateLeft(d, arr) {
    for(let i=0; i<d; i++){
        arr.push(arr.shift());
    }
    return arr; 
}
