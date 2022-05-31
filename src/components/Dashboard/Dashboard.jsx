import React, { useEffect } from "react";
import { getProducts } from "../Products/redux/selector";
import { fetchProducts } from "../Products/redux/slice";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import ProductCard from "../Products/ProductCard";
import Container from "../../shared/components/Container";

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const products = useSelector(getProducts);

  console.log("products", products);

  return (
    <Container title={"Products"}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {products &&
          products.map((p, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <ProductCard data={p} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default Dashboard;
