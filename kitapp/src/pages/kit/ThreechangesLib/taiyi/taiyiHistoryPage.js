
var Dimensions = require('Dimensions');
import React, {Component } from 'react';
import {StyleSheet,View,TouchableOpacity,TouchableHighlight,Alert,  Text,KeyboardAvoidingView,Platform} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';  
import { StackNavigator } from 'react-navigation';
import { SwipeListView } from 'react-native-swipe-list-view';
import StorageModule from '../../../config/StorageModule'
import { Card, Button, Modal, Toast, WhiteSpace, WingBlank,Provider } from '@ant-design/react-native';
import IconConfig from '../../../config/IconConfig'
//import FingerprintScanner from 'react-native-fingerprint-scanner';
//import Fingerprintstyles from '../../../fingerprint/Application.container.styles';
//import FingerprintPopup from '../../../fingerprint/FingerprintPopup.component';
const {width, height} = Dimensions.get('window');  

var HistoryNameArray = []

class taiyiHistoryPage extends React.Component {
   constructor(props) {
    super(props);
		this.state = {
      isLoading: false,
      modalvisible:false,
      //errorMessage: undefined,
      //popupShowed: false
		};
  }
    static navigationOptions = {
      
    title: '太乙历史',
  };
  /*

  handleFingerprintShowed = () => {
    this.setState({ popupShowed: true });
  };

  handleFingerprintDismissed = (any) => {
    this.setState({ popupShowed: false });
    if(false==any)
    {
      this.props.navigation.goBack()
    }
    else
    {
      this.timer = setTimeout(
        () => {
          this.refreshlist()
        },
        200
      );
    }
    
  };
  */
  componentDidMount() {
    this.refreshlist()
    /*
      FingerprintScanner
      .isSensorAvailable()
      .then(
        this.handleFingerprintShowed()
      )
      .catch(
        error =>{
          if(error.name == "FingerprintScannerNotSupported")
          {this.handleFingerprintDismissed(true)}
        }
      );
      */
	}
	
	componentWillUnmount() {
		// 如果存在this.timer，则使用clearTimeout清空。
    // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
    //FingerprintScanner.release();
    this.timer && clearInterval(this.timer);
  }
  _starRow(rowData){
    StorageModule.load({key:'taiyi',id:rowData.id}).then(ret=>{
      console.log(ret)
      ret[7]=true==ret[7]?false:true
      StorageModule.save({key:'taiyi',id:rowData.id,data:ret})
      this.refreshlist();
    })
  }
  _updateRow(rowData) {
    console.log(rowData)
    this.setState({ modalvisible: true })
    Modal.prompt(
      '太乙提示',
      '',
      (newtips: any)=>this._updateStorage(rowData,newtips),
      'default',
      '',
      [rowData.tip],
    );
  };
  _updateStorage(rowData,newtips)
  {
    console.log(rowData,newtips)
    StorageModule.load({key:'taiyi',id:rowData.id}).then(ret=>{
      console.log(ret)
      ret[2]=newtips
      StorageModule.save({key:'taiyi',id:rowData.id,data:ret})
      this.refreshlist();
    })
  }

   _deleteRow(rowData) {  
        Alert.alert(
        '提示',
        '删除: '+rowData.name,
        [
          {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: '删除', onPress: () => this._deletehistory(rowData)},
        ],
        { cancelable: false }
      )
       
    }
  _deletehistory(rowData)
  {
    console.log(rowData.id)
      StorageModule.remove({key:'taiyi',id:rowData.id});
      this.refreshlist();
  }
  
  refreshlist()
  {
    //StorageModule.clearMapForKey('name');
    //this.setState({isLoading: true});
    const { navigate } = this.props.navigation;
    HistoryNameArray = []
    //StorageModule.remove({key:"last"})
    StorageModule.getAllDataForKey('taiyi').then(ids => {

        
            //alert(ids)
            for (i = 0;i<ids.length;i++)
              {
                try {
                  console.log(ids[i])
                  var savedate = ids[i];
                  var date = new Date(Number(savedate[0]))
                  var obj = {
                    name:date.toLocaleDateString()+" "+savedate[1],
                    ret:savedate[1],
                    time:date.toLocaleDateString(),
                    tip:savedate[2],
                    url:"?taiyiDate="+savedate[1] + "&tip=" + savedate[2] + "&Y=" + savedate[3] + "&M=" + savedate[4] +"&D=" + savedate[5]  +"&H=" + savedate[6],
                    id:savedate[0],
                    star:savedate[7],
                  }
                  HistoryNameArray[i] = obj
                  
                } catch (error) {
                  StorageModule.remove({key:'sixcourse',id:savedate[0]});
                  HistoryNameArray[i] = undefined
                }
                
                  //alert(HistoryNameArray[i])
              }     
              HistoryNameArray.reverse()
              //去掉存储异常的对象
              for(var i=0,len=HistoryNameArray.length;i<len;i++)
              { 
                if(undefined == HistoryNameArray[i]){ 
                  HistoryNameArray.splice(i,1); 
                  len--; 
                  i--; 
                } 
              } 
              this.setState({  
              isLoading: false,  
              dataSource: HistoryNameArray }); 
              if(ids.length==0)
                {
                  this.props.navigation.goBack()
                } 
              //alert(HistoryNameArray)
              return
          
        

          
    });

    
    this.setState({  
            isLoading: false,  
            dataSource: HistoryNameArray });  
            return
  }
  render()
  {
    const { errorMessage, popupShowed } = this.state;
    const { navigate } = this.props.navigation;
    

   


    let content = (<View>
            <SwipeListView
                    useFlatList={true}
                    //1数据的获取和渲染
                    data={this.state.dataSource}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={ (data, rowMap) => (<TouchableHighlight
                      onPress={ () => navigate('taiyiMainPage',data.item.url)}
                      style={styles.rowFront}
                    >
                      <View>
                        
                      <Card style={{ width: width-20 }}>
                          <Card.Header
                            title={data.item.ret}
                            //thumbStyle={{ width: 30, height: 30 }}
                            thumb={true==data.item.star?IconConfig.IconStar:''}
                            extra={data.item.time}
                          />
                         
                          <Card.Body>
                            <View >
                              <Text style={{ marginLeft: 16 }}>太乙排盘：{data.item.tip}</Text>
                            </View>
                          </Card.Body>
                          <Card.Footer content="" extra={data.item.name} />
                        </Card>
                      </View>
                    </TouchableHighlight>
                  )}
                  renderHiddenItem={ (data, rowMap) => (
                    <View style={styles.rowBack}>
                    <TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnLeft]} onPress={ () => this._updateRow(data.item) }>
                      <View style={[{width:40,height:40,borderColor:IconConfig.colorclaygreen,borderStyle:'solid',borderWidth:1,borderRadius:20,justifyContent: 'center',alignItems: 'center',}]}>
                      {IconConfig.IconAddTip}
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnRight]} onPress={ () => this._deleteRow(data.item) }>
                      <View style={[{width:40,height:40,borderColor:IconConfig.colorfire,borderStyle:'solid',borderWidth:1,borderRadius:20,justifyContent: 'center',alignItems: 'center',}]}>
                      {IconConfig.IconDelete}
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.backRightBtn, styles.backLeftBtnLeft]} onPress={ () => this._starRow(data.item) }>
                      <View style={[{width:40,height:40,borderColor:IconConfig.colorgold,borderStyle:'solid',borderWidth:1,borderRadius:20,justifyContent: 'center',alignItems: 'center',}]}>
                      {IconConfig.IconAddStar}
                      </View>
                    </TouchableOpacity>
                  </View>
                  )}
            leftOpenValue={75}
						rightOpenValue={-150}
						previewRowKey={'0'}
						previewOpenValue={-40}
						previewOpenDelay={3000}
						onRowDidOpen={this.onRowDidOpen}
                />

                {errorMessage && (
                  <Text style={Fingerprintstyles.errorMessage}>
                    {errorMessage}
                  </Text>
                )}

                {popupShowed && (
                  <FingerprintPopup
                    style={Fingerprintstyles.popup}
                    handlePopupDismissed={this.handleFingerprintDismissed}
                  />
                )}
                </View>
          )
          if (Platform.OS === 'ios') {
            return (<Provider>
                <KeyboardAvoidingView
                    behavior="padding"
                    style={styles.KeyboardAvoidingView}
                    keyboardVerticalOffset={this.props.keyboardVerticalOffset || 64}
                >
                    {content}
                </KeyboardAvoidingView></Provider>
            );
        } else {
            return (<Provider>{content}</Provider>);
        }
  }

}

var styles = StyleSheet.create ({
  container: {
    flex:1
  },
  list:{
    height:45,
    //borderWidth:1,
    marginLeft: 10,
    paddingLeft:10,
    //borderColor: '#ccc',
    borderRadius: 4,
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效 
    //textAlign:'center', 
    //textDecorationLine:'underline'
  },
    vb_text: {  
    color: '#333333',  
    fontFamily: 'Times',  
    margin: 10,  
    fontSize: 12,         
    textAlign: 'auto',  
    lineHeight: 22,     //行高  
    fontStyle: 'italic',    //设置文字：normal：正常体；italic：斜体  
    fontWeight: 'bold', //设置粗体字，'normal' /*default*/, 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900'  
    textDecorationLine: 'underline line-through',//下划线和删除线的样式：['none' /*default*/, 'underline', 'line-through', 'underline line-through'  
  },
  delete:{
    color:"#d8fffa",
    marginLeft:30,
    alignItems:'flex-start',//水平靠右
},
rowFront: {
  alignItems: 'center',
  backgroundColor: 'white',
  borderBottomColor: 'black',
  borderBottomWidth: 0,
  justifyContent: 'center',
  height:120,
},
rowBack: {
  alignItems: 'center',
  //backgroundColor: '#DDD',
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingLeft: 15,
},
backRightBtn: {
  alignItems: 'center',
  bottom: 0,
  justifyContent: 'center',
  position: 'absolute',
  top: 0,
  width: 75
},
backLeftBtnLeft: {
  //backgroundColor: 'blue',
  left:0 
},
backRightBtnLeft: {
  //backgroundColor: 'blue',
  right: 75
},
backRightBtnRight: {
  //backgroundColor: 'red',
  right: 0
},
controls: {
  alignItems: 'center',
  marginBottom: 30
},
switchContainer: {
  flexDirection: 'row',
  justifyContent: 'center',
  marginBottom: 5

}
});
module.exports=taiyiHistoryPage;  