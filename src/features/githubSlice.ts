import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const githubApi = createApi({
  reducerPath: 'githubApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/',
  }),
  endpoints: (builder) => ({
    getUserData: builder.query<any, void>({
      query: () => 'users/jlewilson',
    }),
    getReposByPage: builder.query({
      query: (page) =>
        `users/jlewilson/repos?sort=pushed&per_page=100&page=${page})`,
    }),
  }),
})

export const {
  useGetUserDataQuery,
  useGetReposByPageQuery,
  useLazyGetReposByPageQuery,
} = githubApi
