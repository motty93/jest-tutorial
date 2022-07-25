import greeter, { greet } from '.'

describe('greeter', () => {
  describe('greet', () => {
    const noonTime = new Date('2022-07-20T15:00:00')
    const morningTime = new Date('2022-07-20T08:00:00')

    beforeEach(() => {
      Date.now = jest.fn(() => noonTime)
    })

    describe('mock date function', () => {
      it('hello name when the time is 12:00 - 05:59', () => {
        expect(greet('hoge')).toEqual('Hello Hoge')
      })

      it('good morning name when the time is 06:00 - 11:59', () => {
        expect(greet('foo')).toEqual('Good morning Foo!')
      })
    })
  })
})
