// src/components/ProductFilter.js
//This entire file was suggested to me by ChatGPT. I'm scrutinizing it see what I do and don't understand (mainly don't understand it.)-MD

// import React, { useEffect, useState } from "react";

// const ProductFilter = () => {
//   const [brands, setBrands] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [selectedBrand, setSelectedBrand] = useState("");
//   const [minPrice, setMinPrice] = useState("");
//   const [maxPrice, setMaxPrice] = useState("");

//   useEffect(() => {
//     const fetchBrands = async () => {
//       const response = await fetch("http://localhost:3001/brands"); // Update with your API URL
//       const data = await response.json();
//       setBrands(data);
//     };

//     const fetchProducts = async () => {
//       const response = await fetch("http://localhost:3001/products"); // Update with your API URL
//       const data = await response.json();
//       setProducts(data);
//     };

//     fetchBrands();
//     fetchProducts();
//   }, []);

//   const handleFilter = () => {
//     let filteredProducts = products;

//     // Filter by brand
//     if (selectedBrand) {
//       filteredProducts = filteredProducts.filter(
//         (product) => product.brand === selectedBrand
//       );
//     }

//     // Filter by price
//     if (minPrice) {
//       filteredProducts = filteredProducts.filter(
//         (product) => product.price >= minPrice
//       );
//     }
//     if (maxPrice) {
//       filteredProducts = filteredProducts.filter(
//         (product) => product.price <= maxPrice
//       );
//     }

//     return filteredProducts;
//   };

//   const filteredProducts = handleFilter();

//   return (
//     <div>
//       <h2>Filter Products</h2>

//       <div>
//         <h3>Brands</h3>
//         {brands.map((brand) => (
//           <label key={brand._id}>
//             <input
//               type="checkbox"
//               value={brand._id}
//               onChange={() => setSelectedBrand(brand._id)}
//             />
//             {brand.brand_name}
//           </label>
//         ))}
//       </div>

//       <div>
//         <h3>Price Range</h3>
//         <input
//           type="number"
//           placeholder="Min Price"
//           value={minPrice}
//           onChange={(e) => setMinPrice(e.target.value)}
//         />
//         <input
//           type="number"
//           placeholder="Max Price"
//           value={maxPrice}
//           onChange={(e) => setMaxPrice(e.target.value)}
//         />
//       </div>

//       <h3>Filtered Products</h3>
//       <ul>
//         {filteredProducts.map((product) => (
//           <li key={product._id}>
//             {product.product_name} - ${product.price}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProductFilter;
