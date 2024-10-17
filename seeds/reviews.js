const db = require('../db')
const { Review } = require('../models')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const main = async () => {
    const reviews = [
        {
            "name": "Mike S.",
            "sausage": "Chorizo",
            "rating": 4,
            "review": "Chorizo was exact level of spice I was looking for. Got one in store, bought a pack to bring home. When cooking at home, the skin split easier than I would like. Otherwise great experience."
          }
    ];

await Review.insertMany(reviews)
console.log('Created review')
}

const run = async () => {
await main()
db.close()
}

run()