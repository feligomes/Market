import React from "react";
import Grid from "@mui/material/Grid";
import ProductCardSkeleton from "../Products/ProductCardSkeleton";

const DashboardSkeleton = () => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      >
      {[0,1,2,3,4,5,6].map((index) => (
          <Grid item xs={4} sm={4} md={3} key={index}>
            <ProductCardSkeleton />
          </Grid>
        ))}
    </Grid>
  );
};
export default DashboardSkeleton;
