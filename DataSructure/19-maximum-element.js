function getMax(operations) {
    let stack = []; 
    let maxStack = []; 
    let result = []; 
    
    operations.forEach(op => {
        if(op[0] == '1'){
            let item = parseInt(op.split(" ")[1])
            if(stack.length){
                let currentMax = maxStack[maxStack.length - 1]; 
                if(currentMax < item){
                    currentMax = item; 
                }
                stack.push(item); 
                maxStack.push(currentMax); 
            } else {
                stack.push(item); 
                maxStack.push(item); 
            }
        } else if(op[0] == '2'){
            stack.pop(); 
            maxStack.pop();
        } else {
            result.push(maxStack[maxStack.length - 1]); 
        }
    });
    
    return result; 
}
