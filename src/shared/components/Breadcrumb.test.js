import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "../../context/Context";
import Breadcrumb from "./Breadcrumb";

it("renders correctly", () => {
  const mockRedirect = (value) => value;
  const mockActualPage = (value) => value;
  const tree = renderer
    .create(
      <Provider value={{ actualPage: mockActualPage, redirect: mockRedirect }}>
        <Breadcrumb />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
