// number of seconds that have passed
let time = 0;
// reference to the <span> containing the number
function timecounter() {
let counterElement = document.getElementById("time");
// Example function to be executed

    counterElement.innerHTML = time++;
}

// Using setInterval to call sayHello every 2 seconds (2000 milliseconds)
setInterval(timecounter, 1000);

