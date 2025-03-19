import Main from "./layouts/Main.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import KlantOverzicht from "./pages/klantOverzicht.jsx";
import GebruikersEdit from "./pages/gebruikersEdit.jsx";


const App = () => {
    return (
        <Router>
            <Main>
                <Routes>
                    <Route path="/klantoverzicht" element={<KlantOverzicht />} />
                    <Route path="/gebruikersedit" element={<GebruikersEdit />} />
                </Routes>
            </Main>
        </Router>
    );
};

export default App;
