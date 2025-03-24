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
            { id: 3, name: "Tobias", lastLogin: "18" },
            { id: 4, name: "Henk", lastLogin: "38" },
            { id: 5, name: "Tasdasdasdasd", lastLogin: "300"},
            { id: 6, name: "Tobias", lastLogin: "18" },
            { id: 7, name: "Henk", lastLogin: "38" },
            { id: 8, name: "Tasdasdasdasd", lastLogin: "300"},
            { id: 9, name: "Tobias", lastLogin: "18" },
            { id: 10, name: "Henk", lastLogin: "38" },
            { id: 11, name: "Tasdasdasdasd", lastLogin: "300"},
            { id: 12, name: "Tobias", lastLogin: "18" },
            { id: 13, name: "Henk", lastLogin: "38" },
            { id: 14, name: "Tasdasdasdasd", lastLogin: "300"},
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
                    title="test"
                />
                <Table
                    columns={state.columns}
                    columnsToHide={state.columnsToHide}
                    data={state.results}
                    primaryColor="#0D20E7"
                    secondaryColor="#E1ECFF"
                    tertiareColor="#A8C3FF"
                    columnAlignments={columnAlignments}
                />
                <Table
                    columns={state.columns}
                    columnsToHide={state.columnsToHide}
                    data={state.results}
                    primaryColor="#0D20E7"
                    secondaryColor="#E1ECFF"
                    tertiareColor="#A8C3FF"
                    columnAlignments={columnAlignments}
                />
                <Table
                    columns={state.columns}
                    columnsToHide={state.columnsToHide}
                    data={state.results}
                    primaryColor="#0D20E7"
                    secondaryColor="#E1ECFF"
                    tertiareColor="#A8C3FF"
                    columnAlignments={columnAlignments}
                />
            </div>
        </>
    );
}

export default GebruikersBeheer;
