// Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

// For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.





function inputSpeed() {// declaring a function inputSpeed
    let speed = prompt('Type here');//prompts the user to input the speed
    let difference = (speed -70) / 5;//defining variable difference
    if (speed <= 70 ) {
        return 'OK';//when speed is less than 70 it should print 'OK'
    } 
    if (difference > 12) {
        return 'License Suspended';
    } else {
        return 'Points:' + difference;//generates the number of demerit points 
    }
}

inputSpeed();