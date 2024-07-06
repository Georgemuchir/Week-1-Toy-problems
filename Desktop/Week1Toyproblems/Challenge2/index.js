function checkSpeed() {
    let speed = prompt("Enter the speed of the car (km/h):");
    speed = parseFloat(speed);

    if (isNaN(speed) || speed < 0) {
        alert("Please enter a valid speed.");
        return;
    }

    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerPoint);
        if (demeritPoints > 12) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${demeritPoints}`);
        }
    }
}


checkSpeed();

