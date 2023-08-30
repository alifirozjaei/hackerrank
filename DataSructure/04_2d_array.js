function hourglassSum(arr) {
    let max_hourglass_sum = arr[0][0]+arr[0][1]+arr[0][2]+arr[1][1]+arr[2][0]+arr[2][1]+arr[2][2];
    for (let i=0; i<=3; i++){
        for (let j=0; j<= 3; j++){
            let current_hourglass_sum = arr[i][j]+arr[i][j+1]+arr[i][j+2]+arr[i+1][j+1]+arr[i+2][j]+arr[i+2][j+1]+arr[i+2][j+2];
            
            if (current_hourglass_sum > max_hourglass_sum){
                max_hourglass_sum = current_hourglass_sum; 
            }
        }
    }
    
    return max_hourglass_sum; 
}
