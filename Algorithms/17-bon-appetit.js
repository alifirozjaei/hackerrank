function bonAppetit(bill, k, b) {
    let sumOfBillWithoutK = 0; 
    bill.forEach((value, index) => {
        if(index != k){
            sumOfBillWithoutK += value; 
        }
    }); 
    
    if(b == (sumOfBillWithoutK/2)){
        console.log("Bon Appetit");
    } else {
        console.log(b - (sumOfBillWithoutK/2));
    }

}
