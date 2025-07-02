/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React, { FC } from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Copy from '.'
import { IHeading } from '../Heading'
import { ILink } from '../Link'
import { IIcon } from '../Icon'

jest.mock('../Link', (): FC<ILink> => ({
  href,
  className,
  target,
  children
}) => (
  <a className={className} target={target} href={href}>{children}</a>
))
jest.mock('../Icon', (): FC<IIcon> => ({ name }) => (
  <svg id={name}></svg>
))
jest.mock('../Heading', (): FC<IHeading> => ({
  className,
  children
}) => (
  <h2 className={className}>{children}</h2>
))

describe('Copy', () => {
  test('tests default', () => {
    const { container } = render(<Copy />)

    const copy = container.querySelector('section')
    expect(copy).toBeInTheDocument()
  })

  test('tests intro', () => {
    const { container } = render(<Copy intro='test' />)

    const intro = container.querySelector('.intro')
    expect(intro).toBeInTheDocument()
    expect(intro).toHaveTextContent('test')
  })

  test('tests children', () => {
    const { container } = render(<Copy>test</Copy>)

    const children = container.querySelector('.children')
    expect(children).toBeInTheDocument()
    expect(children).toHaveTextContent('test')
  })

  test('tests link', () => {
    const { container } = render(<Copy link={{
      href: 'test'
    }} />)

    const link = container.querySelector('a')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'test')
  })

  test('tests link target', () => {
    const { container } = render(<Copy link={{
      href: 'test',
      target: '_blank'
    }} />)

    const link = container.querySelector('a')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('target', '_blank')
  })

  test('tests link icon', () => {
    const { container } = render(<Copy link={{
      href: 'test',
      icon: 'test'
    }} />)

    const link = container.querySelector('a')
    expect(link).toBeInTheDocument()
    const icon = link?.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })
})