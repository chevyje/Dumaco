import React from "react";
import { Line } from "react-konva";

function Zone({ zone, nodes, isSelected, onSelect }) {
    const points = zone.nodeIds
        .map((id) => {
            const node = nodes.find((n) => n.id === id);
            return node ? [node.x, node.y] : [];
        }).flat();

    return (
        <Line
            points={points}
            closed
            fill={isSelected ? "rgba(0,0,255,0.1)" : "rgba(0,255,0,0.2)"}
            stroke={isSelected ? "blue" : "green"}
            strokeWidth={isSelected ? 2 : 1}
            onClick={(e) => {
                e.cancelBubble = true;
                onSelect(zone.id);
            }}
        />
    );
}

export default Zone;
