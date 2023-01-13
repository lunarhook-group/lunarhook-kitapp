
import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Image, CustomWrapper, ScrollView } from '@tarojs/components'
import { AtIcon, AtDivider, AtTabBar, AtList, AtListItem } from 'taro-ui'
import './litekitPage.scss'
import '../../../theme.scss'
import plumber from '../../plumbertracewithoutpoucdbwithwxrequest_miniv3'
//import WXBizDataCrypt from './WXBizDataCrypt'
import './icon_awesome.scss'
//import './icon_ionicons.scss'
import './icon_mdi.scss'
var data1 =
  [
    {
      iconInfo: {
        prefixClass: 'fa',
        size: 30,
        color: 'orange',
        value: 'podcast'
      },
      value: 'MBTI职业性格测试小程序版'
    },
    {
      iconInfo: {
        prefixClass: 'fa',
        size: 30,
        color: 'red',
        value: 'universal-access'
      },
      value: '九型人格测试小程序版'
    },

    {
      iconInfo: {
        prefixClass: 'fa',
        size: 30,
        color: 'blue',
        value: 'tachometer'
      },
      value: '霍兰德职业测试'
    },
  ];

var data2 =
  [
    {
      iconInfo: {
        prefixClass: 'fa',
        size: 30,
        color: 'darkblue',
        value: 'moon-o'
      },
      value: '六爻测试'
    },
    {
      iconInfo: {
        prefixClass: 'ion',
        size: 30,
        color: 'orange',
        value: 'ios-finger-print'
      },
      value: '八字测评'
    },
    {
      iconInfo: {
        prefixClass: 'fa',
        size: 30,
        color: 'green',
        value: 'signal'
      },
      value: '数字八星'
    },
  ];
let litekitPagethis = null
export default class litekitPage extends Component {
  componentDidMount() {
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              litekitPagethis.setState({ login: true })
              plumber.uid_uid = litekitPagethis.getweixinunionid(res.userInfo)
            }
          })
        }
      }
    })
    this.setState({ current: 1 })

  }
  componentDidUpdate() {

  }
  constructor(props) {
    super(props)
    var open = new Array()
    open[1] = true
    open[2] = true
    this.state = {
      open: open,
      login: false,
    }
    litekitPagethis = this
  }

  handleClick(value) {
    this.setState({ current: value })
    if (2 == value) {
      Taro.navigateTo({ url: '../../../pages/user/userCenter' })
    }
    if (0 == value) {
      Taro.navigateTo({ url: '../../../pages/kit/tools/SloganShare' })
    }

  }

  GridHander(item, index) {
    if ("职业性格测试" == item) {
      Taro.navigateTo({ url: '../../../pages/kit/LunarMotionsLib/PsychLib/MBTIModule' })
    }
    else if ("九型人格测试" == item) {
      Taro.navigateTo({ url: '../../../pages/kit/LunarMotionsLib/PsychLib/EnneagramModule' })
    }
    else if ("霍兰德职业测试" == item) {
      Taro.navigateTo({ url: '../../../pages/kit/LunarMotionsLib/PsychLib/HollandModule' })
    }
    else if ("六爻测试" == item) {
      Taro.navigateTo({ url: '../../../pages/kit/UniversechangesLib/SixrandomLib/SixrandomNewPage' })
      //plumber('test',true)
    }

    else if ("八字测评" == item) {
      Taro.navigateTo({ url: '../../../pages/kit/UniversechangesLib/EightrandomLib/EightrandomNewPage' })
    }
    else if ("数字八星" == item) {
      Taro.navigateTo({ url: '../../../pages/kit/UniversechangesLib/NumberLib/NumberMainPage' })
    }
    else if("乾坤九考" == item){
      Taro.navigateTo({ url: '../../../pages/kit/exam/TrigramsTestModule' })

    }
  }
  handleAccordionClick(index, value) {
    //console.log(value,index)
    //var open = this.state.open
    open[index] = value;
    this.setState({ open: open })
  }


  getweixinunionid(userInfo) {
    return
    const appId = 'wx4c02534bf271e2f6'
    //var pc = new WXBizDataCrypt(appId, sessionKey)

    //var data = pc.decryptData(userInfo.encryptedData, userInfo.iv)
  }


  userInfoHandler() {
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo(
            {
              withCredentials: true,
              success: function (res) {
                //plumber
                litekitPagethis.setState({ login: true })
              }
            })
        }
      }
    })
  }
  showlogin(login) {
    return (<View className={'contain'}>
      <button open-type="getUserInfo" onGetUserInfo={this.userInfoHandler}>获取用户信息(授权登录)</button>
    </View>)
  }
  render() {

    const { login } = this.state;
    if (false == login) { return this.showlogin(login) }
    else {
      return (
        <View className={'contain'}>

         

             <ScrollView>
          <AtDivider >
              <AtIcon value='bell' color="#13BD7A"></AtIcon>
              <Text> 基础测试 </Text>
              <AtIcon value='bell' color="#13BD7A"></AtIcon>
            </AtDivider>
            <AtList hasBorder={false}>
            <AtListItem
                title='乾坤九考'
                iconInfo={{
                  prefixClass: 'mdi',
                  size: 30,
                  color: '#00C0FF',
                  value: 'language-xaml',
                }}
                onClick={this.GridHander.bind(this, '乾坤九考')}
              />
               
              </AtList>

            <AtDivider>
              <AtIcon value='bookmark' color="#FFCE00"></AtIcon>
              <Text color="#FFCE00"> 周易测试 </Text>
              <AtIcon value='bookmark' color="#FFCE00"></AtIcon>
            </AtDivider>
            <AtList hasBorder={false}>
              <AtListItem
                title='六爻测试'
                iconInfo={{
                  prefixClass: 'mdi',
                  size: 30,
                  color:  "#1FA7DE",
                  value: 'yin-yang'
                }}
                onClick={this.GridHander.bind(this, '六爻测试')}
              />
              <AtListItem
                title='八字测评'
                iconInfo={{
                  prefixClass: 'mdi',
                  size: 30,
                  color: 'red',
                  value: 'fingerprint'
                }}
                onClick={this.GridHander.bind(this, '八字测评')}
              />
              <AtListItem
                title='数字八星'
                iconInfo={{
                  prefixClass: 'mdi',
                  size: 30,
                  color: "#13BD7A",
                  value: 'signal'
                }}
                onClick={this.GridHander.bind(this, '数字八星')}
              />
            </AtList>
            <AtDivider >
              <AtIcon value='heart'    color= 'red'></AtIcon>
              <Text> 心理测试 </Text>
              <AtIcon value='heart'    color= 'red'></AtIcon>
            </AtDivider>
            <AtList hasBorder={false}>
              <AtListItem
                title='职业性格测试小程序版'
                iconInfo={{
                  prefixClass: 'fa',
                  size: 30,
                  color: '#FFCE00',
                  value: 'podcast',
                }}
                onClick={this.GridHander.bind(this, '职业性格测试')}
              />
              <AtListItem
                title='九型人格测试小程序版'
                iconInfo={{
                  prefixClass: 'fa',
                  size: 30,
                  color: 'red',
                  value: 'universal-access'
                }}
                onClick={this.GridHander.bind(this, '九型人格测试')}
              />
              <AtListItem
                title='霍兰德职业测试小程序版'
                //extraText='详细信息'
                iconInfo={{
                  prefixClass: 'mdi',
                  size: 30,
                  color:  "#1FA7DE",
                  value: 'alert-decagram'
                }}
                onClick={this.GridHander.bind(this, '霍兰德职业测试')}
              />
            </AtList>
           
          </ScrollView>
          <AtTabBar
            fixed
            tabList={[
              { title: '开屏语', iconType: 'lightning-bolt' },
              { title: '测  评', iconType: 'list' },
              { title: '信  息', iconType: 'tag' }
            ]}
            onClick={this.handleClick.bind(this)}
            current={1}
          >
          </AtTabBar>
        </View>
      )
    }

  }
}

