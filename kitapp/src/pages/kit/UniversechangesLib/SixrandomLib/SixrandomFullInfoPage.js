
var Dimensions = require('Dimensions');
var ReactNative = require('react-native');
import React,{Component} from 'react';
import {findNodeHandle,Image,StyleSheet,View, Alert,  Text,RefreshControl,FlatList,ScrollView,CameraRoll} from 'react-native';
import { captureRef } from "react-native-view-shot";
import TabNavigator from 'react-native-tab-navigator';  
import { StackNavigator } from 'react-navigation';
import { Grid, Accordion, WhiteSpace, WingBlank ,List} from '@ant-design/react-native';
import SixrandomModule from '../SixrandomLib/SixrandomModule'
import StorageModule from '../../../config/StorageModule'
import ScreenConfig from '../../../config/ScreenConfig';
import StyleConfig from '../../../config/StyleConfig';
import WechatShare from '../../../config/WechatShare'
var kWidth = Dimensions.get('window').width;
var kHeight = Dimensions.get('window').height;
class SixrandomFullinfoPage extends React.Component {
    constructor(props) {
    super(props);
		this.state = {
      date: "",
      parameter: 'null',
		}};

  static navigationOptions = ({navigation})=>{
    const { navigate } = navigation;
    return{
      
   // headerRight:(<Button title="分享" onPress={ () => ShareModule.Sharetotimeline() }/>),
    title: '卦象详解',
    }
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
  
  refreshlist()
  {
      const { navigate } = this.props.navigation;
      parameter = this.props.navigation.state.params
      if("last"!=parameter)
      {
          var _ret = SixrandomModule.build(parameter);
          var _build = SixrandomModule.get_random_draw()
          console.log(_build)
          this.setState({  
            date: _build,parameter:parameter }); 
      }
      else
      {
        StorageModule.load({
            key:"last",
        }).then(ret => {
            randArray = ret
            var date = new Date(Number(randArray[7]))
            var lunar = ""
            for (index =1;index<7;index++)
            {
              lunar = lunar+(randArray[index]).toString()
            }
            var question = randArray[0]
            var parameter = "?date="+date+"&lunar="+lunar+"&question="+question
            var _ret = SixrandomModule.build(parameter);
            var _build = SixrandomModule.get_random_draw()
            console.log(_build)
            this.setState({  
              date: _build,parameter:parameter }); 
            }).catch(err => {
            if(false==jump)
            {
               this.begin('NewPage')
               jump = true
            }
        })
      }

  }

    renderItem(item) {
      return (
        <View style={styles.list}>
          <Text style={styles.rowhigth}>{item.item}</Text>
        </View>
      );
    }

  keyExtractor = (item,index) => index.toString()
  render(){

      const { navigate } = this.props.navigation;
      jump = false;
        return(
    <View style={styles.container} >
    <ScrollView ref='location' style={{backgroundColor:'#ffffff'}}> 
    <View style={styles.container} >
    <View style={styles.container} >
            <FlatList  
            data={this.state.date}
            keyExtractor={this.keyExtractor}
						renderItem={this.renderItem}
						/>
                          </View>
                          <WhiteSpace size="xl" />
                          {
             (WechatShare.shareimg(this.state.shareimg))
            }
            
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            </View>
             </ScrollView> 
              <TabNavigator  tabBarStyle={[{height:ScreenConfig.getTabBarHeight()}]}>
                  <TabNavigator.Item
                        title={RouteConfig["ScreenImage"].name}
                        renderIcon={() => RouteConfig["ScreenImage"].icon}
                        onPress={()=>{this.setState({shareimg:true}),WechatShare.snapshot(this.refs['location'],"卦象详情",this)} } 
                        titleStyle={StyleConfig.menufont}>  
                    </TabNavigator.Item>  
                </TabNavigator>  
                
               
              </View>  
    )
    }
/*
  saveImg(img,sw,ds) {
    CameraRoll.saveToCameraRoll(img).then(result => {
      WechatShare.share(img,sw,ds).then(v=>{
        console.log(v,sw)
        if(""!=sw)
        {
          var dellist = new Array()
          dellist.push(result)
          CameraRoll.deletePhotos(dellist)
        }
      })
    }).catch(error => {
        alert('保存失败！\n' + error);
    })
    

  }

  snapshot(){
    Alert.alert('截图分享\n','' ,[
      {text: '保存到相册', onPress: () => this.capture()},
      {text: '发送给朋友', onPress: () => this.capture("session")},
      {text: '分享朋友圈', onPress: () => this.capture("ttl")},
      {text: '取消', onPress: () => ("")}
    ]) 
  }
  capture(sw){
    captureRef(this.refs.location, {
      format: "jpg",
      quality: 0.8,
      snapshotContentContainer: true
    })
    .then(
      uri => this.saveImg(uri,sw,"卦象详情"),
      error => console.error("Oops, snapshot failed", error)
    );
  }
  */
}
var styles = StyleSheet.create ({
  container: {
    flex:1,
    backgroundColor:'#ffffff'
  },
  rowhigth:{
    lineHeight:25,
  },
  menufont:{
    fontSize:15,
    color: '#333333', 
    height:ScreenConfig.getFontheight()
  },
  list:{
    //lineHigeht:25,
    //height:25,
    //borderWidth:1,
    marginLeft: 5,
    paddingLeft:5,
     marginRight: 5,
    paddingRight:5,
    //borderColor: '#ccc',
    borderRadius: 4,
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效 
    //textAlign:'center', 
    //textDecorationLine:'underline'
    flexWrap:'wrap',
    alignItems: 'flex-start',
    //flexDirection: 'row',
  },
});
module.exports=SixrandomFullinfoPage;  