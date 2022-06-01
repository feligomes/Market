import React, { useContext, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import ButtonGroup from "@mui/material/ButtonGroup";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { MOBILE_MAX_WIDTH } from "../../shared/constants/Common";
import Context from "../../context/Context";
import { PRODUCT_SCREEN } from "../../shared/constants/screenNames";
import { useDispatch } from "react-redux";
import { setProductSelected, setCartProducts } from "../Products/redux/slice";
import { useSelector } from "react-redux";
import { getCartProducts } from "../Products/redux/selector";
import NumberFormat from "react-number-format";

export default function ProductCard({ data, expanded = false }) {
  const [count, setCount] = useState(0);
  const { redirect } = useContext(Context);
  const dispatch = useDispatch();
  const cartProducts = useSelector(getCartProducts);

  useEffect(() => {
    if (cartProducts.length > 0) {
      let index = cartProducts.findIndex((x) => x.id === data.id);
      if (index !== -1) {
        setCount(cartProducts[index].quantity);
      }
    }
  }, [cartProducts]);

  const handleClick = () => {
    dispatch(setProductSelected(data));
    redirect(PRODUCT_SCREEN);
  };

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
      auxCart.push({ id: data.id, quantity: 1, price: data.price, image : data.image, title : data.title });
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
      sx={{ maxWidth: 345, margin: "auto", cursor: "pointer" }}
      onClick={() => handleClick()}
    >

      <img style={{margin : "20px auto", display: "block", height: "140px"}} src={data.image} alt={"Product"}/>
      <CardContent>
        <Typography
          sx={
            !expanded && {
              display: "-webkit-box",
              overflow: "hidden",
              textOverflow: "ellipsis",
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: '1',
            }
          }
          gutterBottom
          variant="h5"
          component="div"
        >
          {data.title}
        </Typography>
        <Typography
          sx={
            !expanded && {
              display: "-webkit-box",
              overflow: "hidden",
              textOverflow: "ellipsis",
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: '4',
              minHeight: "80px",
            }
          }
          variant="body2"
          color="text.secondary"
        >
          {data.description}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            marginTop: "10px",
          }}
        >
          <NumberFormat
            value={data.price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            decimalScale={2}
          />
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          borderRadius: 4,
          border: "1px solid rgba(0, 0, 0, 0.12)",
          color: "rgba(0, 0, 0, 0.54)",
          height: "50px",
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
      </CardActions>
    </Card>
  );
}
