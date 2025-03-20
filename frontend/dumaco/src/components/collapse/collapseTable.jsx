import "../../styling/collapseTable.css"

function Table() {
    return (
        <table>
            <tr>
                <th width="15%">Ordernummer</th>
                <th width="25%">Status</th>
                <th width="20%">Startdatum</th>
                <th width="25%">Leverdatum</th>
                <th width="25%">Gemaakt door</th>
            </tr>
            <tr>
                <td>32500030</td>
                <td>Lassen</td>
                <td>30-01-2025</td>
                <td>18-02-2025</td>
                <td>Frits van den Hogen</td>
            </tr>
            <tr>
                <td>32500031</td>
                <td>Lasersnijden Plaat</td>
                <td>18-02-2025</td>
                <td>07-03-2025</td>
                <td>Jurre Blankers</td>
            </tr>
        </table>
    )
}

export default Table;