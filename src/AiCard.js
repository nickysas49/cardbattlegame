import React from "react";
import { useState } from "react";
import allCardArray from "./Cardbase.js"
import AiBattlefield from "./AiBattlefield.js"

var shuffled = allCardArray.sort(function(){return .5 - Math.random()});

var aiCardArray=shuffled.slice(0,5);

var deck = []

export default function AiCard({ onAddId,onAddName,onAddCardType,onAddImage,onAddInfo,onAddFee,onAddAttack,onAddLife }) {
    // const [show, toggleShow] = useState(false);
    const [disable0, setDisable0] = React.useState(false);
    const [disable1, setDisable1] = React.useState(false);
    const [disable2, setDisable2] = React.useState(false);
    const [disable3, setDisable3] = React.useState(false);
    const [disable4, setDisable4] = React.useState(false);

  return (
    <div className="handaiCards">
    <button onClick={() => {setDisable0(true);onAddId(aiCardArray[0]["id"]);onAddName(aiCardArray[0]["name"]);onAddCardType(aiCardArray[0]["aiCardType"]);onAddImage(aiCardArray[0]["image"]);onAddInfo(aiCardArray[0]["info"]);onAddFee(aiCardArray[0]["fee"]);onAddAttack(aiCardArray[0]["attack"]);onAddLife(aiCardArray[0]["life"])}}>Ai Fight!</button>

	<div id="aiCard" disabled={disable0} > 
        <div className= "aiCard-NF">
            <div id="aiCard-name">{aiCardArray[0]["name"]}</div>
            <div id = "aiCard-fee">{aiCardArray[0]["fee"]}💎</div>
        </div>

        <div className= "aiCard-info">
            <div id= "aiCard-image">
                <img src={aiCardArray[0]["image"]} alt="aiCard" width="150" height="100"/>
            </div>
            <div id="aiCard-details">{aiCardArray[0]["info"]}</div>
        </div>

        <div className="aiCard-AS">
            <div id = "aiCard-attack">🗡{aiCardArray[0]["attack"]}</div>
            <div id = "aiCard-strength">{aiCardArray[0]["life"]}♥</div>
        </div>
  
   </div>
   <div id="aiCard" disabled={disable1} >

        <div className= "aiCard-NF">
            <div id="aiCard-name">{aiCardArray[1]["name"]}</div>
            <div id = "aiCard-fee">{aiCardArray[1]["fee"]}💎</div>
        </div>

        <div className= "aiCard-info">
            <div id= "aiCard-image">
                <img src={aiCardArray[1]["image"]} alt="aiCard" width="150" height="100"/>
            </div>
            <div id="aiCard-details">{aiCardArray[1]["info"]}</div>
        </div>

        <div className="aiCard-AS">
            <div id = "aiCard-attack">🗡{aiCardArray[1]["attack"]}</div>
            <div id = "aiCard-strength">{aiCardArray[1]["life"]}♥</div>
        </div>
       
   </div>
   <div id="aiCard" disabled={disable2} >

        <div className= "aiCard-NF">
            <div id="aiCard-name">{aiCardArray[2]["name"]}</div>
            <div id = "aiCard-fee">{aiCardArray[2]["fee"]}💎</div>
        </div>

        <div className= "aiCard-info">
            <div id= "aiCard-image">
                <img src={aiCardArray[2]["image"]} alt="aiCard" width="150" height="100"/>
            </div>
            <div id="aiCard-details">{aiCardArray[2]["info"]}</div>
        </div>

        <div className="aiCard-AS">
            <div id = "aiCard-attack">🗡{aiCardArray[2]["attack"]}</div>
            <div id = "aiCard-strength">{aiCardArray[2]["life"]}♥</div>
        </div>
        
   </div>
   <div id="aiCard" disabled={disable3} >

        <div className= "aiCard-NF">
            <div id="aiCard-name">{aiCardArray[3]["name"]}</div>
            <div id = "aiCard-fee">{aiCardArray[3]["fee"]}💎</div>
        </div>

        <div className= "aiCard-info">
            <div id= "aiCard-image">
                <img src={aiCardArray[3]["image"]} alt="aiCard" width="150" height="100"/>
            </div>
            <div id="aiCard-details">{aiCardArray[3]["info"]}</div>
        </div>

        <div className="aiCard-AS">
            <div id = "aiCard-attack">🗡{aiCardArray[3]["attack"]}</div>
            <div id = "aiCard-strength">{aiCardArray[3]["life"]}♥</div>
        </div>
        
   </div>
   <div id="aiCard" disabled={disable4}>

        <div className= "aiCard-NF">
            <div id="aiCard-name">{aiCardArray[4]["name"]}</div>
            <div id = "aiCard-fee">{aiCardArray[4]["fee"]}💎</div>
        </div>

        <div className= "aiCard-info">
            <div id= "aiCard-image">
                <img src={aiCardArray[4]["image"]} alt="aiCard" width="150" height="100"/>
            </div>
            <div id="aiCard-details">{aiCardArray[4]["info"]}</div>
        </div>

        <div className="aiCard-AS">
            <div id = "aiCard-attack">🗡{aiCardArray[4]["attack"]}</div>
            <div id = "aiCard-strength">{aiCardArray[4]["life"]}♥</div>
        </div>
        
   </div>
   </div>

   
);
}
