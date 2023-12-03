function designerPdfViewer(h, word) {
    let maxHeigh = Number.NEGATIVE_INFINITY;
    let wordLength = word.length;
    for(let index=0; index<wordLength; index++){
        let currentCharHeigh = h[word.charCodeAt(index)-97];
        if(currentCharHeigh > maxHeigh){
            maxHeigh = currentCharHeigh; 
        }
    }
    let area = maxHeigh * wordLength; 
    return area; 
}
