import React from "react";
import ReactDOM from "react-dom";
import Body from "../Body";
import renderer from "react-test-renderer"

it("render successfully", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Body />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("Matches snapshot", ()=>{
    const tree = renderer.create(<Body />).toJSON();
    expect(tree).toMatchSnapshot();
});