import React from "react";
import ReactDOM from "react-dom";
import Loading from "../Loading";
import renderer from "react-test-renderer"

it("render successfully", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Loading />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("Matches snapshot", ()=>{
    const tree = renderer.create(<Loading />).toJSON();
    expect(tree).toMatchSnapshot();
});