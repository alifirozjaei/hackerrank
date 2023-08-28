function plusMinus(arr) {
    let positive_counter = 0; 
    let negative_counter = 0; 
    let zero_counter = 0 ; 
    
    positive_counter = arr.reduce(
        (accumulator, current_value) => current_value>0 ? accumulator+1: accumulator,0
    );
    
    negative_counter = arr.reduce(
        (accumulator, current_value) => current_value<0 ? accumulator+1: accumulator,0
    );
    
    zero_counter = arr.reduce(
        (accumulator, current_value) => current_value==0 ? accumulator+1: accumulator,0
    );

    // print counter rate
    console.log(positive_counter/arr.length);
    console.log(negative_counter/arr.length);
    console.log(zero_counter/arr.length);
}
