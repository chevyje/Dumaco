import { useState, useEffect } from "react";
import Table from "../components/table.jsx";

function GebruikersBeheer() {
    const [state, setState] = useState({
        columns: [],
        columnsToHide: ["id"],
        results: [
            { id: 0, name: "Tobias", lastLogin: "18" },
            { id: 1, name: "Henk", lastLogin: "38" },
            { id: 2, name: "Tasdasdasdasd", lastLogin: "300"},
        ]
    });

    const columnAlignments = {
        name: "left",
        lastLogin: "left"
    };

    useEffect(() => {
        if (state.results.length > 0) {
            setState((prevState) => ({
                ...prevState,
                columns: Object.keys(state.results[0])
            }));
        }
    }, [state.results]);

    return (
        <>
            <div className="table-container">
                <Table
                    columns={state.columns}
                    columnsToHide={state.columnsToHide}
                    data={state.results}
                    primaryColor="#0D20E7"
                    secondaryColor="#E1ECFF"
                    tertiareColor="#A8C3FF"
                    columnAlignments={columnAlignments}
                    title="Ontkoppelde gebruikers"
                    showPencil={true}
                    showUserEdit={true}
                />
                <Table
                    columns={state.columns}
                    columnsToHide={state.columnsToHide}
                    data={state.results}
                    primaryColor="#0D20E7"
                    secondaryColor="#E1ECFF"
                    tertiareColor="#A8C3FF"
                    columnAlignments={columnAlignments}
                    showPencil={true}
                    showUserEdit={true}
                    title={"Team Blauw"}
                />
                <Table
                    columns={state.columns}
                    columnsToHide={state.columnsToHide}
                    data={state.results}
                    primaryColor="#0D20E7"
                    secondaryColor="#E1ECFF"
                    tertiareColor="#A8C3FF"
                    columnAlignments={columnAlignments}
                    showPencil={true}
                    showUserEdit={true}
                    title={"Team Blauw"}
                />
                <Table
                    columns={state.columns}
                    columnsToHide={state.columnsToHide}
                    data={state.results}
                    primaryColor="#0D20E7"
                    secondaryColor="#E1ECFF"
                    tertiareColor="#A8C3FF"
                    columnAlignments={columnAlignments}
                    showPencil={true}
                    showUserEdit={true}
                    title={"Team Blauw"}
                />
            </div>
        </>
    );
}

export default GebruikersBeheer;
