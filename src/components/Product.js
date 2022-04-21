import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Pasal } from "../Context";
import Rating from "./Rating";

function Product({ product }) {
  const { cart, setCart } = useContext(Pasal);

  const { title, image, price, id } = product;

  // const handleCart = (e) => {
  //   setCart(!cart);
  //   console.log(id);
  //   setCount(count + 1);
  // };

  const [rate, setRate] = useState(3);

  return (
    <Container>
      <StyleCard sx={{ maxWidth: 345 }} key={id}>
        <StyleCardMedia
          style={{ backgroundColor: "darkcyan" }}
          component="img"
          image={image}
          alt="green iguana"
        />
        <StyleCardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </StyleCardContent>
        <StyleCardActions>
          {cart.includes(product) ? (
            <Button
              size="large"
              variant="contained"
              color="primary"
              onClick={() => setCart(cart.filter((c) => c.id !== id))}
            >
              Remove from Cart
            </Button>
          ) : (
            <Button
              size="large"
              variant="contained"
              color="primary"
              onClick={() => setCart([...cart, product])}
            >
              Add To Cart
            </Button>
          )}

          <Price>${price}</Price>
        </StyleCardActions>
        <Rating
          rating={rate}
          handleRating={(i) => setRate(i)}
          style={{ cursor: "pointer" }}
        />
      </StyleCard>
    </Container>
  );
}

export default Product;

const Container = styled.div`
  width: 350px;
  margin-left: 10px;
  margin-top: 10px;
  background-color: gray !important;
`;

const StyleCard = styled(Card)`
  /* margin-top: 100px; */
`;

const StyleCardContent = styled(CardContent)`
  background-color: aqua;
  padding: 5px 0 !important;
`;
const StyleCardActions = styled(CardActions)`
  background-color: green;
  padding: 5px !important;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyleCardMedia = styled(CardMedia)`
  height: 300px !important;
  object-fit: fill !important;
`;

const Price = styled.p`
  font-size: 20px;
  font-weight: 600;
`;
