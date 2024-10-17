const searchButton = document.getElementById("goButton")
const about = document.getElementsByClassName("about")


function goButton(){
    console.log("button clicked");
}    

searchButton.addEventListener("click", goButton)

const product1 = document.querySelector('#product1')
const productContainer1 = document.querySelector('#productContainer1')
const product2 = document.querySelector('#product2')
const productContainer2 = document.querySelector('#productContainer2')
const product3 = document.querySelector('#product3')
const productContainer3 = document.querySelector('#productContainer3')
const product4 = document.querySelector('#product4')
const productContainer4 = document.querySelector('#productContainer4')


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

const getInfo = async (num, position, imgPosition) => {
    let response = await axios.get(`http://localhost:3001/products/brand/apple`);
    console.log(response)
    let computer = response.data[num]
    let image = computer.product_image;
    console.log(image)
    console.log(imgPosition)
    imgPosition.setAttribute ("src", image);

    if (computer.is_laptop === true) {
        let desc = position.appendChild(document.createElement("p"))  
        desc.textContent = `Laptop`
        desc.classList.add("computerText")
    } else {
        let desc = position.appendChild(document.createElement("p"))  
        desc.textContent = `Desktop`
        desc.classList.add("computerText")
    }

    let storage = position.appendChild(document.createElement("p"))  
    storage.textContent = `Storage: ${computer.storage_GB}GB`
    storage.classList.add("computerText")

    let ram = position.appendChild(document.createElement("p"))  
    ram.textContent = `RAM: ${computer.ram_GB}GB`
    ram.classList.add("computerText")

    let cpu = position.appendChild(document.createElement("p"))  
    cpu.textContent = `CPU: ${computer.cpu}`
    cpu.classList.add("computerText")

    let gpu = position.appendChild(document.createElement("p"))  
    gpu.textContent = `Graphics: ${computer.gpu}`
    gpu.classList.add("computerText")
  };
  
  
  const populatePage = () => {
    getInfo('0', productContainer1, product1);
    getInfo('1', productContainer2, product2);
    getInfo('2', productContainer3, product3);
    getInfo('3', productContainer4, product4);
  };
  
  populatePage ()