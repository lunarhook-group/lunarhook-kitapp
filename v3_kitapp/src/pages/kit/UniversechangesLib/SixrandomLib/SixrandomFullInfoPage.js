import React, { Component } from 'react'
import {Taro,getCurrentInstance} from '@tarojs/taro'
import { View, Text, Image, Button, ScrollView, Picker } from '@tarojs/components'
import { AtButton, AtDivider, AtTabBar, AtGrid, AtForm, AtSwitch, AtList, AtListItem, AtCard } from 'taro-ui'
import SixrandomModule from './SixrandomModule'
import './SixrandomFullinfoPage.scss'
import '../../../../theme.scss'
import { plumbertrace } from '../../../plumbertrace'
export default class SixrandomFullinfoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: [],
      infobase: [],
      infogrid: [],
      infoext: [],
      parameter: 'null',
    }
  };
  config = {
    navigationBarTitleText: '卦象详解'
  }

  componentDidMount() {
  }
  componentDidHide() { }
  componentDidCatchError() { }
  componentDidShow() {
    plumbertrace(this.props.tid)
  }
  componentWillMount() {
    var parameter = getCurrentInstance().router.params
    if ("" != parameter) {
      var _ret = SixrandomModule.build(parameter);
      var __ret = SixrandomModule.get_random_draw()
      //console.log("ret2",__ret)
      var _build = __ret._build
      var infogrid = new Array()
      var ggrid = __ret.infogrid
      var infoext = __ret.infoext
      var infobase = __ret.infobase

      var o = {}
      o.myth = "";
      o.sixrandom = "";
      o.change = "";
      infogrid.push(o)
      infogrid.push(o)
      infogrid.push(o)
      for (var index = 0; index < ggrid.length; index++) {
        o = {}
        if (undefined != ggrid[index]) {
          var cur = ggrid[index]
          console.log(cur)
          o.myth = cur[0] + " " + cur[1];
          o.sixrandom = cur[2];
          o.change = cur[3];
        }
        else {
          o.myth = "";
          o.sixrandom = "";
          o.change = "";
        }
        console.log(o)
        infogrid.push(o)
      }
      o.myth = "";
      o.sixrandom = "";
      o.change = "";
      infogrid.push(o)
      infogrid.push(o)
      infogrid.push(o)
      console.log(infogrid)
      this.setState({
        date: _build, parameter: parameter, infogrid: infogrid, infoext: infoext, infobase: infobase
      });
    }
  }
  render() {
    const { infobase } = this.state
    const infobasecontent = infobase.map((item, itemIndex) => {
      console.log(item)
      return (
        <View key={itemIndex.id}>
          <Text>{item}</Text>
        </View>
      )
    })
    const { infoext } = this.state
    const infoextcontent = infoext.map((item, itemIndex) => {
      console.log(item)
      return (
        <View key={itemIndex.id}>
          <Text>{item}</Text>
        </View>
      )
    })
    const { infogrid } = this.state
    const infogridcontent = infogrid.map((item, itemIndex) => {
      console.log(item)
      return (
        <View className='at-row'>
          <View className='at-col'>{item.myth} </View>
          <View className='at-col'>{item.sixrandom}</View>
          <View className='at-col'>{item.change}</View>
        </View>
      )
    })
    return (
      <View  >
        <ScrollView >
          <View  >
            <View>
              <AtList>
                {infobasecontent}
              </AtList>
              <View>{" "}</View>
              <AtList>
                {infogridcontent}
              </AtList>
              <View>{" "}</View>
              <AtList>
                {infoextcontent}
              </AtList>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}
