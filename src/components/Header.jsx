import React, { useContext, useEffect, useState } from "react";
import MorsumLogo from "../assets/images/MorsumLogo.png";
import styled from "@emotion/styled";
import { getCartProducts } from "./Products/redux/selector";
import { useSelector } from "react-redux";
import Badge from "@mui/material/Badge";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { CART_SCREEN } from "../shared/constants/screenNames";
import Context from "../context/Context";

const HeaderSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 60px;
  justify-content: space-between;
  background: #1a1734;
  height: 60px;
`;

const CartSection = styled.div`
  color: white;
  font-weight: bold;
  width: 120px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor : pointer
`;

const Header = () => {
  const cartProducts = useSelector(getCartProducts);
  const [count, setCount] = useState(0);
  const { redirect } = useContext(Context);

  useEffect(() => {
    let productsInCart = 0;
    cartProducts.forEach((product) => {
      productsInCart = productsInCart + product.quantity;
    });
    setCount(productsInCart);
  }, [cartProducts]);

  const handleClick = () => {
    redirect(CART_SCREEN);
  };

  return (
    <HeaderSection>
      {/* <img src={MorsumLogo} /> */}
      <span>Logo</span>
      <CartSection
        onClick={() => {
          handleClick();
        }}
      >
        <span>Go to Cart</span>
        <Badge badgeContent={count} color="primary">
          <ShoppingCart />
        </Badge>
      </CartSection>
    </HeaderSection>
  );
};

export default Header;
