import { gql } from '@apollo/client'
import client from '../../client'
import { Metadata } from "next"
import { FC } from 'react'
import Hero from '@/components/Hero'


const getProject = async (slug: string) => {
  const { data } = await client.query({
    query: gql`
      query GetProject($slug: String) { 
        project(slug: $slug) {
          title
          url
          hero {
            image
            intro
          }
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


export const generateMetadata = async ({ params }: IPage):Promise<Metadata> => {
  const { project } = await getProject(params.slug)
  return {
    title: `Project - ${project.title} | Jackson Simonds`
  }
}

const Page: FC<IPage> = async ({ params }) => {
  const { project } = await getProject(params.slug)
  const {
    hero,
    url,
    title
  } = project
  return (
    <div>
      <Hero
        heading={title}
        url={url}
        image={hero?.image}
        intro={hero?.intro}
      />
    </div>
  )
}

export default Page