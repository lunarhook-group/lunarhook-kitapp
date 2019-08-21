
import React, { Component } from 'react';
import { Animated, Dimensions, View, Text,StyleSheet ,ScrollView} from 'react-native';
import RouteConfig from './../../config/RouteConfig'
import { appinfo, appname } from './../../config/appinfo'
import { Grid, Card, WhiteSpace, WingBlank, List } from '@ant-design/react-native';
import TabNavigator from 'react-native-tab-navigator';  
import sloganshow from './../../config/SloganModule'
import ScreenConfig from './../../config/ScreenConfig';
import StyleConfig from './../../config/StyleConfig';
import WechatShare from './../../config/WechatShare'
let thiscontrollor = null
const { width, height } = Dimensions.get('window');
class SloganShare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cur: Math.floor(Math.random() * sloganshow.length),
      shareimg: false,
      fadeInOpacity: new Animated.Value(0)
    };
    this.random()
    thiscontrollor = this
  };

  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
  };
  random() {
    this.timer = setInterval(() => {
      var cur = Math.floor(Math.random() * sloganshow.length)
      this.setState({ cur: cur, fadeInOpacity: new Animated.Value(0) })
    }, 1000 * 6);
  }
  componentWillUnmount() {
    this.timer && clearInterval(this.timer);
  }

  pause(any) {
    thiscontrollor.setState({fadeInOpacity: new Animated.Value(1) })
  }
  render() {
    let anim = Animated.sequence([ Animated.timing(this.state.fadeInOpacity, { toValue: 1, duration: 1000, }),  Animated.delay(3000), Animated.timing(this.state.fadeInOpacity, { toValue: 0, duration: 2000 }) ])
      
    if (false == this.state.shareimg) {
      this.timer && clearInterval(this.timer);
      this.random();
      anim.start()
    }
   
    return (
      <View style={styles.container}>
        <ScrollView ref="location" style={{ backgroundColor: '#ffffff' }}>
        <View style={styles.container} >
          <WhiteSpace size="xl" />
          <WhiteSpace size="xl" />
          <WhiteSpace size="xl" />
          <WingBlank size="lg">
            <Card style={{ width: width - 20, borderColor: "#ffffff" }}>
              <View >
                <Animated.View style={{ opacity: this.state.fadeInOpacity }}>
                  <Text style={{ marginLeft: 32, marginRight: 32,lineHeight:40, borderColor: "#ffffff" }}>
                    {sloganshow[this.state.cur].contect}
                  </Text>
                  <Text></Text>
                  <Text style={{ textAlign: "right", marginRight: 32,lineHeight:40, borderColor: "#ffffff" }}>
                    {sloganshow[this.state.cur].name}
                  </Text>
                </Animated.View>
              </View>
            </Card>
          </WingBlank>
          <WhiteSpace size="xl" />
          <WhiteSpace size="xl" />
          <WhiteSpace size="xl" />
          <WhiteSpace size="xl" />
          <WhiteSpace size="xl" />
          <WhiteSpace size="xl" />
          <WhiteSpace size="xl" />
          <WhiteSpace size="xl" />
          <WhiteSpace size="xl" />
          <WhiteSpace size="xl" />
          <WhiteSpace size="xl" />
          <WhiteSpace size="xl" />
          <WhiteSpace size="xl" />
          <WhiteSpace size="xl" />
          <WhiteSpace size="xl" />
          <WhiteSpace size="xl" />
          {(WechatShare.shareimg(this.state.shareimg))}
          <WhiteSpace size="xl" />
          </View>
        </ScrollView>
        <TabNavigator tabBarStyle={[{ height: ScreenConfig.getTabBarHeight() }]}>
          <TabNavigator.Item
            title={RouteConfig["ScreenImage"].name}
            renderIcon={() => RouteConfig["ScreenImage"].icon}
            onPress={() => {  this.setState({ shareimg: true }), 
                              this.timer && clearInterval(this.timer), 
                              this.state.fadeInOpacity.stopAnimation(this.pause),
                              WechatShare.snapshot(this.refs['location'], "乾坤爻", this) }}
            titleStyle={StyleConfig.menufont}>
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  menufont: {
    fontSize: 15,
    color: '#333333',
    height: ScreenConfig.getFontheight()
  },
});
module.exports = SloganShare;  