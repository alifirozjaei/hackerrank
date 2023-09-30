function isBalanced(s) {
    let stack = []; 
    let startingBracket = ["(", "[", "{"]; 
    
    for(let bracket of s){
        if(startingBracket.indexOf(bracket) != -1){
            stack.push(bracket); 
        } else {
            if(stack.length == 0){
                return "NO"; 
            }
            let topOfStack = stack.pop(); 
            if(bracket == ")" && topOfStack != "("){
                return "NO"
            }
            if(bracket == "]" && topOfStack != "["){
                return "NO"
            }
            if(bracket == "{" && topOfStack != "}"){
                return "NO"
            }
        }
    }
    
    if(stack.length){
        return "NO"
    } else {
        return "YES"; 
    }
}
