/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React, { FC } from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import CardSection from '.'
import { IHeading } from '../Heading'
import { ICard } from '../Card'

jest.mock('../Heading', (): FC<IHeading> => ({
  className,
  children
}) => (
  <h2 className={className}>{children}</h2>
))
jest.mock('../Card', (): FC<ICard> => ({
  name
}) => (
  <div>{name}</div>
))

describe('CardSection', () => {
  test('tests default', () => {
    const { container } = render(<CardSection
      heading='test'
      cards={[
        {
          id: 1,
          name: 'test',
          label: 'test'
        }
      ]}
    />)

    const cardSection = container.querySelector('section')
    expect(cardSection).toBeInTheDocument()

    const heading = container.querySelector('h2')
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('test')

    const cardDiv = container.querySelector('.cards')
    expect(cardDiv).toBeInTheDocument()
    expect(cardDiv?.childElementCount).toBe(1)
  })
})