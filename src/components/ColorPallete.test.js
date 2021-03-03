import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import ColorPallete from "./ColorPallete";

configure({ adapter: new Adapter() });

describe("ColorPallete", () => {
  it("should render my component", () => {
    const component = shallow(<ColorPallete />);
    expect(component.getElements()).toMatchSnapshot();
  });
});
