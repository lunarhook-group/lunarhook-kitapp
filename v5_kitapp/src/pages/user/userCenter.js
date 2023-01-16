import React, { Component } from 'react'
import { View, Image, Text, Canvas, ScrollView,Button } from '@tarojs/components';
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
  saveImg(w,h,qrCodeSide,qrCenter) {
    const query = Taro.createSelectorQuery()
    query.select('#usercenter').fields({ node: true, size: true })
    .exec(function(res){
      const canvas = res[0].node
      const ctx = canvas.getContext('2d')
      ctx.draw();

      setTimeout(() => {
        Taro.canvasToTempFilePath({
          x: 0,
          y: 0,
          width: w,
          canvasId: 'usercenter',
          canvas: 'usercenter',
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
          }
        });
      }, 300);
    })
    // 创建canvas对象
    //const cxt = Canvas.getContext('2d')
    // 绘制背景
    //cxt.drawImage(miniapp, 0, 0, w, h);
    // 绘制圆形
    //cxt.arc(qrCenter.x, qrCenter.y, qrCodeSide / 2, 0, 2 * Math.PI);
    // 设置裁剪，下面绘制二维码就会裁剪在圆形上
    //cxt.clip();
    // 绘制二维码
    //cxt.drawImage(test, 264, 845, qrCodeSide, qrCodeSide);
    //cxt.draw();
    // 延迟执行才能绘制成功
    setTimeout(() => {
      Taro.canvasToTempFilePath({
        x: 0,
        y: 0,
        width: w,
        canvasId: 'usercenter',
        canvas: 'usercenter',
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
        }
      });
    }, 300);
  };
  // 获取用户列表API
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
  <Canvas className='imagecontain' canvas-id="usercenter" id="usercenter" style={{ width: w, height: h }}>
          <View className="imageslogan">
            <Image style='width: 140px;height: 140px;background: #fff;' src='./assets/study.jpg'>    <View style="opacity: 0;position: absolute; width: 100%; height: 100%; top: 0; transform-origin: top right;">
              <cell url='https://work.weixin.qq.com/gm/548967c3d68a0998980beabbc6e8be6a' />
              <cell url='https://work.weixin.qq.com/gm/548967c3d68a0998980beabbc6e8be6a' />
              <cell url='https://work.weixin.qq.com/gm/548967c3d68a0998980beabbc6e8be6a' />
              <cell url='https://work.weixin.qq.com/gm/548967c3d68a0998980beabbc6e8be6a' />
            </View>
            </Image>
            <Image style='width: 140px;height: 140px;background: #fff;' src='./assets/test.jpg' showMenuByLongpress={true} onTap={() => this.clickimg("service")}></Image>
            <View className="imageslogan">
              <Text>点二维码加入课程学习群</Text>
            </View>
          </View>

          <View className="imageslogan">
            
          </View>
          <View className="imageslogan">
            <Text>扫码联系支持人员</Text>
          </View>
          <Text style="opacity: 0">blockline</Text>
          <Text style="opacity: 0">blockline</Text>
          <View className="imageslogan">
            <Text>乾坤爻APP亦可通过各手机市场渠道获取</Text>
          </View>
          </Canvas>
          <Button size='mini' type='primary' onClick={()=>this.saveImg(w,h,qrCodeSide,qrCenter)}>制作海报</Button>
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
