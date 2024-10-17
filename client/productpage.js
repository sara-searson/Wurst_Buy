const searchButton = document.getElementById("goButton")
const about = document.getElementsByClassName("about")
const hash = window.location.hash.substring(1); // Remove the '#' character
const params = new URLSearchParams(hash);
let brand = params.get('brand');
console.log(brand)

function goButton(){
    console.log("button clicked");
}    

searchButton.addEventListener("click", goButton)

const firstContainer = document.querySelector('.firstContainer')
const secondContainer = document.querySelector('.secondContainer')
const thirdContainer = document.querySelector('.thirdContainer')
const fourthContainer = document.querySelector('.fourthContainer')
const logos = document.querySelectorAll('.logos')

const product1 = document.querySelector('#product1')
const productContainer1 = document.querySelector('#prod1Text')
const product2 = document.querySelector('#product2')
const productContainer2 = document.querySelector('#prod2Text')
const product3 = document.querySelector('#product3')
const productContainer3 = document.querySelector('#prod3Text')
const product4 = document.querySelector('#product4')
const productContainer4 = document.querySelector('#prod4Text')


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


const populateBrands = () => {
    getImage('Dell', firstContainer);
    getImage('Apple', secondContainer);
    getImage('HP', thirdContainer);
    getImage('Lenovo', fourthContainer);
};

populateBrands ()

// const resetInfo = (position) => {
//     while (position.firstChild) {
//         position.removeChild(position.firstChild)
//     }
// }

const getInfo = async (brand, num, position, imgPosition) => {
    // resetInfo(position)
    let response = await axios.get(`http://localhost:3001/products/brand/${brand}`);
    console.log(response)
    let computer = response.data[num]
    let image = computer.product_image;
    console.log(image)
    console.log(imgPosition)
    imgPosition.setAttribute ("src", image);

    let desc = position.children[0]  
    computer.is_laptop === true ? desc.textContent = 'Laptop' : desc.textContent = 'Desktop'

    let storage = position.children[1]
    storage.textContent = `Storage: ${computer.storage_GB}`

    let ram = position.children[2]
    ram.textContent = `RAM: ${computer.ram_GB}GB`

    let cpu = position.children[3]
    cpu.textContent = `CPU: ${computer.cpu}`

    let gpu = position.children[4]
    gpu.textContent = `Graphics: ${computer.gpu}`

    let price = position.children[5]
    price.textContent = `$${computer.price}`
  };
  
  
  const populatePage = (brand) => {
    getInfo(brand, '0', productContainer1, product1);
    getInfo(brand, '1', productContainer2, product2);
    getInfo(brand, '2', productContainer3, product3);
    getInfo(brand, '3', productContainer4, product4);
  };
  
  populatePage (brand)

  logos.forEach((func) => {
    func.addEventListener('click', () => {
      console.log('clicked')
        const brandName = func.getAttribute('id').toLocaleLowerCase()
        window.location.href = `/client/productpage.html#brand=${encodeURIComponent(brandName)}`//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
        populatePage(brandName)
    })
  })