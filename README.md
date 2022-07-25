# jest tutorial
## it/test
どっちも同じ

## matcher
- toBe
- toEqual
それぞれnotを前につけると反対のテストも可能

- toBeNull: nullのみ一致
- toBeUndefined: undefinedのみ一致
- toBeDefined: toBeUndefinedの反対
- toBeTruthy: ifが真になるもの
- toBeFalsy: ifが偽になるもの

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
