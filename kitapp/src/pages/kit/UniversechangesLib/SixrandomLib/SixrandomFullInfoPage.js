import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Button, ScrollView, Picker } from '@tarojs/components'
import { AtButton, AtDivider, AtTabBar, AtGrid, AtForm, AtSwitch, AtList, AtListItem, AtCard } from 'taro-ui'
import SixrandomModule from 'SixrandomModule'
import './SixrandomFullinfoPage.scss'
import '../../../../theme.scss'
class SixrandomFullinfoPage extends Component {
    constructor(props) {
    super(props);
		this.state = {
      date:[],
      parameter: 'null',
		}};


  config = {
    navigationBarTitleText: '卦象详解'
  }

  componentDidMount() {

  }
  
  componentWillMount() {


      var parameter = this.$router.params
    console.log("componentWillMount",parameter)
      if(""!=parameter)
      {
            var _ret = SixrandomModule.build(parameter);
            var _build = SixrandomModule.get_random_draw()
            console.log(_build)
            this.setState({  
              date: _build,parameter:parameter }); 

      }

  }


  render(){

    const { date} = this.state
        return(
    <View  >
    <ScrollView > 
    <View  >
    <View>
                  <AtList>
                    {date.map((item, itemIndex) => {
                      console.log(item)
                      return (
                        <View key={itemIndex.id}>
                          <Text>{item}</Text>
                        </View>
                      )
                    })}
                  </AtList>
                          </View>
            </View>
             </ScrollView> 

                
               
              </View>  
    )
    }
}
module.exports=SixrandomFullinfoPage;  