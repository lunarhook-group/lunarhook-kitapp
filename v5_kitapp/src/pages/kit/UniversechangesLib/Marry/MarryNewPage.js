import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Image, Button, ScrollView, Picker, Switch, Form, Input } from '@tarojs/components'
import SixrandomModule from '../SixrandomLib/SixrandomModule'
import './MarryNewPage.scss'
import '../../../../theme.scss'

Date.prototype.format = function (formatStr) {
  var str = formatStr;
  var Week = ['日', '一', '二', '三', '四', '五', '六'];
  str = str.replace(/yyyy|YYYY/, this.getFullYear());
  str = str.replace(/MM/, (this.getMonth() + 1) > 9 ? (this.getMonth() + 1).toString() : '0' + (this.getMonth() + 1));
  str = str.replace(/dd|DD/, this.getDate() > 9 ? this.getDate().toString() : '0' + this.getDate());
  return str;
}

export default class MarryNewPage extends React.Component {

  constructor(porp) {
    var curday = new Date();
    super(porp);
    this.state = {
      switchtypemale: true,
      switchtypefemale: true,
      datepickermale: curday.toString(),
      datepickerfemale: curday.toString(),
      datatypemale: "公历",
      datatypefemale: "公历",
      switchleapmale: false,
      switchleapfemale: false,
      leaptypemale: "常年",
      leaptypefemale: "常年",
      valuemale:  curday.format("yyyy-MM-dd"),
      valuefemale: curday.format("yyyy-MM-dd"),
      valuetimemale: 0,
      valuetimefemale: 0
    }

  }


  
  leapmonthmale() {
    const { switchleapmale } = this.state
    const { leaptypemale  } = this.state
    const { switchtypemale  } = this.state
    if (false == switchtypemale ) {
      return (
        <View className="demo-list-item">
          <Text>{leaptypemale}</Text>
          <Switch name={leaptypemale } checked={("常年" == switchleapmale ) ? true : false} onChange={(value) => {
            this.setState({ switchleapmale : value.detail.valuemale , leaptypemale : value.detail.valuemale  == false ? "常年" : "闰月" })
          }} />
        </View>
      )
    }
  }


  leapmonthfemale() {
    const { switchleapfemale } = this.state
    const { leaptypefemale  } = this.state
    const { switchtypefemale  } = this.state
    if (false == switchtypefemale ) {
      return (
        <View className="demo-list-item">
          <Text>{leaptypefemale}</Text>
          <Switch name={leaptypefemale } checked={("常年" == switchleapfemale ) ? true : false} onChange={(value) => {
            this.setState({ switchleapfemale : value.detail.value , leaptypefemale : value.detail.value  == false ? "常年" : "闰月" })
          }} />
        </View>
      )
    }
  }
  onChangemale(dd, tt) {
    if ("" != tt) {
      tt = tt.toString()
      tt = tt.split(":")
      var selecttime = new Date(this.state.datepickermale)
      selecttime.setHours(tt[0]);
      console.log(dd, "tt", tt, selecttime, this.state.datepickermale);
      this.setState({ datepickermale: selecttime.toString() })
    }
    else if ("" != dd) {
      var selectdd = new Date(dd)
      var selecttime = new Date(this.state.datepickermale)
      selectdd.setHours(selecttime.getHours())
      console.log("dd", dd, tt, selectdd, this.state.datepicker);
      this.setState({ datepickermale: selectdd.toString() })
    }
  }

  onChangefemale(dd, tt) {
    if ("" != tt) {
      tt = tt.toString()
      tt = tt.split(":")
      var selecttime = new Date(this.state.datepickerfemale)
      selecttime.setHours(tt[0]);
      console.log(dd, "tt", tt, selecttime, this.state.datepickerfemale);
      this.setState({ datepickermale: selecttime.toString() })
    }
    else if ("" != dd) {
      var selectdd = new Date(dd)
      var selecttime = new Date(this.state.datepickerfemale)
      selectdd.setHours(selecttime.getHours())
      console.log("dd", dd, tt, selectdd, this.state.datepickerfemale);
      this.setState({ datepickerfemale: selectdd.toString() })
    }
  }

  onDataChangemale = e => {
    this.setState({
      valuemale: e.detail.value
    })
    this.onChangemale(e.detail.value, "")
  }
  onDataChangefemale = e => {
    this.setState({
      valuefemale: e.detail.value
    })
    this.onChangefemale(e.detail.value, "")
  }

  onTimeChangemale = e => {
    this.setState({
      valuetimemale: e.detail.value
    })
    this.onChangemale("", e.detail.value)
  }
  onTimeChangefemale = e => {
    this.setState({
      valuetimefemale: e.detail.value
    })
    this.onChangefemale("", e.detail.value)
  }
  render() {
    return (
      <View className='contain'>
        <ScrollView>
        <View >
          <Form>
            <View className='panel__title'>

            </View>
            <Picker mode='date' onChange={this.onDataChangemale}>
              <View className='demo-list-item'>
                <View className='demo-list-item__label'>男生辰</View>
                <View className='demo-list-item__value'>{this.state.valuemale}</View>
              </View>

            </Picker>

            <View className='panel__title'>

              <View>

                <Picker mode='time' onChange={this.onTimeChangemale}>
                  <View className='demo-list-item'>
                    <View className='demo-list-item__label'>男时辰</View>
                    <View className='demo-list-item__value'>{this.state.valuetimemale}</View>
                  </View>
                </Picker>
              </View>
            </View>
            <View className="demo-list-item">
            <Text>{this.state.datatypemale}</Text>
            <Switch checked={"公历" == this.state.datatypemale ? true : false} 
            onChange={(value) => this.setState({ switchtypemale: value.detail.value, datatypemale: value.detail.value == false ? "农历" : "公历" })} />
            </View>

            {this.leapmonthmale()}
          </Form>
        </View>

        <View >
          <Form>
            <View className='panel__title'>

            </View>
            <Picker mode='date' onChange={this.onDataChangefemale}>
              <View className='demo-list-item'>
                <View className='demo-list-item__label'>女生辰</View>
                <View className='demo-list-item__value'>{this.state.valuefemale}</View>
              </View>

            </Picker>

            <View className='panel__title'>

              <View>

                <Picker mode='time' onChange={this.onTimeChangefemale}>
                  <View className='demo-list-item'>
                    <View className='demo-list-item__label'>女时辰</View>
                    <View className='demo-list-item__value'>{this.state.valuetimefemale}</View>
                  </View>
                </Picker>
              </View>
            </View>
            <View className="demo-list-item">
            <Text>{this.state.datatypefemale}</Text>
            <Switch checked={"公历" == this.state.datatypefemale ? true : false} 
            onChange={(value) => this.setState({ switchtypefemale: value.detail.value, datatypefemale: value.detail.value == false ? "农历" : "公历" })} />
            </View>

            {this.leapmonthfemale()}
          </Form>
        </View>

        </ScrollView>
        <View>
          <Button onClick={() => this.bazipaipan()} type='secondary'>合卺问礼</Button>
        </View>

      </View>
    )
  }
  buildmale()
  {
    var dataArraymale = [];
    dataArraymale["date"] = this.state.datepickermale;
    if (undefined == dataArraymale["date"] || "" == dataArraymale["date"]) {
      dataArraymale["date"] = new Date()
    }
    var myDatemale = new Date(dataArraymale["date"])
    if (myDatemale.getHours() >= 23) {
      //console.log("getHours",myDate.getHours())
      myDatemale.setTime(myDatemale.getTime() + 60 * 60 * 1000)
    }

    if (this.state.switchtypemale == false) {
      var isleap = false
      if (this.state.switchleapmale == true) {
        isleap = true;
      }
      var Json_ret = SixrandomModule.lunar2solar(myDatemale.getFullYear(), myDatemale.getMonth() + 1, myDatemale.getDate(), isleap)
      console.log("solar2lunar", Json_ret, myDatemale.getFullYear(), myDatemale.getMonth() + 1, myDatemale.getDate())
      Json_ret_Hours = myDatemale.getHours();
      Json_ret_Min = myDatemale.getMinutes();
      myDatemale = Json_ret
      myDatemale.setHours(Json_ret_Hours)
      myDatemale.setMinutes(Json_ret_Min)
    }

    var EightDatemale = SixrandomModule.lunar_f(myDatemale)
    var savedatemale = new Array()
    savedatemale[0] = (new Date()).valueOf().toString();
    savedatemale[1] = EightDatemale.gzYear + EightDatemale.gzMonth + EightDatemale.gzDate + EightDatemale.gzTime;
    savedatemale[2] = '乾造'
    savedatemale[3] = myDatemale
    savedatemale[4] = myDatemale.getFullYear() + "/" + (myDatemale.getMonth() + 1) + "/" + myDatemale.getDate() + " " + myDatemale.getHours() + " " + myDatemale.getMinutes() + " " + myDatemale.getSeconds();
    return savedatemale
  }
  buildfemale()
  {
    var dataArrayfemale = [];
    dataArrayfemale["date"] = this.state.datepickerfemale;
    if (undefined == dataArrayfemale["date"] || "" == dataArrayfemale["date"]) {
      dataArrayfemale["date"] = new Date()
    }
    var myDatefemale = new Date(dataArrayfemale["date"])
    if (myDatefemale.getHours() >= 23) {
      //console.log("getHours",myDate.getHours())
      myDatefemale.setTime(myDatefemale.getTime() + 60 * 60 * 1000)
    }

    if (this.state.switchtypefemale == false) {
      var isleap = false
      if (this.state.switchleapfemale == true) {
        isleap = true;
      }
      var Json_ret = SixrandomModule.lunar2solar(myDatefemale.getFullYear(), myDatefemale.getMonth() + 1, myDatefemale.getDate(), isleap)
      console.log("solar2lunar", Json_ret, myDatefemale.getFullYear(), myDatefemale.getMonth() + 1, myDatefemale.getDate())
      Json_ret_Hours = myDatefemale.getHours();
      Json_ret_Min = myDatefemale.getMinutes();
      myDatefemale = Json_ret
      myDatefemale.setHours(Json_ret_Hours)
      myDatefemale.setMinutes(Json_ret_Min)
    }

    var EightDatefemale = SixrandomModule.lunar_f(myDatefemale)
    var savedatefemale = new Array()
    savedatefemale[0] = (new Date()).valueOf().toString();
    savedatefemale[1] = EightDatefemale.gzYear + EightDatefemale.gzMonth + EightDatefemale.gzDate + EightDatefemale.gzTime;
    savedatefemale[2] = '坤造'
    savedatefemale[3] = myDatefemale
    savedatefemale[4] = myDatefemale.getFullYear() + "/" + (myDatefemale.getMonth() + 1) + "/" + myDatefemale.getDate() + " " + myDatefemale.getHours() + " " + myDatefemale.getMinutes() + " " + myDatefemale.getSeconds();
    return savedatefemale
  }
  bazipaipan() {
    
    var savedatemale = this.buildmale()
    var savedatefemale = this.buildfemale()

    var obj = {}
    obj.id =  (new Date()).valueOf().toString()
    obj.tip = ""
    obj.star = ""
    obj.EightDatemale = savedatemale[1]
    obj.birthmale = savedatemale[4]
    obj.Datemale =  savedatemale[0]
    obj.EightDatefemale = savedatefemale[1] 
    obj.birthfemale = savedatefemale[4]
    obj.Datefemale = savedatefemale[0]

    var parameter = "?EightDatemale=" + savedatemale[1]  + "&birthmale=" + savedatemale[4] + "&Datemale=" + savedatemale[0]
    parameter = parameter + "&EightDatefemale=" + savedatefemale[1]  + "&birthfemale=" + savedatefemale[4] + "&Datefemale=" + savedatefemale[0] + "&rowid=" +obj.id
    console.log(parameter)
    Taro.navigateTo({ url: 'MarryMainPage' + parameter })
  }
}