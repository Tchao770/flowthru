import React from "react";
import UserPanel from "../../components/UserPanel";

import FontAwesomeIcon from 'react-fontawesome'
import logo from "../../img/flow_plain.png";
import "../home/home.css";

function Tests() {
    return (
        <div className="test">
            <link type="text/css" rel="stylesheet" href="https://golden-layout.com/files/latest/css/goldenlayout-dark-theme.css" />
          <header className="test-header">

              <img src={logo} className="home-logo" alt="logo" />
              <h1>Only cool kids come hereeeeeeeeeee</h1>
                <UserPanel 
                    username={"Brett"}
                    />
            </header>
    </div>
  );
}
            

export default Tests;
