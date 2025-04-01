import React from "react";
import '../styling/main.css';

const Main = ({ children }) => {
    return (
        <>
            <div className="content">{children}</div>
        </>
    );
};

export default Main;
