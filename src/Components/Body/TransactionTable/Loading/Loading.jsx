import React, {useEffect, useState} from 'react';

function Loading (){
    const [loading, changeLoading] = useState("...");

    useEffect(()=>{
        let Timer_id = setInterval(()=> {
            changeLoading((prev)=>prev.length===3?"":prev+".");
        }, 500);
        return ()=>{
            clearInterval(Timer_id);
        }
    },[]);
    return(
        <h1>Loading{loading}</h1>
    );
}

export default Loading;
