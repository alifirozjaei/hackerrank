function miniMaxSum(arr) {
    let min_sum = Infinity; 
    let max_sum = -Infinity; 

    for(let i=0; i<arr.length; i++){
        // delete item i
        let arr_copy = arr.slice(); 
        arr_copy.splice(i, 1); 
        
        let current_sum = arr_copy.reduce((acc, val) => acc + val, 0); 
        if (current_sum > max_sum){
            max_sum = current_sum; 
        }
        if (current_sum < min_sum){
            min_sum = current_sum; 
        }
    }
    
    console.log(min_sum, max_sum);
}
