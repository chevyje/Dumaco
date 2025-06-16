import Logo from '../../assets/logo.png';
import Profile from '../../assets/profiel.png';
import Style from  './navbar.module.css';
import {Link, NavLink, useNavigate} from 'react-router-dom';
import {Breadcrumbs} from "@mui/material";
import {getCookie, deleteCookie} from "../Cookies.js";
import {useState} from "react";

function Navbar({ title, route }) {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);

    const handleProfileClick = () => {
        setVisible(!visible);
    }

    const handleLogoClick = () => {
        navigate('/home');
    }

    const Logout = () => {
        deleteCookie("userID");
        window.location.reload();
    }

    return (
        <>
            <div className={Style.navbar}>
                <img className={Style.logo} src={Logo} alt="Bedrijfslogo" onClick={handleLogoClick}/>
                <div className={Style.team}>
                    <div className={Style.teamSymbol}>
                        <h2>B</h2>
                    </div>
                    <h4>Blauw</h4>
                </div>

                <h1>{title}</h1>
                <div className={Style.profile} onClick={handleProfileClick}>
                    <p>J</p>
                </div>
            </div>
            {visible && <div className={Style.profileOnClick}>
                <NavLink to={"/instellingen"} className={Style.profileButton} activeClassName={Style.active}>Instellingen</NavLink>
                <h1 className={Style.profileButton} onClick={Logout}>Afmelden</h1>
            </div>}
            <div className={Style.subnavbar}>
                <Breadcrumbs separator="›" aria-label="breadcrumb">
                    {route.map((crumb, index) =>
                        crumb.path
                            ? <Link key={index} to={crumb.path} underline={"hover"} color={"#FFFFFF"} className={Style.breadLink}>{crumb.label}</Link>
                            : <span key={index} className={Style.breadcrumbSpan}>{crumb.label}</span>
                    )}
                </Breadcrumbs>

                <div className={Style.navLinks}>
                    <NavLink to="/home" className={Style.subnavbarButton} activeClassName={Style.active}>
                        Home
                    </NavLink>
                    <NavLink to="/klanten" className={Style.subnavbarButton} activeClassName={Style.active}>
                        Klanten
                    </NavLink>
                    <NavLink to="/orders" className={Style.subnavbarButton} activeClassName={Style.active}>
                        Orders
                    </NavLink>
                    {getCookie("accessLevel") > 20 && <NavLink to="/gebruikersbeheer" className={Style.subnavbarButton} activeClassName={Style.active}>
                        Gebruikers
                    </NavLink>}
                </div>
            </div>
        </>
    );
}

export default Navbar;
