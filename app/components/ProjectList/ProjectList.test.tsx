/* eslint-disable react/display-name */
import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import ProjectList from '.'

jest.mock('../Project', () => ({ title }: { title: string }) => (
	<div>{title}</div>
))

describe('ProjectList', () => {
	test('tests default', () => {
		const { container } = render(<ProjectList />)

		const section = container.querySelector('section')
		expect(section).toBeInTheDocument()
	})

	test('tests projects prop', () => {
		const { container } = render(
			<ProjectList
				projects={[
					{
						id: 0,
						title: 'test',
						slug: 'test',
						excerpt: 'test',
						url: '',
						year: new Date().getFullYear(),
						tech: [],
					},
				]}
			/>,
		)

		const projectsList = container.querySelector('ul')
		expect(projectsList).toBeInTheDocument()

		const project = projectsList?.querySelector('li div')
		expect(project).toBeInTheDocument()
		expect(project).toHaveTextContent('test')
	})
})
