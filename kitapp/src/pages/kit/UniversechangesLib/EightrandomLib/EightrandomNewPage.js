
var Dimensions = require('Dimensions');
import React, {Component} from 'react';
import {StyleSheet,Keyboard,View,Button, TextInput,TouchableOpacity, Text,TouchableWithoutFeedback} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';  
import { AsyncStorage } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { NavigationActions } from 'react-navigation'
import { InputItem,DatePicker, List ,Switch,WhiteSpace,Provider } from '@ant-design/react-native';

import StorageModule from '../../../config/StorageModule'
import ValueTypeModule from '../../../config/ValueTypeModule'
import SixrandomModule from '../SixrandomLib/SixrandomModule'
import RouteConfig from '../../../config/RouteConfig';
import ScreenConfig from '../../../config/ScreenConfig';
import StyleConfig from '../../../config/StyleConfig';


class EightrandomNewPage extends React.Component {

  constructor(porp) {
        var curday = new Date();
        super(porp);
        this.state= {
            switchstate:true,
            selectedValue: '男',
            datepicker:"",
            switchtype:true,
            datatype:"公历",
            switchleap:false,
            leaptype:"常年",
            Tip: "",
            value:curday
    }
   
  }


  static navigationOptions = ({navigation})=>{
    const { navigate } = navigation;
    //headerRight:(<Button title="返回" />),
    return{
      
    title: '八字格局',
    }
    
  };


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
        if(false==this.state.switchtype)
        {
            return(
              
                    <List.Item
                    extra={
                      <Switch
                        checked={this.state.switchleap}
                        onChange={(value) =>this.setState({switchleap:value,leaptype:value==false?"常年":"闰月"})}
                      />
                    }
                    >{this.state.leaptype}
                    </List.Item>
                  )
        }
        

    }

    onChange = (value: any) => {
        console.log(value);
        this.setState({ value });
        var selecttime = new Date(value)
        this.setState({datepicker:selecttime})
      }

  render()
  {
    const { navigate } = this.props.navigation;

    
  
    //alert(ValueTypeModule["emotion"])
    return (
      <Provider>
        <View style={styles.container}>
        
            
            <View > 
                
            <List style={styles.inputpicker}>
            <InputItem
            clear
            //error
            onErrorPress={() => alert('clicked me')}
            value={this.state.Tip}
            onChange={(value: any) => {
              this.setState({Tip:value});
            }}
            extra="输入名字"
            placeholder="陈长生"
          >
          姓名:
          </InputItem>
          <WhiteSpace size="xl" />
          <DatePicker
            backgroundColor='#ff00ff'
            value={this.state.value}
            mode="datetime"
            minDate={new Date(1950, 1, 1)}
            //maxDate={new Date(2026, 11, 3)}
            onChange={this.onChange}
            format="YYYY-MM-DD-HH"
          >
            <List.Item arrow="horizontal">生辰:</List.Item>
          </DatePicker>
          <WhiteSpace size="xl" />
          <List.Item
            extra={
              <Switch
                checked={this.state.switchstate}
                onChange={(value) =>this.setState({switchstate: value,selectedValue:false==value?"女":"男"})}
              />
            }
          >{this.state.selectedValue}
          </List.Item>
          <WhiteSpace size="xl" />
          <List.Item
            extra={
              <Switch
                checked={this.state.switchtype}
                onChange={(value) =>this.setState({switchtype:value,datatype:value==false?"农历":"公历"})}
              />
            }
          >{this.state.datatype}
          </List.Item>
          <WhiteSpace size="xl" />
          {this.leapmonth()}
        </List>
                
            </View>
            
            <View style={styles.inputbutton}>
            <Button
                onPress={()=>this.bazipaipan()}
                title="八字排盘"
        
            />
</View>


            
            <TabNavigator tabBarStyle={[{height:ScreenConfig.getTabBarHeight()}]}>
                            <TabNavigator.Item
                                  title={RouteConfig["EightrandomHistoryPage"].name}
                                  renderIcon={() => RouteConfig["EightrandomHistoryPage"].icon}
                                  onPress={() => navigate(RouteConfig["EightrandomHistoryPage"].route) }  
                                  titleStyle={StyleConfig.menufont}>  
                              </TabNavigator.Item>  
                          </TabNavigator>  
            
        </View> 
        </Provider>
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
      StorageModule.save({key:"name",id:index,data:savedate})
      StorageModule.save({key:"lastname",data:savedate})
      this.props.navigation.navigate('EightrandomMainPage',parameter)
    }
  begin(pagename)
    {
      const resetAction = NavigationActions.reset({
          index: 0,
          actions: [
              NavigationActions.navigate({ routeName: pagename}),
          ]
        })
        this.props.navigation.dispatch(resetAction)
    }
}

var styles = StyleSheet.create ({

  input:{
    width:240,
    height:35,
    borderWidth:1,
    //marginLeft: 5,
    //paddingLeft:5,
    borderColor: '#ccc',
    borderRadius: 4,
    //fontSize:15,
    alignItems:'center',
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效  
  },
  menufont:{
    fontSize:15,
    color: '#333333', 
    height:25
  },
  container: {
    flex:1,
    backgroundColor: 'white',
  },
  inputname: {
    //justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效 
    alignItems:'center',
    justifyContent: 'space-between', //虽然样式中设置了 justifyContent: 'center'，但无效  
    //justifyContent:'space-between',
    flexDirection: 'row',
    marginLeft: 30, 
    marginRight: 30, 
    marginTop: 50,
  },
  inputbutton: {
    //justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效 
    alignItems:'center',
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效  
    //justifyContent:'space-between',
    flexDirection: 'row',
    marginLeft: 30, 
    marginRight: 30, 
    marginTop: 50,
  },
  inputpicker: {

    marginLeft: 15, 
    marginRight: 15, 
    marginTop: 50,
  },
  buttonstyle:{
    justifyContent: 'space-between', //虽然样式中设置了 justifyContent: 'center'，但无效  
    alignItems:'baseline',
  },
  bottonstylewithfont:{
    //justifyContent: 'space-between', //虽然样式中设置了 justifyContent: 'center'，但无效  
    alignItems:'baseline',
    fontSize:18
  }
});
module.exports=EightrandomNewPage;  