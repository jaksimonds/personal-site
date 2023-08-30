import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import ProjectPage, { generateMetadata } from './page'
import client from '../../client'
import { ReactElement } from 'react'

describe('ProjectPage', () => {
  test('tests default', async () => {
    // @ts-ignore
    client.query.mockResolvedValue({ data : { project: {
      hero: {},
      url: '',
      title: '',
      tech: []
    } }})

    //@ts-ignore
    const Page = await ProjectPage({
      params: {
        slug: 'test'
      }
    })
    const { container } = render(Page as ReactElement)
    expect(container).not.toBeEmptyDOMElement()
  })

  test('tests tech render', async () => {
    // @ts-ignore
    client.query.mockResolvedValue({ data : { project: {
      hero: {},
      url: '',
      title: '',
      tech: [
        {
          id: 1,
          name: 'test'
        }
      ]
    } }})

    const Page = await ProjectPage({
      params: {
        slug: 'test'
      }
    })
    const { container } = render(Page as ReactElement)

    const cardSection = container.querySelector('.cardSection')
    expect(cardSection).toBeInTheDocument()
    expect(cardSection?.childElementCount).toBe(1)
  })

  test('tests generateMetadata', async () => {
    // @ts-ignore
    client.query.mockResolvedValue({ data : { project: {
      hero: {},
      url: '',
      title: 'test',
      tech: []
    } }})

    const metadata = await generateMetadata({
      params: {
        slug: 'test'
      }
    })
    expect(metadata).toEqual({
      title: 'Project - test | Jackson Simonds',
      description: ''
    })
  })
})