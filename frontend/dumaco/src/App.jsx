import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import KlantOverzicht from "./pages/klantOverzicht/klantOverzicht.jsx";
import KlantenOverzicht from "./pages/klantenOverzicht/klantenOverzicht.jsx";
import GebruikersBeheer from "./pages/gebruikersBeheer/gebruikersBeheer.jsx";
import GebruikersBeheerEdit from "./pages/gebruikersBeheerEdit/gebruikersBeheerEdit.jsx";
import TeamsBeheer from "./pages/teamBeheer/TeamsBeheer.jsx";
import OrderbonnenFabriek from "./pages/orderbonnenFabriek/orderbonnenFabriek.jsx";
import TeamsBeheerEdit from "./pages/teamBeheerEdit/TeamsBeheerEdit.jsx";
import Instellingen from "./pages/instellingen/instellingen.jsx";
import OrderbonnenKantoor from "./pages/orderbonnenKantoor/orderbonnenKantoor.jsx";
import OrderbonKantoor from "./pages/orderbonKantoor/orderbonKantoor.jsx";
import InlogPagina from "./pages/InlogPagina/InlogPagina.jsx";
import HomePagina from "./pages/HomePagina/HomePagina.jsx";
import ProductAanmaak from "./pages/productAanmaak/productAanmaak.jsx";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/klantoverzicht" element={<KlantOverzicht />} />
                {/* css problemen */}

                <Route path="/klantenoverzicht" element={<KlantenOverzicht />} />
                {/* styling error en paginator werkt niet goed */}

                <Route path="/gebruikersbeheer" element={<GebruikersBeheer />} />
                {/* styling error */}

                <Route path="/gebruikersbeheeredit" element={<GebruikersBeheerEdit/>} />
                {/* witte pagina */}

                <Route path="/TeamsBeheer" element={<TeamsBeheer/>} />
                {/* css error */}

                <Route path="/orderbonnenfabriek" element={<OrderbonnenFabriek />} />
                {/* css error */}

                <Route path="/TeamsBeheerEdit" element={<TeamsBeheerEdit/>} />
                {/* witte pagina */}

                <Route path="/" element={<InlogPagina />} />
                {/* styling error */}

                <Route path="/instellingen" element={<Instellingen />} />
                {/* witte pagina */}

                <Route path="/orderbonnenkantoor" element={<OrderbonnenKantoor />} />
                {/* css error */}

                <Route path="/orderbonkantoor" element={<OrderbonKantoor />} />
                {/* css error */}

                <Route path="/home" element={<HomePagina />} />

                <Route path="/productAanmaak" element={<ProductAanmaak />} />

            </Routes>
        </Router>
    );
};

export default App;
