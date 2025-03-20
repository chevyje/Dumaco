import React from "react";
import Navbar from "../components/navbar.jsx";
import Sidebar from "../components/sidebar.jsx";

const Main = ({ children }) => {
    return (
        <div>
            <Navbar />
            <Sidebar />
            <div className="content">{children}</div>
        </div>
    );
};

export default Main;
