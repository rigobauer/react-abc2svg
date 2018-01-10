module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactAbc2svg',
      externals: {
        react: 'React'
      }
    }
  },
  karma: {
    testContext: 'tests.webpack.js'
  }
}
