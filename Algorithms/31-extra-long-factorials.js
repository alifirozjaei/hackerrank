function extraLongFactorials(n) {
    let result = BigInt(1); 
    for (let number = BigInt(1); number <= n; number++){
        result *= number; 
    }
    result = `${result}`; 
    result = result.slice(0, result.length)
    console.log(result);
}
