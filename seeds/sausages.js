const db = require('../db')
const { Sausage } = require('../models')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const main = async () => {
    const sausages = [
        {
            sausage_name: "Bratwurst",
            price_single: 8.00,
            price_sixpack: 24.00,
            spicy: false,
            is_wurst: true,
            vegan: false,
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/Beer-brats-01.jpg",
            description: "A classic German sausage made from pork and veal, seasoned with ginger, nutmeg, coriander, and caraway."
          },
          {
            sausage_name: "Chorizo",
            price_single: 6.50,
            price_sixpack: 21.00,
            spicy: true,
            is_wurst: false,
            vegan: false,
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Chorizo_%284776711673%29.jpg/1920px-Chorizo_%284776711673%29.jpg",
            description: "A spicy Spanish sausage made from coarsely chopped pork, seasoned with smoked paprika and garlic."
          },
          {
            sausage_name: "Tofurky Italian Sausage",
            price_single: 6.00,
            price_sixpack: 20.00,
            spicy: false,
            is_wurst: false,
            vegan: true,
            image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Tofurky_plant-based_sausage_1.jpg",
            description: "A vegan sausage made from tofu and wheat protein, flavored with Italian herbs and garlic."
          },
          {
            sausage_name: "Andouille",
            price_single: 9.00,
            price_sixpack: 28.00,
            spicy: true,
            is_wurst: false,
            vegan: false,
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Andouille.jpg/240px-Andouille.jpg",
            description: "A smoked sausage made from pork, seasoned with garlic, pepper, onions, and wine, popular in Cajun cuisine."
          },
          {
            sausage_name: "Weisswurst",
            price_single: 8.50,
            price_sixpack: 26.50,
            spicy: false,
            is_wurst: true,
            vegan: false,
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Stockwurst_Weisswurst.jpg/1270px-Stockwurst_Weisswurst.jpg?20151225123233",
            description: "A traditional Bavarian sausage made from minced veal and pork back bacon, flavored with parsley, lemon, and cardamom."
          },
          {
            sausage_name: "Field Roast Apple Sage Sausage",
            price_single: 10.00,
            price_sixpack: 30.00,
            spicy: false,
            is_wurst: false,
            vegan: true,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1hRMjbmfSOYo4iZ3Dt1QO5eiu-s1IEM-DzA&s",
            description: "A gourmet vegan sausage made from grains, apples, and sage, offering a rich and savory flavor."
          },
          {
            sausage_name: "Bockwurst",
            price_single: 8.50,
            price_sixpack: 26.50,
            spicy: false,
            is_wurst: true,
            vegan: false,
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Bockwurst.jpg/240px-Bockwurst.jpg",
            description: "A German sausage made from ground veal and pork, flavored with parsley, chives, and other herbs."
          },
          {
            sausage_name: "Currywurst",
            price_single: 9.50,
            price_sixpack: 29.50,
            spicy: true,
            is_wurst: true,
            vegan: false,
            image: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Currywurst_-_CurryMitte.jpg",
            description: "A popular German fast food dish consisting of steamed, then fried pork sausage, sliced and seasoned with curry ketchup."
          },
          {
            sausage_name: "Spicy Vegan Chipotle Sausage",
            price_single: 7.50,
            price_sixpack: 22.50,
            spicy: true,
            is_wurst: false,
            vegan: true,
            image: "https://commons.wikimedia.org/wiki/Category:Vegan_sausages#/media/File:Beyond_Sausage_2.jpg",
            description: "A plant-based sausage made with chipotle peppers, black beans, and a blend of spices."
          }
    ];

    console.log('Cooking Sausages')
    await Sausage.insertMany(sausages)
    console.log('Order up!')
}

const run = async () => {
  await main()
  db.close()
}

run()
