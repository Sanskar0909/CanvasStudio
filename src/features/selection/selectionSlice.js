import { createSlice } from "@reduxjs/toolkit";

const selectionsSlice = createSlice({
    name: "selections",
    initialState: {
        "selectedIds": []
    },
    reducers: {
        shapeSelected: (state, action) => {
            state.selectedIds = [action.payload]
        },
        selectionCleared: (state, action) => {
            state.selectedIds = []
        }
    }
})

export const { shapeSelected, selectionCleared } = selectionsSlice.actions
export default selectionsSlice.reducer