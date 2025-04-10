import Table from "../../components/collapse/collapseTable.jsx";
import Navbar from "../../components/navbar/navbar.jsx";
import Style from "./klantOverzicht.module.css";

function klantOverzicht() {
    const LopendeOrders = [
        { "Ordernummer": 32500030, "Status": "Lassen", "Startdatum": "30-01-2025", "Leverdatum": "18-02-2025", "Gemaakt door": "Frits van den Hogen" },
        { "Ordernummer": 32500031, "Status": "Lasersnijden", "Startdatum": "18-02-2025", "Leverdatum": "07-03-2025", "Gemaakt door": "Jurre Blankers" },
    ];
    const ToekomstigeOrders = [
        {"Ordernummer": 32500030, "Startdatum": "30-01-2025", "Leverdatum": "18-02-2025", "Gemaakt door": "Frits van den Hogen" },
        { "Ordernummer": 32500031, "Startdatum": "18-02-2025", "Leverdatum": "07-03-2025", "Gemaakt door": "Jurre Blankers" },
    ];
    const OudeOrders = [
        {"Ordernummer": 32500030, "Startdatum": "30-01-2025", "Startdatum (def.)": "27-01-2025", "Leverdatum": "18-02-2025", "Leverdatum (def.)": "22-02-2025", "Gemaakt door": "Frits van den Hogen" },
        {"Ordernummer": 32500031, "Startdatum": "05-02-2025", "Startdatum (def.)": "05-02-2025", "Leverdatum": "07-03-2025", "Leverdatum (def.)": "07-03-2025", "Gemaakt door": "Jurre Blankers" },
    ];

    return(
        <>
            <Navbar title={"Lely Industries NV"} route={"Klanten / Lely Industries NV"} />
            <div className={Style.CollapsTable}>
                <Table jsonData={LopendeOrders} title={"Lopende Orders"} openByDefault={true} />
                <Table jsonData={ToekomstigeOrders} title={"Toekomstige Orders"} openByDefault={true} />
                <Table jsonData={OudeOrders} title={"Oude Orders"} openByDefault={true} Legenda={true}/>
            </div>
            <div className={Style.KlantInfo}>
                <div>
                    <h3>Lely Industries NV</h3>
                </div>
                <div className={Style.info}>
                    <img src="../../../icons/location.svg" alt=""></img>
                    <p>Cornelis van der Lelylaan 1 <br />
                        3127PB Maassluis</p>
                </div>
                <div className={Style.info}>
                    <img src="../../../icons/user.svg" alt=""></img>
                    <p>Jian Jiao</p>
                </div>
                <div className={Style.info}>
                    <img src="../../../icons/phone.svg" alt=""></img>
                    <p>010-5996333</p>
                </div>
                <div className={Style.info}>
                    <img src="../../../icons/truck.svg" alt=""></img>
                    <p>Door 4.22</p>
                </div>
            </div>
        </>
    );
}

export default klantOverzicht;
