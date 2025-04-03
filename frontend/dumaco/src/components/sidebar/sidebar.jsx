import Style from  './sidebar.module.css'

function sidebar({ Overzicht, Statistieken, Orderbonnen, Klanten}) {
    return (
        <div className={Style.sidebar}>
            <div className={Overzicht}>
                <a href="#">Team overzicht</a>
            </div>
            <div className={Statistieken}>
                <a href="#">Statistieken</a>
            </div>
            <div className={Orderbonnen}>
                <a href="#">Order Bonnen</a>
            </div>
            <div className={Klanten}>
                <a className="noborder" href="#">Klanten</a>
            </div>
        </div>
    )
}

export default sidebar;