import Logo from '../assets/logo.png';
import Profile from '../assets/profiel.png';
import '../styling/navbar.css'

function navbar() {
    return (
        <div id="navbar">
            <img id="logo" src={Logo} alt="Logo"/>
            <div className="team">
                <div className="teamSymbol">
                    <h2>B</h2>
                </div>
                <h4>Blauw</h4>
            </div>

            <h1>Lely Industries #32500030</h1>
            <img id="profiel" src={Profile} alt="Profiel"/>
        </div>
    );
}

export default navbar;