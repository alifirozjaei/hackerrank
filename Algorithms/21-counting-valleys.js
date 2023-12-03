function countingValleys(steps, path) {
    let height = 0;
    let volleyCounter = 0;  
    for(let step of path){
        let prevHeight = height; 
        height = step == "U" ? height + 1 : height - 1;
        if(height == 0 && prevHeight<0){
            volleyCounter++;
        }
    }
    
    return volleyCounter;
}
