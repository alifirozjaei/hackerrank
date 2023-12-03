function beautifulDays(i, j, k) {
    let beatifullNumberCounter = 0;
    for (let number = i; number <= j; number++) {
        let reversedNumber = parseInt(number.toString().split("").reverse().join("")); 
        if(Math.abs(number - reversedNumber) % k == 0){
            beatifullNumberCounter++; 
        }
    }
    return beatifullNumberCounter; 
}
