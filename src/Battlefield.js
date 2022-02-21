
export default function Battlefield({battleCardId,battleCardName,battleCardCardType,battleCardImage,battleCardInfo,battleCardFee,battleCardAttack,battleCardLife}) {

    return(
    <div id="userbattle">
      
      <div id="card">
        
        <div className= "card-NF">
            <div id="card-name">{battleCardName}</div>
            <div id = "card-fee">{battleCardFee}💎</div>
        </div>

        <div className= "card-info">
            <div id= "usercard-image">
                <img src={battleCardImage} alt="card" width="150" height="100"/>
            </div>
            <div id="card-details">{battleCardInfo}</div>
        </div>

        <div className="card-AS">
            <div id = "card-attack">🗡{battleCardAttack}</div>
            <div id = "card-strength">{battleCardLife}♥</div>
        </div>
      </div>
    </div>
    
    )
}
 