
import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Image, CustomWrapper, ScrollView } from '@tarojs/components'
import { AtIcon, AtDivider, AtTabBar, AtList, AtListItem } from 'taro-ui'
import './base.scss'
import '../../../theme.scss'
import {handleClick,tablist} from '../../config/common'
import plumber from '../../plumbertracewithoutpoucdbwithwxrequest_miniv3'
//import WXBizDataCrypt from './WXBizDataCrypt'
import './icon_awesome.scss'
import './icon_ionicons.scss'
import './icon_mdi.scss'

let Basepagethis = null
export default class litekitPage extends Component {
  componentDidMount() {
    Taro.showShareMenu({
      withShareTicket: true,
      showShareItems:['shareAppMessage', 'shareTimeline','wechatFriends', 'wechatMoment']
    })
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              Basepagethis.setState({ login: true })
              plumber.uid_uid = Basepagethis.getweixinunionid(res.userInfo)
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
    Basepagethis = this
  }

  ClickAtTabBar(value)
  {
    handleClick(value)
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
                Basepagethis.setState({ login: true })
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
                title='乾坤九考（壬寅测试版）'
                note='根据《三玄》《四书》《五经》中周易相关知识按难度出题，对自学周易以及相关国学知识的自我检测，分成九个难度，目前只开放最简单的'
                iconInfo={{
                  prefixClass: 'mdi',
                  size: 30,
                  color: '#00C0FF',
                  value: 'language-xaml',
                }}
                onClick={this.GridHander.bind(this, '乾坤九考')}
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
            color='#08ad0f'
            selectedColor="#32ea38"
            tabList={tablist}
            onClick={this.ClickAtTabBar}
            current={0}
          >
          </AtTabBar>
        </View>
      )
    }

  }

