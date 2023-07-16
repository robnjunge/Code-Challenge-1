// Write that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade: 

// A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.



function studentMarks() { //Declaring studentMarks as a function
    let marks = prompt('Type here'); //using prompt input to prompt the user to input the marks
        if (marks > 79 && marks <= 100) { // using if statements to define the ranges and print grades
            return 'Grade A';
        } else if (marks >= 60 && marks <= 79) { //if the first if statement is not true it executes the second one until it finds the range in which the marks are in
            return 'Grade B';
        } else if (marks > 49 && marks <= 59) {
            return 'Grade C';
        } else if (marks >=40 && marks <= 49) {
            return 'Grade D';
        } else if (marks >= 0 && marks < 40) {
            return 'Grade E';
        } else { //this takes into account anything that is not in our range and prints invalid
            return 'Invalid';
        }
    }

studentMarks();