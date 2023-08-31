function gradingStudents(grades) {
    grades = grades.map(value => {
        let up_value = (parseInt(value / 5) + 1) * 5;
        if (value < 38){
            return value; 
        } else if (up_value - value < 3){
            return up_value; 
        }else {
            return value; 
        }
    });
    
    
    return grades;
}
