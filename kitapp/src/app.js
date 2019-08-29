import Taro, { Component } from '@tarojs/taro'
import Slogan from './pages/slogan'
import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      'pages/slogan/slogan',
      'pages/kit/litekitPage',
      'pages/kit/LunarMotionsLib/PsychLib/MBTIModule',
      'pages/kit/LunarMotionsLib/PsychLib/EnneagramModule',
      'pages/kit/LunarMotionsLib/PsychLib/HollandModule',
      'pages/user/userCenter',
      'pages/kit/tools/sloganShare'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black',
      navigationBarTitleText: '乾坤爻'
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Slogan />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
