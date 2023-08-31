function dayOfProgrammer(year) {
    // Check is leap year
    if((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0) || (year % 4 == 0 && year < 1918)){
        return `12.09.${year}`; 
    } else if ( year == 1918){
        return `26.09.${year}`;
    } else {
        return `13.09.${year}`; 
    }
}
