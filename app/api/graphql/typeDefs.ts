import { gql } from 'graphql-tag'

const typeDefs = gql`
  type Project {
    id: Int!
    slug: String!
    title: String!
    excerpt: String
    url: String
    image: String
  }

  type Query {
    projects: [Project]
    featuredProjects: [Project]
    project(slug: String): Project
  }
`

export default typeDefs