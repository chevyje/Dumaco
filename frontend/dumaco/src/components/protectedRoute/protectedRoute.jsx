import { Navigate } from "react-router-dom";
import { getCookie } from "../Cookies.js";

const ProtectedRoute = ({ children, accessLevel }) => {
    const userID = getCookie("userID");
    const accessLevelUser = getCookie("accessLevel");

    if (!userID) {
        return <Navigate to="/login" />;
    }

    if(accessLevel && accessLevelUser < accessLevel) {
        return <Navigate to="/unauthorized" />;
    }

    return children;
};

export default ProtectedRoute;
