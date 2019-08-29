import Taro, { Component } from '@tarojs/taro'
import { View, Text ,Image,Button} from '@tarojs/components'
import SixrandomModule from '../kit/UniversechangesLib/SixrandomLib/SixrandomModule'
import './slogan.scss'


import imgtime1 from '../img/time/1.jpg'
import imgtime2 from '../img/time/2.jpg'
import imgtime3 from '../img/time/3.jpg'
import imgtime4 from '../img/time/4.jpg'
import imgtime5 from '../img/time/5.jpg'
import imgtime6 from '../img/time/6.jpg'
import imgtime7 from '../img/time/7.jpg'
import imgtime8 from '../img/time/8.jpg'
import imgtime9 from '../img/time/9.jpg'
import imgtime10 from '../img/time/10.jpg'
import imgtime11 from '../img/time/11.jpg'
import imgtime12 from '../img/time/12.jpg'

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

export default class Slogan extends Component {


  config = {
    navigationBarTitleText: '乾坤爻'
  }

  constructor (props) {
    super(props)
    var wanNianLiInfo = SixrandomModule.lunarsix();
    this.state = { 
      wanNianLiInfo: wanNianLiInfo,
    }
  }

  componentWillMount () {
    var wanNianLiInfo = SixrandomModule.lunarsix();
   }

  componentDidMount () { 
    this.timer = setInterval(() => {
      clearInterval(this.timer)
      Taro.redirectTo({url:'../../pages/kit/litekitPage'})
    }, 1000 * 2);
  }

  componentWillUnmount () { 

  }

  componentDidShow () { }

  componentDidHide () { }



  render () {
    const res = Taro.getSystemInfoSync()
    var wanNianLiInfo = this.state.wanNianLiInfo;
    var selectday = new Date()
    var curtimelucky = this.state.wanNianLiInfo.info.gzTime
    //var curgztime = this.state.wanNianLiInfo.info.gzQuarter;
    var imgindex = imgtime[curtimelucky[1]]
    var second_height = 600
    var second_width = 375
    second_height= res.screenHeight
    second_width = res.screenWidth
    console.log(res,second_height)

    return (
      <View className={'contain'}>
        <Image className={'slogan'}
          mode='widthFix'
          style='width:90%'
          src={imgindex}
        />
      </View>
    )
  }
}
