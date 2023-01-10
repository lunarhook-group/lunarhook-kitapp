
import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Image, Button, ScrollView, Picker } from '@tarojs/components'
import { AtButton, AtDivider, AtTabBar, AtInput, AtForm, AtSwitch } from 'taro-ui'
import SixrandomModule from '../SixrandomLib/SixrandomModule'
import './EightrandomNewPage.scss'
import '../../../../theme.scss'


Date.prototype.format = function (formatStr) {
  var str = formatStr;
  var Week = ['日', '一', '二', '三', '四', '五', '六'];
  str = str.replace(/yyyy|YYYY/, this.getFullYear());
  str = str.replace(/MM/, (this.getMonth() + 1) > 9 ? (this.getMonth() + 1).toString() : '0' + (this.getMonth() + 1));
  str = str.replace(/dd|DD/, this.getDate() > 9 ? this.getDate().toString() : '0' + this.getDate());
  return str;
} 

export default class EightrandomNewPage extends Component {

  constructor(porp) {
        var curday = new Date();
        super(porp);
        this.state= {
            switchstate:true,
            selectedValue: '男',
          datepicker: curday.toString(),
            switchtype:true,
            datatype:"公历",
            switchleap:false,
            leaptype:"常年",
            Tip: "",
          value: curday.format("yyyy-MM-dd"),
          valuetime:0
    }
   
  }

  config = {
    navigationBarTitleText: '八字格局'
  }

  onSelect(index, value){
    this.setState({
      selectedValue:value
    })
  }

  //获取value值调用的方法
  getValue(text) {
        var value = text;
        this.setState({
            show: true,
            value: value
        });
    }

    //隐藏
    hide(val){
        this.setState({
            show: false,
            value: val
        });
    }

    leapmonth(){
      const { switchleap } = this.state
      const { leaptype } = this.state
      const { switchtype } = this.state
      if (false == switchtype)
        {
            return(

              <AtForm>
                <AtSwitch title={leaptype} checked={("常年" == switchleap) ? true : false} onChange={(value) => {this.setState({ switchleap: value, leaptype: value == false ? "常年" : "闰月" })
                } }/>
              </AtForm>
            )
              
        }
        

    }

    onChange(dd,tt){
      
      if(""!=tt)
      {
        tt = tt.toString()
        tt = tt.split(":")
        var selecttime = new Date(this.state.datepicker)
        selecttime.setHours(tt[0]);
        console.log(dd,"tt", tt, selecttime, this.state.datepicker);
        this.setState({ datepicker: selecttime.toString() })
      }
      else if ("" != dd) {
        var selectdd = new Date(dd)
        var selecttime = new Date(this.state.datepicker)
        selectdd.setHours(selecttime.getHours())
        console.log("dd",dd, tt, selectdd, this.state.datepicker);
        this.setState({ datepicker: selectdd.toString() })
      }
      
      
      }
  onDateChange = e => {
    this.setState({
      value: e.detail.value
    })
    this.onChange(e.detail.value,"")
  }

  onTimeChange = e => {
    this.setState({
      valuetime: e.detail.value
    })
    this.onChange("", e.detail.value)
  }

  render()
  {

    
  
    //alert(ValueTypeModule["emotion"])
    return (

      <View className='contain'>
        <View >
          <AtForm>
            <AtInput
              title='输入名字'
              value={this.state.Tip}
              onChange={(value) => {
                this.setState({ Tip: value });
              }}
              placeholder="陈长生"
            ></AtInput>
            <View className='panel__title'>

            </View>
            <Picker mode='date' onChange={this.onDateChange}>
              <View className='demo-list-item'>
                <View className='demo-list-item__label'>请选择时间</View>
                <View className='demo-list-item__value'>{this.state.value}</View>
              </View>

            </Picker>

            <View className='panel__title'>

              <View>

                <Picker mode='time' onChange={this.onTimeChange}>
                  <View className='demo-list-item'>
                    <View className='demo-list-item__label'>请选择时间</View>
                    <View className='demo-list-item__value'>{this.state.valuetime}</View>
                  </View>
                </Picker>
              </View>
            </View>


            <AtSwitch title={this.state.selectedValue} checked={"男" == this.state.selectedValue ? true : false} onChange={(value) => this.setState({ switchstate: value, selectedValue: false == value ? "女" : "男" })} />
            <AtSwitch title={this.state.datatype} checked={"公历" == this.state.datatype ? true : false} onChange={(value) => this.setState({ switchtype: value, datatype: value == false ? "农历" : "公历" })} />


            {this.leapmonth()}
          </AtForm>
        </View>
        <View>
          <AtButton onClick={() => this.bazipaipan()} type='secondary'>八字测评</AtButton>
        </View>
      </View> 

            )
    }
    bazipaipan()
    {
      var dataArray = [];
      dataArray["date"] = this.state.datepicker;

      //alert(dataArray["date"])
      dataArray["sex"]  = this.state.selectedValue;
      dataArray["name"] = this.state.Tip
      //alert(this.state.Tip)
      if(undefined==dataArray["date"] || ""==dataArray["date"])
      {
        dataArray["date"] = new Date()
      }
      var myDate=new Date(dataArray["date"])
      if(myDate.getHours()>=23)
      {
        //console.log("getHours",myDate.getHours())
        myDate.setTime(myDate.getTime()+60*60*1000)
      }
      if(this.state.switchtype==false)
      {
            var isleap = false
            if(this.state.switchleap==true)
            {
                isleap = true;
            }
            var Json_ret = SixrandomModule.lunar2solar(myDate.getFullYear(),myDate.getMonth()+1,myDate.getDate(),isleap)
            console.log("solar2lunar",Json_ret,myDate.getFullYear(),myDate.getMonth()+1,myDate.getDate())
            myDate=Json_ret
      }
      
      var EightDate = SixrandomModule.lunar_f(myDate)

      var index = (new Date()).valueOf().toString();
      var savedate = new Array()
      savedate[0] = index;
      savedate[1] = EightDate.gzYear+EightDate.gzMonth +EightDate.gzDate +EightDate.gzTime;
      if('男'==this.state.selectedValue)
      {
        savedate[2] = '乾造'
      }
      else
      {
        savedate[2] = '坤造'
      }
      savedate[3]= ""+this.state.Tip
      savedate[4]=myDate.getFullYear()+"/"+(myDate.getMonth()+1)+"/"+myDate.getDate()+" "+myDate.getHours();
      console.log(savedate[3])
      var parameter = "?EightDate="+savedate[1] + "&sex=" + savedate[2] + "&birth=" + savedate[4]
      //StorageModule.save({key:"name",id:index,data:savedate})
      //StorageModule.save({key:"lastname",data:savedate})
      console.log("EightrandomMainPage"+parameter)
      Taro.navigateTo({ url: 'EightrandomMainPage'+parameter})
    }

}
