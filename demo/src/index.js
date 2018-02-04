import React, { Component } from 'react'
import { render } from 'react-dom'

import Abc2Svg from '../../src'

class Demo extends Component {
  state = {
    abcNotation:
      'X:1\nT:Test\nM:4/4\nK:C\n|:GcAB dedB|dedB dedB|c2ec B2dB|c2A2 A2BA|'
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        abcNotation:
          'X:1\nT:Test\nM:4/4\nK:C\n|:Gccc dedB|dedB dedB|c2ec B2dB|c2A2 A2BA|'
      })
    }, 5000)
  }
  render() {
    const { abcNotation } = this.state
    return (
      <div style={{ border: '1px solid black', padding: '100px' }}>
        <Abc2Svg abcNotation={abcNotation} />
      </div>
    )
  }
}

render(<Demo />, document.querySelector('#demo'))
