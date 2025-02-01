//  arrays.js
const steps = ["one", "two", "three"];
const listTemplate(step) {
    return `<li>${step}</li>`;                     //the html string made from step
}
const stepsHtml = steps.map(listTemplate)                                 // use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join();                  // set the innerHTML

//activity 2
const grades = ["A", "B", "A"];

function convertGradesToPoints(grade) {
    let points = 0;
    if (grade === "A") {
        points = 4;

    } else if (grade === "B") {
        points = 3;
    }
    return points;
}


// activity 3 reduce
const gpaPoints = grades.map(convertGradesToPoints);

const gpaPoints = grades.map(convertGradesToPoints);
const pointsTotal = gpaPoints.reduce(function (total, itme) {
    return total + item;
});
const gpa = pointsTotal / gpaPoints.length;


// this is the same thing as above, but with an arrow function
const pointsTotal = gpaPoints.reduce((total, item) => total + item);
const gpa = pointsTotal / gpaPoints.length;

// this is the same thing as above, further simplified
const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length



//activity 4 - filter

const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const shortFruits = fruits.filter(function (fruit) {
    return fruit.length < 6;
});

// alternate code
const shortFruits = fruits.filter((fruit) => fruit.length < 6);

//activity 5 - indexOf

const numbers = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = numbers.indexOf(luckyNumber);