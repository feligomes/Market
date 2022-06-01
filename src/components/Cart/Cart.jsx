import React from "react";
import Container from "../../shared/components/Container";
import Breadcrumb from "../../shared/components/Breadcrumb";
import { CART_SCREEN } from "../../shared/constants/screenNames";
import CartCard from "./CartCard";
import SummaryCard from "./SummaryCard";
import { useSelector } from "react-redux";
import { getCartProducts } from "../Products/redux/selector";
import Grid from "@mui/material/Grid";

const Cart = () => {
  const cartProducts = useSelector(getCartProducts);

  return (
    <Container title={"Cart"}>
      <Breadcrumb actualScreen={CART_SCREEN} />

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={6} sm={6} md={8}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {cartProducts &&
              cartProducts.map((p, index) => (
                <CartCard data={p} index={index} />
              ))}
          </div>
        </Grid>
        <Grid item xs={6} sm={6} md={4}>
          <SummaryCard data={cartProducts}/>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cart;
