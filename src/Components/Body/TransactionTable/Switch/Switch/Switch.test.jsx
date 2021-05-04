import React from "react";
import ReactDOM from "react-dom";
import Switch from "../Switch";
import renderer from "react-test-renderer"

it("render successfully", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Switch />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("Matches snapshot", ()=>{
    const tree = renderer.create(<Switch />).toJSON();
    expect(tree).toMatchSnapshot();
});