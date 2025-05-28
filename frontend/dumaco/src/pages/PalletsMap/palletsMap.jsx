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

    const cursorMove = (event) => {
        setCoords({
            x: event.clientX,
            y: event.clientY,
        });
    };

    // werkt nog niet lekker, mogelijk dat je de btn niet kan indrukken
    const addShape = (type) => {
        const newShape = {
            id: uuidv4(),
            type,
            x: coords.x,
            y: coords.y,
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
            <div className={Style.stage} onMouseMove={cursorMove}>
                <div className={Style.btns}>
                    <button onClick={() => addShape("rect")}>vierkant</button>
                    <button onClick={() => addShape("circle")}>cirkel</button>
                </div>
                <Stage width={window.innerWidth} height={window.innerHeight}>
                    <Layer>
                        {shapes.map((shape) => {
                            const commonProps = {
                                key: shape.id,
                                x: shape.x,
                                y: shape.y,
                                fill: shape.fill,
                                draggable: true,
                                onDragStart: () =>
                                    updateShape(shape.id, { fill: "orange" }),
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
