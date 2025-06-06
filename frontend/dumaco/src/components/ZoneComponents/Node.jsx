import React from "react";
import { Circle } from "react-konva";

const Node = ({ node, isSelected, onSelect, onDragEnd, onDragMove }) => {
    return (
        <Circle
            x={node.x}
            y={node.y}
            radius={10}
            fill={isSelected ? "yellow" : "black"}
            stroke={isSelected ? "black" : null}
            strokeWidth={1}
            draggable
            onClick={() => onSelect(node.id)}
            onDragMove={(e) => onDragMove(node.id, e.target.x(), e.target.y())}
            onDragEnd={(e) => onDragEnd(node.id, e.target.x(), e.target.y())}
        />
    );
};


export default Node;
