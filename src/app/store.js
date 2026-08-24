import { configureStore } from '@reduxjs/toolkit'
import shapesReducer from "../features/shapes/shapesSlice"


export const store = configureStore({
  reducer: {
    shapes: shapesReducer
  },
  // Middleware goes here later: history (day 2), autosave (day 3).
  // middleware: (getDefault) => getDefault().concat(historyMiddleware),
})
