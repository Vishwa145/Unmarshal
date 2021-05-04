import React from "react";
import ReactDOM from "react-dom";
import TransactionTable from "../TransactionTable";
import renderer from "react-test-renderer"

it("render successfully", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TransactionTable />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("Matches snapshot", ()=>{
    const tree = renderer.create(<TransactionTable />).toJSON();
    expect(tree).toMatchSnapshot();
});