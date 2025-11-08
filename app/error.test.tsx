/* eslint-disable react/display-name */
import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import ErrorComponent from './error'

jest.mock('./components/Header', () => () => <header>test</header>)
jest.mock(
	'@/components/Hero',
	() =>
		({
			heading,
			headingClass,
			simple,
		}: {
			heading: string
			headingClass: string
			simple: boolean
		}) => (
			<section className={`hero ${simple}`}>
				<h1 className={headingClass}>{heading}</h1>
			</section>
		),
)

describe('ErrorComponent', () => {
	beforeAll(() => {
		jest.spyOn(console, 'error').mockImplementation(() => null)
	})

	afterAll(() => {
		jest.clearAllMocks()
	})

	test('tests default', () => {
		const mockError = new Error('test error')
		const { container } = render(
			<ErrorComponent error={mockError} reset={jest.fn()} />,
		)

		const hero = container.querySelector('.hero')
		expect(hero).toBeInTheDocument()
	})
})
