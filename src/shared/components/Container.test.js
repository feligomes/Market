import React from "react";
import renderer from "react-test-renderer";
import Container from "./Container";

it("renders correctly", () => {
  const tree = renderer.create(<Container />).toJSON();
  expect(tree).toMatchSnapshot();
});
