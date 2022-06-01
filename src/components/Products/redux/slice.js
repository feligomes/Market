import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../Services/ProductService.js";

const sliceName = "products";

const initialState = {
  productsList: [],
  selectedProduct: null,
  cartProducts: [],
  numberProductsInCart: 0,
  cartCost: 0,
  isLoading: false,
};
const productsSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setProductSelected(state, action) {
      state.selectedProduct = action.payload;
    },
    setCartProducts(state, action) {
      state.cartProducts = action.payload;
    },
    setNumberProductsInCart(state, action) {
      state.numberProductsInCart = action.payload;
    },
    setCartCost(state, action) {
      state.cartCost = action.payload;
    },
    productsLoaded(state, action) {
      state.productsList = action.payload
      state.isLoading = false;
    },
    loadingReset() {
      return { ...initialState };
    },
  },
});
const { actions, reducer } = productsSlice;

export const {
  productsLoaded,
  loadingReset,
  setProductSelected,
  setCartProducts,
  setCartCost,
  setNumberProductsInCart,
  setIsLoading,
} = actions;

export const fetchProducts = (limit) => async (dispatch) => {
  dispatch(setIsLoading(true));
  const response = await getProducts(limit);
  dispatch(productsLoaded(response));
};

export default reducer;
