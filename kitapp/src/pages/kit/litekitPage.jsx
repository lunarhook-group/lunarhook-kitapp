import {StyleSheet,View, Text,ScrollView,Image} from '@tarojs/components';
import { AtAccordion ,AtGrid } from 'taro-ui'
//import RouteConfig from '../config/RouteConfig';
import './litekitPage.scss'
var kitlist = new Array();
/*
const data = [
  //{icon: RouteConfig['CalendarPage'].icon,text: RouteConfig['CalendarPage'].name,url:RouteConfig['CalendarPage'].route},
  {icon: RouteConfig['SixrandomNewPage'].icon,text: RouteConfig['SixrandomNewPage'].name,url:RouteConfig['SixrandomNewPage'].route},
  {icon: RouteConfig['EightrandomNewPage'].icon,text: RouteConfig['EightrandomNewPage'].name,url:RouteConfig['EightrandomNewPage'].route},
  {icon: RouteConfig['NumberMainPage'].icon,text: RouteConfig['NumberMainPage'].name,url:RouteConfig['NumberMainPage'].route}, 
]

const data3 = [
  
  {icon: RouteConfig['SixCourseNewPage'].icon,text: RouteConfig['SixCourseNewPage'].name,url:RouteConfig['SixCourseNewPage'].route},
  {icon: RouteConfig['qimenNewPage'].icon,text: RouteConfig['qimenNewPage'].name,url:RouteConfig['qimenNewPage'].route},
  {icon: RouteConfig['taiyiNewPage'].icon,text: RouteConfig['taiyiNewPage'].name,url:RouteConfig['taiyiNewPage'].route},
]

const data1 = [
  {icon: RouteConfig['TarotPage'].icon,text: RouteConfig['TarotPage'].name,url:RouteConfig['TarotPage'].route},
  {icon: RouteConfig['TarotVenusPage'].icon,text: RouteConfig['TarotVenusPage'].name,url:RouteConfig['TarotVenusPage'].route},
  {icon: RouteConfig['TarotStarofDavidPage'].icon,text: RouteConfig['TarotStarofDavidPage'].name,url:RouteConfig['TarotStarofDavidPage'].route},
  {icon: RouteConfig['TarotCeltsPage'].icon,text: RouteConfig['TarotCeltsPage'].name,url:RouteConfig['TarotCeltsPage'].route},
]

const data4 = [
  {icon: RouteConfig['GamblePage'].icon,text: RouteConfig['GamblePage'].name,url:RouteConfig['GamblePage'].route},
  //{icon: RouteConfig['ChangesuniversePage'].icon,text: RouteConfig['ChangesuniversePage'].name,url:RouteConfig['ChangesuniversePage'].route},
  {icon: RouteConfig['StarInfoPage'].icon,text: RouteConfig['StarInfoPage'].name,url:RouteConfig['StarInfoPage'].route},
]

const consultants = [
  {icon: RouteConfig['malecall'].icon,text: "刘老师",url:"tel:18911832827"},
  {icon: RouteConfig['femalecall'].icon,text: "郑老师",url:"tel:13391909968"},
  {icon: RouteConfig['femalecall'].icon,text: "菅老师",url:"tel:15330231513"},
  {icon: RouteConfig['business'].icon,text: "郑女士（商务）",url:"tel:13391909968"},
  {icon: RouteConfig['business'].icon,text: "菅女士（商务）",url:"tel:15330231513"},
  {icon: RouteConfig['email'].icon,text:RouteConfig['email'].name,url:"mailto:1140669231@qq.com"},
  {icon: RouteConfig['wechat'].icon,text:RouteConfig['wechat'].name,url:"wechat"},
  {icon: RouteConfig['qrcode'].icon,text:RouteConfig['qrcode'].name,url:"openqrcode"},

  
]


kitlist["tools"] = [

  {icon: RouteConfig['SloganShare'].icon,text: RouteConfig['SloganShare'].name,url:RouteConfig['SloganShare'].route},

  
  
]
const data2 = [
  {icon: RouteConfig['MBTIModule'].icon,text: RouteConfig['MBTIModule'].name,url:RouteConfig['MBTIModule'].route},
  {icon: RouteConfig['EnneagramModule'].icon,text: RouteConfig['EnneagramModule'].name,url:RouteConfig['EnneagramModule'].route},
  {icon: RouteConfig['HollandModule'].icon,text: RouteConfig['HollandModule'].name,url:RouteConfig['HollandModule'].route},
]

*/

export default class litekitPage extends Component {
  config = {
    navigationBarTitleText: '鹿鸣测评'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  /*
  constructor(props) {
      super(props);
      this.state = {
        date:"",
        datahistory:[],
        historySection:[0],
        activeSections:  [0,1,2,3,4,5,6],
        historyactiveSections: [0],
      };
      this.onChange = (activeSections: number[]) => {
        
        var re = this.state.activeSections
        
        if(activeSections.length>1)
        {
          this.setState({activeSections:activeSections})
        }
        else
        {
          re.push(activeSections[0])
          this.setState({activeSections:re})
        }
        
        
      };
      this.historyonChange = (historyactiveSections: number[]) => {
        
        var re = this.state.historyactiveSections
        
        if(historyactiveSections.length>1)
        {
          this.setState({historyactiveSections:historyactiveSections})
        }
        else
        {
          re.push(historyactiveSections[0])
          this.setState({historyactiveSections:re})
        }
        
        
      };
    };
  static navigationOptions = ({navigation})=>{
    const { navigate } = navigation;
    return{
      
      title: RouteConfig["litekitPage"].titlename,
    }
  };



  keyExtractor = (item,index) => item.id
  
  onPress(el, navigate)
  {
    //console.log(el)
    var datahistory = this.state.datahistory
    
    while(datahistory.length>5)
    {
        datahistory.pop()
    }
    datahistory.reverse()
    datahistory.push( {icon: el.icon,text: el.text,url:el.url})
    datahistory.reverse()
    //console.log(datahistory)
    this.setState({datahistory:datahistory})
    navigate(el.url)
  }
*/

  
  render(){
      return(
          <View >

          <AtAccordion  onChange={this.onChange} activeSections={this.state.activeSections}>
          <AtList header={RouteConfig['PsychTestPage'].name}>
          <AtGrid
          data={data2}
          columnNum={4}
          isCarousel
          onPress={(_el: any, index: any) => {this.onPress(_el,navigate)}}
        /></AtList>
        </AtAccordion >


        <Text></Text>

                        
              </View>  
              )
    }
  };
