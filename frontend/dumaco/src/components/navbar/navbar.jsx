import Logo from '../../assets/logo.png';
import Profile from '../../assets/profiel.png';
import Style from  './navbar.module.css';
import { NavLink } from 'react-router-dom';

function Navbar({ title, route }) {
    return (
        <>
            <div className={Style.navbar}>
                <img className={Style.logo} src={Logo} alt="Bedrijfslogo" />
                <div className={Style.team}>
                    <div className={Style.teamSymbol}>
                        <h2>B</h2>
                    </div>
                    <h4>Blauw</h4>
                </div>

                <h1>{title}</h1>
                <img className={Style.profile} src={Profile} alt="Profielafbeelding" />
            </div>
            <div className={Style.subnavbar}>
                <h5>{route}</h5>
                <div className={Style.navLinks}>
                    <NavLink to="/home" className={Style.subnavbarButton} activeClassName={Style.active}>
                        Home
                    </NavLink>
                    <NavLink to="/klantenoverzicht" className={Style.subnavbarButton} activeClassName={Style.active}>
                        Klanten
                    </NavLink>
                    <NavLink to="/orderbonnenkantoor" className={Style.subnavbarButton} activeClassName={Style.active}>
                        Orderbonnen
                    </NavLink>
                    <NavLink to="/gebruikersbeheer" className={Style.subnavbarButton} activeClassName={Style.active}>
                        Gebruikers
                    </NavLink>
                </div>
            </div>
        </>
    );
}

export default Navbar;
