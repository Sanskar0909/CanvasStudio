import { createSlice } from "@reduxjs/toolkit";

const viewportSlice = createSlice({
    name: "viewport",
    initialState: {
        x: 0,
        y: 0,
        scale: 1
    },
    reducers: {
        panned: (state, action) => {
            state.x += action.payload.dx
            state.y += action.payload.dy
        }
    }
})

export const { panned } = viewportSlice.actions
export default viewportSlice.reducer