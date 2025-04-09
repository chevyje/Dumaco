import Navbar from "../../components/navbar/navbar.jsx";
import Table from "../../components/table/table.jsx";
import Style from "./klantenOverzicht.module.css";
import Sidebar from "../../components/sidebar/sidebar.jsx";
import Paginator from "../../components/paginator/paginator.jsx";

function klantenOverzicht() {
    const data = [
        {"Klant naam": "Lely Industries NV", "Mail": "LelyIndustriesNV@gmail.com", "Nummer": "0612345678", "Laatste Order": "32500030"},
        {"Klant naam": "Velmon BV", "Mail": "VelmonBV@gmail.com", "Nummer": "0612345678", "Laatste Order": "32500031"},
        {"Klant naam": "Aeternus", "Mail": "Aeternus@gmail.com", "Nummer": "0612345678", "Laatste Order": "32500032"},
        {"Klant naam": "Feijen Metaaltechniek", "Mail": "FeijenMetaaltechniek@gmail.com", "Nummer": "0612345678", "Laatste Order": "32500033"},
        {"Klant naam": "Freber metaalbewerking", "Mail": "Frebermetaalbewerking@gmail.com", "Nummer": "0612345678", "Laatste Order": "32500034"},
        {"Klant naam": "Willlems Machinebouw BV", "Mail": "WilllemsMachinebouwBV@gmail.com", "Nummer": "0612345678", "Laatste Order": "32500035"},
        {"Klant naam": "Metaaltechniek Tholen BV", "Mail": "MetaaltechniekTholenBV@gmail.com", "Nummer": "0612345678", "Laatste Order": "32500036"},
        {"Klant naam": "Coppens Metaal - techniek BV", "Mail": "CoppensMetaal-techniekBV@gmail.com", "Nummer": "0612345678", "Laatste Order": "32500037"},
        {"Klant naam": "Goburg Metaalbewerking", "Mail": "GoburgMetaalbewerking@gmail.com", "Nummer": "0612345678", "Laatste Order": "32500038"},
        {"Klant naam": "JMH Metaalbewerking", "Mail": "JMHMetaalbewerking@gmail.com", "Nummer": "0612345678", "Laatste Order": "32500039"},
        {"Klant naam": "Helmondseschroothandel BV", "Mail": "HelmondseschroothandelBV@gmail.com", "Nummer": "0612345678", "Laatste Order": "32500030"},
        {"Klant naam": "Matecs BV", "Mail": "MatecsBV@gmail.com", "Nummer": "0612345678", "Laatste Order": "32500031"},
        {"Klant naam": "Dekkers metaal", "Mail": "Dekkersmetaal@gmail.com", "Nummer": "0612345678", "Laatste Order": "32500032"},
        {"Klant naam": "Brokx - Schalken BV", "Mail": "Brokx-SchalkenBV@gmail.com", "Nummer": "0612345678", "Laatste Order": "32500033"},
        {"Klant naam": "SNL Group", "Mail": "SNLGroup@gmail.com", "Nummer": "0612345678", "Laatste Order": "32500034"},
        {"Klant naam": "A.Brans Metaalbewerking B.V.", "Mail": "A.BransMetaalbewerking B.V.@gmail.com", "Nummer": "0612345678", "Laatste Order": "32500035"},
        {"Klant naam": "Metaalwerken Bergen op Zoom", "Mail": "MetaalwerkenBergenopZoom@gmail.com", "Nummer": "0612345678", "Laatste Order": "32500036"},
        {"Klant naam": "RVS non ferror van Lieshout", "Mail": "RVSnonferrorvanLieshout@gmail.com", "Nummer": "0612345678", "Laatste Order": "32500037"},
        {"Klant naam": "DKH Metaalbewerking", "Mail": "DKHMetaalbewerking@gmail.com", "Nummer": "0612345678", "Laatste Order": "32500038"},
        {"Klant naam": "W.D. Products BV", "Mail": "W.D.ProductsBV@gmail.com", "Nummer": "0612345678", "Laatste Order": "32500039"},
        {"Klant naam": "Roxal Nederland BV", "Mail": "RoxalNederlandBV@gmail.com", "Nummer": "0612345678", "Laatste Order": "32500038"},
        {"Klant naam": "Metalco de Leye", "Mail": "MetalcodeLeye@gmail.com", "Nummer": "0612345678", "Laatste Order": "32500039"}
    ]

    const navigationData = [
        { 0: '/klantoverzicht' },
        { 1: '/klantoverzicht' },
        { 2: '/klantoverzicht' },
        { 3: '/klantoverzicht' },
        { 4: '/klantoverzicht' },
        { 5: '/klantoverzicht' },
        { 6: '/klantoverzicht' },
        { 7: '/klantoverzicht' },
        { 8: '/klantoverzicht' },
        { 9: '/klantoverzicht' },
        { 10: '/klantoverzicht' },
        { 11: '/klantoverzicht' },
        { 12: '/klantoverzicht' },
        { 13: '/klantoverzicht' },
        { 14: '/klantoverzicht' },
        { 15: '/klantoverzicht' },
        { 16: '/klantoverzicht' },
        { 17: '/klantoverzicht' },
        { 18: '/klantoverzicht' },
        { 19: '/klantoverzicht' },
        { 20: '/klantoverzicht' },
        { 21: '/klantoverzicht' }

    ]

    return(
        <>
            <Navbar title={"Klanten"} route={"Klanten"} />
            <div className={Style.table}>
                <Table jsonData={data} navigationData={navigationData} />
            </div>
            {/* <Paginator /> */}
        </>
    )
}

export default klantenOverzicht;