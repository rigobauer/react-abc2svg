import React, { PureComponent } from 'react'
import { findDOMNode } from 'react-dom'
import PropTypes from 'prop-types'
import { Abc } from 'abc2svg/abc2svg-1.js'

class Abc2svgCallbacks {

  constructor() {
    this.abc_svg_output = ""
    this.abc_error_output = ""
    this.img_out = (data) => { this.abc_svg_output += data; }
    this.errmsg = (msg, ln, cn) => { this.abc_error_output += msg + "<br/>\n"; }
    this.read_file = (fn) => ""
    this.anno_start = (music_type, start_offset, stop_offset, x, y, w, h) => {}
    this.anno_stop = (music_type, start_offset, stop_offset, x, y, w, h) => {}
    this.get_abcmodel = (tsfirst, voice_tb, music_types, info) => {}
    this.page_format = true
  }
}

class Abc2Svg extends PureComponent {

  state = {
    containerWidth: ''
  }
  
  uniqueNumber = Date.now() + Math.random()
  abcCallbacks = new Abc2svgCallbacks()

  fitWidth = () => {
    this.setState({ containerWidth: '%%pagewidth ' + window.getComputedStyle(findDOMNode(this)).width + '\n'})    
  }

  componentDidMount() {
    this.fitWidth()
    window.addEventListener('resize', this.fitWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.fitWidth)
  }

  render() {
    const { abcNotation, showErrors } = this.props
    const { containerWidth } = this.state    

    let abc = new Abc(this.abcCallbacks)
    this.abcCallbacks.abc_svg_output = ''
    this.abcCallbacks.abc_error_output = ''
    abc.tosvg('ABC NOTATION', '%%fullsvg ra2s' + this.uniqueNumber + '\n' + containerWidth + abcNotation)

    return (
      <div style={{ width: '100%' }} >
        <div className="abc2svg-result" style={{ width: '100%' }}
          dangerouslySetInnerHTML={{ __html: this.abcCallbacks.abc_svg_output }}
        />
        {showErrors && this.abcCallbacks.abc_error_output !== '' &&
          <div className="abc2svg-errors" style={{ width: '100%', textAlign: 'center' }}
            dangerouslySetInnerHTML={{ __html: this.abcCallbacks.abc_error_output }}
          />
        }
      </div>
    )
  }

}

Abc2Svg.propTypes = {
  abcNotation: PropTypes.string,
  showErrors: PropTypes.bool
}

Abc2Svg.defaultProps = {
  abcNotation: '',
  showErrors: false
}

export default Abc2Svg