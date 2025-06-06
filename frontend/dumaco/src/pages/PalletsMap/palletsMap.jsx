import React, {useState, useRef, useEffect} from "react";
import { Stage, Layer } from "react-konva";
import Navbar from "../../components/navbar/navbar.jsx";
import breadRouteGen from "../../components/navbar/breadRouteGen.js";
import Style from "./palletsMap.module.css";
import { v4 as uuidv4 } from 'uuid';
import Node from "../../components/ZoneComponents/Node.jsx";
import Zone from "../../components/ZoneComponents/Zone.jsx";

function PalletsMap() {
    const route = breadRouteGen({
        "/home": "Home",
        "/pallets": "Pallets",
    });

    const [nodes, setNodes] = useState([]);
    const [zones, setZones] = useState([]);
    const [selectedNodeIds, setSelectedNodeIds] = useState([]);
    const stageRef = useRef(null);
    const [selectedZoneId, setSelectedZoneId] = useState(null);

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

        const newZone = {
            id: uuidv4(),
            nodeIds: [...selectedNodeIds],
        };

        setZones((prev) =>
            [...prev, newZone]
        );
        setSelectedNodeIds([]);
    };

    const handleDeleteSelected = () => {
        // Zone verwijderen
        if (selectedZoneId) {
            setZones((prev) => prev.filter((z) => z.id !== selectedZoneId));
            setSelectedZoneId(null);
        }

        // node verwijderen
        if (Array.isArray(selectedNodeIds) && selectedNodeIds.length > 0) {
            const nodesToDelete = new Set(selectedNodeIds);

            for (const zone of zones) {
                const remaining = zone.nodeIds.filter(id => !nodesToDelete.has(id));
                if (remaining.length < 3) {
                    alert("Verwijder eerst de zone voordat je deze nodes kunt verwijderen.");
                    return;
                }
            }

            setNodes(prev => prev.filter(n => !nodesToDelete.has(n.id)));

            // nodes eruithalen die weg mogen
            setZones(prev =>
                prev.map(zone => ({
                    ...zone,
                    nodeIds: zone.nodeIds.filter(id => !nodesToDelete.has(id))
                }))
            );

            setSelectedNodeIds([]);
        }
    };

    useEffect(() => {
       const handleKeyDown = (event) => {
           if(event.key === "Escape") {
               setSelectedZoneId(null);
               setSelectedNodeIds([]);
           } else if (event.key === "Delete") {
               handleDeleteSelected();
           } else if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'a') {
               event.preventDefault();
               const allNodeIds = nodes.map(n => n.id);
               setSelectedNodeIds(allNodeIds);
           }
       };

       window.addEventListener("keydown", handleKeyDown);
        }, [selectedZoneId, selectedNodeIds, nodes, zones]);

    return (
        <>
            <Navbar title={"Pallets"} route={route} />
            <div className={Style.stage}>
                <div className={Style.btns}>
                    <button className={Style.btn} onClick={addNode}>Voeg Node Toe</button>
                    <button className={Style.btn} onClick={createZone}>Maak Zone</button>
                    <button className={Style.btn} onClick={handleDeleteSelected}>Delete Selected</button>
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
                            />
                        ))}
                    </Layer>
                </Stage>
            </div>
        </>
    );
}

export default PalletsMap;
