function angryProfessor(k, a) {
    let onTimeCounter = 0;
    a.forEach(item => {
        if (item <= 0) {
            onTimeCounter++;
        }
    }); 
    
    return onTimeCounter < k ? "YES" : "NO"
}
