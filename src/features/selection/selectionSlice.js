import { createSlice } from "@reduxjs/toolkit";
import { shapesDeleted } from "../shapes/shapesSlice";

const selectionsSlice = createSlice({
    name: "selections",
    initialState: {
        "selectedIds": []
    },
    reducers: {
        shapeSelected: (state, action) => {
            state.selectedIds = [action.payload]
        },
        selectionCleared: (state) => {
            state.selectedIds = []
        }
    },
    extraReducers: (builder) => {
        builder.addCase(shapesDeleted, (state, action) => {
            state.selectedIds = state.selectedIds.filter((id) => !action.payload.includes(id));
        })
    }
})

export const { shapeSelected, selectionCleared } = selectionsSlice.actions
export default selectionsSlice.reducer