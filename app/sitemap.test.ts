import sitemap from "./sitemap"

describe('sitemap', () => {
  test('tests default', () => {
    const data = sitemap()
    expect(data).toBeDefined()
  })
})