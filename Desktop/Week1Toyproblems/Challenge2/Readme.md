Prompt for Speed:

let speed = prompt("Enter the speed of the car (km/h):"); prompts the user to enter the speed car;
speed = parseFloat(speed); converts the input to a floating-point into number;
Input Validation:

if (isNaN(speed) || speed < 0) checks if the input is vald number and non-negative if not it alerts the user and exits the funtion;
Constants:

const speedLimit = 70; sets the speed to 70 km/h;
const kmPerPoint = 5; sets the distance per demerit point to 5 km/h;
Speed Check:

if (speed <= speedLimit) checks if the speed is within the limit. If yes then it prints "Ok";
else calculates the demerit points for speeds above the limit;
const demeritPoints = Math.floor((speed - speedLimit) / kmPerPoint); calculates the number of demerit points.
If demerit points exceed 12, it prints "License is suspended";
Otherwise, it console.log the total number of demerit points;
Function Call;

checkSpeed(); calls the function to execute the code;

