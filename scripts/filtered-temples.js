document.getElementById("currentYear").innerHTML = new Date().getFullYear();
document.getElementById('lastModified').textContent = "Last Modification: " + document.lastModified;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


const temples = [{
	templeName: "Aba Nigeria",
	location: "Aba, Nigeria",
	dedicated: "2005, August, 7",
	area: 11500,
	imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
},
{
	templeName: "Manti Utah",
	location: "Manti, Utah, United States",
	dedicated: "1888, May, 21",
	area: 74792,
	imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
},
{
	templeName: "Payson Utah",
	location: "Payson, Utah, United States",
	dedicated: "2015, June, 7",
	area: 96630,
	imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
},
{
	templeName: "Yigo Guam",
	location: "Yigo, Guam",
	dedicated: "2020, May, 2",
	area: 6861,
	imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
},
{
	templeName: "Washington D.C.",
	location: "Kensington, Maryland, United States",
	dedicated: "1974, November, 19",
	area: 156558,
	imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
},
{
	templeName: "Lima Perú",
	location: "Lima, Perú",
	dedicated: "1986, January, 10",
	area: 9600,
	imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
},
{
	templeName: "Mexico City Mexico",
	location: "Mexico City, Mexico",
	dedicated: "1983, December, 2",
	area: 116642,
	imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
},
{
	templeName: "Redlands California",
	location: "Redlands, California, United States",
	dedicated: "2003, September, 14",
	area: 17300,
	imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/redlands-california/400x250/redlands-temple-lds-929893-wallpaper.jpg"
},
{
	templeName: "Monticallo Utah",
	location: "Monticello, Utah, United States",
	dedicated: "1998, July, 26",
	area: 11225,
	imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/monticello-utah/400x250/monticello-temple-lds-1157281-wallpaper.jpg"
},
{
	templeName: "Baton Rouge Louisiana",
	location: "Baton Rouge, Louisiana, United States",
	dedicated: "2000, July, 16",
	area: 10890,
	imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/baton-rouge-louisiana/400x250/3-a75beca22300a3263bd47fba03b5b0d1b5ca0753.jpeg"
},

];

function displayTemples(filteredTemples) {
	const container = document.getElementById("indv_temple");
	container.innerHTML = ""; // Clear the existing temples

	filteredTemples.forEach(temple => {
		const card = document.createElement("div");
		card.className = "card";
		card.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Date:</strong> ${temple.dedicated}</p>
            <p><strong>Size:</strong> ${temple.area} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" class="temple-image">
        `;
		container.appendChild(card);
	});
}

displayTemples(temples);



function getTempleYear(temple) {
	return parseInt(temple.dedicated.split(",")[0].trim());
}


document.getElementById("old").addEventListener("click", () => {
	const oldTemples = temples.filter(temple => getTempleYear(temple) < 1900);
	displayTemples(oldTemples);
});


document.getElementById("new").addEventListener("click", () => {
	const newTemples = temples.filter(temple => getTempleYear(temple) >= 2000);
	displayTemples(newTemples);
});


document.getElementById("small").addEventListener("click", () => {
	const smallTemples = temples.filter(temple => temple.area < 10000);
	displayTemples(smallTemples);
});



document.getElementById("large").addEventListener("click", () => {
	const bigTemples = temples.filter(temple => temple.area > 90000);
	displayTemples(bigTemples);
});




