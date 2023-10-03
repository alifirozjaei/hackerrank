function appendAndDelete(s, t, k) {
    let commonStrLength = 0; 
    for (let i = 0; i < Math.min(t.length, s.length); i++){
        if(s[i] == t[i]){
            commonStrLength++; 
        } else {
            break; 
        }
    }
    
    let deleteOperation = s.length - commonStrLength; 
    let appendOperation = t.length - commonStrLength;
    let total = deleteOperation + appendOperation; 
    
    if ((total <= k && (((k - total) % 2 == 0))) || (k >= s.length + t.length)){
        return "Yes";
    } else {
        return "No";
    }
}
