import { fetchData } from '.'

it('axios then test', () => {
  return fetchData(2).then(res => {
    expect(res.data.userId).toBe(1)
    expect(res.data.id).toBe(2)
  })
})

it('async await test', async () => {
  // 動かない
  // expect.assertions(1)
  const { data } = await fetchData(3)
  expect(data.userId).toBe(1)
  expect(data.id).toBe(3)
})

it('the fetch fails with an error', async () => {
  try {
    await fetchData(1)
  } catch(e) {
    expect(e).toMatch('error')
  }
})
