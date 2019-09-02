import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Button, ScrollView, Picker } from '@tarojs/components'
import { AtButton, AtDivider, AtTabBar, AtGrid, AtForm, AtSwitch, AtList, AtListItem, AtCard } from 'taro-ui'
import SixrandomModule from 'SixrandomModule'
import ValueTypeModule from '../../../config/ValueTypeModule'
import './SixrandomNewPage.scss'

var randArray = []





class SixrandomNewPage extends Component {
  
  constructor(porp) {
    
        super(porp);
        this.state= {
          selector: [ValueTypeModule["emotion"],
          ValueTypeModule["bussiness"], ValueTypeModule["lucky"], ValueTypeModule["sued"], ValueTypeModule["health"], ValueTypeModule["finance"], ValueTypeModule["find"]],
          selectorChecked: ValueTypeModule["emotion"],
           data: [],
            selectedValue: 'emotion',
            selvalue:0,
            Step: 7,
            Tip: ""
    }
    console.log("state",ValueTypeModule["emotion"])
  }

  config = {
    navigationBarTitleText: '六爻问卦'
  }

  componentWillMount() {

  }

  componentWillUnmount() {

  }

    onChange = e => {
      this.setState({
        selectorChecked: this.state.selector[e.detail.value]
      })
    }
  render()
  {
    const {data} = this.state
    return (
      <View>
        <ScrollView>
          <Text></Text>

          <Text></Text>
          <Picker mode='selector' range={this.state.selector} onChange={this.onChange}>
            <View className='picker'>
              当前选择：{this.state.selectorChecked}
            </View>
          </Picker>

          <View >
            <AtButton type='secondary' onClick={() => this.random()}>出爻</AtButton>
          </View>
          <AtList>
            {data.map((item, itemIndex) => {
              console.log(item)
              return (
                <View key={itemIndex.id}>
                  <AtListItem title={item} />
                </View>
              )
            })}
          </AtList>
        </ScrollView>
      </View>
    )
    }
  random() {

    if (this.state.Step > 0) {
      var t ,t0 , t1 , t2 
      t=t0=t1= t2 =0
      t0 = Math.random(1) >= 0.5 ? 1 : 0
      t1 = Math.random(1) >= 0.5 ? 1 : 0
      t2 = Math.random(1) >= 0.5 ? 1 : 0
      t = t0 + t1 + t2 + 6
      //alert(t)

      var x = ""
      if (t == 8) {
        x = SixrandomModule.getnegativedraw()
      }
      else if (t == 6) {
        x = SixrandomModule.getnegativedraw()
      }
      else if (t == 7) {
        x = SixrandomModule.getpositivedraw()
      }
      else if (t == 9) {
        x = SixrandomModule.getpositivedraw()
      }
      randArray[(this.state.Step - 1)] = t
      //dataArray[(this.state.Step-1)] = x
      var dataArray = this.state.data;
      dataArray.reverse(dataArray);
      dataArray.push(x)
      this.setState({ Step: this.state.Step - 1 })

      dataArray.reverse(dataArray);
      this.setState({ data: dataArray })

    }
    if(this.state.Step==1)
    {
      randArray[0] = this.state.selectedValue;
      var index = (new Date()).valueOf().toString();
      randArray[7] = index;
      randArray[8] = this.state.Tip

      var date = new Date(Number(randArray[7]))
      var lunar = ""
      for (var i =1;i<7;i++)
      {
        lunar = lunar+(randArray[i]).toString()
      }
      var question = randArray[0]
      
      var obj = {}
      obj.tip = randArray[8]
      obj.star = false
      obj.date = randArray[7]
      obj.lunar = lunar
      obj.question = ValueTypeModule[question]
      var parameter = "?date="+(new Date(Number(randArray[7])))+"&lunar="+lunar+"&question="+ obj.question
      var Jstr = JSON.stringify(obj)
      console.log("convertJsonSave", parameter);
      Taro.navigateTo({ url: 'SixrandomFullInfoPage' + parameter })
      //this.begin('SixrandomMainPage')
      this.picker(0)
    }
  }
  picker(value)
  {
    var pickkind = new Array();
    pickkind=["emotion","bussiness","lucky","sued","health","finance","find"]
    randArray = []
    this.setState({selvalue:value})
    this.setState({selectedValue: pickkind[value]})
    this.setState({Step: 7})
    this.setState({data: []})
   // this.flatlist.refresh()
  }

}

module.exports=SixrandomNewPage;  