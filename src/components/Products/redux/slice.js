import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../Services/ProductService.js";

const sliceName = "products";

const initialState = {
  productsList: null,
  selectedProduct : null,
  cartProducts : []
};
const productsSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setProductSelected(state, action) {
      state.selectedProduct = action.payload;
    },
    setCartProducts(state, action) {
      state.cartProducts = action.payload;
    },
    productsLoaded(state, action) {
      state.productsList = action.payload;
    },
    loadingReset() {
      return { ...initialState };
    },
  },
});
const { actions, reducer } = productsSlice;

export const { productsLoaded, loadingReset, setProductSelected, setCartProducts } = actions;

export const fetchProducts = () => async (dispatch) => {
  const response = await getProducts();
  dispatch(productsLoaded(response));
};

export default reducer;
