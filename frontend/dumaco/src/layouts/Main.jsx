import React from "react";
import Navbar from "../components/navbar/navbar.jsx";
import Sidebar from "../components/sidebar/sidebar.jsx";
import '../styling/main.css';

const Main = ({ children }) => {
    return (
        <>
            <div>
                <Navbar />
                <Sidebar />
            </div>
            <div className="content">{children}</div>
        </>
    );
};

export default Main;
