import Style from "./Card.module.css"
   

    function Card() {
        return(
            <div className={Style.cardContainer}>
                <div className={`${Style.cardContentContainer} ${Style.cardTopRow}`}>
                    <h1 className={Style.cardH1}>12</h1>
                    <p className={Style.cardPStats}>7% t.o.v. week</p>
                </div>
                <div className={Style.cardContentContainer}>
                <p className={Style.cardPSoort}>Openstaande orders</p>
                </div>
                <div className={Style.cardContentContainer}>
                <select className={Style.cardOptions}>
                    <option value="">Alle Tijden</option>
                    <option value="vandaag">Vandaag</option>
                    <option value="week">Deze week</option>
                    <option value="maand">Deze maand</option>
                </select>
                </div>
            </div>
        )
    }

export default Card