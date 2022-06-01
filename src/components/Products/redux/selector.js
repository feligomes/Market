import { createSelector } from "reselect";

const getBannersState = ({ products }) => products;

export const getIsLoading = createSelector(
  getBannersState,
  (state) => state.isLoading
);

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

export const getCartCost = createSelector(
  getBannersState,
  (state) => state.cartCost
);

export const getNumberProductsInCart = createSelector(
  getBannersState,
  (state) => state.numberProductsInCart
);
