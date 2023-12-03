function diagonalDifference(arr) {
    let sumOfFirstDiagonal = 0; 
    let sumOfSecondDiagonal = 0; 
    let arrayLength = arr.length;
    for (let i=0; i<arrayLength; i++){
        sumOfFirstDiagonal += arr[i][i]; 
        sumOfSecondDiagonal += arr[i][arrayLength - i - 1];
    }
    let difference = Math.abs(sumOfFirstDiagonal - sumOfSecondDiagonal); 
    return difference; 
}
