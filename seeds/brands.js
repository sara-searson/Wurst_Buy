const db = require('../db')
const { Brand } = require('../models')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const main = async () => {
    const brands = [
        {
          brand_name: 'Apple',
          os: 'macOS',
          year_founded: 1976,
          location: 'Cupertino, California, USA',
          logo_url: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg'
        },
        {
          brand_name: 'Dell',
          os: 'Windows',
          year_founded: 1984,
          location: 'Round Rock, Texas, USA',
          logo_url: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg'
        },
        {
          brand_name: 'Lenovo',
          os: 'Windows',
          year_founded: 1984,
          location: 'Beijing, China',
          logo_url: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Lenovo_logo_2015.svg'
        },
        {
            brand_name: 'HP', //Hewlett-Packard, but went with more common name
            os: 'Windows', 
            year_founded: 1939,
            location: 'Palo Alto, California, USA',
            logo_url: 'https://upload.wikimedia.org/wikipedia/commons/4/43/HP_logo_2008.svg'
        }
      ];

      await Brand.insertMany(brands)
      console.log('Created Brands')
}

const run = async () => {
    await main()
    db.close()
}

run()
