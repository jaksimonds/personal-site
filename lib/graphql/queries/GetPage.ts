import { gql } from '@apollo/client'

export const GetPage = (slug: string) => gql`
  query GetPage($slug:String!) {
    pageLandingCollection(where: { slug: $slug }) {
      items {
        blocksCollection {
          items {
            __typename
            heading
          }
        }
      }
    }
  },
  variables: {
    slug: slug,
  }
`
