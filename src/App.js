import Card from "./Card.js"
import AiCard from "./AiCard.js"
import Info from "./Info.js"
import AiInfo from "./AiInfo.js"
import Battlefield from "./Battlefield.js"
import AiBattlefield from "./AiBattlefield.js"
import { MDBBtnGroup } from 'mdb-react-ui-kit'
import React, { useState } from "react";
import './App.css';
import CustomPopup from "./components/CustomPopup";






function App() {

  let [battleCardId, setBattleCardId] = useState([]);
  const addId = cardId => {
    setBattleCardId([cardId, ...battleCardId])
  }
  let [battleCardName, setBattleCardName] = useState([]);
  const addName = cardName => {
    setBattleCardName([cardName, ...battleCardName])
  }
  let [battleCardCardType, setBattleCardCardType] = useState([]);
  const addCardType = cardCardType => {
    setBattleCardCardType([cardCardType, ...battleCardCardType])
  }
  let [battleCardImage, setBattleCardImage] = useState([]);
  const addImage = cardImage => {
    setBattleCardImage([cardImage, ...battleCardImage])
  }
  let [battleCardInfo, setBattleCardInfo] = useState([]);
  const addInfo = cardInfo => {
    setBattleCardInfo([cardInfo, ...battleCardInfo])
  }
  let [battleCardFee, setBattleCardFee] = useState([]);
  const addFee = cardFee => {
    setBattleCardFee([cardFee, ...battleCardFee])
  }
  let [battleCardAttack, setBattleCardAttack] = useState([]);
  const addAttack = cardAttack => {
    setBattleCardAttack([cardAttack, ...battleCardAttack])
  }
  let [battleCardLife, setBattleCardLife] = useState([]);
  const addLife = cardLife => {
    setBattleCardLife([cardLife, ...battleCardLife])
  }

  let [battleAiCardId, setBattleAiCardId] = useState([]);
  const addAiId = cardId => {
    setBattleAiCardId([cardId, ...battleAiCardId])
  }
  let [battleAiCardName, setBattleAiCardName] = useState([]);
  const addAiName = cardName => {
    setBattleAiCardName([cardName, ...battleAiCardName])
  }
  let [battleAiCardCardType, setBattleAiCardCardType] = useState([]);
  const addAiCardCardType = cardAiCardCardType => {
    setBattleAiCardCardType([cardAiCardCardType, ...battleAiCardCardType])
  }
  let [battleAiCardImage, setBattleAiCardImage] = useState([]);
  const addAiImage = cardImage => {
    setBattleAiCardImage([cardImage, ...battleAiCardImage])
  }
  let [battleAiCardInfo, setBattleAiCardInfo] = useState([]);
  const addAiInfo = cardInfo => {
    setBattleAiCardInfo([cardInfo, ...battleAiCardInfo])
  }
  let [battleAiCardFee, setBattleAiCardFee] = useState([]);
  const addAiFee = cardFee => {
    setBattleAiCardFee([cardFee, ...battleAiCardFee])
  }
  let [battleAiCardAttack, setBattleAiCardAttack] = useState([]);
  const addAiAttack = cardAttack => {
    setBattleAiCardAttack([cardAttack, ...battleAiCardAttack])
  }
  let [battleAiCardLife, setBattleAiCardLife] = useState([]);
  const addAiLife = cardLife => {
    setBattleAiCardLife([cardLife, ...battleAiCardLife])
  }

  const [visibility, setVisibility] = useState(false);

  const popupCloseHandler = () => {
    setVisibility(false);
  };

  function refreshPage() {
    window.location.reload(false);
  }
  
  return (
    <div className="App">
      <div className="card-table">
     
        <div className="AI-infobox">
        <AiInfo/>
        </div>
        <div className="AI-cardholder">
        <AiCard  
          onAddId={addAiId} 
          onAddName={addAiName} 
          onAddCardType={addAiCardCardType} 
          onAddImage={addAiImage} 
          onAddInfo={addAiInfo} 
          onAddFee={addAiFee} 
          onAddAttack={addAiAttack} 
          onAddLife={addAiLife} />/>
        </div>
        <div className="AI-battlefield">
         
          <div>
        <AiBattlefield 
         battleAiCardId={battleAiCardId} 
         battleAiCardName={battleAiCardName} 
         battleAiCardCardType={battleAiCardCardType} 
         battleAiCardImage={battleAiCardImage} 
         battleAiCardInfo={battleAiCardInfo} 
         battleAiCardFee={battleAiCardFee} 
         battleAiCardAttack={battleAiCardAttack} 
         battleAiCardLife={battleAiCardLife} />
         </div>
       
        </div>
        

        <div className="user-infobox">
        <Info/>
        </div>
        <div className="user-cardholder">
          <Card 
          onAddId={addId} 
          onAddName={addName} 
          onAddCardType={addCardType} 
          onAddImage={addImage} 
          onAddInfo={addInfo} 
          onAddFee={addFee} 
          onAddAttack={addAttack} 
          onAddLife={addLife} />
        </div>
        <div className="user-battlefield">
      
          <div>Battle Card Attack: {battleCardAttack}  </div>
          <button onClick={() => setVisibility(true)}>battle</button>
        <CustomPopup
        onClose={popupCloseHandler}
        show={visibility}
        title="Card Battle"
        battleCardName={battleCardName} 
      >
        <h1>{battleCardName} vs {battleAiCardName} </h1>
        <img src={battleCardImage}  alt="aiCard" width="150" height="100"/>
        <h2>Your battle card life is:{battleCardLife} </h2>
        <img src={battleAiCardImage}  alt="aiCard" width="150" height="100"/>
        <h2>AI battle card Attack is:{battleAiCardAttack} </h2>
        <h1>You Win!</h1>
        <button onClick={refreshPage}>Start a New Game</button>
      </CustomPopup>
          <div>Battle Card Life: {battleCardLife}  </div>

          <div>
            <Battlefield 
            battleCardId={battleCardId} 
            battleCardName={battleCardName} 
            battleCardCardType={battleCardCardType} 
            battleCardImage={battleCardImage} 
            battleCardInfo={battleCardInfo} 
            battleCardFee={battleCardFee} 
            battleCardAttack={battleCardAttack} 
            battleCardLife={battleCardLife} />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
