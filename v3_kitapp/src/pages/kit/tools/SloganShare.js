import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, ScrollView, Image } from '@tarojs/components'
import { sloganshow, imgtime } from '../../config/SloganModule'
import './SloganShare.scss'

export default class SloganShare extends Component {
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
  }
  componentDidHide() {
    this.timer && clearInterval(this.timer);
  }

  random() {
    let animation = Taro.createAnimation({
      timingFunction: "linear",
      success: function (res) {
        console.log(res)
      }
    })
    this.animation = animation;
    this.animation.opacity(0).step({ duration: 1000, })
    this.setState({
      animationData: this.animation.export()
    }),
      setTimeout(() => {
        this.animation.opacity(1).step({ duration: 1000, })
        this.setState({
          animationData: this.animation.export()
        })
      }, 1000);
    setTimeout(() => {
      this.animation.opacity(0).step({ ducation: 1000 })
      this.setState({
        animationData: this.animation.export()
      })
    }, 4000);
  }
  constructor(props) {
    super(props)
    this.state = {
      cur: Math.floor(Math.random() * sloganshow.length),
    }
  }
  render() {
    var h = Math.floor(this.state.cur * 13) % 12
    return (
      <View className={"imagecontain"} animation={this.state.animationData}>
        <ScrollView >
          <Image className="imageslogan" mode='widthFix' src={imgtime[h]}></Image>
          <View className={"contain"}  >
            <Text className="text" >
              {sloganshow[this.state.cur].contect}
            </Text>
          </View>
          <View className={"slogan"} >
            <Text className="text" >
              {sloganshow[this.state.cur].name}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

