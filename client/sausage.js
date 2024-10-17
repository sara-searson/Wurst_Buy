const sausageSection = document.querySelector("#sausage-container")

let sausages = [] //pull the data in as an array so we can iterate below
const getAllSausages = async () =>{
    let response = await axios.get(`http://localhost:3001/sausages`)
sausages = response.data //defines sausages as response.data
console.log(sausages)
}



function createCards(sausages) {
    sausages.forEach(sausage => {
       let div = sausageSection.appendChild(document.createElement("div"))
            div.classList.add("sausageContainer")
       //each time it iterates through arrray it will append a div to the sausage element
        let image = div.appendChild(document.createElement("img"))//creates image elements in HMTL
       
        let text = div.appendChild(document.createElement("p"))//creates paragraph elements in HTML
           
            image.src = sausage.image
            text.textContent = sausage.sausage_name //since we defined sausages=response.data above, all we need is sausage
           
            image.classList.add("sausage")
            text.classList.add("sausageText")
       
        let price_single = div.appendChild(document.createElement("p"))
            
            price_single.innerHTML = "Single: $" && sausage.price_single
            price_single.classList.add("sausageText")
        
        let price_package = div.appendChild(document.createElement("p"))    
            price_package.textContent= "Six Pack: $" && sausage.price_sixpack
            price_package.classList.add("sausageText")
        
        let description = div.appendChild(document.createElement("p"))
            description.textContent = sausage.description
            description.classList.add("sausageText")

        let spicy = div.appendChild(document.createElement("p"))
            if (sausage.spicy === true){
                spicy.textContent = "spicy"
            }
            spicy.classList.add("sausageText")
            spicy.id = "spicy" //adds the spicy ID
       
         let vegan = div.appendChild(document.createElement("p"))
             if(sausage.vegan === true){
                 vegan.textContent = "vegan"
           }
           vegan.classList.add("sausageText")
           vegan.id = "vegan" //adds the spicy ID
        })

  }  

 async function main(){
   await getAllSausages()
    createCards(sausages)
  }
  main()
