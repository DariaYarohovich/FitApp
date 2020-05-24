import React from "react";
import Enzyme from "enzyme";
import { Navigation } from "./navigation";

describe("Navigation", () => {
  it("renders correctly", () => {
    const component = Enzyme.shallow(<Navigation />);

    expect(component).toMatchSnapshot();
  });
});
