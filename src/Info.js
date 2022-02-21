import React from "react";

import bunnyb from "./image/bunnyb.png"
export default function Info() {
    function refreshPage() {
    window.location.reload(false);
  }
    return (
       <div className="InfoBox">
         
        
          <div className="userinfo">
             <h1>User</h1>
              <div id= "chara-image">
                <img src={bunnyb} alt="aiCard" width="220" height="220"/>
              
            </div>
             <h2>Your Diamonds: 10</h2>
             <h2>Your Blood: 10</h2>
             <button onClick={refreshPage}>Start a New Game</button>
          </div>
      
       </div>
       
    )
}