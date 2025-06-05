import React, { useEffect } from "react";
import { Stage, Layer, Rect, Circle } from "react-konva";
import Navbar from "../../components/navbar/navbar.jsx";
import breadRouteGen from "../../components/navbar/breadRouteGen.js";
import Style from "./palletsMap.module.css";
import { v4 as uuidv4 } from 'uuid';

function PalletsMap() {
    const route = breadRouteGen({
        "/home": "Home",
        "/pallets": "Pallets",
    });

    const [shapes, setShapes] = React.useState([
        { id: uuidv4(), type: "rect", x: 20, y: 50, fill: "red" },
        { id: uuidv4(), type: "circle", x: 200, y: 100, fill: "green" },
    ]);

    const [coords, setCoords] = React.useState({ x: 0, y: 0 });
    const containerRef = React.useRef(null);
    const stageRef = React.useRef(null);
    const [selectedShape, setSelectedShape] = React.useState(null);

    const cursorMove = (event) => {
        if (!containerRef.current) return;

        const bounds = containerRef.current.getBoundingClientRect();

        setCoords({
            x: event.clientX - bounds.left,
            y: event.clientY - bounds.top,
        });
    };

    const addShape = (type) => {
        const stage = stageRef.current;
        const pointerPosition = stage.getPointerPosition();

        const newShape = {
            id: uuidv4(),
            type,
            x: pointerPosition?.x || 50,
            y: pointerPosition?.y || 50,
            fill: type === "rect" ? "red" : "green",
        };

        setShapes((prev) => [...prev, newShape]);
    };

    const updateShape = (id, changes) => {
        setShapes((prev) =>
            prev.map((shape) =>
                shape.id === id ? { ...shape, ...changes } : shape
            )
        );
    };

    return (
        <>
            <Navbar title={"Pallets"} route={route} />
            <div className={Style.stage} onMouseMove={cursorMove} ref={containerRef}>
                <div className={Style.btns}>
                    <button className={Style.btn} onClick={() => addShape("rect")}>vierkant</button>
                    <button className={Style.btn} onClick={() => addShape("circle")}>
                        <img src={`../../../icons/area-square-white.svg`} alt={"imageUpscale"} className={Style.iconUpscale} />
                    </button>
                </div>
                <Stage width={window.innerWidth} height={window.innerHeight} ref={stageRef}>
                    <Layer
                        onMouseDown={(e) => {
                            const clickedOnEmpty = e.target === e.target.getStage() || e.target.getParent()?.className === "Layer";
                            if (clickedOnEmpty) {
                                console.log("clickedOnEmpty");
                                setSelectedShape(null);
                            }
                        }}
                    >
                        {shapes.map((shape) => {
                            const isSelected = selectedShape?.id === shape.id;

                            const commonProps = {
                                key: shape.id,
                                x: shape.x,
                                y: shape.y,
                                fill: isSelected ? "yellow" : shape.fill,
                                stroke: isSelected ? "blue" : null,
                                strokeWidth: isSelected ? 4 : 0,
                                draggable: true,
                                onClick: () => setSelectedShape(shape),
                                onTap: () => setSelectedShape(shape),
                                onDragStart: () => {
                                    updateShape(shape.id, { fill: "orange" });
                                    setSelectedShape(shape);
                                },
                                onDragEnd: (e) =>
                                    updateShape(shape.id, {
                                        x: e.target.x(),
                                        y: e.target.y(),
                                        fill: shape.type === "rect" ? "red" : "green",
                                    }),
                            };

                            return shape.type === "rect" ? (
                                <Rect width={100} height={100} {...commonProps} />
                            ) : (
                                <Circle radius={50} {...commonProps} />
                            );
                        })}
                    </Layer>
                </Stage>
            </div>
        </>
    );
}

export default PalletsMap;
