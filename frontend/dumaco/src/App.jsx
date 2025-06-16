import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute/protectedRoute.jsx";
import KlantOverzicht from "./pages/klantOverzicht/klantOverzicht.jsx";
import KlantenOverzicht from "./pages/klantenOverzicht/klantenOverzicht.jsx";
import GebruikersBeheer from "./pages/gebruikersBeheer/gebruikersBeheer.jsx";
import GebruikersBeheerEdit from "./pages/gebruikersBeheerEdit/gebruikersBeheerEdit.jsx";
import TeamsBeheer from "./pages/teamBeheer/TeamsBeheer.jsx";
import TeamsBeheerEdit from "./pages/teamBeheerEdit/TeamsBeheerEdit.jsx";
import Instellingen from "./pages/instellingen/instellingen.jsx";
import InkoopPagina from "./pages/inkoopPagina/inkoopPagina.jsx";
import OrderbonnenKantoor from "./pages/orderbonnenKantoor/orderbonnenKantoor.jsx";
import OrderbonKantoor from "./pages/orderbonKantoor/orderbonKantoor.jsx";
import InlogPagina from "./pages/InlogPagina/InlogPagina.jsx";
import HomePagina from "./pages/HomePagina/HomePagina.jsx";
import InkoopPaginaBewerken from "./pages/inkoopPaginaBewerken/inkoopPaginaBewerken.jsx";
import ProductAanmaken from "./pages/ProductAanmaken/ProductAanmaken.jsx";
import TaakInzicht from "./pages/taakInzicht/TaakInzicht.jsx";
import ProductBewerkingen from "./pages/productBewerkingen/productBewerkingen.jsx";
import NoPageFound from "./pages/noPageFound/noPageFound.jsx";
import OrderAanmaken from "./pages/orderAanmaken/orderAanmaken.jsx";
import KlantAanmaken from "./pages/klantAanmaken/klantAanmaken.jsx";
import PalletAanmaken from "./pages/palletAanmaken/palletAanmaken.jsx";
import Unauthorized from "./pages/noAccess/noAccess.jsx";

const App = () => {
    return (
        <Router>
            <Routes>
                {/*Public routes*/}
                <Route path="/login" element={<InlogPagina />} />

                {/*Private Routes*/}
                {/*Klant routes*/}
                <Route path="/klanten" element={<ProtectedRoute> <KlantenOverzicht /> </ProtectedRoute>} />
                <Route path="/klanten/klant" element={<ProtectedRoute> <KlantOverzicht /> </ProtectedRoute>} />
                <Route path="/klanten/aanmaken" element={<ProtectedRoute> <KlantAanmaken /> </ProtectedRoute>} />

                {/*Beheer Routes*/}
                <Route path="/gebruikersbeheer" element={<ProtectedRoute accessLevel={20}> <GebruikersBeheer /> </ProtectedRoute>} />
                <Route path="/gebruikersbeheer/edit" element={<ProtectedRoute> <GebruikersBeheerEdit /> </ProtectedRoute>} />
                <Route path="/TeamsBeheer" element={<ProtectedRoute> <TeamsBeheer /> </ProtectedRoute>} />
                <Route path="/TeamsBeheerEdit" element={<ProtectedRoute> <TeamsBeheerEdit /> </ProtectedRoute>} />

                {/*Order Routes*/}
                <Route path="/orders" element={<ProtectedRoute> <OrderbonnenKantoor /> </ProtectedRoute>} />
                <Route path="/orders/order" element={<ProtectedRoute> <OrderbonKantoor /> </ProtectedRoute>} />
                <Route path="/orders/order/product" element={<ProductBewerkingen />}/>
                <Route path="/orders/order/product/taak" element={<TaakInzicht />}/>
                <Route path="/orders/aanmaken" element={<OrderAanmaken />}/>

                {/*Overige Routes*/}
                <Route path="/inkoop" element={<ProtectedRoute> <InkoopPagina /> </ProtectedRoute>} />
                <Route path="/inkoop/edit" element={<ProtectedRoute> <InkoopPaginaBewerken /> </ProtectedRoute>} />
                <Route path="/instellingen" element={<ProtectedRoute> <Instellingen /> </ProtectedRoute>} />
                <Route path="/home" element={<ProtectedRoute> <HomePagina /> </ProtectedRoute>} />
                <Route path="/product/aanmaken" element={<ProtectedRoute> <ProductAanmaken /> </ProtectedRoute>} />
                <Route path="pallet/aanmaken" element={<ProtectedRoute> <PalletAanmaken /> </ProtectedRoute>} />

                {/*No Route Found*/}
                <Route path="*" element={<ProtectedRoute> <NoPageFound /> </ProtectedRoute>}/>
                <Route path="/unauthorized" element={<ProtectedRoute> <Unauthorized /> </ProtectedRoute>} />
            </Routes>
        </Router>
    );
};

export default App;
