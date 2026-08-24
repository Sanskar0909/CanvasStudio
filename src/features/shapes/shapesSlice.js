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
        }
    }
})

export const { shapeAdded } = shapesSlice.actions
export default shapesSlice.reducer
