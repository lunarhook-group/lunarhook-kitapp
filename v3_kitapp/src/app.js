import React, { Component } from 'react'
import './app.scss'
import './icon.scss'
import plumber  from './pages/plumbertracewithoutpoucdbwithwxrequest_mini'
import Taro from '@tarojs/taro'
//https://blog.csdn.net/baidu_39067385/article/details/111411634

class App extends Component {

  componentDidMount () {
    var systemInfo = Taro.getSystemInfoSync()
    plumber("sdk-mini",1.0,'',systemInfo.platform == 'devtools')
    wx.onAppRoute((route) => {
      plumber().addTodb(route.path)
     
   })
  
  
  }
  componentDidShow () {
    plumber().addTodb('ff')
  }
  componentDidHide () {
    plumber().rounting('bg',true)
  }

  componentDidCatchError () {}
  // this.props.children 是将要会渲染的页面
  onShow(options) {
    wx.onAppRoute(function(res){
    console.log('onAppRoute',{res})
    })
    }
  render () {


       return  this.props.children

  }
}

export default App
