function matchingStrings(stringList, queries) {
    let result = []; 
    queries.forEach(query => {
        let counter = 0; 
        stringList.forEach(string => {
            if (query == string){
                counter += 1
            }
        }); 
        result.push(counter); 
    }); 
    return result;
}
