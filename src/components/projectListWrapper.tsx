import React from 'react'
import { useGetUserDataQuery } from '../features/githubSlice'
import ProjectList from './projectList'
import { join } from '../utils'

type projectPropTypes = {
  props?: string
}

const ProjectListWrapper = (props: projectPropTypes) => {
  const { data: userData, isLoading: isLoadingUserData } = useGetUserDataQuery()

  if (isLoadingUserData) return <h1>Loading...</h1>
  const totalRepos = userData['public_repos']
  return <ProjectList totalRepos={totalRepos} />
}

export default ProjectListWrapper
