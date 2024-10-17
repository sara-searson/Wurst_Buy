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

const computerSection = document.querySelector("#computer-container")

let computers = [] //pull the data in as an array so we can iterate below
const getAllComputers = async () =>{
    let response = await axios.get(`http://localhost:3001/products`)
computers = response.data //defines sausages as response.data
console.log(computers)
}



function createCards(computers) {
    computers.forEach(computer => {
       let div = computerSection.appendChild(document.createElement("div"))
            div.classList.add("computerContainer")
       //each time it iterates through arrray it will append a div to the sausage element
        let image = div.appendChild(document.createElement("img"))//creates image elements in HMTL
       
        let text = div.appendChild(document.createElement("p"))//creates paragraph elements in HTML
           
            image.src = computer.product_image
            text.textContent = computer.product_name //since we defined sausages=response.data above, all we need is sausage
           
            image.classList.add("computers")
            text.classList.add("computerText")
       

            let model = div.appendChild(document.createElement("p"))
            model.textContent = computer.product_model
            model.classList.add("computerText")

        let price = div.appendChild(document.createElement("p"))
            
            price.textContent = computer.price
            price.classList.add("computerText")
        
        
        
      

        let preowned = div.appendChild(document.createElement("p"))
            if (computer.preowned === true){
                preowned.textContent = "pre-owned"
            }
            preowned.classList.add("computerText")
            preowned.id = "preowned" //adds the spicy ID
       
         let color = div.appendChild(document.createElement("p"))
            color.textContent = computer.color
            color.classList.add("computerText")
        })

  }  

 async function main(){
   await getAllComputers()
    createCards(computers)
  }
  main()
