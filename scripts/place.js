document.getElementById("currentYear").innerHTML = new Date().getFullYear();
document.getElementById('lastModified').textContent = "Last Modification: " + document.lastModified;


//static values for temp and wind spped
const temperature = 71;
const windSpeed = 5;

//calculates the wind chill factor
function calculateWindChill(temp, speed) {
    return (35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) +
        0.4275 * temp * Math.pow(speed, 0.16)
    ).toFixed(2);
}

// function to see if calculationg wind chill is applicable//
function displayWindChill(temp, speed) {
    const windChillElement = document.getElementById("windchill");
    if (temp <= 50 && speed > 3) {
        const windChill = calculateWindChill(temp, speed);
        windChillElement.textContent = `${windChill}°F`;
    } else {
        windChillElement.textContent = "N/A"
    }
}

//call the function//
document.addEventListener("DOMContentLoaded", () => {
    displayWindChill(temperature, windSpeed);
})