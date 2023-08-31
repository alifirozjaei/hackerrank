function timeConversion(s) {
    let hour = s.split(":")[0]; 
    let minute = s.split(":")[1]; 
    let second = s.split(":")[2].substring(0,2);
    
    if(s.search("PM") != -1){
        hour = parseInt(hour) + 12; 
        if (hour >= 24) {
            hour = "12";
        }
    } 
    
    else if(s.search("AM") != -1){
        if (hour >= "12") {
            hour = "00";
        }
    }
    
    return `${hour}:${minute}:${second}`; 
}
