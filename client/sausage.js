// const sausage1 = document.querySelector("#sausage1")
// const sausage2 = document.querySelector("#sausage2")
// const sausage3 = document.querySelector("#sausage3")
// const sausage4 = document.querySelector("#sausage4")
// const sausage5 = document.querySelector("#sausage5")
// const sausage6 = document.querySelector("#sausage6")
// const sausage7 = document.querySelector("#sausage7")
// const sausage8 = document.querySelector("#sausage8")
// const sausage9 = document.querySelector("#sausage9")

// const text1 = document.querySelector("#textSausage1")
// const text2 = document.querySelector("#textSausage2")
// const text3 = document.querySelector("#textSausage3")
// const text4 = document.querySelector("#textSausage4")
// const text5 = document.querySelector("#textSausage5")
// const text6 = document.querySelector("#textSausage6")
// const text7 = document.querySelector("#textSausage7")
// const text8 = document.querySelector("#textSausage8")
// const text9 = document.querySelector("#textSausage9")

// const getImage = async (sausage_name, position) => {
//     let response = await axios.get(
//         `http://localhost:3001/sausages/name/${sausage_name}`
//     )
//     let image = response.data.image
//     position.setAttribute('src', image)
// console.log(image)
// console.log()
// }



// const populatePage = () => {
//     getImage('Bratwurst', sausage1)
//     getImage('Chorizo', sausage2)
//     getImage('Tofurky Italian Sausage', sausage3)
//     getImage('Andouille', sausage4)
//     getImage('Weisswurst', sausage5)
//     getImage('Field Roast Apple Sage Sausage', sausage6)
//     getImage('Bockwurst', sausage7)
//     getImage('Currywurst', sausage8)
//     getImage('Spicy Vegan Chipotle Sausage', sausage9)
// }
// populatePage()




// const getInfo = async (sausage_name, position) => {
//     let response = await axios.get(
//         `http://localhost:3001/sausages/name/${sausage_name}`)
//         console.log(text1)
//         let text1 = response.data.sausage_name
//          textSausage1.textContent = (text1)
// }
// getInfo()

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
