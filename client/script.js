//search button functionality

const searchButton = document.getElementById("goButton")
const about = document.getElementsByClassName("about")


function goButton(){
    console.log("button clicked");
}    

searchButton.addEventListener("click", goButton)


//search bar functionality

const searchBar = document.querySelector(".searchbar")
const resultsList = document.getElementById("resultsList")

searchBar.addEventListener('input', () => {
const searchTerm = searchBar.value.toLowerCase()

const filteredItems = Array.from(resultsList.children).filter(item => {
    const itemText = item.textContent.toLowerCase()
    return itemText.includes(searchTerm)
   })
resultsList.innerHTML = ''
filteredItems.forEach(item => resultsList.appendChild(item))
})

//populating the webpages

const imageGrid = document.querySelector('imageGrid')
const BASE_URL = 'localhost:3001'

const getImage = async (brand, position) => {
    let response = await axios.get(`http://localhost:3001/brands/name${brand}`)
    let image = brand.data.logo_url
    position.setAttribute('src', image)
}

const populatePage = () => {
    getImage(dell, topLeftContainer)
    getImage(apple, topRightContainer)
    getImage(hp, bottomLeftContainer)
    getImage(lenovo, bottomRightContainer)
}


