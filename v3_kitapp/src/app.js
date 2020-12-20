import React, { Component } from 'react'
import './app.scss'
//import './pages/kit/litekitPage'

class App extends Component {
  componentDidMount () {}
  componentDidShow () {}
  componentDidHide () {}
  componentDidCatchError () {}
  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
    //return( <litekitPage> )
  }
}
export default App
