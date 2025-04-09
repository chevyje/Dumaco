import Style from "./card.module.css"
   

    function Card({H1Stats, icon , pStats, PSoort, children }) {
        
        const Icon = "../../../icons/" + icon + ".svg";

        return(
            <div className={Style.cardContainer}>
                <div className={`${Style.cardContentContainer} ${Style.cardTopRow}`}>
                    <h1 className={Style.cardH1}>{H1Stats}</h1>
                    <p className={Style.cardPStats}>{icon && <img className={Style.btnIcon} src={Icon} alt={"button"}></img>}{pStats}</p>
                </div>
                <div className={Style.cardContentContainer}>
                    <p className={Style.cardPSoort}>{PSoort}</p>
                </div>
                <div className={Style.cardContentContainer}>
                    {children}
                </div>
            </div>
        )
    }

export default Card;