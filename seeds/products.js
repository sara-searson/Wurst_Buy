const db = require('../db')
const { Brand, Product } = require('../models')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const apple = await Brand.find({ brand_name: 'Apple' })
  const dell = await Brand.find({ brand_name: 'Dell' })
  const lenovo = await Brand.find({ brand_name: 'Lenovo' })
  const hp = await Brand.find({ brand_name: 'HP' })



  const products = [
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
    },
    {
      brand: dell._id,
      product_model: 'XPS9345-SX12784BLK-PUS',
      SKU: 6586063,
      product_name: 'Dell XPS 13 Touch Laptop',
      year_released: 2024,
      price: 19.99,
      storage_GB: 1024,
      ram_GB: 32,
      gpu: 'Qualcomm Snapdragon X Elite Adreno',
      motherboard: 'Intel i7-1185G7',
      cpu: 'Qualcomm Snapdragon X Elite',
    color: 'Graphite',
      preowned: false,
      product_image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6586/6586063_sd.jpg;maxHeight=2000;maxWidth=2000;format=webp',
      is_laptop: true
    },
    {
        brand: dell._id,
        product_model: 'AWm16-9364BLK-PUS',
        SKU: 6577886,
      product_name: 'Dell Alienware m16 Gaming Laptop',
      year_released: 2023,
      price: 1999.99,
      storage_GB: 1000,
      ram_GB: 32,
      gpu: 'NVIDIA GeForce RTX 4080',
      motherboard: '9YV95',
      cpu: 'AMD Ryzen 9 7000 Series',
      color: 'Dark Metallic Moon',
      preowned: false,
      product_image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/e5c83630-eaa6-4d2d-b399-6c915d54186d.png;maxHeight=2000;maxWidth=2000;format=webp',
      is_laptop: true
    },
    {
      brand: dell._id,
      product_model: '27-cr1064',
      SKU: 6573724,
      product_name: 'Inspiron 27 All-in-One',
      year_released: 2024,
      price: 1049.99,
      storage_GB: 1024,
      ram_GB: 16,
      gpu: 'Integrated, Intel Graphics',  
      motherboard: 'AM4 1331 RX 580',
      cpu: 'Intel Core Ultra 7 Series 1',
      color: 'Shell White',
      preowned: false,
      product_image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/8ab746df-e2ae-48a1-b8d3-b053b51f82e3.jpg;maxHeight=640;maxWidth=550;format=webp',
      is_laptop: false
    },

      //HP
    {
      brand: hp._id, 
      product_model: '14-fe0013dx',
      SKU: 6583279,
      product_name: 'HP OmniBook X',
      year_released: 2024,
      price: 849.99,
      storage_GB: 1024,
      ram_GB: 16,
      gpu: 'Integrated, Qualcomm Adreno',
      motherboard: 'N3215 LA551',
      cpu: 'Qualcomm Snapdragon  X Elite',
      color: 'Meteor Silver',
      preowned: false,
      product_image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/120154ab-f679-4632-a571-453b2957a859.jpg;maxHeight=640;maxWidth=550;format=webp',
      is_laptop: true
    },
    {
      brand: hp._id,
      product_model: '16-ac0033dx',
      SKU: 6572057,
      product_name: 'HP ENVY 2-in-1 16 Laptop',
      year_released: 2024,
      price: 1349.99,
      storage_GB: 2048,
      ram_GB: 32,
      gpu: 'Integrated, Intel Graphics',
      motherboard: 'Hp X360',
      cpu: 'Intel Core Ultra 7 Series 1',
      color: 'Glacier Silver',
      preowned: false,
      product_image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/d9fdc92a-9998-4561-92c5-9f3c6dbfe5ba.jpg;maxHeight=640;maxWidth=550;format=webp',
      is_laptop: true
    },
    {
      brand: hp._id,
      product_model: 'TE01-5344',
      SKU: 6573477,
      product_name: 'HP Envy Desktop',
      year_released: 2024,
      price: 599.99,
      storage_GB: 1024,
      ram_GB: 12,
      gpu: 'Integrated, Intel UHD Graphics 730',
      motherboard: 'L56019-001',
      cpu: 'Intel Core i5 14th Generation',
      color: 'Black',
      preowned: false,
      product_image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/2c3386e1-fdbc-4cee-a9c2-36de91148653.jpg;maxHeight=640;maxWidth=550;format=webp',
      is_laptop: false
    },
    {
      brand: hp._id,
      product_model: 'TP01-2244',
      SKU: 6579060,
      product_name: 'HP Pavilion Desktop',
      year_released: 2024,
      price: 1099.99,
      storage_GB: 1024,
      ram_GB: 32,
      gpu: 'NVIDIA GeForce RTX 3050',
      motherboard: '533234-002',
      cpu: 'AMD Ryzen 7 5000 Series',
      color: 'Natural Silver',
      preowned: false,
      product_image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6579/6579060_sd.jpg;maxHeight=2000;maxWidth=2000;format=webp',
      is_laptop: false
    },

      //Lenovo
    {
      brand: lenovo._id, 
      product_model: '82VG00MYUS',
      SKU: 6572417,
      product_name: 'Lenovo IdeaPad 1 15',
      year_released: 2023,
      price: 579.99,
      storage_GB: 256,
      ram_GB: 8,
      gpu: 'Integrated, AMD Radeon',
      motherboard: '15ALC7',
      cpu: 'AMD Ryzen 5 7000 Series',
      color: 'Abyss Blue',
      preowned: false,
      product_image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6572/6572417_rd.jpg;maxHeight=2000;maxWidth=2000;format=webp',
      is_laptop: true
    },
    {
      brand: lenovo._id,
      product_model: '83DN0006US',
      SKU: 6571367,
      product_name: 'Lenovo Yoga Pro 9i 16',
      year_released: 2024,
      price: 1699.99,
      storage_GB: 1000,
      ram_GB: 32,
      gpu: 'NVIDIA GeForce RTX 4050',
      motherboard: 'Intel i3-1115G4',
      cpu: 'Intel Core Ultra 9 Series 1',
      color: 'Luna Gray',
      preowned: false,
      product_image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6571/6571367_sd.jpg;maxHeight=640;maxWidth=550;format=webp',
      is_laptop: true
    },
    {
      brand: lenovo._id,
      product_model: '90W20002UT',
      SKU: 6534506,
      product_name: 'Lenovo IdeaCentre Mini Desktop',
      year_released: 2023,
      price: 459.99,
      storage_GB: 512,
      ram_GB: 16,
      gpu: 'Integrated, Intel Iris Xe Graphics',
      motherboard: 'Mini DTX Intel LGA1151',
      cpu: 'Intel 13th Generation Core i7',
      color: 'Storm Grey',
      preowned: true,
      product_image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6534/6534506_sd.jpg;maxHeight=640;maxWidth=550;format=webp',
      is_laptop: false
    },
    {
      brand: lenovo._id,
      product_model: 'Mini DTX Intel LGA1151',
      SKU: 6576778,
      product_name: 'Lenovo Legion Tower 5i Gaming Desktop',
      year_released: 2023,
      price: 1999.99,
      storage_GB: 1000,
      ram_GB: 32,
      gpu: 'NVIDIA GeForce RTX 4070 SUPER',
      motherboard: 'Lenovo IB660ML',
      cpu: 'Intel Core i7 14th Generation',
      color: 'Storm Grey',
      preowned: false,
      product_image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6576/6576778_sd.jpg;maxHeight=640;maxWidth=550;format=webp',
      is_laptop: false
    }
  ]

  await Product.insertMany(products)
  console.log('Added products')
}
   
   
const run = async () => {
  await main()
  db.close()
}

run()