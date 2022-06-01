import React, { useEffect, useState } from "react";
import { getProducts, getIsLoading } from "../Products/redux/selector";
import { fetchProducts } from "../Products/redux/slice";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import ProductCard from "../Products/ProductCard";
import Container from "../../shared/components/Container";
import Spinner from "../../shared/components/Spinner";
import DashboardSkeleton from "./DashboardSkeleton";
import Button from "@mui/material/Button";

const Dashboard = () => {
  const dispatch = useDispatch();
  let maxItems = 20;
  let numberOfItems = 15;
  const [limit, setLimit] = useState(numberOfItems);

  const products = useSelector(getProducts);
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts(limit));
    }
  }, []);

  const handleClickMore = () => {
    let auxNumber = limit + numberOfItems;
    setLimit(auxNumber);
    dispatch(fetchProducts(auxNumber));
  };

  return (
    <Container title={"Products"}>
      {isLoading && <Spinner />}
      {isLoading && products.length < 1 ? (
        <DashboardSkeleton />
      ) : (
        <>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {products &&
              products.map((p, index) => (
                <Grid item xs={4} sm={4} md={3} key={index}>
                  <ProductCard data={p} />
                </Grid>
              ))}
          </Grid>
          {limit < maxItems && (
            <Button
              sx={{
                textTransform: "none",
                fontWeight: "bold",
                margin: "60px auto",
              }}
              variant="contained"
              onClick={() => {
                handleClickMore();
              }}
            >
              Load more
            </Button>
          )}
        </>
      )}
    </Container>
  );
};

export default Dashboard;
