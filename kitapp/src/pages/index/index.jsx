import Taro, { Component } from '@tarojs/taro'
import { View, Text ,Image,Button} from '@tarojs/components'
import {  AtCalendar} from "taro-ui"
import './index.scss'


import imgtime from '../img/time/1.jpg'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '乾坤爻'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Image
          style='width: 600px;height: 300px;background: #fff;'
          src={imgtime}
        />
        <Text>Hello world!fanxl</Text>
        <Button onClick={Taro.navigateTo({url: 'pages/kit/litekitPage'})}>test</Button>
      </View>
    )
  }
}
