import { createSelector } from "reselect";

const getBannersState = ({ products }) => products;

export const getProducts = createSelector(
  getBannersState,
  (state) => state.productsList
);

export const getSelectedProduct = createSelector(
  getBannersState,
  (state) => state.selectedProduct
);

export const getCartProducts = createSelector(
  getBannersState,
  (state) => state.cartProducts
);
