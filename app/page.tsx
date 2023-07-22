import { gql } from '@apollo/client'
import client from 'client'
import Hero from "./components/Hero"
import CardSection from "./components/CardSection"
import TwoColumnCallout from "./components/TwoColumnCallout"
import { IProject } from 'lib/types'

const getPageData = async () => {
  const { data } = await client.query({
    query: gql`
      query Page { 
        featuredProjects {
          id
          slug
          title
          excerpt
          url
          thumbnail
        }
        page(slug: "home") {
          tech {
            id
            name
            label
            content
            cta {
              text
              href
              target
            }
          }
        }
      }
    `
  })

  return data
}

const Homepage = async () => {
  const {featuredProjects, page} = await getPageData()

  return (
    <div>
      <Hero
        heading="Jackson Simonds"
        intro="Front-end developer."
      />
      {featuredProjects?.length ? featuredProjects.map((project: IProject, index: number) => {
        const {
          id,
          slug,
          title,
          excerpt,
          url,
          thumbnail
        } = project
        return (
          <TwoColumnCallout
            key={id}
            heading={title}
            copy={excerpt}
            slug={slug}
            url={url}
            image={thumbnail}
            alternate={!!(index % 2)}
          />
        )
      }) : ''}
      {page?.tech ? (
        <CardSection
          heading="Site Built Using..."
          iconCards
          cards={page.tech}
        />
      ) : ''}
    </div>
  )
}

export default Homepage