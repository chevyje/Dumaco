import { Navigate } from "react-router-dom";
import {getCookie} from "../Cookies.js";
import {useEffect} from "react";

const ProtectedRoute = ({children, accessLevel}) => {
    const userID = getCookie("userID");
    let accessLevelUser = 0;
    if (!userID) {
        return <Navigate to="/login"/>;
    }

    useEffect(() => {
        const getAccesslevel = async () => {
            try {
                // Request to the server
                const passwordResponse = await fetch(`http://localhost:8080/api/functions/accesslevel/${userID}`, {
                    method: "get",
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                });

                // Response Handling
                const data = await passwordResponse.json();
                accessLevelUser = data[0].accessLevel;
            } catch (e) {
                console.log(e);

            }
        }
        getAccesslevel();
    })

    if (accessLevel && accessLevelUser < accessLevel) {
        return <Navigate to="/unauthorized"/>;
    }

    return children;
};

export default ProtectedRoute;
