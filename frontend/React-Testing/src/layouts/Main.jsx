import React from "react";
import Navbar from "../components/Navbar";
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
