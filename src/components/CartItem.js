import {
  Button,
  CardMedia,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@material-ui/core";
import React, { useContext } from "react";
import styled from "styled-components";
import { Pasal } from "../Context";
import Rating from "./Rating";

function CartItem({ item }) {
  const { cart, setCart } = useContext(Pasal);
  const { id, category, description, title, image, price } = item;
  return (
    <Container>
      Price: {price}
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <StyleCardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={image}
            />
          </ListItemAvatar>
          <ListItemText
            style={{ alignItems: "justify" }}
            primary={title}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {category}
                </Typography>
                {description}
              </React.Fragment>
            }
          />
        </ListItem>
        <Button
          size="large"
          variant="contained"
          color="primary"
          onClick={() => setCart(cart.filter((c) => c.id !== id))}
        >
          Remove from Cart
        </Button>
        <Rating />
        <Divider variant="inset" component="li" />
      </List>
    </Container>
  );
}

export default CartItem;

const Container = styled.div``;

const StyleCardMedia = styled(CardMedia)`
  width: 200px !important;
  margin-right: 20px;
  object-fit: fill;
`;
