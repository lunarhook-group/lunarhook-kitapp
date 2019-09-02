import Taro, { Component } from '@tarojs/taro'
import { View, Text ,Image,Button, ScrollView} from '@tarojs/components'
import { AtAccordion, AtGrid,AtTabBar } from 'taro-ui'
import sloganshow from '../../config/SloganModule'
import './SloganShare.scss'
import SixrandomModule from '../UniversechangesLib/SixrandomLib/SixrandomModule'

/*
var imgtime = new Array()
imgtime["子"] = imgtime1
imgtime["丑"] = imgtime2
imgtime["寅"] = imgtime3
imgtime["卯"] = imgtime4
imgtime["辰"] = imgtime5
imgtime["巳"] = imgtime6
imgtime["午"] = imgtime7
imgtime["未"] = imgtime8
imgtime["申"] = imgtime9
imgtime["酉"] = imgtime10
imgtime["戌"] = imgtime11
imgtime["亥"] = imgtime12
*/

export default class SloganShare extends Component {
  constructor(props) {
    super(props);
    var wanNianLiInfo = SixrandomModule.lunarsix();
    this.state = { 
      wanNianLiInfo: wanNianLiInfo,
      cur: Math.floor(Math.random() * sloganshow.length),
    };
    this.random()
  };

  random() {
    this.timer = setInterval(() => {
      var cur = Math.floor(Math.random() * sloganshow.length)
      this.setState({ cur: cur })
    }, 1000 * 5);
  }
  componentWillUnmount() {
    this.timer && clearInterval(this.timer);
  }

  render() {
    const res = Taro.getSystemInfoSync()
    var wanNianLiInfo = this.state.wanNianLiInfo;
    var selectday = new Date()
    var curtimelucky = this.state.wanNianLiInfo.info.gzTime
    //var curgztime = this.state.wanNianLiInfo.info.gzQuarter;
    //var imgindex = imgtime[curtimelucky[1]]
    var second_height = 600
    var second_width = 375
    second_height= res.screenHeight
    second_width = res.screenWidth

    if (false == this.state.shareimg) {
      this.timer && clearInterval(this.timer);
      this.random();
    }
   
    return (
      <View className={"imagecontain"}>
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

