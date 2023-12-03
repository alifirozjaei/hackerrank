function cutTheSticks(arr) {
    let result = []; 
    while(arr.length){
        result.push(arr.length); 
        let min = Math.min(...arr); 
        arr = arr.map(item => item - min).filter(item => item); 
    }
    return(result)
}
