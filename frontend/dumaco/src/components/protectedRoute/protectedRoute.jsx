import { Navigate } from "react-router-dom";
import {getCookie} from "../Cookies.js";
import {useEffect} from "react";
import {authLevel} from "../Requests.js";

const ProtectedRoute = ({children, accessLevel}) => {
    const userID = getCookie("userID");
    let accessLevelUser = 0;
    if (!userID) {
        return <Navigate to="/login"/>;
    }

    useEffect(() => {
        const checkAccessLevel = async () => {
            accessLevelUser = await authLevel(userID);
            if (accessLevel && accessLevelUser < accessLevel) {
                return <Navigate to="/unauthorized"/>;
            }
        }
        checkAccessLevel();
    })

    return children;
};

export default ProtectedRoute;
