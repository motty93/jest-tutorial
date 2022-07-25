# jest tutorial

## it/test

どっちも同じ

## matcher

- toBe
- toEqual
  それぞれ not を前につけると反対のテストも可能

- toBeNull: null のみ一致
- toBeUndefined: undefined のみ一致
- toBeDefined: toBeUndefined の反対
- toBeTruthy: if が真になるもの
- toBeFalsy: if が偽になるもの

### 数値系

- toBeGreaterThan
- toBeGreaterThanOrEqual
- toBeLessThan
- toBeLessThanOrEqual
- toBeCloseTo: 誤差考えずチェック

### 文字列系

- toMatch: 正規表現で一致させる

### 配列と反復可能なオブジェクト

- toContain

### 例外

- toThrow

## mock について

- calls: モック関数の呼び出し毎の引数の配列
- results: モック関数の呼び出し毎の結果の配列
- instances: new を使用してモック関数からインスタンス化されたオブジェクトが含まれる配列

```js
describe('#jest.fn', () => {
  it('Check `jest.fn()` specification', () => {
    const mockFunction = jest.fn()
    expect(mockFunction('test')).toBe(undefined) // mockFunction関数の結果は`undefined`である

    expect(mockFunction).toHaveProperty('mock') // mockFunction関数はmockプロパティを持っている

    expect(mockFunction.mock.calls.length).toBe(1) // mockFunction関数は1度呼び出された

    expect(mockFunction.mock.calls[0]).toEqual(['test']) // mockFunction関数が1度呼び出された際に、引数は"test"だった

    expect(mockFunction.mock.results.length).toBe(1) // mockFunction関数の結果は1つある

    expect(mockFunction.mock.results[0].type).toBe('return') // mockFunction関数が1度目に呼び出された結果は正常にリターンされている

    expect(mockFunction.mock.results[0].value).toBe(undefined) // mockFunction関数の1度目の結果は`undefined`である

    expect(mockFunction.mock.instances[0]).toBe(undefined) // mockFunction関数からnewを利用してインスタンスを作成していない
  })
})
```

単純に jest.fn()でモック関数を作成した場合、`undefined`が返り値として設定される

### mock の返り値を変更

```js
it('return Hoge', () => {
  // mockFunction関数の返り値にHogeを設定
  // const mockFunction = jest.fn(() => 'Hoge')と省略可能
  const mockFunction = jest.fn().mockImplementation(() => 'Hoge')
  expect(mockFunction()).toBe('Hoge')
})
```

### 関数の呼び出し毎にテスト

モック関数の呼び出し毎の結果のテストを確認したい場合、`mockImplementationOnce`関数を使用する。default は undefined。

```js
 it("return true once then it returns false", () => {
    const mockFunction = jest
      .fn()
      .mockImplementationOnce(() => true)
      .mockImplementationOnce(() => false);
    expect(mockFunction()).toBe(true);
    expect(mockFunction()).toBe(false);
    expect(mockFunction()).toBe(undefined); // デフォルトの返り値である`undefined`がリターンされる
  });
});
```

1 回目は true,2 回目は false が返り、3 回目は何も設定してないので undefined が返る。

### 特定の関数をモック化する

`jest.spyOn()`を使用することで、オブジェクトの特定の関数をモック化できる。

また、`mockRestore`を実行することでオリジナルの関数へ戻すことができる。

````js
describe("#spyOn", () => {
  const spy = jest.spyOn(Math, "random").mockImplementation(() => 0.1); // Math.random()は0.1を返す、オリジナルの関数では0から1以下を返します

  afterEach(() => {
    spy.mockRestore();
    // jest.restoreAllMocks(); // 他にモック化している関数があれば、こちら1行ですべてのモック化した関数を元に戻すことができます
  });

  it("Math.random return 1", () => {
    expect(Math.random()).toEqual(0.1);
  });

  //afterEachが実行され、randomは0から1以下を返す

  it("Math.random return under 1", () => {
    expect(Math.random()).toBeLessThan(1); // 1未満である
    expect(Math.random() < 1).toEqual(true); // toEqualで1未満であることを評価する
  });
});```
````
