import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "../context/Context";
import Header from "./Header";

const cart = [
  {
    id: 1,
    quantity: 3,
    price: 109.95,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  },
  {
    id: 2,
    quantity: 3,
    price: 22.3,
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    title: "Mens Casual Premium Slim Fit T-Shirts ",
  },
  {
    id: 3,
    quantity: 2,
    price: 55.99,
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    title: "Mens Cotton Jacket",
  },
];

jest.mock("react-redux", () => ({
  useSelector: jest.fn().mockImplementation((selector) => selector()),
  useDispatch: jest.fn(),
}));

jest.mock("./Products/redux/selector", () => ({
  getCartProducts: jest.fn().mockReturnValue(cart),
  getCartCost: jest.fn().mockReturnValue(10),
  getNumberProductsInCart: jest.fn().mockReturnValue(10),
}));

it("renders correctly", () => {
  const mockRedirect = (value) => value;
  const mockActualPage = (value) => value;
  const tree = renderer
    .create(
      <Provider value={{ actualPage: mockActualPage, redirect: mockRedirect }}>
        <Header />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
