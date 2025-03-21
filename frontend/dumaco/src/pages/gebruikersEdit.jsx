import { useState, useEffect } from "react";
import Table from "../components/table.jsx";

function GebruikersEdit() {
    const [state, setState] = useState({
        columns: [],
        columnsToHide: ["id"],
        results: [
            { id: 0, name: "Tobias", age: "18" },
            { id: 1, name: "Henk", age: "38" },
            { id: 2, name: "Tasdasdasdasd", age: "300" }
        ]
    });

    const columnAlignments = {
        name: "left",
        age: "right"
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
            <Table
                columns={state.columns}
                columnsToHide={state.columnsToHide}
                data={state.results}
                primaryColor="#0D20E7"
                secondaryColor="#E1ECFF"
                tertiareColor="#A8C3FF"
                columnAlignments={columnAlignments}
            />
        </>
    );
}

export default GebruikersEdit;
