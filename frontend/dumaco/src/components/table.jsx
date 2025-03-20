import '../styling/table.css'

function Table() {
    return (
        <table>
            <tr>
                <th>Startdatum</th>
                <th>Status</th>
                <th>Werknemer</th>
                <th>Leverdatum</th>
                <th>Klant</th>
                <th>Ordernummer</th>
                <th>
                    <button className="editbtn">add</button>
                </th>
            </tr>
            <tr>
                <td>27-01-2025</td>
                <td>Lassen</td>
                <td>H. Botterboy</td>
                <td>18-03-2025</td>
                <td>Lely Industries N.V.</td>
                <td>32500030</td>
                <td>
                    <button className="editbtn">edit</button>
                </td>
            </tr>
            <tr>
                <td>27-01-2025</td>
                <td>Lassen</td>
                <td>H. Botterboy</td>
                <td>18-03-2025</td>
                <td>Lely Industries N.V.</td>
                <td>32500030</td>
                <td>
                    <button className="editbtn">edit</button>
                </td>
            </tr>
            <tr>
                <td>27-01-2025</td>
                <td>Lassen</td>
                <td>H. Botterboy</td>
                <td>18-03-2025</td>
                <td>Lely Industries N.V.</td>
                <td>32500030</td>
                <td>
                    <button className="editbtn">edit</button>
                </td>
            </tr>
            <tr>
                <td>27-01-2025</td>
                <td>Lassen</td>
                <td>H. Botterboy</td>
                <td>18-03-2025</td>
                <td>Lely Industries N.V.</td>
                <td>32500030</td>
                <td>
                    <button className="editbtn">edit</button>
                </td>
            </tr>
        </table>
    )
}

export default Table;