// loops.js
myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
      {
        place: "Rexburg, ID",
        length: "5 years",
      },
      {
        place: "Ammon, ID",
        length: "3 years",
      },
      {
        place: "Sandy, UT",
        length: "1 year",
      },
    ],
  };
  
  //  -- Option 1 -- Use .forEach to create and append <li> elements
  //const favoriteFoodsList = document.querySelector("#favorite-foods");

  //myInfo.favoriteFoods.forEach((food) => {
 //   const listItem = document.createElement("li");
 //   listItem.textContent = food;
 //   favoriteFoodsList.appendChild(listItem);
//  });
// -------Option 2------------------
  //  Use .map to create and append <li> elements
 // const favoriteFoodsList = document.querySelector("#favorite-foods");

 // myInfo.favoriteFoods
 //   .map((food) => {
 //     const listItem = document.createElement("li");
 //     listItem.textContent = food;
 //     return listItem; // Map returns a new array of <li> elements
 //   })
 //   .forEach((listItem) => favoriteFoodsList.appendChild(listItem));

    //-------Option 3--------------

//const foodsElement = document.querySelector("#favorite-foods");
//const foodListElements = myInfo.favoriteFoods.map((food) => `<li>${food}</li>`);
/// we need to flatten the array of strings into one big string. .join does this.
///foodsElement.innerHTML = foodListElements.join("");

//---------ACTIVITY 3-------------


const createFavoriteFoods = createFromList(myInfo.favoriteFoods, createFood);
const createPlacesLived = createFromList(myInfo.placesLived, createPlace);
// requires a list, and a callback that will produce an html string for each item in the list
// returns a string of html
function createFromList(list, templateFunction) { 
      return list.map(templateFunction).join(""); // Join all generated HTML strings into one
  }

function createFood(food) {return `<li>${food}</li>`;}
 
function createPlace(place) {return `<dt>${place.place}</dt><dd>${place.length}</dd>`;}

document.querySelector("#favorite-foods").innerHTML = createFavoriteFoods; //#favorite-foods is being called from html
document.querySelector("#places-lived").innerHTML = createPlacesLived;