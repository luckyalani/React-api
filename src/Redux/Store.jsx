import { configureStore } from '@reduxjs/toolkit'
import Slice from '../ReduxSlice/Slice'

export const store = configureStore({
  reducer: {
    counter:Slice
  },
})