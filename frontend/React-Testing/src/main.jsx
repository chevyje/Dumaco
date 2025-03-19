import React from 'react';
import { Routes, Route } from 'react-router-dom';

import gebruikersEdit from './pages/gebruikersEdit.jsx';
import klantOverzicht from './pages/klantOverzicht.jsx';

const Main = () => {
    return (
        <Router>
        <Routes>
            <Route exact path='/gebruikersedit' element={gebruikersEdit}></Route>
            <Route exact path='/klantoverzicht' element={klantOverzicht}></Route>
        </Routes>
        </Router>
    );
}

export default Main;