import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const githubApi = createApi({
  reducerPath: 'githubApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/',
  }),
  endpoints: (builder) => ({
    getUserData: builder.query({
      query: () => 'users/jlewilson',
    }),
  }),
})

export const { useGetUserDataQuery } = githubApi
