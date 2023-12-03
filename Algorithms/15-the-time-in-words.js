function timeInWords(h, m) {
    const NUMBER_TO_STRING = [
    "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
    "eleven", "twelve", "thirteen", "fourteen", "quarter", "sixteen", "seventeen", "eighteen", "nineteen", "twenty",
    "twenty one", "twenty two", "twenty three", "twenty four", "twenty five", "twenty six", "twenty seven", "twenty eight", "twenty nine", "half"] 
    
    if(m == 0){
        return `${NUMBER_TO_STRING[h]} o' clock`; 
    } else if (m == 15 || m == 30){
        return `${NUMBER_TO_STRING[m]} past ${NUMBER_TO_STRING[h]}`;
    } else if (m == 1){
        return `${NUMBER_TO_STRING[m]} minute past ${NUMBER_TO_STRING[h]}`; 
    } else if (m<30){
        return `${NUMBER_TO_STRING[m]} minutes past ${NUMBER_TO_STRING[h]}`; 
    } else if ((60-m) == 15) {
        return `${NUMBER_TO_STRING[60 - m]} to ${NUMBER_TO_STRING[h+1]}`;
    }else{
        return `${NUMBER_TO_STRING[60 - m]} minutes to ${NUMBER_TO_STRING[h+1]}`;
    }
}
