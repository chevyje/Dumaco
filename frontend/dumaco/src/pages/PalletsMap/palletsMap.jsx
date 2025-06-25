import React, {useState, useRef, useEffect} from "react";
import { Stage, Layer, Label, Tag } from "react-konva";
import Navbar from "../../components/navbar/navbar.jsx";
import breadRouteGen from "../../components/navbar/breadRouteGen.js";
import Style from "./palletsMap.module.css";
import { v4 as uuidv4 } from 'uuid';
import Node from "../../components/ZoneComponents/Node.jsx";
import Zone from "../../components/ZoneComponents/Zone.jsx";
import Konva from "konva";
import {useNavigate} from "react-router-dom";

function PalletsMap() {
    const navigate  = useNavigate();
    const route = breadRouteGen({
        "/home": "Home",
        "/pallets": "Pallets",
    });

    const [nodes, setNodes] = useState([]);
    const [zones, setZones] = useState([]);
    const [selectedNodeIds, setSelectedNodeIds] = useState([]);
    const stageRef = useRef(null);
    const [selectedZoneId, setSelectedZoneId] = useState(null);
    const [zoneIndex, setZoneIndex] = useState(1);

    const handleZoneSelect = (id) => {
        setSelectedZoneId((prev) =>
            (prev === id ? null : id)
        );

        // indien je een zone selecteert, moet de selectie van nodes weg
        setSelectedNodeIds([]);
    };

    const addNode = () => {
        const stage = stageRef.current;
        const pos = stage.getPointerPosition();
        console.log(pos);
        const newNode = {
            id: uuidv4(),
            x: pos.x + 250,
            y: pos.y,
        };
        setNodes((prev) => [...prev, newNode]);
    };

    const updateNodePosition = (id, x, y) => {
        setNodes((prev) =>
            prev.map((node) =>
                node.id === id ? { ...node, x, y } : node
            )
        );
    };

    const toggleNodeSelection = (id) => {
        setSelectedNodeIds((prev) =>
            prev.includes(id)
                ? prev.filter((nid) => nid !== id)
                : [...prev, id]
        );

        // zone weghalen als nodes geselecteerd zijn
        setSelectedZoneId(null);
    };

    const createZone = () => {
        if (selectedNodeIds.length < 3) {
            return alert("Selecteer minstens 3 nodes");
        }

        const name = "Zone " + zoneIndex;

        setZoneIndex(zoneIndex+1);

        console.log(name);

        const newZone = {
            id: uuidv4(),
            nodeIds: [...selectedNodeIds],
            name,
        };

        setZones((prev) => [...prev, newZone]);
        setSelectedNodeIds([]);
    };

    const handleDeleteSelected = () => {
        if (selectedZoneId) {
            setZones((prev) => prev.filter((z) => z.id !== selectedZoneId));
            setSelectedZoneId(null);
        }

        if (Array.isArray(selectedNodeIds) && selectedNodeIds.length > 0) {
            const nodesToDelete = new Set(selectedNodeIds);

            const invalidZone = zones.find(zone => {
                const remaining = zone.nodeIds.filter(id => !nodesToDelete.has(id));
                return remaining.length < 3;
            });

            if (invalidZone) {
                alert("Verwijder eerst de zone voordat je deze nodes kunt verwijderen.");
                return;
            }

            setNodes(prev => prev.filter(n => !nodesToDelete.has(n.id)));

            setZones(prev =>
                prev.map(zone => ({
                    ...zone,
                    nodeIds: zone.nodeIds.filter(id => !nodesToDelete.has(id))
                }))
            );

            setSelectedNodeIds([]);
        }
    };

    const redirectBarcodeGen = () => {
        navigate("/pallet/aanmaken")
    }


    useEffect(() => {
        const handleKeyDown = (event) => {
            if(event.key === "Escape") {
                setSelectedZoneId(null);
                setSelectedNodeIds([]);
            } else if (event.key === "Delete") {
                handleDeleteSelected();
            } else if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'a') {
                event.preventDefault();
                setSelectedNodeIds(nodes.map(n => n.id));
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [nodes, zones, selectedNodeIds, selectedZoneId]);

    return (
        <>
            <Navbar title={"Pallets"} route={route} />
            <div className={Style.stage}>
                <div className={Style.btns}>
                    <button className={Style.btn} onClick={addNode}>
                        <div className={Style.tooltip}>
                            <img src="/icons/node-white.svg" alt="add-node" className={Style.iconUpscale} />
                            <span className={Style.tooltiptext}>Voeg een node toe</span>
                        </div>
                    </button>
                    <button className={Style.btn} onClick={createZone}>
                        <div className={Style.tooltip}>
                            <img src="/icons/grid-plus-white.svg" alt="add-zone" className={Style.iconUpscale} />
                            <span className={Style.tooltiptext}>Maak een zone van de geselecteerde nodes</span>
                        </div>
                    </button>
                    <button className={Style.btn} onClick={handleDeleteSelected}>
                        <div className={Style.tooltip}>
                            <img src="/icons/trash.svg" alt="delete" className={Style.iconUpscale}/>
                            <span className={Style.tooltiptext}>Verwijder geselecteerde items</span>
                        </div>
                    </button>
                    <button className={Style.btn} onClick={redirectBarcodeGen}>
                        <div className={Style.tooltip}>
                            <img src="/icons/barcode.svg" alt="delete" className={Style.iconUpscale}/>
                            <span className={Style.tooltiptext}>Maak een nieuwe barcode aan of zoek een bestaande barcode</span>
                        </div>
                    </button>
                </div>
                <Stage
                    width={window.innerWidth}
                    height={window.innerHeight}
                    ref={stageRef}
                    onMouseDown={(e) => {
                        if (e.target === e.target.getStage()) {
                            // Deselect alle objecten als je op niks klikt
                            setSelectedNodeIds([]);
                            setSelectedZoneId(null);
                        }
                    }}
                >
                    <Layer>
                        {zones.map((zone) => (
                            <Zone
                                key={zone.id}
                                zone={zone}
                                nodes={nodes}
                                isSelected={selectedZoneId === zone.id}
                                onSelect={handleZoneSelect}
                            />
                        ))}
                        {nodes.map((node) => (
                            <Node
                                key={node.id}
                                node={node}
                                isSelected={selectedNodeIds.includes(node.id)}
                                onSelect={toggleNodeSelection}
                                onDragEnd={updateNodePosition}
                                onDragMove={updateNodePosition}
                            />
                        ))}
                    </Layer>
                </Stage>
            </div>
        </>
    );
}

export default PalletsMap;
