import React from "react";
import { Circle } from "react-konva";

const Node = ({ node, isSelected, onSelect, onDragEnd }) => {
    return (
        <Circle
            x={node.x}
            y={node.y}
            radius={10}
            fill={isSelected ? "yellow" : "blue"}
            stroke={isSelected ? "black" : null}
            strokeWidth={2}
            draggable
            onClick={() => onSelect(node.id)}
            onDragEnd={(e) =>
                onDragEnd(node.id, e.target.x(), e.target.y())
            }
        />
    );
};

export default Node;
