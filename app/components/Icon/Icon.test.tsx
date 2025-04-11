import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Icon from '.'

describe('Icon', () => {
  test('tests next icon', () => {
    const { container } = render(<Icon name='next' />)

    const icon = container.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })

  test('tests next simple icon', () => {
    const { container } = render(<Icon name='next' simple />)

    const icon = container.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })

  test('tests typescript icon', () => {
    const { container } = render(<Icon name='typescript' />)

    const icon = container.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })

  test('tests typescript simple icon', () => {
    const { container } = render(<Icon name='typescript' simple />)

    const icon = container.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })

  test('tests graphql icon', () => {
    const { container } = render(<Icon name='graphql' />)

    const icon = container.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })

  test('tests graphql simple icon', () => {
    const { container } = render(<Icon name='graphql' simple />)

    const icon = container.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })

  test('tests vercel icon', () => {
    const { container } = render(<Icon name='vercel' />)

    const icon = container.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })

  test('tests vercel simple icon', () => {
    const { container } = render(<Icon name='vercel' simple />)

    const icon = container.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })

  test('tests github icon', () => {
    const { container } = render(<Icon name='github' />)

    const icon = container.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })

  test('tests github simple icon', () => {
    const { container } = render(<Icon name='github' simple />)

    const icon = container.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })

  test('tests linkedin icon', () => {
    const { container } = render(<Icon name='linkedin' />)

    const icon = container.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })

  test('tests linkedin simple icon', () => {
    const { container } = render(<Icon name='linkedin' simple />)

    const icon = container.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })

  test('tests discord icon', () => {
    const { container } = render(<Icon name='discord' />)

    const icon = container.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })

  test('tests discord simple icon', () => {
    const { container } = render(<Icon name='discord' simple />)

    const icon = container.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })

  test('tests twitter icon', () => {
    const { container } = render(<Icon name='twitter' />)

    const icon = container.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })

  test('tests dotnet icon', () => {
    const { container } = render(<Icon name='dotnet' />)

    const icon = container.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })

  test('tests agilitycms icon', () => {
    const { container } = render(<Icon name='agilitycms' />)

    const icon = container.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })

  test('tests agilitycms simple icon', () => {
    const { container } = render(<Icon name='agilitycms' simple />)

    const icon = container.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })

  test('tests react icon', () => {
    const { container } = render(<Icon name='react' />)

    const icon = container.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })

  test('tests faust icon', () => {
    const { container } = render(<Icon name='faust' />)

    const icon = container.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })

  test('tests wpengine icon', () => {
    const { container } = render(<Icon name='wpengine' />)

    const icon = container.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })

  test('tests wpengine simple icon', () => {
    const { container } = render(<Icon name='wpengine' simple />)

    const icon = container.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })

  test('tests contentstack icon', () => {
    const { container } = render(<Icon name='contentstack' />)

    const icon = container.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })

  test('tests contentstack simple icon', () => {
    const { container } = render(<Icon name='contentstack' simple />)

    const icon = container.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })

  test('tests scss icon', () => {
    const { container } = render(<Icon name='scss' />)

    const icon = container.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })

  test('tests scss simple icon', () => {
    const { container } = render(<Icon name='scss' simple />)

    const icon = container.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })

  test('tests wordpress icon', () => {
    const { container } = render(<Icon name='wordpress' />)

    const icon = container.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })

  test('tests wordpress simple icon', () => {
    const { container } = render(<Icon name='wordpress' simple />)

    const icon = container.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })

  test('tests gitlab icon', () => {
    const { container } = render(<Icon name='gitlab' />)

    const icon = container.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })

  test('tests gitlab simple icon', () => {
    const { container } = render(<Icon name='gitlab' simple />)

    const icon = container.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })

  test('tests pantheon icon', () => {
    const { container } = render(<Icon name='pantheon' />)

    const icon = container.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })

  test('tests drupal icon', () => {
    const { container } = render(<Icon name='drupal' />)

    const icon = container.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })

  test('tests drupal simple icon', () => {
    const { container } = render(<Icon name='drupal' simple />)

    const icon = container.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })

  test('tests bitbucket icon', () => {
    const { container } = render(<Icon name='bitbucket' />)

    const icon = container.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })

  test('tests bitbucket simple icon', () => {
    const { container } = render(<Icon name='bitbucket' simple />)

    const icon = container.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })

  test('tests azuredevops icon', () => {
    const { container } = render(<Icon name='azuredevops' />)

    const icon = container.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })

  test('tests docker icon', () => {
    const { container } = render(<Icon name='docker' />)

    const icon = container.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })

  test('tests email icon', () => {
    const { container } = render(<Icon name='email' />)

    const icon = container.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })

  test('tests bluesky icon', () => {
    const { container } = render(<Icon name='bluesky' />)

    const icon = container.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })
})