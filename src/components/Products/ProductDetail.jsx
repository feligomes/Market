import React from "react";
import Container from "../../shared/components/Container";
import { useSelector } from "react-redux";
import { getSelectedProduct } from "../Products/redux/selector";
import ProductCard from "../Products/ProductCard";
import { PRODUCT_SCREEN } from "../../shared/constants/screenNames";
import Breadcrumb from "../../shared/components/Breadcrumb";

const ProductDetail = () => {
  const data = useSelector(getSelectedProduct);

  return (
    <Container title={"Detail"}>
      <Breadcrumb actualScreen={PRODUCT_SCREEN}/>
      <ProductCard data={data} expanded={true} />
    </Container>
  );
};

export default ProductDetail;
