import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute/protectedRoute.jsx";
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
import Productaanmaken from "./pages/ProductAanmaken/ProductAanmaken.jsx";
import TaakInzicht from "./pages/taakInzicht/TaakInzicht.jsx";
import ProductBewerkingen from "./pages/productBewerkingen/productBewerkingen.jsx";
import NoPageFound from "./pages/noPageFound/noPageFound.jsx";
import OrderAanmaken from "./pages/orderAanmaken/orderAanmaken.jsx";

const App = () => {
    return (
        <Router>
            <Routes>
                {/*Public routes*/}
                <Route path="/login" element={<InlogPagina />} />

                {/*Private Routes*/}
                <Route path="/klantoverzicht" element={<ProtectedRoute> <KlantOverzicht /> </ProtectedRoute>} />
                <Route path="/klanten" element={<ProtectedRoute> <KlantenOverzicht /> </ProtectedRoute>} />
                <Route path="/gebruikersbeheer" element={<ProtectedRoute> <GebruikersBeheer /> </ProtectedRoute>} />
                <Route path="/gebruikersbeheer/edit" element={<ProtectedRoute> <GebruikersBeheerEdit /> </ProtectedRoute>} />
                <Route path="/TeamsBeheer" element={<ProtectedRoute> <TeamsBeheer /> </ProtectedRoute>} />
                <Route path="/orderbonnenfabriek" element={<ProtectedRoute> <OrderbonnenFabriek /> </ProtectedRoute>} />
                <Route path="/TeamsBeheerEdit" element={<ProtectedRoute> <TeamsBeheerEdit /> </ProtectedRoute>} />
                <Route path="/inkoop" element={<ProtectedRoute> <InkoopPagina /> </ProtectedRoute>} />
                <Route path="/inkoop/edit" element={<ProtectedRoute> <InkoopPaginaBewerken /> </ProtectedRoute>} />
                <Route path="/instellingen" element={<ProtectedRoute> <Instellingen /> </ProtectedRoute>} />
                <Route path="/orders" element={<ProtectedRoute> <OrderbonnenKantoor /> </ProtectedRoute>} />
                <Route path="/orders/order/:id" element={<ProtectedRoute> <OrderbonKantoor /> </ProtectedRoute>} />
                <Route path="/home" element={<ProtectedRoute> <HomePagina /> </ProtectedRoute>} />
                <Route path="/productaanmaken" element={<ProtectedRoute> <Productaanmaken /> </ProtectedRoute>} />
                <Route path="/orders/order/product" element={<ProductBewerkingen />}/>
                <Route path="/orders/order/product/taak" element={<TaakInzicht />}/>
                <Route path="/orders/aanmaken" element={<OrderAanmaken />}/>
                <Route path="*" element={<ProtectedRoute> <NoPageFound /> </ProtectedRoute>}/>
            </Routes>
        </Router>
    );
};

export default App;
