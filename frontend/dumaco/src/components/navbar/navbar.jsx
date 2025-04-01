import Logo from '../../assets/logo.png';
import Profile from '../../assets/profiel.png';
import './navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar({ title, route }) {
    return (
        <>
            <div className="navbar">
                <img className="logo" src={Logo} alt="Bedrijfslogo" />
                <div className="team">
                    <div className="teamSymbol">
                        <h2>B</h2>
                    </div>
                    <h4>Blauw</h4>
                </div>

                <h1>{title}</h1>
                <img className="profile" src={Profile} alt="Profielafbeelding" />
            </div>
            <div className="subnavbar">
                <h5>{route}</h5>
                <div className="nav-links">
                    <NavLink to="/" className="subnavbar-button" activeClassName="active">
                        Home
                    </NavLink>
                    <NavLink to="/klantenoverzicht" className="subnavbar-button" activeClassName="active">
                        Klanten
                    </NavLink>
                    <NavLink to="/orderbonnenkantoor" className="subnavbar-button" activeClassName="active">
                        Orderbonnen
                    </NavLink>
                    <NavLink to="/statistieken" className="subnavbar-button" activeClassName="active">
                        Statistieken
                    </NavLink>
                </div>
            </div>
        </>
    );
}

export default Navbar;
