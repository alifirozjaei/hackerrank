function encryption(s) {
    let stringLength = s.length;
    let lengthSqrt  = Math.sqrt(stringLength); 
    let lengthSqrtFloor = Math.floor(lengthSqrt);
    let lengthSqrtCeil = Math.ceil(lengthSqrt);
    
    let minArea = Infinity; 
    let minRow = 0; 
    let minCol = 0; 
    for(let row = lengthSqrtFloor; row <= lengthSqrtCeil; row++){
        for(let col = row; col <= lengthSqrtCeil; col++){
            let area = row * col; 
            if((area >= stringLength) && (area < minArea)){
                minArea = area; 
                minRow = row; 
                minCol = col; 
            }
        }
    }
    
    let encryptionMatrix = Array.from({ length: minRow }, () => new Array(minCol).fill(0));
    let index = 0; 
    for(let row=0; row < minRow; row++){
        for(let col=0; col < minCol; col++){
            encryptionMatrix[row][col]= index < stringLength ? s[index] : "";
            index++;
        }
    }
    
    let encryptedText = ""; 
    for(let col=0; col < minCol; col++){
        for(let row=0; row < minRow; row++){
            encryptedText += encryptionMatrix[row][col]; 
        }
        if(col != minCol){
            encryptedText += " ";
        }
    }
    
    return encryptedText; 
}
