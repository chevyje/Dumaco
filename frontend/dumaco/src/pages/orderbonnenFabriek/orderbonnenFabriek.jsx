import Dropdown from "../../components/dropdown/dropdown.jsx";
import Paginator2 from "../../components/paginator/paginator.jsx";
import Paginator from "../../components/paginator/paginator.jsx";
import Table from "../../components/table/table.jsx";
import { useState, useEffect } from "react";

function OrderbonnenFabriek() {
    const [state, setState] = useState({
        columns: [],
        columnsToHide: ["id"],
        results: [
            { startdatum: "27-01-2025", bewerking: "Lassen", werknemer: "H. Botterboy", leverdatum: "18-03-2025", klant: "Lely Industry NV", ordernummer: "32500030" },
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
            { id: 15, name: "Henk", lastLogin: "38" },
            { id: 16, name: "Tasdasdasdasd", lastLogin: "300"},
            { id: 17, name: "Tobias", lastLogin: "18" },
            { id: 18, name: "Henk", lastLogin: "38" },
            { id: 19, name: "Tasdasdasdasd", lastLogin: "300"},
            { id: 20, name: "Tobias", lastLogin: "18" },
            { id: 21, name: "Henk", lastLogin: "38" },
        ]
    });

    const columnAlignments = {
        startdatum: "left",
        bewerking: "left",
        werknemer: "left",
        leverdatum: "left",
        klant: "left",
        ordernummer: "left"
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
            <div className="tableContainer">
                <Table
                    columns={state.columns}
                    columnsToHide={state.columnsToHide}
                    data={state.results}
                    primaryColor="#0D20E7"
                    secondaryColor="#E1ECFF"
                    tertiareColor="#A8C3FF"
                    columnAlignments={columnAlignments}
                    showUserEdit={false}
                />
            </div>
            <Dropdown title="Mijn aangepaste dropdown" options={state.columns} />
            <Paginator />
        </>
    );
}

export default OrderbonnenFabriek;
