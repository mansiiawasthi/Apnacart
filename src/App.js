// import logo from "./logo.svg";
// import "./App.css";
// import Navbar from "./components/navbar.js";
// import ProductList from "./components/ProductList.js";
// import Footer from "./components/Footer.js";
// import AddItem from "./components/AddItem.js";

// import iphoneImage from "./images/Iphone_image.png";
// import redmiImage from "./images/redmi_image.png";
// import React, { useState } from "react";
// function App() {
//   const products = [
//     {
//       price: 99999,
//       name: "IPhone 10S Max",
//       quantity: 0,
//       image: iphoneImage,
//     },
//     {
//       price: 9999,
//       name: "Redmi Note 10S Max",
//       quantity: 0,
//       image: redmiImage,
//     },
//   ];

//   let [productList, setProductList] = useState(products);
//   let [totalAmount, setTotalAmount] = useState(0);

//   const incrementQuantity = (index) => {
//     let newProductList = [...productList];
//     let newTotalAmount = totalAmount;
//     newProductList[index].quantity++;
//     newTotalAmount += newProductList[index].price;
//     setTotalAmount(newTotalAmount);
//     setProductList(newProductList);
//   };

//   const decrementQuantity = (index) => {
//     let newProductList = [...productList];
//     let newTotalAmount = totalAmount;
//     if (newProductList[index].quantity > 0) {
//       newProductList[index].quantity--;
//       newTotalAmount -= newProductList[index].price;
//     }
//     setTotalAmount(newTotalAmount);
//     setProductList(newProductList);
//   };

//   const resetQuantity = () => {
//     let newProductList = [...productList];
//     newProductList.map((products) => {
//       products.quantity = 0;
//     });
//     setProductList(newProductList);
//     setTotalAmount(0);
//   };

//   const removeItem = (index) => {
//     let newProductList = [...productList];
//     let newTotalAmount = totalAmount;
//     newTotalAmount -=
//       newProductList[index].quantity * newProductList[index].price;
//     newProductList.splice(index, 1);
//     setProductList(newProductList);
//     setTotalAmount(newTotalAmount);
//   };

//   const addItem = (name, price) => {
//     let newProductList = [...productList];
//     newProductList.push({
//       price: price,
//       name: name,
//       quantity: 0,
//     });
//     setProductList(newProductList);
//   };

//   return (
//     <>
//       <Navbar />
//       <main className="container mt-5">
//         <AddItem addItem={addItem} />
//         <ProductList
//           productList={productList}
//           incrementQuantity={incrementQuantity}
//           decrementQuantity={decrementQuantity}
//           removeItem={removeItem}
//         />
//       </main>
//       <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
//     </>
//   );
// }

// export default App;
import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar.js"; // Replace with the actual path
import ProductList from "./components/ProductList.js";
import Footer from "./components/Footer.js";
import AddItem from "./components/AddItem.js";

import iphoneImage from "./images/Iphone_image.png";
import redmiImage from "./images/redmi_image.png";

function App() {
  const initialProducts = [
    {
      price: 99999,
      name: "IPhone 10S Max",
      quantity: 0,
      image: iphoneImage,
    },
    {
      price: 9999,
      name: "Redmi Note 10S Max",
      quantity: 0,
      image: redmiImage,
    },
  ];

  const [productList, setProductList] = useState(initialProducts);
  const [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    const newProductList = [...productList];
    newProductList[index].quantity++;
    setProductList(newProductList);
    setTotalAmount(totalAmount + newProductList[index].price);
  };

  const decrementQuantity = (index) => {
    const newProductList = [...productList];
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      setTotalAmount(totalAmount - newProductList[index].price);
      setProductList(newProductList);
    }
  };

  const resetQuantity = () => {
    const newProductList = productList.map((product) => ({
      ...product,
      quantity: 0,
    }));
    setProductList(newProductList);
    setTotalAmount(0);
  };

  const removeItem = (index) => {
    const removedProduct = productList[index];
    setTotalAmount(totalAmount - removedProduct.quantity * removedProduct.price);
    setProductList(productList.filter((_, i) => i !== index));
  };

  const addItem = (name, price) => {
    const newProductList = [
      ...productList,
      {
        price: price,
        name: name,
        quantity: 0,
      },
    ];
    setProductList(newProductList);
  };

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <AddItem addItem={addItem} />
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
    </>
  );
}

export default App;
