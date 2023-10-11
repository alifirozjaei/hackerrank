function findDigits(n) {
    let divisors = n.toString().split('');
    
    let result = divisors.reduce((acc, divisor) => {
        if (divisor == 0 || n % divisor != 0) {
            return acc;
        }
        return acc + 1;
    }, 0); 
    
    return result; 
}
