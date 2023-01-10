import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, ScrollView ,CustomWrapper,Image} from '@tarojs/components'
import {sloganshow,imgtime} from '../config/SloganModule'
import './Slogan.scss'




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
  
    return (
      <View className={"imagecontain"} animation={this.state.animationData}>
        <ScrollView >
        <Image className="imageslogan" mode='widthFix' src={imgtime[h]}></Image>
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

