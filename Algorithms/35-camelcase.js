function camelcase(s) {
    let wordCounter = 1; 
    for(let char of s){
        if (char === char.toUpperCase()){
            wordCounter++;
        }
    }
    return wordCounter;    
}
