function waiter(number, q) {
    function generatePrimeNumbers(primesCount) {
        let primes = [2];
        for (let num = 3; primes.length < primesCount; num++) {
            let isPrime = true;
            for (let idx = 0; (primes[idx] <= Math.floor(Math.sqrt(num))) && (idx < primes.length); idx++) {
                if (num % primes[idx] == 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                primes.push(num);
            }
        }
        return primes;
    }

    let primesNumber = generatePrimeNumbers(q);
    let answer = [];
    let A = number;

    for (let i = 0; i < q; i++) {
        let lenA = A.length;
        let B = [];
        let ATemp = [];
        for (let j = 0; j < lenA; j++) {
            let num = A.pop();
            if (num % primesNumber[i] == 0) {
                B.push(num);
            } else {
                ATemp.push(num);
            }
        }
        A = ATemp; 
        answer.push(...B.reverse()); 
    }
    answer.push(...A.reverse());

    return answer;
}
