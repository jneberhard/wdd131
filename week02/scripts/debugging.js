const PI = 3.14;
let area = 0;
function circleArea(radius) {
    const area = radius * radius * PI; // formula for getting area --- make it const for each funching
    return area;
}
// radius = 3
area = circleArea(3);
console.log("Area1:", area);
//radius = 4
area = circleArea(4);
console.log("Area2:", area);