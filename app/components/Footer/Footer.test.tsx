/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React, { FC } from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Footer from '.'
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

describe('Footer', () => {
  test('tests default', () => {
    const { container } = render(<Footer />)

    const footer = container.querySelector('footer')
    expect(footer).toBeInTheDocument()
  })
})