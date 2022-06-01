import React, { useContext } from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import NumberFormat from "react-number-format";
import Button from "@mui/material/Button";
import { CHECKOUT_SCREEN } from "../../shared/constants/screenNames";
import Context from "../../context/Context";
import { setCartProducts } from "../Products/redux/slice";
import {
  getCartCost,
  getNumberProductsInCart,
} from "../Products/redux/selector";
import { useDispatch, useSelector } from "react-redux";

const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  width: 230px;
`;

const Row = ({ name, value }) => {
  return (
    <RowDiv>
      <Typography variant="body1" color="text.secondary">
        {name}
      </Typography>
      <Typography
        sx={{
          fontWeight: "bold",
        }}
        variant="body1"
        color="text.secondary"
      >
        {name !== "Total items" ? (
          <NumberFormat
            value={value}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            decimalScale={2}
          />
        ) : (
          <>{value}</>
        )}
      </Typography>
    </RowDiv>
  );
};

export default function SummaryCard() {
  let shipment = 30;
  const { redirect } = useContext(Context);
  const dispatch = useDispatch();

  const numberProductsInCart = useSelector(getNumberProductsInCart);
  const cartCost = useSelector(getCartCost);

  const handleClickCheckout = () => {
    dispatch(setCartProducts([]));
    redirect(CHECKOUT_SCREEN);
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "540px",
        alignItems: "center",
        padding: "0px 30px",
        marginBottom: "30px",
      }}
    >
      <Typography
        sx={{
          margin: "25px 0px",
          fontWeight: "bold",
        }}
        variant="h4"
      >
        Order summary
      </Typography>
      <Row name={"Total items"} value={numberProductsInCart} />
      <Row name={"Total items cost"} value={cartCost} />
      <Row name={"Shipment cost"} value={shipment} />
      <Row name={"Total to pay"} value={cartCost + shipment} />
      <Button
        sx={{
          textTransform: "none",
          fontWeight: "bold",
          marginTop: "100px",
        }}
        variant="contained"
        onClick={() => {
          handleClickCheckout();
        }}
      >
        Checkout
      </Button>
    </Card>
  );
}
