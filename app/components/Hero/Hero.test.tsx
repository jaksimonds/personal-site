/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React, { FC } from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Hero from '.'
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

describe('Hero', () => {
  test('tests default', () => {
    const { container } = render(<Hero heading='test' />)

    const hero = container.querySelector('section')
    expect(hero).toBeInTheDocument()
  })

  test('tests simple hero', () => {
    const { container } = render(<Hero heading='test' simple />)

    const hero = container.querySelector('section')
    expect(hero).toHaveClass('simple')
  })

  test('tests url prop', () => {
    const { container } = render(<Hero heading='test' url='test' />)

    const link = container.querySelector('a')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'test')
  })

  test('tests image prop', () => {
    const { container } = render(<Hero heading='test' image='test' />)

    const img = container.querySelector('img')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', 'test')
  })

  test('tests intro prop', () => {
    const { container } = render(<Hero heading='test' intro='test' />)

    const intro = container.querySelector('p')
    expect(intro).toBeInTheDocument()
    expect(intro).toHaveTextContent('test')
  })
})