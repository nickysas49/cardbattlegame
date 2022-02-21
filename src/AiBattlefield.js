
export default function Battlefield({battleAiCardId,battleAiCardName,battleAiCardCardType,battleAiCardImage,battleAiCardInfo,battleAiCardFee,battleAiCardAttack,battleAiCardLife}) {

    return(
    <div id="aibattle">
      <div id="aiCard">
        <div className= "aiCard-NF">
            <div id="aiCard-name">{battleAiCardName}</div>
            <div id = "aiCard-fee">{battleAiCardFee}💎</div>
        </div>

        <div className= "aiCard-info">
            <div id= "iCard-image">
                <img src={battleAiCardImage} alt="card" width="150" height="100"/>
            </div>
            <div id="aiCard-details">{battleAiCardInfo}</div>
        </div>

        <div className="aiCard-AS">
            <div id = "aiCard-attack">🗡{battleAiCardAttack}</div>
            <div id = "aiCard-strength">{battleAiCardLife}♥</div>
        </div>
      </div>
    </div>
    
    )
}