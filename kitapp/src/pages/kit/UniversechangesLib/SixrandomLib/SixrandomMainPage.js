
var Dimensions = require('Dimensions');
import React, {Component} from 'react';
import {StyleSheet,View, Text,Button,TouchableOpacity,RefreshControl,FlatList} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';  
import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { NavigationActions } from 'react-navigation'

import StorageModule from '../../../config/StorageModule'
//import SixrandomNewPage from './SixrandomNewPage';
//import SixrandomFullInfoPage from './SixrandomFullInfoPage';
import SixrandomModule from '../SixrandomLib/SixrandomModule'
//import ValueTypeModule from './config/ValueTypeModule'
import ScreenConfig from '../../../config/ScreenConfig';
import StyleConfig from '../../../config/StyleConfig';
const {width, height} = Dimensions.get('window');  
var WEBVIEW_REF = 'webview';

var jump = false



class SixrandomMainPage extends React.Component {
  constructor(props) {

  super(props);
    var parameter = ""//"?date=Mon Jul 10 2017 23:43:54 GMT+0800 (CST)&lunar=123123";
		this.state = {
      dataSource:[],
      parameter:parameter,
		};
    };

  componentDidMount() {
    
		this.timer = setTimeout(
			() => {
        this.refreshlist()
        
			},
			200
    );
     
  }

  componentWillUnmount() {
		// 如果存在this.timer，则使用clearTimeout清空。
		// 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
		this.timer && clearInterval(this.timer);
	}

  static navigationOptions = ({navigation})=>{
    const { navigate } = navigation;
    return{
      
    //headerLeft:(<Button title="万年历" onPress={  () => navigate('MainPage')  }/>),
    //headerRight:(<Button title="历史" onPress={  () => navigate('HistoryPage')  }/>),
    title: '六爻卦象',
    }
  };
  

  refreshlist()
  {
      const { navigate } = this.props.navigation;
      
      var parameter = this.props.navigation.state.params

      
      if(undefined!=parameter)
      {
         
         //return
          var _ret = SixrandomModule.build(parameter);
          var _build = SixrandomModule.get_simple_random_draw()

          this.setState({  
            dataSource: _build,parameter:parameter }); 
      }
      else
      {
        StorageModule.load({
            key:"sixrandomlast",
        }).then(ret => {
       
          var Jobj = JSON.parse(ret);
          var result = SixrandomModule.get_sixrandom_name(Jobj.lunar)
          var timedate = new Date(Number(Jobj.date))
          var obj = {
            name: "求测：" + Jobj.question,
            ret: SixrandomModule.get_sixrandom_name(Jobj.lunar),
            tip: Jobj.tip,
            title: SixrandomModule.get_sixrandom_name(Jobj.lunar),
            time: timedate.toLocaleDateString(),
            star: Jobj.star,
            url: "?date=" + timedate + "&lunar=" + Jobj.lunar + "&question=" + Jobj.question,
            id:  Jobj.date,
          }
              

            var parameter = url
            //alert(parameter);
            console.log(parameter)
            var _ret = SixrandomModule.build(parameter);
            var _build = SixrandomModule.get_simple_random_draw()

            this.setState({  
                  dataSource: _build,parameter:parameter }); 
            }).catch(err => {
            //alert(err)
            if(false==jump)
            {
               this.begin('SixrandomNewPage')
               jump = true
            }
        })
      }
  }
  keyExtractor = (item,index) => index.toString()
  renderItem(item) {
    //alert(rowData.name)
    return (
      
      <View style={styles.list}>
        <Text  style={styles.rowhigth}>{item.item}</Text>
      </View>
    );
  }
  
  render(){
      const { navigate } = this.props.navigation;

      jump = false;
      
        return(
    <View style={styles.container}>

        

            <FlatList
						data={this.state.dataSource}
						keyExtractor={this.keyExtractor}
						renderItem={this.renderItem}
						refreshControl={
							<RefreshControl
                refreshing={false}
								onRefresh={this.refreshlist.bind(this)}
								enabled={false}
								colors={['#ff0000', '#00ff00', '#0000ff', '#3ad564']}
							/>}/>
              

      
      <TabNavigator 
       tabBarStyle={[{height:ScreenConfig.getTabBarHeight()}]}>  
                  
                    <TabNavigator.Item 
                        title={RouteConfig["DetailInfo"].name}
                        renderIcon={() => RouteConfig["DetailInfo"].icon} 
                        onPress={ 
                            () => navigate('SixrandomFullInfoPage',this.state.parameter)
                          }titleStyle={StyleConfig.menufont}>  
                        
                    </TabNavigator.Item>  
                   
                </TabNavigator>  
                 
              </View>  
    )
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

   
  };


    




var styles = StyleSheet.create ({
  container: {
    flex:1,
  },
  menufont:{
    fontSize:15,
    color: '#333333', 
    height:ScreenConfig.getFontheight()
  },
 rowhigth:{
    lineHeight:25,
  },
  list:{
    //borderWidth:1,
    marginLeft: 1,
    paddingLeft:1,
    //borderColor: '#ccc',
    borderRadius: 4,
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效 
    //textAlign:'center', 
    //textDecorationLine:'underline'
    flexWrap:'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  textbutton:{
    textAlign:'center', 
  },
   button:{
    height: 50,
    //width: 50,
    backgroundColor:'transparent',
   justifyContent:'center',
   borderRadius: 4,
    },
  tabBarStyle:{
    flex: 1,
    height:40,
    flex:1
  }
});
module.exports=SixrandomMainPage;  