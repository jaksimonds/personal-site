import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import ProjectsPage, { metadata } from './page'
import client from '../client'

describe('ProjectsPage', () => {
  test('tests default', async () => {
    // @ts-ignore
    client.query.mockResolvedValue({ data : { projects: [] }})

    const Page = await ProjectsPage()
    const { container } = render(Page)
    expect(container).not.toBeEmptyDOMElement()
  })

  test('tests metadata', () => {
    expect(metadata).toBeDefined()
  })
})