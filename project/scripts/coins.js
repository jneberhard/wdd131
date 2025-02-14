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



// hamburger menu on click
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});


// last modified date

document.getElementById("currentYear").innerHTML = new Date().getFullYear();
document.getElementById('lastModified').textContent = "Last Modification: " + document.lastModified;


/// GET SILVER AND GOLD PRICE


document.addEventListener("DOMContentLoaded", function () {
    const apiKey = "YOUR_API_KEY"; // Replace with your Metals-API key
    const apiUrl = `https://metals-api.com/api/latest?access_key=${apiKey}&base=USD&symbols=XAU,XAG`;

    async function fetchPrices() {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            if (data.success) {
                const goldPrice = (1 / data.rates.XAU).toFixed(2);
                const silverPrice = (1 / data.rates.XAG).toFixed(2);

                document.getElementById("gold-price").textContent = `$${goldPrice}`;
                document.getElementById("silver-price").textContent = `$${silverPrice}`;
            } else {
                throw new Error("Failed to fetch data");
            }
        } catch (error) {
            console.error("Error fetching metal prices:", error);
            document.getElementById("gold-price").textContent = "Error loading";
            document.getElementById("silver-price").textContent = "Error loading";
        }
    }

    fetchPrices();
    setInterval(fetchPrices, 60000); // Update every 60 seconds
});

const coins = [
    {
        coinName: "Half Cent", years: "1793-1857", composition: "Copper", imageUrl: "images/half-cent.jpg"
    },
    {
        coinName: "Large Cent (Penny)", years: "1793-1857", composition: "Copper", imageUrl: "images/large-cent-obv.jpg"
    },
    {
        coinName: "Small Cent (Penny)", years: "1856-Present", composition: "Depending on year - copper/nickel, bronze, zinc-coated steel, copper/zinc ", imageUrl: "images/small-cent.jpg", imageURLReverse: "images/1851-half-cent-rev"
    },
    {
        coinName: "Two Cent", years: "1864-1873", composition: "Copper and Zinc", imageUrl: "images/two-cent-obv.jpg"
    },
    {
        coinName: "Three Cent", years: "1851-1889", composition: "Silver and Copper", imageUrl: "images/three-cent.jpg"
    },
    {
        coinName: "Five Cent (Half Dime, Nickel)", years: "1794-Present", composition: "Depending on year - Nickel and Copper, sometimes Silver", imageUrl: "images/nickel.jpg"
    },
    {
        coinName: "Ten Cent (Dime)", years: "1796-Present", composition: "Depending on year - Silver and/or Copper Clad", imageUrl: "images/dime.jpg"
    },
    {
        coinName: "Twenty Cent", years: "1875-1878", composition: "Silver and Copper Clad", imageUrl: "images/20-cent-obv.jpg"
    },
    {
        coinName: "Twenty-Five Cen (Quarter)", years: "1796-Present", composition: "Depending on year - Silver and/or Copper Clad", imageUrl: "images/quarter.jpg"
    },
    {
        coinName: "Fifty Cent (Half Dollar)", years: "1794-Present", composition: "Depending on year - Silver and/or Copper Clad", imageUrl: "images/half.jpg"
    },
    {
        coinName: "Dollar", years: "1794-Present", composition: "Depending on year - Silver and/or Copper Clad", imageUrl: "images/sba.jpg"
    },
    {
        coinName: "Quarter Eagle ($2.50)", years: "1796-1929", composition: "Gold", imageUrl: "images/quarter-eagle.jpg"
    },
    {
        coinName: "$3", years: "1854-1889", composition: "Gold", imageUrl: "images/three-dollar.jpg"
    },
    {
        coinName: "Half Eagle ($5.00)", years: "1795-1929", composition: "Gold", imageUrl: "images/half-eagle.jpg"
    },
    {
        coinName: "Eagle ($10)", years: "1795-1933", composition: "Gold", imageUrl: "images/eagle-obv.jpg"
    },
    {
        coinName: "Double Eagle ($20)", years: "1850-1933", composition: "Gold", imageUrl: "images/double-eagle.jpg"
    },
];


const container = document.getElementById("indv-coin");


coins.forEach(coin => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
            <h3>${coin.coinName}</h3>
            <p><strong>Type:</strong> ${coin.coinName}</p>
            <p><strong>Mint Years:</strong> ${coin.years}</p>
            <p><strong>Composition Metal:</strong> ${coin.composition}</p>
            <img src="${coin.imageUrl}" alt="${coin.coinName}" loading="lazy" class="coin-image">
        `;
    container.appendChild(card);
});





// for the search the year
let coins1 = {};  // Store the coins data in an object, using coinNumber as key

// Fetch CSV file from the images folder and parse it
fetch('images/coin-year.csv')  // Adjusted path to the images folder
    .then(response => response.text())  // Get the CSV text
    .then(data => {
        coins1 = csvToObject(data);  // Convert CSV data into object
    })
    .catch(error => console.error('Error fetching the CSV file:', error));

// Convert CSV to an object, using coinNumber as key
function csvToObject(csv) {
    const rows = csv.split('\n');
    const headers = rows[0].split(',');
    const result = {};

    for (let i = 1; i < rows.length; i++) {
        const currentRow = rows[i].split(',');
        const coin = {};

        for (let j = 0; j < headers.length; j++) {
            coin[headers[j]] = currentRow[j];
        }

        result[coin['coinNumber']] = coin;  // Use coinNumber as the key
    }

    return result;
}

// Function to find coins that match the year
function findCoins() {
    const yearInput = document.getElementById('yearInput').value;
    if (!yearInput) {
        alert("Please enter a year.");
        return;
    }

    const filteredCoins = Object.values(coins1).filter(coin => {
        const beginningYear = parseInt(coin['beginningYear']);
        let endingYear = coin['endingYear'] === 'Present' ? new Date().getFullYear() : parseInt(coin['endingYear']);
        return yearInput >= beginningYear && yearInput <= endingYear;
    });

    displayCoins(filteredCoins);
}

// Display filtered coins
function displayCoins(filteredCoins) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';  // Clear previous output

    if (filteredCoins.length === 0) {
        outputDiv.innerHTML = `<h2>No coins found for that year.</h2>`;
        return;
    }

    filteredCoins.forEach(coin => {
        const coinCard = document.createElement('div');
        coinCard.className = 'coin-card';
        coinCard.innerHTML = `
                    <h3>${coin['coinType']} <br> ${coin['coinName']}</h3>
                    <img src="${coin['imageURL']}" alt="${coin['coinName']}" style="width: 150px;" loading="lazy">
                    <p><strong>Beginning Year:</strong> ${coin['beginningYear']}</p>
                    <p><strong>Ending Year:</strong> ${coin['endingYear']}</p>
                `;
        outputDiv.appendChild(coinCard);
    });
}
