import React, { useContext } from "react";
import { AppBar, Badge, Toolbar, Typography } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Pasal } from "../Context";

function Header() {
  const { cart } = useContext(Pasal);

  return (
    <AppBar position="fixed">
      <StyleToolbar>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Typography variant="h5" noWrap component="div">
            All Pasal
          </Typography>
        </Link>
        <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
          <Badge badgeContent={cart.length} color="error">
            <ShoppingCartOutlined fontSize="large" />
          </Badge>
        </Link>
      </StyleToolbar>
    </AppBar>
  );
}

export default Header;

const StyleToolbar = styled(Toolbar)`
  padding: 0 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
