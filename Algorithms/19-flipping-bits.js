function flippingBits(n) {
    let numberBase2 = String(n.toString(2));
    while(numberBase2.length != 32){
        numberBase2 = `0${numberBase2}`;
    }
    
    let numberBase2Reverse = numberBase2.split("").map(char => char == '0' ? 1 : 0).join(""); 
    numberBase2Reverse = parseInt(numberBase2Reverse, 2)
    
    return numberBase2Reverse; 
}
