import Main from "./layouts/Main.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import KlantOverzicht from "./pages/klantOverzicht.jsx";
import GebruikersBeheer from "./pages/gebruikersBeheer.jsx";
import GebruikersBeheerEdit from "./pages/gebruikersBeheerEdit.jsx";
import TeamsBeheer from "./pages/TeamsBeheer.jsx";


const App = () => {
    return (
        <Router>
            <Main>
                <Routes>
                    <Route path="/klantoverzicht" element={<KlantOverzicht />} />
                    <Route path="/gebruikersbeheer" element={<GebruikersBeheer />} />
                    <Route path="/gebruikersbeheeredit" element={<GebruikersBeheerEdit/>} />
                    <Route path="/TeamsBeheer" element={<TeamsBeheer/>} />

                </Routes>
            </Main>
        </Router>
    );
};

export default App;
