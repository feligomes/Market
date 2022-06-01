import React from "react";
import Skeleton from '@mui/material/Skeleton';

export default function ProductCardSkeleton() {

  return (
    <Skeleton sx={{ borderRadius : "4px", margin : "auto"}}  variant="rect" width={345} height={482} />
  );
}
