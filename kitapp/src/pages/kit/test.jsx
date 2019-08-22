import Taro, { Component } from '@tarojs/taro'
import { View, Text ,Image,Button} from '@tarojs/components'
import './test.scss'


import imgtime from '../img/time/1.jpg'

export default class test extends Component {

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
      <View className='test'>
        <Image
          style='width: 600px;height: 300px;background: #fff;'
          src={imgtime}
        />
        <Text>Hello world!fanxl</Text>
      </View>
    )
  }
}
