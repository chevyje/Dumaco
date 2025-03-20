import '../styling/sidebar.css'

function sidebar() {
    return (
        <div className="sidebar">
            <div className="button">
                <a href="#">Team overzicht</a>
            </div>
            <div className="button">
                <a href="#">Statistieken</a>
            </div>
            <div className="button">
                <a className="noborder" href="#">Order Bonnen</a>
            </div>
            <div className="button selected">
                <a className="selected noborder" href="#">Klanten</a>
            </div>
        </div>
    )
}

export default sidebar;