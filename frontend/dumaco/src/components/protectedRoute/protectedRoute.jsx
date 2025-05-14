import { Navigate } from "react-router-dom";
import { getCookie } from "../Cookies.js";

const ProtectedRoute = ({ children }) => {
    const userID = getCookie("userID");
    console.log(userID);

    if (!userID) {
        return <Navigate to="/" />;
    }

    return children;
};

export default ProtectedRoute;
