import React from "react";
import Skeleton from '@mui/material/Skeleton';

export default function ProductCardSkeleton() {

  return (
    <Skeleton sx={{ borderRadius : "4px", margin : "auto", maxWidth : "345px"}}  variant="rect" height={482}/>
  );
}
