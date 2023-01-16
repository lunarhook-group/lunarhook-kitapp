
import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Image, CustomWrapper, ScrollView } from '@tarojs/components'
import { AtIcon, AtDivider, AtTabBar, AtList, AtListItem } from 'taro-ui'
import './litekitPage.scss'
import '../../../theme.scss'
import plumber from '../../plumbertracewithoutpoucdbwithwxrequest_miniv3'
import { handleClick } from '../../config/common'
import './icon_awesome.scss'
import './icon_ionicons.scss'
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
    Taro.showShareMenu({
      withShareTicket: true,
      showShareItems: ['shareAppMessage', 'shareTimeline', 'wechatFriends', 'wechatMoment']
    })
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
  /*
    handleClick(value) {
      if (3 == value) {
        Taro.navigateTo({ url: '../../../pages/user/userCenter' })
      }
      else if (2 == value) {
        Taro.redirectTo({ url: '../../../pages/kit/tools/Psy' })
      }
      else if (2 == value) {
        Taro.redirectTo({ url: '../../../pages/kit/tools/litekitPage' })
      }
      else if (0 == value) {
        Taro.redirectTo({ url: '../../../pages/kit/tools/base' })
      }
    }
  */
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
    }
    else if ("八字测评" == item) {
      Taro.navigateTo({ url: '../../../pages/kit/UniversechangesLib/EightrandomLib/EightrandomNewPage' })
    }
    else if ("数字八星" == item) {
      Taro.navigateTo({ url: '../../../pages/kit/UniversechangesLib/NumberLib/NumberMainPage' })
    }
    else if ("乾坤九考" == item) {
      Taro.navigateTo({ url: '../../../pages/kit/exam/TrigramsTestModule' })
    }
    else if ("合卺问礼" == item) {
      Taro.navigateTo({ url: '../../../pages/kit/UniversechangesLib/Marry/MarryNewPage' })
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
  ClickAtTabBar(value) {
    handleClick(value)
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
            <AtDivider>
              <AtIcon prefixClass='fa' value='balance-scale' size='20' color="red"></AtIcon>
              <Text color="#FFCE00"> 婚姻测试 </Text>
              <AtIcon prefixClass='fa' value='balance-scale' size='20' color="red"></AtIcon>
            </AtDivider>
            <AtList hasBorder={false}>
              <AtListItem
                title='合卺问礼'
                note='合卺，始于周朝，为旧时汉族婚俗仪式之一'
                iconInfo={{
                  prefixClass: 'fa',
                  size: 26,
                  color: "#FFB6C1",
                  value: 'diamond'
                }}
                onClick={this.GridHander.bind(this, '合卺问礼')}
              />
            </AtList>
            <AtDivider>
              <AtIcon class value='bookmark' color="#FFCE00"></AtIcon>
              <Text color="#FFCE00"> 周易测试 </Text>
              <AtIcon value='bookmark' color="#FFCE00"></AtIcon>
            </AtDivider>
            <AtList hasBorder={false}>
              <AtListItem
                title='六爻测试'
                note='六爻八卦预测，是古人观察大自然运行规律总结出来的一项法则。起源于西汉京房的纳甲体系'
                iconInfo={{
                  prefixClass: 'mdi',
                  size: 30,
                  color: "#1FA7DE",
                  value: 'yin-yang'
                }}
                onClick={this.GridHander.bind(this, '六爻测试')}
              />
              <AtListItem
                title='八字测评'
                note='八字即生辰八字，是一个人出生时的干支历日期,四柱加大运加流年的预测模式称之为子平术；四柱太阳律月亮律属于四柱完整的预测技术与方法'
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
                note='数字八星可以根据任意数字组合，例如身份证电话等，并将其命名为：天医，生气，延年，伏位，绝命，祸害，六煞，五鬼共分为四凶四吉'
                iconInfo={{
                  prefixClass: 'mdi',
                  size: 30,
                  color: "#13BD7A",
                  value: 'signal'
                }}
                onClick={this.GridHander.bind(this, '数字八星')}
              />
            </AtList>
            <View>
              <Text style="opacity: 0">blockline</Text>
            </View>
            <View>
              <Text style="opacity: 0">blockline</Text>
            </View>
            <View>
              <Text style="opacity: 0">blockline</Text>
            </View>
            <View>
              <Text style="opacity: 0">blockline</Text>
            </View>
            <View>
              <Text style="opacity: 0">blockline</Text>
            </View>
            <View>
              <Text style="opacity: 0">blockline</Text>
            </View>
          </ScrollView>
          <AtTabBar
            fixed
            tabList={[
              { title: '基  础', iconType: 'lightning-bolt' },
              { title: '易  学', iconType: 'list' },
              { title: '心  理', iconType: 'list' },
              { title: '分  享', iconType: 'tag' }
            ]}
            onClick={this.ClickAtTabBar}
            current={1}
          >
          </AtTabBar>
        </View>
      )
    }
  }
}

