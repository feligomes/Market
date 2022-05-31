import React, { useCallback, useContext, useEffect } from "react";
import Dashboard from "./Dashboard/Dashboard";
import ProductDetail from "./Products/ProductDetail";
import Cart from "./Cart/Cart";
import Checkout from "./Checkout/Checkout";
import {
  DASHBOARD_SCREEN,
  PRODUCT_SCREEN,
  CART_SCREEN,
  CHECKOUT_SCREEN,
} from "../shared/constants/screenNames";
import Context from "../context/Context";

export const ScreenManager = () => {
  const { actualPage } = useContext(Context);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [actualPage]);

  const getActiveScreen = useCallback(() => {
    let activeScreen = null;

    switch (actualPage) {
      case PRODUCT_SCREEN: {
        activeScreen = <ProductDetail />;
        break;
      }
      case CART_SCREEN: {
        activeScreen = <Cart />;
        break;
      }
      case CHECKOUT_SCREEN: {
        activeScreen = <Checkout />;
        break;
      }
      case DASHBOARD_SCREEN:
      default: {
        activeScreen = <Dashboard />;
        break;
      }
    }
    return activeScreen;
  }, [actualPage]);

  return <div>{getActiveScreen()}</div>;
};

export default ScreenManager;
