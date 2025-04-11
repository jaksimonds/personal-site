/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React, { FC } from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import TwoColumnCallout from '.'
import { ILink } from '../Link'
import { IImage } from '../Image'
import { IHeading } from '../Heading'

jest.mock('../Link', (): FC<ILink> => ({
  href,
  className,
  target,
  children
}) => (
  <a className={className} target={target} href={href}>{children}</a>
))
jest.mock('../Image', (): FC<IImage> => ({
  className,
  src,
  alt,
  width,
  height
}) => (
  <img className={className} src={src} alt={alt} width={width} height={height} />
))
jest.mock('../Heading', (): FC<IHeading> => ({
  className,
  children
}) => (
  <h2 className={className}>{children}</h2>
))

describe('TwoColumnCallout', () => {
  test('tests default', () => {
    const { container } = render(<TwoColumnCallout />)

    const twoColumnCallout = container.querySelector('section')
    expect(twoColumnCallout).toBeInTheDocument()
  })

  test('tests alternate prop', () => {
    const { container } = render(<TwoColumnCallout alternate />)

    const twoColumnCallout = container.querySelector('section')
    expect(twoColumnCallout).toHaveClass('sectionAlt')
  })

  test('tests heading prop', () => {
    const { container } = render(<TwoColumnCallout heading='test' />)

    const heading = container.querySelector('h2')
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('test')
  })

  test('tests headingClass prop', () => {
    const { container } = render(<TwoColumnCallout heading='test' headingClass='test' />)

    const heading = container.querySelector('h2')
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveClass('test')
  })

  test('tests copy prop', () => {
    const { container } = render(<TwoColumnCallout copy='test' />)

    const copy = container.querySelector('p')
    expect(copy).toBeInTheDocument()
    expect(copy).toHaveTextContent('test')
  })

  test('tests children prop', () => {
    const { container } = render(<TwoColumnCallout>test</TwoColumnCallout>)

    const children = container.querySelector('.children')
    expect(children).toBeInTheDocument()
    expect(children).toHaveTextContent('test')
  })

  test('tests slug prop', () => {
    const { container } = render(<TwoColumnCallout slug='test' />)

    const link = container.querySelector('a')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/projects/test')
  })

  test('tests url prop', () => {
    const { container } = render(<TwoColumnCallout url='test' />)

    const link = container.querySelector('a')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'test')
  })

  test('tests image prop', () => {
    const { container } = render(<TwoColumnCallout image='test' />)

    const img = container.querySelector('img')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', 'test')
  })
})