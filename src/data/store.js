import { configureStore } from "@reduxjs/toolkit"
import { galleryReducer } from "./slice"

const store = configureStore({
  reducer: {
    gallery: galleryReducer
  }
})

export { store }
