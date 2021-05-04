import React from "react";

function Transaction({ transaction }) {
  //Later to be updated with result of the calculations or values from trasactions.
  const change = 1.92 + "%";
  const currentvalue = "$" + (7641.75).toLocaleString("en-US");
  const balance = (43761.121).toLocaleString("en-US") + " POND . $" + 0.17;
  const profitpercent = 2.32;
  const profit =
    (profitpercent >= 0 ? "+" : "-") +
    profitpercent +
    "%" +
    "($" +
    173.13 +
    ")";

  return (
    <div className="Content">
      <img src={transaction.logo_url} alt="" />
      <div className="TransactionDetails">
        <div>
          <p>
            {transaction.contract_name}{" "}
            <span className="Highlight">{change}</span>
          </p>
          <p>{currentvalue}</p>
        </div>
        <div>
          <p style={{ color: "#576574" }}>{balance}</p>
          <p style={{ color: "#1dd1a1" }}>{profit}</p>
        </div>
      </div>
    </div>
  );
}

export default Transaction;
