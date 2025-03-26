import React from "react";
import Navbar from "../components/navbar.jsx";
import Sidebar from "../components/sidebar.jsx";
import '../styling/main.css';

const Main = ({ children }) => {
    return (
        <>
            <div>
                <Sidebar />
            </div>
            <div className="content">{children}</div>
        </>
    );
};

export default Main;
