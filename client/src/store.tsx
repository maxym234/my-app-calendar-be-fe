import { configureStore } from '@reduxjs/toolkit'
import dataSlice from '@app/plugins/redux/endpointSlice'

export const store = configureStore({
  reducer: {
    dataSlice,
  },
})

export type AppDispatch = typeof store.dispatch