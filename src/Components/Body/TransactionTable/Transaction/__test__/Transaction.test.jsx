import React from "react";
import ReactDOM from "react-dom";
import Transaction from "../Transaction";
import {cleanup} from "@testing-library/react";
import renderer from "react-test-renderer"

const transaction1 = {
    contract_name: "USD Coin",
    contract_ticker_symbol: "USDC",
    contract_decimals: 6,
    contract_address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    coin: 60,
    type: "ERC20",
    balance: "20247689228",
    quote: 20247.689228,
    quote_rate: 1,
    logo_url: "https://assets.unmarshal.io/tokens/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48.png"
};

const transaction2 = {
    contract_name: "ETH Price Action Candlestick Set",
    contract_ticker_symbol: "ETHPA",
    contract_decimals: 18,
    contract_address: "0x09E4BDFb273245063eF5E800D891eFF7d04f9B83",
    coin: 60,
    type: "ERC20",
    balance: "100000000000000000",
    quote: 234.51500000000001,
    quote_rate: 2345.15,
    logo_url: "https://assets.unmarshal.io/tokens/0x09E4BDFb273245063eF5E800D891eFF7d04f9B83.png"
};

afterEach(cleanup);
it("render successfully", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Transaction transaction={transaction1}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("render successfully", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Transaction transaction={transaction2}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

it("Matches snapshot", ()=>{
    const tree = renderer.create(<Transaction transaction={transaction1}/>).toJSON();
    expect(tree).toMatchSnapshot();
});

it("Matches snapshot", ()=>{
    const tree = renderer.create(<Transaction transaction={transaction2}/>).toJSON();
    expect(tree).toMatchSnapshot();
});