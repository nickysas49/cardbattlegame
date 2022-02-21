import React from "react";
import bunnya from "./image/bunnya.png"

export default function Info() {
    return (
       <div className="AI-InfoBox">

        
          <div className="aiinfo">
             <h1>Ai</h1>
              <div id= "ai-chara-image">
                <img src={bunnya} alt="aiCard" width="220" height="220"/>
              
            </div>
             <h2>Your Diamonds: 10</h2>
             <h2>Your Blood: 10</h2>
          </div>
      
       </div>
       
    )
}