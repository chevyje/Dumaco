import React from "react";
import { Line, Label, Tag, Text } from "react-konva";

function Zone({ zone, nodes, isSelected, onSelect }) {
    const points = zone.nodeIds
        .map((id) => {
            const node = nodes.find((n) => n.id === id);
            return node ? [node.x, node.y] : [];
        })
        .flat();

    const center = () => {
        const coords = zone.nodeIds
            .map(id => {
                const n = nodes.find(n => n.id === id);
                return n ? [n.x, n.y] : [0, 0];
            });
        const avgX = coords.reduce((sum, [x]) => sum + x, 0) / coords.length;
        const avgY = coords.reduce((sum, [, y]) => sum + y, 0) / coords.length;
        return { x: avgX, y: avgY };
    };

    const centroid = center();

    return (
        <>
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
            {zone.name && (
                <Label x={centroid.x} y={centroid.y}>
                    <Tag
                        opacity={1.0}
                    />
                    <Text
                        text={zone.name}
                        fontSize={24}
                        fill="black"
                    />
                </Label>
            )}
        </>
    );
}

export default Zone;
