import { createSlice } from "@reduxjs/toolkit";

const shapesSlice = createSlice({
    name: "shapes",
    initialState: [
        {"id": "r1", "x": 100, "y": 200, "height": 100, "width": 100, "fill": "blue"},
        {"id": "r2", "x": 200, "y": 200, "height": 100, "width": 100, "fill": "red"}
    ],
    reducers: {
        shapeAdded: (state, action) => {
            state.push(action.payload);
        },
        shapesDeleted: (state, action) => {
            return state.filter((shape) => !action.payload.includes(shape.id))
        },
        shapeMoved: (state, action) => {
            const shape = state.find((s) => s.id === action.payload.id)
            if(!shape)  return;

            shape.x = action.payload.x;
            shape.y = action.payload.y;
        }
    }
})

export const { shapeAdded, shapesDeleted, shapeMoved } = shapesSlice.actions
export default shapesSlice.reducer
