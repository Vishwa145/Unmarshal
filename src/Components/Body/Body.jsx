import React from 'react';
import Summary from "./Summary/Summary";
import TransactionTable from "./TransactionTable/TransactionTable";


function Body (){
    return(
        <div className="Body">
            <Summary />
            <TransactionTable />
        </div>
    );
}

export default Body;
