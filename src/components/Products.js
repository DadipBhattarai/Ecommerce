import React, { useContext } from "react";
import styled from "styled-components";
import { Pasal } from "../Context";
import Product from "./Product";

function Products() {
  const { products } = useContext(Pasal);

  return (
    <Container>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </Container>
  );
}

export default Products;

const Container = styled.div`
  width: 80vw;
  margin: 0 auto;
  margin-top: 70px !important;
  background-color: red;
  display: flex;
  flex-wrap: wrap;
`;
