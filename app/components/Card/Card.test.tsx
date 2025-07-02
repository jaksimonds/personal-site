/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React, { FC } from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Card from '.'
import { IHeading } from '../Heading'
import { IIcon } from '../Icon'
import { ILink } from '../Link'

jest.mock('../Heading', (): FC<IHeading> => ({
  className,
  children
}) => (
  <h2 className={className}>{children}</h2>
))
jest.mock('../Icon', (): FC<IIcon> => ({ name }) => (
  <svg id={name}></svg>
))
jest.mock('../Link', (): FC<ILink> => ({
  href,
  className,
  target,
  children
}) => (
  <a className={className} target={target} href={href}>{children}</a>
))

describe('Card', () => {
  test('tests default', () => {
    const { container } = render(<Card name='test' heading='test' />)

    const card = container.querySelector('.card')
    expect(card).toBeInTheDocument()

    const heading = container.querySelector('h2')
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('test')
  })

  test('tests iconCard and srHeading', () => {
    const { container } = render(<Card name='test' heading='test' iconCard srHeading />)

    const card = container.querySelector('.card')
    expect(card).toBeInTheDocument()

    const heading = container.querySelector('h2')
    expect(heading).toBeInTheDocument()
    
    const srText = heading?.querySelector('span')
    expect(srText).toBeInTheDocument()
    expect(srText).toHaveTextContent('test')

    const icon = heading?.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })

  test('tests cta', () => {
    const { container } = render(<Card name='test' heading='test' cta={{
      href: 'test'
    }} />)

    const link = container.querySelector('a')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'test')
  })

  test('tests cta target', () => {
    const { container } = render(<Card name='test' heading='test' cta={{
      href: 'test',
      target: '_blank'
    }} />)

    const link = container.querySelector('a')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('target', '_blank')
  })
})