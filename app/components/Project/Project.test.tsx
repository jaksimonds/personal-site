import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Project from '.'

describe('Project', () => {
  test('tests default', () => {
    const { container } = render(
      <Project
        id={0}
        title='test'
        slug='test'
        excerpt='test'
        url=''
        year={new Date().getFullYear()}
        tech={[]}
      />
    )

    const headingLink = container.querySelector('h2 a')
    expect(headingLink).toBeInTheDocument()
    expect(headingLink).toHaveAttribute('href', '/projects/test')
    expect(headingLink).toHaveTextContent('test')

    const year = container.querySelector('.year')
    expect(year).toBeInTheDocument()
    expect(year).toHaveTextContent(`Year: ${new Date().getFullYear()}`)

    const excerpt = container.querySelector('.excerpt')
    expect(excerpt).toBeInTheDocument()
    expect(excerpt).toHaveTextContent('test')
  })

  test('tests tech prop', () => {
    const { container } = render(
      <Project
        id={0}
        title='test'
        slug='test'
        excerpt='test'
        url=''
        year={new Date().getFullYear()}
        tech={[
          {
            id: 0,
            label: 'test',
            name: 'test'
          }
        ]}
      />
    )

    const tagList = container.querySelector('ul')
    expect(tagList).toBeInTheDocument()

    const tag = tagList?.querySelector('li small')
    expect(tag).toBeInTheDocument()
    expect(tag).toHaveTextContent('test')
  })

  test('tests url prop', () => {
    const { container } = render(
      <Project
        id={0}
        title='test'
        slug='test'
        excerpt='test'
        url='test'
        year={new Date().getFullYear()}
        tech={[]}
      />
    )

    const url = container.querySelector('.link')
    expect(url).toBeInTheDocument()
    expect(url).toHaveAttribute('href', 'test')
  })
})