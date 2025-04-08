import Style from "./card.module.css"
   

    function Card({ children }) {
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
                    {children}
                </div>
            </div>
        )
    }

export default Card;