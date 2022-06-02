//leap year claculator program
//created function

function leapYear(year) {
    
    //checking conditions

    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return "Leap year."
            }else {
                return "Not Leap year."
            }
        } else {
            return "Leap year."
        }
    } else {
        return "Not Leap year."
    }
}


var answer = leapYear(2000);
console.log(answer);