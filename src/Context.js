import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const Pasal = createContext();

const Context = ({ children }) => {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setProducts(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Pasal.Provider
      value={{ count, setCount, products, setProducts, cart, setCart }}
    >
      {children}
    </Pasal.Provider>
  );
};

export default Context;
