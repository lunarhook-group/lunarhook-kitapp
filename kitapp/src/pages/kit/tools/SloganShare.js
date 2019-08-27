import Taro, { Component } from '@tarojs/taro'
import { View, Text ,Image,Button, ScrollView} from '@tarojs/components'
import { AtAccordion, AtGrid,AtTabBar } from 'taro-ui'
import sloganshow from '../../config/SloganModule'
import './SloganShare.scss'


export default class SloganShare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cur: Math.floor(Math.random() * sloganshow.length),
    };
    this.random()
  };

  random() {
    this.timer = setInterval(() => {
      var cur = Math.floor(Math.random() * sloganshow.length)
      this.setState({ cur: cur })
    }, 1000 * 6);
  }
  componentWillUnmount() {
    this.timer && clearInterval(this.timer);
  }

  render() {
     
    if (false == this.state.shareimg) {
      this.timer && clearInterval(this.timer);
      this.random();
    }
   
    return (
      <View >
        <ScrollView>
              <View className={"contain"}>
                  <Text >
                    {sloganshow[this.state.cur].contect}
                  </Text>
                </View>
                <View className={"slogan"}>
                  <Text >
                    {sloganshow[this.state.cur].name}
                  </Text>
                  </View>
             
        </ScrollView>
      </View>
    );
  }
}

