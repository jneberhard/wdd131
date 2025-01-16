const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

/// For Loop
for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}

/// While Loop
let i = 0;
while (i < studentReport.length) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
    i++;
}

// forEach Loop
studentReport.forEach(value => {
    if (value < LIMIT) {
        console.log(value);
    }
});

//  for...in Loop
for (let index in studentReport) {
    if (studentReport[index] < LIMIT) {
        console.log(studentReport[index]);
    }
}

/// Dynamically Produce Day Names
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let today = new Date();
for (let i = 0; i < DAYS; i++) {
    let day = new Date(today);
    day.setDate(today.getDate() + i);
    console.log(dayNames[day.getDay()]);
}