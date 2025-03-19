import '../styling/sidebar.css'

function sidebar() {
    return (
        <div id="sidebar">
            <div className="button">
                <a href="#">Team overzicht</a>
            </div>
            <div className="button">
                <a href="#">Statistieken</a>
            </div>
            <div className="button">
                <a href="#">Order Bonnen</a>
            </div>
            <div className="button">
                <a href="#">Klanten</a>
            </div>
        </div>
    )
}

export default sidebar;