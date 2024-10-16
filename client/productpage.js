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