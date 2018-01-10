# react-abc2svg

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

A React component that uses the awesome [abc2svg](https://github.com/moinejf/abc2svg) to display music notation written using the [ABC notation](http://abcnotation.com).

### Usage

```js
<Abc2Svg
  abcNotation={'X:1\nT:Example\nM:4/4\nC:Trad.\nK:G\n|:Gccc dedB|dedB dedB|c2ec B2dB|c2A2 A2BA|'}
  showErrors
/>
```

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
