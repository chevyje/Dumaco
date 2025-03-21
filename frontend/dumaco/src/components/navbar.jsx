import Logo from '../assets/logo.png';
import Profile from '../assets/profiel.png';
import '../styling/navbar.css'

function Navbar({title, route}){
    return (
        <>
        <div className="navbar">
            <img className="logo" src={Logo} alt="Bedrijfslogo"/>
            <div className="team">
                <div className="teamSymbol">
                    <h2>B</h2>
                </div>
                <h4>Blauw</h4>
            </div>

            <h1>{title}</h1>
            <img className="profile" src={Profile} alt="Profielafbeelding"/>
        </div>
        <h5>{route}</h5>
        </>
    );
};

export default Navbar;