import React from "react";
import { useState } from "react";
import allCardArray from "./Cardbase.js"
import Battlefield from "./Battlefield.js"

var shuffled = allCardArray.sort(function(){return .5 - Math.random()});

var cardArray=shuffled.slice(0,5);

var deck = []

export default function Card({ onAddId,onAddName,onAddCardType,onAddImage,onAddInfo,onAddFee,onAddAttack,onAddLife }) {
    // const [show, toggleShow] = useState(false);
    const [disable0, setDisable0] = React.useState(false);
    const [disable1, setDisable1] = React.useState(false);
    const [disable2, setDisable2] = React.useState(false);
    const [disable3, setDisable3] = React.useState(false);
    const [disable4, setDisable4] = React.useState(false);

  return (
    <div className="handcards">

	<div id="card" disabled={disable0} > 
        <div className= "card-NF">
            <div id="card-name">{cardArray[0]["name"]}</div>
            <div id = "card-fee">{cardArray[0]["fee"]}💎</div>
        </div>

        <div className= "card-info">
            <div id= "card-image">
                <img src={cardArray[0]["image"]} alt="card" width="150" height="100"/>
            </div>
            <div id="card-details">{cardArray[0]["info"]}</div>
        </div>

        <div className="card-AS">
            <div id = "card-attack">🗡{cardArray[0]["attack"]}</div>
            <div id = "card-strength">{cardArray[0]["life"]}♥</div>
        </div>
        <button onClick={() => {setDisable0(true);onAddId(cardArray[0]["id"]);onAddName(cardArray[0]["name"]);onAddCardType(cardArray[0]["cardType"]);onAddImage(cardArray[0]["image"]);onAddInfo(cardArray[0]["info"]);onAddFee(cardArray[0]["fee"]);onAddAttack(cardArray[0]["attack"]);onAddLife(cardArray[0]["life"])}}>Go Fight!</button>
  
   </div>
   <div id="card" disabled={disable1} >

        <div className= "card-NF">
            <div id="card-name">{cardArray[1]["name"]}</div>
            <div id = "card-fee">{cardArray[1]["fee"]}💎</div>
        </div>

        <div className= "card-info">
            <div id= "card-image">
                <img src={cardArray[1]["image"]} alt="card" width="150" height="100"/>
            </div>
            <div id="card-details">{cardArray[1]["info"]}</div>
        </div>

        <div className="card-AS">
            <div id = "card-attack">🗡{cardArray[1]["attack"]}</div>
            <div id = "card-strength">{cardArray[1]["life"]}♥</div>
        </div>
        <button onClick={() => {setDisable0(true);onAddId(cardArray[1]["id"]);onAddName(cardArray[1]["name"]);onAddCardType(cardArray[1]["cardType"]);onAddImage(cardArray[1]["image"]);onAddInfo(cardArray[1]["info"]);onAddFee(cardArray[1]["fee"]);onAddAttack(cardArray[1]["attack"]);onAddLife(cardArray[1]["life"])}}>Go Fight!</button>
   </div>
   <div id="card" disabled={disable2} >

        <div className= "card-NF">
            <div id="card-name">{cardArray[2]["name"]}</div>
            <div id = "card-fee">{cardArray[2]["fee"]}💎</div>
        </div>

        <div className= "card-info">
            <div id= "card-image">
                <img src={cardArray[2]["image"]} alt="card" width="150" height="100"/>
            </div>
            <div id="card-details">{cardArray[2]["info"]}</div>
        </div>

        <div className="card-AS">
            <div id = "card-attack">🗡{cardArray[2]["attack"]}</div>
            <div id = "card-strength">{cardArray[2]["life"]}♥</div>
        </div>
        <button onClick={() => {setDisable0(true);onAddId(cardArray[2]["id"]);onAddName(cardArray[2]["name"]);onAddCardType(cardArray[2]["cardType"]);onAddImage(cardArray[2]["image"]);onAddInfo(cardArray[2]["info"]);onAddFee(cardArray[2]["fee"]);onAddAttack(cardArray[2]["attack"]);onAddLife(cardArray[2]["life"])}}>Go Fight!</button>
   </div>
   <div id="card" disabled={disable3} >

        <div className= "card-NF">
            <div id="card-name">{cardArray[3]["name"]}</div>
            <div id = "card-fee">{cardArray[3]["fee"]}💎</div>
        </div>

        <div className= "card-info">
            <div id= "card-image">
                <img src={cardArray[3]["image"]} alt="card" width="150" height="100"/>
            </div>
            <div id="card-details">{cardArray[3]["info"]}</div>
        </div>

        <div className="card-AS">
            <div id = "card-attack">🗡{cardArray[3]["attack"]}</div>
            <div id = "card-strength">{cardArray[3]["life"]}♥</div>
        </div>
        <button onClick={() => {setDisable0(true);onAddId(cardArray[3]["id"]);onAddName(cardArray[3]["name"]);onAddCardType(cardArray[3]["cardType"]);onAddImage(cardArray[3]["image"]);onAddInfo(cardArray[3]["info"]);onAddFee(cardArray[3]["fee"]);onAddAttack(cardArray[3]["attack"]);onAddLife(cardArray[3]["life"])}}>Go Fight!</button>
   </div>
   <div id="card" disabled={disable4}>

        <div className= "card-NF">
            <div id="card-name">{cardArray[4]["name"]}</div>
            <div id = "card-fee">{cardArray[4]["fee"]}💎</div>
        </div>

        <div className= "card-info">
            <div id= "card-image">
                <img src={cardArray[4]["image"]} alt="card" width="150" height="100"/>
            </div>
            <div id="card-details">{cardArray[4]["info"]}</div>
        </div>

        <div className="card-AS">
            <div id = "card-attack">🗡{cardArray[4]["attack"]}</div>
            <div id = "card-strength">{cardArray[4]["life"]}♥</div>
        </div>
        <button onClick={() => {setDisable0(true);onAddId(cardArray[4]["id"]);onAddName(cardArray[4]["name"]);onAddCardType(cardArray[4]["cardType"]);onAddImage(cardArray[4]["image"]);onAddInfo(cardArray[4]["info"]);onAddFee(cardArray[4]["fee"]);onAddAttack(cardArray[4]["attack"]);onAddLife(cardArray[4]["life"])}}>Go Fight!</button> 
   </div>
   </div>

   
);
}


