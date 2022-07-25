describe('spyOn', () => {
  const spy = jest.spyOn(Math, 'random').mockImplementation(() => 0.1)

  afterEach(() => {
    spy.mockRestore()
  })

  it('Math.random return 0.1', () => {
    expect(Math.random()).toEqual(0.1)
  })

  // afterEach実行でrandomは0~1以下を返す
  it('Math.random return under 1', () => {
    expect(Math.random()).toBeLessThan(1)
    expect(Math.random() < 1).toEqual(true)
  })
})
