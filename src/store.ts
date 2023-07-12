import { configureStore, MiddlewareArray } from '@reduxjs/toolkit'
import { githubApi } from './features/githubSlice'
import logger from 'redux-logger'
export const store = configureStore({
  reducer: {
    [githubApi.reducerPath]: githubApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(githubApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {projects: projectsState}
export type AppDispatch = typeof store.dispatch
