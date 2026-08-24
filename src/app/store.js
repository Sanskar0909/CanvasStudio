import { configureStore } from '@reduxjs/toolkit'
import shapesReducer from "../features/shapes/shapesSlice"
import selectionReducer from "../features/selection/selectionSlice"

export const store = configureStore({
  reducer: {
    shapes: shapesReducer,
    selections: selectionReducer
  },
  // Middleware goes here later: history (day 2), autosave (day 3).
  // middleware: (getDefault) => getDefault().concat(historyMiddleware),
})
