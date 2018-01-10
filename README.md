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

[build-badge]: https://img.shields.io/travis/rigobauer/react-abc2svg/master.png?style=flat-square
[build]: https://travis-ci.org/rigobauer/react-abc2svg

[npm-badge]: https://img.shields.io/npm/v/react-abc2svg.png?style=flat-square
[npm]: https://www.npmjs.org/package/react-abc2svg

[coveralls-badge]: https://img.shields.io/coveralls/rigobauer/react-abc2svg/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/rigobauer/react-abc2svg
