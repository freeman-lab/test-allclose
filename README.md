# test-allclose

Utility for [tape](https://github.com/substack/tape) to compare numbers, arrays, or nested arrays up to some tolerance, with helpful error output on test failure. Uses [allclose](https://github.com/freeman-lab/allclose) and inspired by [test-fuzzy-array](https://github.com/Jam3/test-fuzzy-array).

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

# install

use npm

```
npm install test-allclose
```

# usage

require with 

```javascript
var allclose = require('test-allclose')
```

then use with a test instance `t` of [`tape`](https://github.com/substack/tape) or similar

```javascript
var close = allclose(t)
```

to get a function `close(a, b, [atol], [rtol])` that, when called on two arrays `a` and `b`, will execute tests using the test instance `t` and generate useful output on test failure

# examples

setup tests using `tape` as usual

```javascript
var test = require('tape')
```

then inside a test call 

```javascript
test('arrays', function (t) {
  allclose(t)([1, 2], [1, 3])
  t.end()
})
```

you can test numbers

```javascript
allclose(t)(1, 2)
```

or arrays

```javascript
allclose(t)([1, 2], [1, 3])
```

or nested arrays

```javascript
allclose(t)([[1, 2], [3, 4]], [[1, 2], [3, 5]])
```

and you can optionally specify a tolerance

```javascript
allclose(t)([1, 2], [1, 2.1])
> test fails

allclose(t)([1, 2], [1, 2.1], 0.3)
> test passes
```



