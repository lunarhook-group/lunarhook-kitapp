


import React, { Component } from 'react';
import { StyleSheet, View, PixelRatio, Alert, Text, FlatList, ScrollView, CameraRoll } from '@tarojs/components'
import { AtInput, AtGrid, AtTabBar, AtAtCheckbox, AtRadio, AtButton, AtDivider, AtCheckbox, AtCard } from 'taro-ui'
import NameToolsModule from './NameToolsModule'
import './NamePage.scss'


export default class NamePage extends React.Component {
  constructor(props) {
    super(props);
    var filter = [{
      value: '木',
      label: '木',
    }, {
      value: '火',
      label: '火'
    }, {
      value: '土',
      label: '土',
    }, {
      value: '金',
      label: '金',
    },{
      value: '水',
      label: '水',
    }]
    this.state = {
      dataSource: [],
      nameinfo: "",
      searchText: "",
      selectoption: filter,
      selectlist: ['木','火','土','金','水']
    };
  };

  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;

    return {
      title: RouteConfig["NamePage"].titlename,
    }
  };

  rowTranslateAnimatedValues = {};
  animationIsRunning = false
  componentDidMount() {
    this.buildname()
  }
  componentWillUnmount() {
  }




  buildname() {
    const n = 3;
    const html = [];
    const filter = "木火土金水"
    var check = ""
    this.state.selectlist.forEach((it, index) => {
      if (it) {
        check = check.concat(filter[index])
      }
    })
    var count = 0
    while (html.length < 3 && count < 30) {
      count++
      const nameObj = NameToolsModule.genName();

      if (null != nameObj) {
        try {
          var test1 = JSON.parse(nameObj.fx[0])
          var test2 = JSON.parse(nameObj.fx[1])
          if (-1 != check.indexOf(test1.feature) || -1 != check.indexOf(test2.feature)) { html.push(JSON.stringify(nameObj)) }
        } catch (e) {
        }
      }
    }
    this.setState({ dataSource: html, nameinfo: "" })
  }



  onselect(i) {
    i = Number(i)
    var selectfilter = [...this.state.selectfilter]
    selectfilter[i] = !selectfilter[i]
    var test = false
    selectfilter.forEach(element => {
      test = element || test
    });

    if (true == test) {
      console.log(i, selectfilter)
      this.setState({ selectfilter: selectfilter })
    }

  }
  updatename(value) {
    const html = [];
    var nameObj = NameToolsModule.genName(value);
    if (null != nameObj) { html.push(JSON.stringify(nameObj)) }
    this.setState({ dataSource: html })
    return value
  }
  render() {

    var dataSourceinfo = this.state.dataSource;
    const content = dataSourceinfo.map((item) => {

      item = JSON.parse(item)
      const elements = [];

      try {
        item.fx.forEach(element => {
          var obj = JSON.parse(element)
          var color = 'black'
          if ("木" == obj.feature) {
            color = 'green'
          }
          if ("火" == obj.feature) {
            color = 'red'
          }
          if ("土" == obj.feature) {
            color = '#8B4513'
          }
          if ("金" == obj.feature) {
            color = '#DAA520'
          }
          if ("水" == obj.feature) {
            color = '#1E90FF'
          }
          elements.push(<Text style={{ color: color }}>{obj.text + " " + obj.feature + "属性,笔画:" + obj.step + ",五行补" + obj.feature}</Text>)
          elements.push(<AtDivider height={2} lineColor="#ffffff"/>)
        })
      } catch (e) {
        elements.pop()
        console.log(e)
      }

      return (<View>
        <AtCard
          title={item.getname+" 繁体: " + item.tname}
          extra={item.book}>
          <View className="carddetail">
            <Text>{item.py}</Text>
            <AtDivider height={2} lineColor="#ffffff"/>
            {elements}
            <AtDivider height={2} lineColor="#ffffff"/>
            <Text>{item.sentence}</Text>
            <AtDivider height={2} lineColor="#ffffff"/>
            <Text>{"《" + item.title + "》"}{item.author }</Text>

          </View>
        </AtCard>
        <AtDivider height={10} lineColor="#ffffff"/>
      </View>)
    })



    return (
      <View >
        <ScrollView >

          <AtDivider height={10} lineColor="#ffffff"/>
          <AtInput
            title='名字'
            type="text"
            placeholder='请输入姓名'
            value={this.state.nameinfo}
            onChange={(value) => {
              this.setState({ nameinfo: this.updatename(value) })
            }}
          >
          </AtInput>
          {content}
          <AtDivider height={10} lineColor="#ffffff"/>
          <AtButton type='primary' size='small' circle={true} onClick={(value) => this.buildname()}>随机重测</AtButton>
        </ScrollView>

      </View>)
  }

}
