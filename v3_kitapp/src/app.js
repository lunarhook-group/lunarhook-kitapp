import React, { Component } from 'react'
import './app.scss'
import './icon.scss'
import { plumbertrace}  from './pages/plumbertrace'

//https://blog.csdn.net/baidu_39067385/article/details/111411634

class App extends Component {

  componentDidMount () {}
  componentDidShow () {
    plumbertrace('s')
  }
  componentDidHide () {
    plumbertrace('bg',true)
  }
  componentDidCatchError () {}
  // this.props.children 是将要会渲染的页面
  render () {

       return  this.props.children

  }
}
export default App
