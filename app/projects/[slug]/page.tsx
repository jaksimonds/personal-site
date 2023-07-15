import { gql } from '@apollo/client'
import client from '../../client'

import Heading from '@/components/Heading'
import { FC } from 'react'

const getProject = async (slug: string) => {
  const { data } = await client.query({
    query: gql`
      query GetProject($slug: String) { 
        project(slug: $slug) {
          id
          slug
          title
          excerpt
        }
      }
      
    `,
    variables: {
      slug: slug
    }
  })

  return data
}

interface IPage {
  params: {
    slug: string
  }
}

const Page: FC<IPage> = async ({ params }) => {
  const { project: details } = await getProject(params.slug)
  return (
    <div>
      <Heading level={1}>
        {details.title}
      </Heading>
    </div>
  )
}

export default Page