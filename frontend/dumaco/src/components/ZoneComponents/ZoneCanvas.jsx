import React, { useState, useRef } from "react";
import { Stage, Layer } from "react-konva";
import Node from "./Node";
import Zone from "./Zone";
import { v4 as uuidv4 } from "uuid";

function ZoneCanvas() {
    const [nodes, setNodes] = useState([]);
    const [zones, setZones] = useState([]);
    const [selectedNodeIds, setSelectedNodeIds] = useState([]);
    const stageRef = useRef();

    const addNode = () => {
        setNodes(prev => [...prev, { id: uuidv4(), x: 100 + prev.length * 50, y: 100 }]);
    };

    const toggleSelect = (id) => {
        setSelectedNodeIds(prev =>
            prev.includes(id) ? prev.filter(nid => nid !== id) : [...prev, id]
        );
    };

    const clearSelection = () => setSelectedNodeIds([]);

    const createZone = () => {
        if (selectedNodeIds.length < 3) return;
        setZones(prev => [...prev, { id: uuidv4(), nodeIds: [...selectedNodeIds] }]);
        clearSelection();
    };

    const moveNode = (id, pos) => {
        setNodes(prev => prev.map(n => (n.id === id ? { ...n, ...pos } : n)));
    };

    const handleStageClick = (e) => {
        if (e.target === e.target.getStage()) clearSelection();
    };

    return (
        <div>
            <button onClick={addNode}>➕ Node toevoegen</button>
            {selectedNodeIds.length >= 3 && (
                <button onClick={createZone}>🧱 Maak zone</button>
            )}

            <Stage
                width={window.innerWidth}
                height={window.innerHeight}
                ref={stageRef}
                onMouseDown={handleStageClick}
            >
                <Layer>
                    {zones.map(zone => (
                        <Zone key={zone.id} zone={zone} nodes={nodes} />
                    ))}

                    {nodes.map(node => (
                        <Node
                            key={node.id}
                            node={node}
                            isSelected={selectedNodeIds.includes(node.id)}
                            toggleSelect={toggleSelect}
                            moveNode={moveNode}
                        />
                    ))}
                </Layer>
            </Stage>
        </div>
    );
}

export default ZoneCanvas;