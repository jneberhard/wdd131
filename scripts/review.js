
//  THIS SECTION FOR NUMBER OF VISITS

const visitsDisplay = document.querySelector(".visits");    //   Initialize display element variable


let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;   //  Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. 
//      If the numVisits KEY is missing, then assign 0 to the numVisits variable.

console.log(`Current visit count from localStorage: ${numVisits}`);

// Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}


numVisits++;   // increment the number of visits by one.


localStorage.setItem("numVisits-ls", numVisits);    // store the new visit total into localStorage, key=numVisits-ls

console.log(`Updated visit count: ${numVisits}`);
