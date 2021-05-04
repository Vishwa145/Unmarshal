import React from "react";
import ReactDOM from "react-dom";
import Summary from "../Summary";
import renderer from "react-test-renderer"

it("render successfully", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Summary />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("Matches snapshot", ()=>{
    const tree = renderer.create(<Summary />).toJSON();
    expect(tree).toMatchSnapshot();
});