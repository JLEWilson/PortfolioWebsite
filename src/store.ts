import { configureStore } from '@reduxjs/toolkit'
import { githubApi } from './features/githubSlice'
export const store = configureStore({
  reducer: {
    github: githubApi.reducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {projects: projectsState}
export type AppDispatch = typeof store.dispatch
