import { gql } from '@apollo/client'
import client from './client'
import { oswald } from "fonts"
import { Hero, CardSection, TwoColumnCallout } from '@jsimonds/component-library'
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
        headingClass={oswald.className}
        intro="Accessibility-focused developer committed to crafting experiences that leaves no one behind."
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
            headingClass={oswald.className}
            copy={excerpt}
            slug={slug}
            url={url}
            image={thumbnail}
            alternate={!!(index % 2)}
            {...(index === 0 ? {loading: 'eager'} : {})}
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