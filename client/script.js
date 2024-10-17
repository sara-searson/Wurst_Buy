//search button functionality

const searchButton = document.getElementById("goButton");
const about = document.getElementsByClassName("about");
const topLeftContainer = document.querySelector(".topLeftContainer")
const topRightContainer = document.querySelector(".topRightContainer")
const bottomLeftContainer = document.querySelector(".bottomLeftContainer")
const bottomRightContainer = document.querySelector(".bottomRightContainer")
const logos = document.querySelectorAll('.logos')

function goButton() {
  console.log("button clicked");
}

searchButton.addEventListener("click", goButton);

//search bar functionality

const searchBar = document.querySelector(".searchbar");
const resultsList = document.getElementById("resultsList");

searchBar.addEventListener("input", () => {
  const searchTerm = searchBar.value.toLowerCase();

  const filteredItems = Array.from(resultsList.children).filter((item) => {
    const itemText = item.textContent.toLowerCase();
    return itemText.includes(searchTerm);
  });
  resultsList.innerHTML = "";
  filteredItems.forEach((item) => resultsList.appendChild(item));
});

//populating the webpages


const imageGrid = document.querySelector("imageGrid");
const BASE_URL = "localhost:3001";

const getImage = async (brand, position) => {
  let response = await axios.get(`http://localhost:3001/brands/name/${brand}`);
  console.log(response)
  let image = response.data.logo_url;
  console.log(image)
  console.log(position)
  position.setAttribute ("src", image);
  console.log(response.data.brand_name)
  position.setAttribute('id', response.data.brand_name)
};


const populatePage = () => {
  getImage('Dell', topLeftContainer);
  getImage('Apple', topRightContainer);
  getImage('HP', bottomLeftContainer);
  getImage('Lenovo', bottomRightContainer);
};

populatePage ()

logos.forEach((logo) => {
  logo.addEventListener('click', () => {
    console.log('clicked')
      const brand = logo.getAttribute('id')
      console.log(brand)
      window.location.href = `/productpage.html#brand=${encodeURIComponent(brand)}`//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
  })
})


//Filter fucntionality--Got this through ChatGPT-MD
// document.addEventListener("DOMContentLoaded", () => {
//   //Not sure what DOMContentLoaded does, though if I had to guess I would imagine it's just the eventlistener when the page loads?-MD
//   const filterButton = document.getElementById("filterButton");
//   const applyFiltersButton = document.getElementById("applyFilters");

//   // Toggle the visibility of the filter options
//   filterButton.addEventListener("click", () => {
//     const filterContainer = document.getElementById("filterOptions");
//     filterContainer.style.display =
//       filterContainer.style.display === "block" ? "none" : "block";
//   });

// Apply the filters
//   applyFiltersButton.addEventListener("click", () => {
//     // Collect selected filters
//     const selectedBrands = Array.from(
//       //This data will work if I input it manually, but would love to try to figure out if there's away to do it in fewer lines of code that pulls from the database.-MD
//       document.querySelectorAll(".brand:checked")
//     ).map((el) => el.value); //NOT SURE WHAT "EL" DOES AND DOESN'T SEEM TO BE DEFINED-MD
//     const selectedPrice = document.querySelector(
//       'input[name="price"]:checked'
//     )?.value;
//     const selectedStorage = document.querySelector(
//       'input[name="storage"]:checked'
//     )?.value;
//     const selectedRam = document.querySelector(
//       'input[name="ram"]:checked'
//     )?.value;
//     const selectedColors = Array.from(
//       document.querySelectorAll(".color:checked")
//     ).map((el) => el.value);
//     const selectedPreowned = document.querySelector(".preowned:checked")?.value;
//     const selectedIsLaptop =
//       document.querySelector(".is_laptop:checked")?.value;

//     // Build filter object-ALSO WONDERIN IF IT WOULD MAKE SENSE TO INCORPORATE THE DB HERE-MD
//     const filters = {
//       brand: selectedBrands,
//       price: selectedPrice,
//       storage: selectedStorage,
//       ram: selectedRam,
//       color: selectedColors,
//       preowned: selectedPreowned,
//       is_laptop: selectedIsLaptop,
//     };

//     // Use this filter object to call your API or filter the list
//     console.log("Filters applied:", filters);
//   });
// });
