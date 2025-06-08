import React, { useRef, useEffect, useState } from "react";
import { Line, Label, Tag, Text } from "react-konva";
import { useNavigate } from "react-router-dom";

function Zone({ zone, nodes, isSelected, onSelect }) {
    const navigate = useNavigate();
    const [zoneNameWidth, setZoneNameWidth] = useState(0);
    const [buttonWidth, setButtonWidth] = useState(0);
    const textRef = useRef(null);
    const buttonRef = useRef(null);

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

    useEffect(() => {
        if (textRef.current) {
            setZoneNameWidth(textRef.current.width());
        }
        if (buttonRef.current) {
            setButtonWidth(buttonRef.current.width());
        }
    }, [zone.name]);

    return (
        <>
            <Line
                points={points}
                closed
                fill={isSelected ? "rgba(0,0,255,0.1)" : "rgba(0,255,0,0.2)"}
                stroke={isSelected ? "blue" : "black"}
                strokeWidth={isSelected ? 3 : 2}
                onClick={(e) => {
                    e.cancelBubble = true;
                    onSelect(zone.id);
                }}
            />

            {zone.name && (
                <>
                    <Label x={centroid.x} y={centroid.y - 20}>
                        <Text
                            ref={textRef}
                            text={zone.name}
                            fontSize={20}
                            padding={6}
                            fill="black"
                            offsetX={zoneNameWidth / 2}
                        />
                    </Label>

                    <Label x={centroid.x} y={centroid.y + 15}>
                        <Tag
                            fill="#007BFF"
                            cornerRadius={4}
                            shadowBlur={2}
                            shadowColor="black"
                            shadowOpacity={0.15}
                            offsetX={buttonWidth / 2}
                        />
                        <Text
                            ref={buttonRef}
                            text="Bekijk 28 pallets"
                            fontSize={14}
                            padding={8}
                            fill="white"
                            fontStyle="bold"
                            offsetX={buttonWidth / 2}
                            onClick={() => navigate("/pallets")}
                            onMouseEnter={(e) => {
                                const container = e.target.getStage().container();
                                container.style.cursor = "pointer";
                            }}
                            onMouseLeave={(e) => {
                                const container = e.target.getStage().container();
                                container.style.cursor = "default";
                            }}
                        />
                    </Label>
                </>
            )}
        </>
    );
}

export default Zone;
