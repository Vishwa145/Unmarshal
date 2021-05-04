import React from 'react';
import logo from "../../images/logo.png"
import SearchIcon from "../../images/SearchIcon.svg";

function Header (){
    return(
        <div className="Nav">
            <div className="Logo"><img src={logo} alt="Logo"/><h2>unmarshal</h2></div>
            <div className="SearchBar"><input type="text" placeholder="Search by Address / Txn Hash" name="email"></input><button><img height="100%" src={SearchIcon} alt=""/></button></div>
        </div>
    );
}

export default Header;
