import Dumacologoo from '../../assets/Dumacologoo.png';
import Profile from '../../assets/profiel.png';
import Style from  './navbar.module.css';
import {Link, NavLink, useNavigate} from 'react-router-dom';
import {Breadcrumbs} from "@mui/material";

function Navbar({ title, route }) {
    const navigate = useNavigate();


    const handleProfileClick = () => {
        navigate('/instellingen');
    }

    const handleLogoClick = () => {
        navigate('/home');
    }

    return (
        <>
            <div className={Style.navbar}>
                <img className={Style.logo} src={Dumacologoo} alt="Bedrijfslogo" onClick={handleLogoClick}/>
                <div className={Style.team}>
                    <div className={Style.teamSymbol}>
                        <h2>B</h2>
                    </div>
                    <h4>Blauw</h4>
                </div>

                <h1>{title}</h1>
                <img className={Style.profile} src={Profile} alt="Profielafbeelding" onClick={handleProfileClick}/>
            </div>
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
                    <NavLink to="/gebruikersbeheer" className={Style.subnavbarButton} activeClassName={Style.active}>
                        Gebruikers
                    </NavLink>
                </div>
            </div>
        </>
    );
}

export default Navbar;
