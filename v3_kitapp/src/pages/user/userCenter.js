import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { AtAvatar, AtList, AtListItem } from 'taro-ui';
import { View, Image, Text, WebView, ScrollView } from '@tarojs/components';
import './userCenter.scss';
import serviceimg from './assets/service.jpg'
import study from './assets/study.jpg'
import test from './assets/test.jpg'

import plumber from '../plumbertracewithoutpoucdbwithwxrequest_miniv3'

export default class UserCenter extends Component {
  componentDidMount() {

  }
  componentDidHide() { }
  componentDidCatchError() { }
  componentDidShow() {
    //plumber(this.props.tid)
  }

  static defaultProps = {
    privateList: [],
    walletList: [],
    controlList: [],
    userCenterList: []
  };

  clickimg(action) {

    var url = "https://www.lunarhook.com/static/img/nav279486.png"
    if (action == "service") {
      console.log(action)
      url = "https://www.lunarhook.com/static/img/service.jpg"
    }
    else if (action == "study") {
      console.log(action)
      url = "https://www.lunarhook.com/static/img/study.jpg"
    }
    wx.previewImage({
      urls: [url],
    })
  }
  // 获取用户列表API
  render() {
    const { userCenterList } = this.props
    return (
      <View className="container">
        <ScrollView>
          {/*}
        <View className="userinfo">
          <View className="userinfo-avatar">
            <AtAvatar circle openData={{ type: 'userAvatarUrl' }}></AtAvatar>
          </View>
          <View>
            <View className="userinfo-nickname">
              <open-data type="userNickName" lang="zh_CN"></open-data>
            </View>
            <View className="userinfo-tip"></View>
          </View>
             
        </View> {*/}

          <View className="imageslogan">
          <Image style='width: 140px;height: 140px;background: #fff;' src='./assets/study.jpg'>    <View style="opacity: 0;position: absolute; width: 100%; height: 100%; top: 0; transform-origin: top right;">
           
           <cell url='https://work.weixin.qq.com/gm/548967c3d68a0998980beabbc6e8be6a' />
           <cell url='https://work.weixin.qq.com/gm/548967c3d68a0998980beabbc6e8be6a' />
           <cell url='https://work.weixin.qq.com/gm/548967c3d68a0998980beabbc6e8be6a' />
           <cell url='https://work.weixin.qq.com/gm/548967c3d68a0998980beabbc6e8be6a' />
           </View>
       </Image>
            
            <View className="imageslogan">
            <Text>点二维码加入课程学习群</Text>
            </View>
          </View>

          <View className="imageslogan">
            <Image style='width: 140px;height: 140px;background: #fff;' src='./assets/test.jpg' showMenuByLongpress={true} onTap={() => this.clickimg("service")}></Image>
          </View>
          <View className="imageslogan">
            <Text>扫码联系支持人员</Text>
          </View>

          {/*  用户列表信息   */}
          {userCenterList.map((item, index) => {
            return (
              <AtList className="user-list" key={index.id}>
                {item.map((i, itemIndex) => {
                  return (
                    <View className="user-list-item" key={itemIndex.id}>
                      <AtListItem
                        className="user-list-title"
                        arrow="right"
                        title={i.title}
                        thumb={i.icon}
                      />
                    </View>
                  );
                })}
              </AtList>
            );
          })}
        </ScrollView>
      </View>
    );
  }
};
