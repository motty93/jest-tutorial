const forEach = (items, callback) => {
  for (let index = 0; index < items.length; index++) {
    callback(items[index])
  }
}

describe('mock test foreach', () => {
  it('test', () => {
    const mockCallback = jest.fn(x => 42 + x)
    forEach([0, 1], mockCallback)
    expect(mockCallback.mock.calls.length).toBe(2)
  })
})
