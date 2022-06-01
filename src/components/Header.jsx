import React, { useContext, useEffect } from "react";
import styled from "@emotion/styled";
import {
  getCartProducts,
  getCartCost,
  getNumberProductsInCart,
} from "./Products/redux/selector";
import { setNumberProductsInCart, setCartCost } from "./Products/redux/slice";
import { useSelector } from "react-redux";
import Badge from "@mui/material/Badge";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { CART_SCREEN } from "../shared/constants/screenNames";
import Context from "../context/Context";
import NumberFormat from "react-number-format";
import { MOBILE_MAX_WIDTH } from "../shared/constants/Common";
import { useMediaQuery } from "react-responsive";
import { useDispatch } from "react-redux";
import Tooltip from "@mui/material/Tooltip";

const HeaderSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 60px;
  justify-content: space-between;
  background: #1a1734;
  height: 60px;
  color: white;
  font-weight: bold;
  top: 0px;
  z-index: 100;
  position: sticky;
`;

const CartSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
`;

const Header = () => {
  const cartProducts = useSelector(getCartProducts);
  const dispatch = useDispatch();

  const numberProductsInCart = useSelector(getNumberProductsInCart);
  const cartCost = useSelector(getCartCost);

  const isMobile = useMediaQuery({ maxWidth: MOBILE_MAX_WIDTH });
  const { redirect } = useContext(Context);

  useEffect(() => {
    if (cartProducts) {
      let totalProducts = 0;
      let totalCost = 0;
      cartProducts.forEach((product) => {
        totalProducts += product.quantity;
        totalCost += product.quantity * product.price;
      });
      dispatch(setNumberProductsInCart(totalProducts));
      dispatch(setCartCost(totalCost));
    }
  }, [cartProducts]);

  const handleClick = () => {
    if (numberProductsInCart > 0) {
      redirect(CART_SCREEN);
    }
  };

  return (
    <HeaderSection>
      <span style={{ fontSize: isMobile ? "15px" : "22px" }}>
        Morsum Market
      </span>
      <Tooltip
        title={
          numberProductsInCart === 0 ? "Add items to the cart to continue" : ""
        }
      >
        <CartSection
          onClick={() => {
            handleClick();
          }}
        >
          <span style={{ marginRight: 15 }}>Go to Cart</span>
          <Badge badgeContent={numberProductsInCart} color="primary">
            <ShoppingCart />
          </Badge>
          <NumberFormat
            style={{
              visibility: numberProductsInCart === 0 && "hidden",
              marginLeft: 15,
            }}
            value={cartCost}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            decimalScale={2}
          />
        </CartSection>
      </Tooltip>
    </HeaderSection>
  );
};

export default Header;
