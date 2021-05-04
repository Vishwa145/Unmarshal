import React, {useEffect, useState} from 'react';
import Switch from "./Switch/Switch";
import Transaction from "./Transaction/Transaction";
import Loading from "./Loading/Loading";

function TransactionTable (){

    const [transaction, changeTransactions] = useState([]);

    useEffect(
        ()=>{
            fetch("https://stg-api.unmarshal.io/v1/ethereum/address/0xfc43f5f9dd45258b3aff31bdbe6561d97e8b71de/assets?auth_key=VGVtcEtleQ==")
            .then(function (response) {
                if (response.status !== 200) {
                console.log(
                    "Looks like there was a problem. Status Code: " + response.status
                );
                return;
                }

                // Examine the text in the response
                response.json().then(function (data) {
                    changeTransactions(data);
                    console.log(data);
                });
            })
            .catch(function (err) {
                console.log("Fetch Error :-S", err);
            });
        },[]);

    return(
        <div className = "Container">
            <Switch />
            {transaction.length===0? <Loading />:transaction.map((item, index)=>{return <Transaction key={"Transaction_id:" + index} transaction={item}/>})}
        </div>
    );
}

export default TransactionTable;
