import React from 'react'
import { useLazyGetReposByPageQuery } from '../features/githubSlice'
import { Typography } from '../Typography'
import { join } from '../utils'

type projectPropTypes = {
  totalRepos: number
}

const ProjectList = (props: projectPropTypes) => {
  const [repos, setRepos] = React.useState<any>([])
  const totalPages = Math.ceil(props.totalRepos / 100)
  console.log(totalPages)
  const [trigger] = useLazyGetReposByPageQuery()

  React.useEffect(() => {
    const fetchAllRepositories = async () => {
      for (let i = 0; i < totalPages; i++) {
        const data = await trigger(i)
        const tempArr = []
        tempArr.push(...repos)
        tempArr.push(...data.data)
        setRepos(tempArr)
      }
    }
    fetchAllRepositories()
  }, [repos, totalPages, trigger])

  return (
    <Typography variant='body' className={join('text-text')}>
      {JSON.stringify(repos)}
    </Typography>
  )
}

export default ProjectList
