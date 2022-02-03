import React, { useState, createContext } from "react";

export const ProductContext = createContext();

export const ProductProvider = (props) => {
    const [products, setProducts] = useState([
    { id: 1, name: "T-Shirt", desc: "Loream Epsam", price: 200, cat:"Men" },
    { id: 2, name: "Kamiz", desc: "Loream Epsam", price: 2000, cat:"Women" },
    { id: 3, name: "Lahenga", desc: "Loream Epsam", price: 5000, cat:"Women" },
  ]);

  return (
    <ProductContext.Provider value={[products, setProducts]}>
      {props.children}
    </ProductContext.Provider>
  );
};
