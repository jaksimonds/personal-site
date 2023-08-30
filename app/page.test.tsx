import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Homepage from './page'
import client from './client'

describe('Homepage', () => {
  test('tests default', async () => {
    // @ts-ignore
    client.query.mockResolvedValue({
      data: {
        featuredProjects: [],
        page: {}
      }
    })

    const Page = await Homepage()
    const { container } = render(Page)
    expect(container).not.toBeEmptyDOMElement()
  })

  test('tests featuredProjects', async () => {
    // @ts-ignore
    client.query.mockResolvedValue({
      data: {
        featuredProjects: [
          {
            id: 0,
            slug: 'test',
            title: 'test',
            excerpt: 'test',
            url: 'test',
            thumbnail: 'test'
          },
          {
            id: 1,
            slug: 'test',
            title: 'test',
            excerpt: 'test',
            url: 'test',
            thumbnail: 'test'
          }
        ],
        page: {}
      }
    })

    const Page = await Homepage()
    const { container } = render(Page)
    
    const twoColumnCallout = container.querySelector('.twoColumnCallout')
    expect(twoColumnCallout).toBeInTheDocument()
  })

  test('tests page tech', async () => {
    // @ts-ignore
    client.query.mockResolvedValue({
      data: {
        featuredProjects: [],
        page: {
          tech: [
            {
              id: 1,
              test: 'test'
            }
          ]
        }
      }
    })

    const Page = await Homepage()
    const { container } = render(Page)

    const cardSection = container.querySelector('.cardSection')
    expect(cardSection).toBeInTheDocument()
  })
})