import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, ScrollView ,CustomWrapper,Image} from '@tarojs/components'
import sloganshow from '../config/SloganModule'
import './Slogan.scss'
import time1 from './assets/1.jpg'
import time2 from './assets/2.jpg'
import time3 from './assets/3.jpg'
import time4 from './assets/4.jpg'
import time5 from './assets/5.jpg'
import time6 from './assets/6.jpg'
import time7 from './assets/7.jpg'
import time8 from './assets/8.jpg'
import time9 from './assets/9.jpg'
import time10 from './assets/10.jpg'
import time11 from './assets/11.jpg'
import time12 from './assets/12.jpg'

var imgtime = new Array()
imgtime.push(time1)
imgtime.push(time2)
imgtime.push(time3)
imgtime.push(time4)
imgtime.push(time5)
imgtime.push(time6)
imgtime.push(time7)
imgtime.push(time8)
imgtime.push(time9)
imgtime.push(time10)
imgtime.push(time11)
imgtime.push(time12)



export default class Slogan extends Component {
  state = {
    animationData: {}
  }

  componentDidMount() { 
    this.timer = setInterval(() => {
      var cur = Math.floor(Math.random() * sloganshow.length)
      this.setState({ cur: cur })
      this.random()
    }, 1000 * 5);
    this.random()
   
    setTimeout(() => {
      Taro.navigateTo({ url: '../kit/tools/litekitPage' })
    }, 5000);

  }
  componentDidHide() { 
    this.timer && clearInterval(this.timer);
  }

  random() {
    let animation = Taro.createAnimation({
      timingFunction: "linear",
      success: function(res) {
        console.log(res)
      }
    })
    this.animation = animation;
    this.animation.opacity(0).step({duration: 1000,})
    this.setState({
      animationData: this.animation.export()
    }),
    setTimeout(() => {
      this.animation.opacity(1).step({duration: 1000,})
      this.setState({
        animationData: this.animation.export()
      })
    }, 1000);
    setTimeout(() => {
      this.animation.opacity(0).step({ducation: 1000})
      this.setState({
        animationData: this.animation.export()
      })
    }, 4000);



  }
  constructor (props) {
    super(props)
    this.state = { 
      cur: Math.floor(Math.random() * sloganshow.length),
     }
  }
  render() {
    const res = Taro.getSystemInfoSync()
    var selectday = new Date()
    var h = (selectday.getHours()+1)%24
    h = Math.floor((h/2)%12)
    //var curgztime = this.state.wanNianLiInfo.info.gzQuarter;
    //var imgindex = imgtime[curtimelucky[1]]
    //var second_height = 600
    //var second_width = 375


    var second_height= res.screenHeight
    var second_width = res.screenWidth
    return (
      <View className={"imagecontain"} animation={this.state.animationData}>
        <ScrollView >
        <Image style="width: 320px;height: 560px" src={imgtime[h]}></Image>
              <View className={"contain"}  >

              <CustomWrapper>
                  <Text className="text"     space="nbsp" >
                    {"    "+sloganshow[this.state.cur].contect}
                  </Text>
                  </CustomWrapper>
                </View>
                <View className={"slogan"} >
                  <Text  className="text" >
                    {sloganshow[this.state.cur].name}
                  </Text>
                  </View>

        </ScrollView>
      </View>
    );
  }
}

