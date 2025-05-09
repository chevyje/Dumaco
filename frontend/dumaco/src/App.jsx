import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import KlantOverzicht from "./pages/klantOverzicht/klantOverzicht.jsx";
import KlantenOverzicht from "./pages/klantenOverzicht/klantenOverzicht.jsx";
import GebruikersBeheer from "./pages/gebruikersBeheer/gebruikersBeheer.jsx";
import GebruikersBeheerEdit from "./pages/gebruikersBeheerEdit/gebruikersBeheerEdit.jsx";
import TeamsBeheer from "./pages/teamBeheer/TeamsBeheer.jsx";
import OrderbonnenFabriek from "./pages/orderbonnenFabriek/orderbonnenFabriek.jsx";
import TeamsBeheerEdit from "./pages/teamBeheerEdit/TeamsBeheerEdit.jsx";
import Instellingen from "./pages/instellingen/instellingen.jsx";
import InkoopPagina from "./pages/inkoopPagina/inkoopPagina.jsx";
import OrderbonnenKantoor from "./pages/orderbonnenKantoor/orderbonnenKantoor.jsx";
import OrderbonKantoor from "./pages/orderbonKantoor/orderbonKantoor.jsx";
import InlogPagina from "./pages/InlogPagina/InlogPagina.jsx";
import HomePagina from "./pages/HomePagina/HomePagina.jsx";
import InkoopPaginaBewerken from "./pages/inkoopPaginaBewerken/inkoopPaginaBewerken.jsx";
import Producten from "./pages/producten/producten.jsx"
import Productaanmaken from "./pages/ProductAanmaken/ProductAanmaken.jsx";
import TaakInzicht from "./pages/taakInzicht/TaakInzicht.jsx";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/klanten/klant" element={<KlantOverzicht />} />
                <Route path="/klanten" element={<KlantenOverzicht />} />
                <Route path="/gebruikersbeheer" element={<GebruikersBeheer />} />
                <Route path="/gebruikersbeheer/edit" element={<GebruikersBeheerEdit/>} />
                <Route path="/TeamsBeheer" element={<TeamsBeheer/>} />
                <Route path="/orderbonnenfabriek" element={<OrderbonnenFabriek />} />
                <Route path="/TeamsBeheerEdit" element={<TeamsBeheerEdit/>} />
                <Route path="/inkoop" element={<InkoopPagina/>}/>
                <Route path="/inkoop/edit" element={<InkoopPaginaBewerken/>}/>
                <Route path="/instellingen" element={<Instellingen />} />
                <Route path="/orderbonnenkantoor" element={<OrderbonnenKantoor />} />
                <Route path="/orderbonnenkantoor/order" element={<OrderbonKantoor />} />
                <Route path="/producten" element={<Producten />} />
                <Route path="/home" element={<HomePagina />} />
                <Route path="/" element={<InlogPagina />} />
                <Route path="/productaanmaken" element={<Productaanmaken/>}/>
                <Route path="/producten/taak" element={<TaakInzicht />}/>


            </Routes>
        </Router>
    );
};

export default App;
