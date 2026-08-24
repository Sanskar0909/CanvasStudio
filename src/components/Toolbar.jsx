import { nanoid } from "@reduxjs/toolkit";
import { useAppDispatch } from "../app/hooks";
import { shapeAdded } from "../features/shapes/shapesSlice";

export default function Toolbar() {
    const dispatch = useAppDispatch();

    function handleAddRect() {
        dispatch(
            shapeAdded({
                id: nanoid(),
                x: Math.round(Math.random() * 400),
                y: Math.round(Math.random() * 300),
                width: 100,
                height: 100,
                fill: '#4dabf7',
            })
        )
    }

    return <button onClick={handleAddRect}>Add Rectangle</button>
}