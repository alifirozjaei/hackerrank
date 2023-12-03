function processData(input) {
    input = input.split("\n");
    
    let currentState = ""; 
    let operations = input.slice(1);
    let prevState = []; 
    
    operations.forEach(op => {
        if(op[0] == '1'){
            prevState.push(currentState);
            currentState += op.split(" ")[1]; 
        } else if(op[0] == '2'){
            prevState.push(currentState);
            currentState = currentState.slice(0, -parseInt(op.split(" ")[1]));
        } else if(op[0] == '3'){
            console.log(currentState[parseInt(op.split(" ")[1])-1]);
        } else {
            currentState = prevState.pop();
        }
    }); 
    
} 
