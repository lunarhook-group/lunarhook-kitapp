import Taro, { Component } from '@tarojs/taro'
import { View, Text ,Image,Button, ScrollView} from '@tarojs/components'
import { AtAccordion, AtGrid,AtTabBar } from 'taro-ui'
import './litekitPage.scss'
import { object } from 'prop-types';

var data1 = 
  [
     {
       image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
       value: '职业性格测试'
     },
     {
       image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
       value: '找折扣'
     },
     
   ];
 

   var data2 = 
   [
      {
        image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
        value: '领取中心'
      },
      {
        image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
        value: '找折扣'
      },
      {
        image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
        value: '领会员'
      },
      {
        image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
        value: '新品首发'
      },
      {
        image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
        value: '领京豆'
      },
      {
        image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
        value: '手机馆'
      }
    ];
export default class litekitPage extends Component {
  config = {
    navigationBarTitleText: '月如钩'
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
