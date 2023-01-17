import React, { Component } from 'react'
import { View, Image, Text, Canvas, ScrollView, Button } from '@tarojs/components';
import Taro from '@tarojs/taro'
import { AtIcon, AtDivider, AtTabBar, AtList, AtListItem } from 'taro-ui'
import './userCenter.scss';
import '../kit/tools/icon_mdi.scss'
import miniapp from './assets/miniapp.jpg'
import study from './assets/study.jpg'
import test from './assets/test.jpg'

import plumber from '../plumbertracewithoutpoucdbwithwxrequest_miniv3'

export default class UserCenter extends Component {
  componentDidMount() {
    Taro.showShareMenu({
      withShareTicket: true,
      showShareItems: ['shareAppMessage', 'shareTimeline', 'wechatFriends', 'wechatMoment']
    })
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

    var url = "https://www.lunarhook.com/static/img/nav279486.jpg"
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
  saveImg(w, h, qrCodeSide, qrCenter) {
    setTimeout(() => {
      Taro.nextTick(() => {
        wx.createSelectorQuery().selectAll('#usercenter').node(res => {
            const node = res[0]
            if (!node) return
            const ctx = res[0].node.getContext('2d')
            Taro.getImageInfo({ src: 'https://www.lunarhook.com/static/img/study.jpg' })
              .then((res) => {
                ctx.drawImage(miniapp, 0, 0, 140, 140);
                //ctx.drawImage("https://www.lunarhook.com/static/img/study.jpg", 160, 0, 140, 140);
                //ctx.drawImage("https://www.lunarhook.com/static/img/study.jpg", 0, 190, 140, 140);
                //ctx.drawImage("https://www.lunarhook.com/static/img/study.jpg", 160, 190, 140, 140);
                ctx.draw()
                setTimeout(() => {
                  Taro.canvasToTempFilePath({
                    x: 0,
                    y: 0,
                    width: w,
                    height: h,
                    canvasId: 'usercenter',
                    fileType: 'jpg',
                    success(res) {
                      setTimeout(() => {
                        Taro.saveImageToPhotosAlbum({
                          filePath: res.tempFilePath,
                          success() {
                            Taro.showToast('已保存到本地相册');
                          }
                        });
                      }, 300);
                    },
                    fail(res) {
                      console.log(res)
                    }
                  });
                }, 500)
              })
          }).exec()
      })

    }, 500)








  }

  render() {
    var res = Taro.getSystemInfoSync()
    var w = res.windowWidth * 0.9
    var h = res.windowHeight * 0.8
    var qrCodeSide = 234;
    // 二维码圆心位置
    var qrCenter = {
      x: 381,
      y: 381
    };
    return (
      <View className="container">
        <ScrollView>
          <View className='imagecontain' style={{ width: w, height: h }}>
            <View className="imageslogan">
              <Image style='width: 140px;height: 140px;background: #fff;' src='./assets/study.jpg'>    <View style="opacity: 0;position: absolute; width: 100%; height: 100%; top: 0; transform-origin: top right;">
                <cell url='https://work.weixin.qq.com/gm/548967c3d68a0998980beabbc6e8be6a' />
                <cell url='https://work.weixin.qq.com/gm/548967c3d68a0998980beabbc6e8be6a' />
                <cell url='https://work.weixin.qq.com/gm/548967c3d68a0998980beabbc6e8be6a' />
                <cell url='https://work.weixin.qq.com/gm/548967c3d68a0998980beabbc6e8be6a' />
              </View>
              </Image>
              <Image style='width: 140px;height: 140px;background: #fff;' src='./assets/test.jpg' showMenuByLongpress={true} onTap={() => this.clickimg("service")}></Image>

            </View>

            <View className="imagecontain">
              <View className="imageslogan">
                <Text>癸卯学习服务二维码</Text>
                <Text>乾坤爻服务支持QQ群</Text>
              </View>
            </View>
            <Text style="opacity: 0">blockline</Text>
            <Text style="opacity: 0">blockline</Text>
            <View className="imageslogan">
              <Image style='width: 140px;height: 140px;background: #fff;' src='./assets/miniapp.jpg'>    <View style="opacity: 0;position: absolute; width: 100%; height: 100%; top: 0; transform-origin: top right;">
              </View>
              </Image>
              <Image style='width: 140px;height: 140px;background: #fff;' src='./assets/test.jpg' showMenuByLongpress={true} onTap={() => this.clickimg("service")}></Image>

            </View>
            <View className="imagecontain">
              <View className="imageslogan">
                <Text>分享乾坤爻小程序</Text>
                <Text>下载乾坤爻原生应用</Text>
              </View>
            </View>
            <View className="imageslogan">

            </View>
            <Text style="opacity: 0">blockline</Text>
            <Text style="opacity: 0">blockline</Text>
            <View className="imageslogan">
              <Button size='default' type='primary' onClick={() => this.saveImg(w, h, qrCodeSide, qrCenter)}>制作分享海报</Button>
              <Canvas type="2d" className='imagecontain' id="usercenter" style={{ width: w, height: h }}></Canvas>
            </View>
          </View>
        </ScrollView>
        <AtTabBar
          fixed
          selectedColor="#3dd1e0"
          tabList={[
            {
              title: '开屏语', iconPrefixClass: 'mdi',
              size: 36,
              color: "#3dd1e0", iconType: 'seed-outline'
            },
          ]}
          onClick={() => Taro.navigateTo({ url: '../kit/tools/SloganShare' })}
        >
        </AtTabBar>
      </View>
    );
  }
};
