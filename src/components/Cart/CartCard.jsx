import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import ButtonGroup from "@mui/material/ButtonGroup";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { MOBILE_MAX_WIDTH, DESKTOP_BIG_MIN_WIDTH } from "../../shared/constants/Common";
import { useDispatch } from "react-redux";
import { setCartProducts } from "../Products/redux/slice";
import { useSelector } from "react-redux";
import { getCartProducts } from "../Products/redux/selector";
import NumberFormat from "react-number-format";
import Paper from "@mui/material/Paper";
import { useMediaQuery } from "react-responsive";

export default function CartCard({ data}) {
  const [count, setCount] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const dispatch = useDispatch();
  const cartProducts = useSelector(getCartProducts);
  const isMobile = useMediaQuery({ maxWidth: MOBILE_MAX_WIDTH });

  useEffect(() => {
    if (cartProducts.length > 0) {
      let index = cartProducts.findIndex((x) => x.id === data.id);
      if (index !== -1) {
        setCount(cartProducts[index].quantity);
        setTotalCost(cartProducts[index].quantity * data.price)
      }
    }
  }, [cartProducts]);

  const handleClickAdd = (e) => {
    e.stopPropagation();
    let auxCart = [...cartProducts];
    let index = cartProducts.findIndex((x) => x.id === data.id);
    if (index !== -1) {
      auxCart[index] = {
        ...auxCart[index],
        quantity: auxCart[index].quantity + 1,
      };
    } else {
      auxCart.push({ id: data.id, quantity: 1, price: data.price });
    }
    dispatch(setCartProducts(auxCart));
    setCount(count + 1);
  };

  const handleClickRemove = (e) => {
    e.stopPropagation();
    let auxCart = [...cartProducts];
    let index = cartProducts.findIndex((x) => x.id === data.id);
    if (cartProducts[index].quantity > 1) {
      auxCart[index] = {
        ...auxCart[index],
        quantity: auxCart[index].quantity - 1,
      };
    } else {
      auxCart.splice(index, 1);
    }
    dispatch(setCartProducts(auxCart));
    setCount(Math.max(count - 1, 0));
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        height: "160px",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0px 40px",
        marginBottom: "30px",
        [`@media (max-width:${DESKTOP_BIG_MIN_WIDTH}px)`]: {
          flexDirection: "column",
          padding: "20px 0px",
          textAlign: "center",
          height: "300px",
        },
      }}
    >
      <img style={{ maxHeight: "80px", maxWidth : "50px" }} src={data.image} alt={"Product"}/>
      <Typography
        sx={{
          display: "-webkit-box",
          overflow: "hidden",
          fontWeight : "bold",
          width: "300px",
          textOverflow: "ellipsis",
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: '2',
          [`@media (max-width:${MOBILE_MAX_WIDTH}px)`]: {
            width : "90%",
            WebkitLineClamp: '1',
          },
        }}
        variant="h6"
      >
        {data.title}
      </Typography>
      <div style={{display : "flex", flexDirection : isMobile ? "column" : "row", alignItems : "center"}}>
        <Paper
          sx={{
            borderRadius: 4,
            border: "1px solid rgba(0, 0, 0, 0.12)",
            color: "rgba(0, 0, 0, 0.54)",
            height: "50px",
            width: "190px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            margin: "20px",
            justifyContent: "space-around",
            [`@media (max-width:${MOBILE_MAX_WIDTH}px)`]: {
              flexDirection: "column",
              height: "90px",
            },
          }}
        >
          <Badge badgeContent={count} color="primary">
            <ShoppingCart />
          </Badge>

          <ButtonGroup>
            <Button
              aria-label="reduce"
              disabled={count === 0}
              onClick={(e) => {
                handleClickRemove(e);
              }}
            >
              <RemoveIcon fontSize="small" />
            </Button>
            <Button
              aria-label="increase"
              onClick={(e) => {
                handleClickAdd(e);
              }}
            >
              <AddIcon fontSize="small" />
            </Button>
          </ButtonGroup>
        </Paper>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            width : "120px"
          }}
        >
          <NumberFormat
            value={totalCost}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            decimalScale={2}
          />
        </Typography>
      </div>
    </Card>
  );
}
