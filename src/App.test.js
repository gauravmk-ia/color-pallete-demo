
import { configure, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import React from "react";
import App from "./App";
import "jest-canvas-mock";

configure({ adapter: new Adapter() });

describe("ColorPallete", () => {
  it("should render my component", () => {
    const component = mount(<App />);
    // expect(component.getElements()).toMatchSnapshot();
  });

  it("should find canvas element and match width & height", () => {
    const component = mount(<App />);
    expect(component.find("canvas").props().width).toEqual("256");
    expect(component.find("canvas").props().height).toEqual("128");
  });

  it("colors should be unique", () => {
    const wrapper = mount(<App />);
    const colors = wrapper.instance().generateRGB();
    const uniqueColors = Array.from(new Set([...colors]));
    expect(colors.length).toEqual(uniqueColors.length);
  });
});
