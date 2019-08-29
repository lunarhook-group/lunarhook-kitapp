import Taro, { Component } from '@tarojs/taro'
import { View, Text ,Image,Button, ScrollView} from '@tarojs/components'
import { AtAccordion, AtGrid,AtTabBar } from 'taro-ui'
import './litekitPage.scss'
import { object } from 'prop-types';

import testimage from '../../assets/images/answer.png'
var data1 = 
  [
     {
      image: testimage,
       value: '职业性格测试'
     },
    {
      image: testimage,
      value: '九形人格测试'
    },
     
    {
      image: testimage,
      value: '霍兰德职业测试'
    },
   ];
 
export default class litekitPage extends Component {
  config = {
    navigationBarTitleText: '乾坤爻'
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { 
    this.setState({current:1})
  }

  componentDidHide() { }

  constructor () {
    super(...arguments)
    this.state = {
      current: 1
    }
  }
  handleClick (value) {
    this.setState({current:value})
    if(2==value)
    {
      Taro.navigateTo({url:'../../pages/user/userCenter'})
    }
    if(0==value)
    {
      Taro.navigateTo({url:'../../pages/kit/tools/sloganShare'})
    }
   
  }
  GridHander(item: object, index: number)
  {
    if("职业性格测试"==item.value)
    {
      Taro.navigateTo({url:'../../pages/kit/LunarMotionsLib/PsychLib/MBTIModule'})
    }
    else if ("九形人格测试" == item.value) {
      Taro.navigateTo({ url: '../../pages/kit/LunarMotionsLib/PsychLib/EnneagramModule' })
    }
    else if ("霍兰德职业测试" == item.value) {
      Taro.navigateTo({ url: '../../pages/kit/LunarMotionsLib/PsychLib/HollandModule' })
    }
    
  }
  render() {
    return (
      <View className={'contain'}>
        <ScrollView>
        <AtGrid mode='square' data={data1}
        onClick={this.GridHander.bind(this)}
        />
         </ScrollView>
 <AtTabBar
  fixed
  tabList={[
    { title: '开屏语',  iconType: 'lightning-bolt' },
    { title: '鹿鸣测评', iconType: 'list' },
    { title: '我的', iconType: 'tag' }
  ]}
  onClick={this.handleClick.bind(this)}
  current={this.state.current}
/>
      </View>
    )
  }
};
