const db = require('../db')
const { Brand, Product } = require('../models')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const apple = await Product.find({ brand_name: 'Apple' })
    const dell = await Habitat.find({ brand_name: 'Dell' })
    const lenovo = await Habitat.find({ brand_name: 'Lenovo' })
    const hp = await Habitat.find({ brand_name: 'HP' })

    const animals = [
        //apple computers
        {
            brand: apple._id, 
            product_model: 'MRXV3LL/A',
            SKU: 6565837,
            product_name: 'MacBook Air 13-inch M3',
            year_released: 2024,
            price: 999.99,
            storage_GB: 256,
            ram_GB: 8,
            gpu: 'Apple M3 8-core GPU',
            motherboard: 'Apple M3 Chipset',
            cpu: 'Apple M3 8-core CPU',
            color: 'Midnight',
            preowned: false,
            product_image: 'https://www.bestbuy.com/site/apple-macbook-air-13-inch-laptop-m3-chip-built-for-apple-intelligence-8gb-memory-256gb-ssd-midnight/6565837.p?skuId=6565837',
            is_laptop: true
          },
          {
            brand: apple._id, 
            product_model: 'MRX33LL/A',
            SKU: 6534615,
            product_name: 'MacBook Pro 14-inch M3 Pro',
            year_released: 2023,
            price: 1299.99,
            storage_GB: 512,
            ram_GB: 1,
            gpu: 'Apple M3 Pro 14-core GPU',
            motherboard: 'Apple M3 Pro Chipset',
            cpu: 'Apple M3 Pro',
            color: 'Space Black',
            preowned: true,
            product_image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6534/6534615_sd.jpg;maxHeight=2000;maxWidth=2000;format=webp',
            is_laptop: true
          },
          {
            brand: apple._id, 
            product_model: 'MQRK3LL/A',
            SKU: 345678,
            product_name: 'iMac 24-inch All-in-One M3',
            year_released: 2023,
            price: 1699.99,
            storage_GB: 512,
            ram_GB: 8,
            gpu: 'Apple M3 10-core GPU',
            motherboard: 'Apple M3 Chipset',
            cpu: 'Apple M3 8-core CPU',
            color: 'Silver',
            preowned: false,
            product_image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6534/6534764_sd.jpg;maxHeight=640;maxWidth=550;format=webp',
            is_laptop: false
          },
          {
            brand: apple._id, 
            product_model: 'MMFJ3LL/A',
            SKU: 456789,
            product_name: 'Mac Mini M2',
            year_released: 2023,
            price: 537.99,
            storage_GB: 512,
            ram_GB: 8,
            gpu: 'Apple M2 8-core GPU',
            motherboard: 'Apple M2 Chipset',
            cpu: 'Apple M2 8-core CPU',
            color: 'Silver',
            preowned: true,
            product_image: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Mac_mini_M2.png',
            is_laptop: false
          },

          //Dell computers
          {
            brand: dell._id,
            product_model: 'i3520-5124BLK-PUS',
            SKU: 6573731,
            product_name: 'Dell Inspiron 15 Touch Screen Laptop',
            year_released: 2024,
            price: 629.99,
            storage_GB: 512,
            ram_GB: 8,
            gpu: 'Integrated, Intel UHD Graphics',
            motherboard: 'Intel I5-8250U',
            cpu: 'Intel 12th Generation Core i5',
            color: 'Carbon Black',
            preowned: false,
            product_image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6573/6573731_rd.jpg;maxHeight=2000;maxWidth=2000;format=webp',
            is_laptop: true
        }
    ]


    await Animal.insertMany(animals)
    console.log('Created animals in habitats!')
   }
   
   
   const run = async () => {
    await main()
    db.close()
   }