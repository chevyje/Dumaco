import { useState } from "react";
import Table from "../components/table.jsx";
import { useNavigate } from "react-router-dom";

function GebruikersBeheer() {
    const navigate = useNavigate(); // Zorg ervoor dat navigate correct gedeclareerd is

    const [state, setState] = useState({
        results: [
            { name: "Tobias", lastLogin: "18" },
            { name: "Henk", lastLogin: "38" },
            { name: "Tasdasdasdasd", lastLogin: "300" },
        ]
    });

    function showUserEdit() {
        navigate("/gebruikersbeheeredit");
    }

    return (
        <>
            <div className="table-container">
                <Table
                    jsonData={state.results}
                    title={"test"}
                    showUserEdit={true}
                    showPencil={true}
                    editPageFunction={showUserEdit}
                />
            </div>
        </>
    );
}

export default GebruikersBeheer;
