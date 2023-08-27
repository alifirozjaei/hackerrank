function breakingRecords(scores) {
    let records = [0,0];
    let max_score = scores[0]; 
    let min_score = scores[0]; 
    
    for(let idx=1; idx<=scores.length; idx++){
        if (scores[idx]<min_score){
            records[1] += 1; 
            min_score = scores[idx];  
        }else if (scores[idx]>max_score){
            records[0] += 1; 
            max_score = scores[idx]; 
        }
    } 
    
    return records; 
}
