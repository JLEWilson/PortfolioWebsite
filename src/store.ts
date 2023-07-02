import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {projects: projectsState}
export type AppDispatch = typeof store.dispatch
