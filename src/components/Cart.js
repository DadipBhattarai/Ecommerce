import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Pasal } from "../Context";
import CartItem from "./CartItem";

function Cart() {
  const { cart } = useContext(Pasal);

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);

  return (
    <Container>
      <div
        style={{
          padding: "10px",
          display: "block",
          fontSize: "20px",
          fontWeight: 800,
        }}
      >
        Total Price: {total}
      </div>
      {cart.map((item) => (
        <CartItem item={item} />
      ))}
    </Container>
  );
}

export default Cart;

const Container = styled.div`
  width: 80vw;
  margin: 0 auto;
  margin-top: 70px !important;
  background-color: darkgray;
`;
