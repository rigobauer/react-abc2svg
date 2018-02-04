import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { expect } from 'chai'
import sinon from 'sinon'

import Abc2Svg from 'src/'

describe('Abc2Svg', () => {
  it('shallow renders <Abc2Svg /> with default parameters', () => {
    const wrapper = shallow(<Abc2Svg />, { disableLifecycleMethods: true })
    expect(wrapper.html()).to.equal(
      '<div style="width:100%"><div class="abc2svg-result" style="width:100%"></div></div>'
    )
  })

  it('shallow renders <Abc2Svg /> with no abcNotation and showErrors option enabled', () => {
    const wrapper = shallow(<Abc2Svg showErrors />, {
      disableLifecycleMethods: true
    })
    expect(wrapper.html()).to.equal(
      '<div style="width:100%"><div class="abc2svg-result" style="width:100%"></div></div>'
    )
  })

  it('renders <Abc2Svg /> with a simple abcNotation', () => {
    const wrapper = render(
      <Abc2Svg
        abcNotation={'%%fullsvg randomprefix\nX:1\nT:Test\nM:4/4\nK:G\nAggg'}
      />,
      { disableLifecycleMethods: true }
    )
    expect(wrapper.find('.nobrk')).to.have.length(1)
    expect(wrapper.find('.f1randomprefix').html()).to.equal('Test')
  })

  it('renders <Abc2Svg /> with a simple incorrect abcNotation', () => {
    const wrapper = render(
      <Abc2Svg abcNotation={'X:1\nT:Test\nM:4z/4\nK:G\nAggg'} showErrors />,
      { disableLifecycleMethods: true }
    )
    expect(wrapper.find('.abc2svg-errors').html()).to.equal(
      'ABC NOTATION:4:1 Error: Bad char &apos;z&apos; in M:<br>\n'
    )
  })

  it('mounts <Abc2Svg /> with a simple abcNotation', () => {
    sinon.spy(Abc2Svg.prototype, 'render')
    sinon.spy(Abc2Svg.prototype, 'componentDidMount')
    sinon.spy(Abc2Svg.prototype, 'componentWillUnmount')
    const wrapper = mount(
      <Abc2Svg abcNotation={'X:1\nT:Test\nM:4/4\nK:G\nAggg'} showErrors />
    )
    expect(Abc2Svg.prototype.render.callCount).to.equal(2)
    expect(Abc2Svg.prototype.componentDidMount.calledOnce).to.equal(true)
    expect(Abc2Svg.prototype.componentWillUnmount.notCalled).to.equal(true)
    wrapper.unmount()
    expect(Abc2Svg.prototype.componentWillUnmount.calledOnce).to.equal(true)
  })
})
