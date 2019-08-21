
import React,{Component} from 'react';
import {CameraRoll,Alert ,Platform,AppRegistry ,View,Image,Text} from 'react-native';
import { captureRef } from "react-native-view-shot";
import * as WeChat from 'react-native-wechat';
import shareimg from './shareimage'
import {appinfo,appname} from './appinfo'
class WechatShare extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      apiVersion: 'waiting...',
      isWXAppSupportApi: 'waiting...',
      isWXAppInstalled: 'waiting...',
      init:false,
		};
	
  }
  init() {
    if(false==this.state.init){
      try {
        var keys = AppRegistry.getAppKeys();
        console.log("wechatshare",appinfo[keys[0]],keys,appname)
        var ret = WeChat.registerApp(appinfo[keys[0]]);
  
          apiVersion=WeChat.getApiVersion(),
          //wxAppInstallUrl:  WeChat.getWXAppInstallUrl(),
          isWXAppSupportApi= WeChat.isWXAppSupportApi(),
          isWXAppInstalled= WeChat.isWXAppInstalled()
          this.setState({init:true})
        //console.log(this.state);
      } catch (e) {
        console.error(e);
      }
      //console.log(WeChat);
    }
    
  }
  openWechat()
  {
    this.init()
    WeChat.openWXApp();
  }
  shareimagetotimeline(imageUrl,ds)
	{
    this.init()
    return new Promise(resolve => { 
		WeChat.isWXAppInstalled()
    .then((isInstalled) => {
      if (isInstalled) {
        try {
						WeChat.shareToTimeline({
              type: 'imageFile',
                title:ds,
                //description: 'share web image to time line',
                //mediaTagName: 'email signature',
                //messageAction: undefined,
                //messageExt: undefined,
                imageUrl: "file://"+imageUrl,
                //filePath: imageUrl,
                //fileExtension:'png'
						}).then(Response=>{
                console.log(Response,imageUrl)
                resolve("success")
                return;
						}).catch (err => {
              console.log(err,imageUrl)
              resolve("failed")
						})
					}
					catch(e)
					{
            console.log(e,imageUrl)
            resolve("failed")
					}
			}
			else {
        Platform.OS == 'ios' ?
          Alert.alert('没有安装微信', '是否安装微信？', [
            {text: '取消'},
            {text: '确定', onPress: () => this.installWechat()}
          ]) :
          Alert.alert('没有安装微信', '请先安装微信客户端在进行登录', [
            {text: '确定'}
          ])
          resolve("failed")
      }
    })
  })
		
  }
	shareimagetofriend(imageUrl,ds)
	{
    this.init()
    return new Promise(resolve => { 
      WeChat.isWXAppInstalled()
      .then((isInstalled) => {
        console.log(imageUrl)
        if (isInstalled) {
          try {
              WeChat.shareToSession({
                type: 'imageFile',
                title:ds,
                //description: 'share web image to time line',
                //mediaTagName: 'email signature',
                //messageAction: undefined,
                //messageExt: undefined,
                imageUrl: "file://"+imageUrl,
                //filePath: imageUrl,
                //fileExtension:'png'
              }).then(Response=>{
                  console.log(Response,imageUrl)
                  resolve("success")
              }).catch (err => {
                console.log(err,imageUrl)
                resolve("failed")
              })
            }
            catch(e)
            {
              console.log(e,imageUrl)
              resolve("failed")
            }
        }
        else {
          Platform.OS == 'ios' ?
            Alert.alert('没有安装微信', '是否安装微信？', [
              {text: '取消'},
              {text: '确定', onPress: () => this.installWechat()}
            ]) :
            Alert.alert('没有安装微信', '请先安装微信客户端在进行登录', [
              {text: '确定'}
            ])
            resolve("failed")
        }
        
    })
  })
  }
  share(img,sw,ds) {
      return new Promise(resolve => { 
        if("ttl"==sw)
        {
          this.shareimagetotimeline(img,ds).then(v=>(resolve(v)))
        }
        else if("session"==sw)
        {
          this.shareimagetofriend(img,ds).then(v=>(resolve(v)))
        }
        else
        {
          Alert.alert('保存成功'); 
        }
    })
  }
  saveImg(img,sw,ds) {
    CameraRoll.saveToCameraRoll(img).then(result => {
      this.share(img,sw,ds).then(v=>{
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
  closeshareimage (bindthis)
  {
    bindthis.setState({shareimg:false})
  }

  snapshot(ref,ds,rthis){
    Alert.alert('截图分享\n','' ,[
      {text: '保存到相册', onPress: () => this.capture(ref,ds,"",rthis)},
      {text: '发送给朋友', onPress: () => this.capture(ref,ds,"session",rthis)},
      {text: '发送到朋友圈', onPress: () => this.capture(ref,ds,"ttl",rthis)},
      //{text: '分享朋友圈', onPress: () => this.capture(ref,ds,"ttl")},
      {text: '取消', onPress: () => this.closeshareimage(rthis)}
    ]) 
  }
  capture(ref,ds,sw,rthis){
    captureRef(ref, {
      format: "png",
      quality: 1.0,
      snapshotContentContainer: true
    })
    .then(
      uri => this.saveImg(uri,sw,ds),
      error => console.error("Oops, snapshot failed", error),
      this.closeshareimage(rthis)
    );
  }

  shareimg(ret)
  {
   
    if(true==ret)
    {
      var keys = AppRegistry.getAppKeys();
      var keys = AppRegistry.getAppKeys();
      return(
        <View style={{alignItems: 'center',justifyContent: 'center'}}>
        <Image
        style={{width:  128, height:128}}
        source={{uri: shareimg[keys[0]]}}
        />
        <Text style></Text>
        <Text style>{appname[keys[0]]}</Text>
        <Text style></Text>
        <Text style>www.lunarhook.com</Text>
        </View>
      )
    }
    
  }

}



var Wechatshare = new WechatShare()
module.exports=Wechatshare;  