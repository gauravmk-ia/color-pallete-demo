import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React, { useRef } from "react";
import ColorPallete from "./ColorPallete";

configure({ adapter: new Adapter() });

describe("ColorPallete", () => {
  it("should render my component", () => {
    const component = shallow(<ColorPallete />);
    expect(component.getElements()).toMatchSnapshot();
  });

  it("should find canvas element and match width & height", () => {
    const component = shallow(<ColorPallete />);
    expect(component.find("canvas").props().width).toEqual("256");
    expect(component.find("canvas").props().height).toEqual("128");
  });
});
