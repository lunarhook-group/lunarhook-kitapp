import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, ScrollView } from '@tarojs/components'
import sloganshow from '../pages/config/SloganModule'
import './Slogan.scss'

/*
var imgtime = new Array()
imgtime["子"] = imgtime1
imgtime["丑"] = imgtime2
imgtime["寅"] = imgtime3
imgtime["卯"] = imgtime4
imgtime["辰"] = imgtime5
imgtime["巳"] = imgtime6
imgtime["午"] = imgtime7
imgtime["未"] = imgtime8
imgtime["申"] = imgtime9
imgtime["酉"] = imgtime10
imgtime["戌"] = imgtime11
imgtime["亥"] = imgtime12
*/


export default class Slogan extends Component {
  state = {
    animationData: {}
  }

  componentDidMount() { 
    var animation = Taro.createAnimation({
      duration: 8000,
      timingFunction: "linear",})
    this.animation = animation;
    this.random()
   /*
    setTimeout(() => {
      Taro.navigateTo({ url: '../pages/kit/tools/litekitPage' })
    }, 4000);
*/
  }
  componentDidHide() { 
    this.timer && clearInterval(this.timer);
  }

  random() {
    this.animation.opacity(1).rotate(-10).step({ducation: 5000})
    this.animation.opacity(1).rotate(10).step({ducation: 1000})

    this.setState({
      animationData: this.animation.export()
    }),
    this.timer = setInterval(() => {
      var cur = Math.floor(Math.random() * sloganshow.length)
      this.setState({ cur: cur })
    }, 1000 * 5);
  }
  constructor (props) {
    super(props)
    this.state = { 
      cur: Math.floor(Math.random() * sloganshow.length),
     }
  }
  render() {
    const res = Taro.getSystemInfoSync()
    //var selectday = new Date()
    //var curgztime = this.state.wanNianLiInfo.info.gzQuarter;
    //var imgindex = imgtime[curtimelucky[1]]
    //var second_height = 600
    //var second_width = 375

    var second_height= res.screenHeight
    var second_width = res.screenWidth
    return (
      <View className={"imagecontain"} animation={this.state.animationData}>
        <ScrollView >
              <View className={"contain"}  >
                  <Text className="text" >
                    {sloganshow[this.state.cur].contect}
                  </Text>
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

