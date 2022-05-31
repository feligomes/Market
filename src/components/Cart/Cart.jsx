import React, { useContext } from "react";
import Container from "../../shared/components/Container";
import Breadcrumb from "../../shared/components/Breadcrumb";
import { CART_SCREEN } from "../../shared/constants/screenNames";

const ProductDetail = () => {
  return (
    <Container title={"Cart"}>
      <Breadcrumb actualScreen={CART_SCREEN} />
      
    </Container>
  );
};

export default ProductDetail;
