
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Button, ScrollView } from '@tarojs/components'
import { AtAccordion, AtDivider, AtTabBar, AtInput , AtForm, AtSwitch} from 'taro-ui'
import './NumberMainPage.scss'
import '../../../../theme.scss'
var jump = false
let curyear = 0

var numlucky = new Array()
numlucky["13"]=numlucky["31"]="天医（元吉）++++"
numlucky["68"]=numlucky["86"]="天医（大吉）+++"
numlucky["49"]=numlucky["94"]="天医（吉）++"
numlucky["27"]=numlucky["72"]="天医（小吉）+"

numlucky["14"]=numlucky["41"]="生气（元吉）++++"
numlucky["67"]=numlucky["76"]="生气（大吉）+++"
numlucky["93"]=numlucky["39"]="生气（吉）++"
numlucky["82"]=numlucky["28"]="生气（小吉）+"

numlucky["19"]=numlucky["91"]="延年（大吉）++++"
numlucky["78"]=numlucky["87"]="延年（吉）+++"
numlucky["43"]=numlucky["34"]="延年（小吉）++"
numlucky["62"]=numlucky["26"]="延年（无悔）+"

numlucky["11"]=numlucky["22"]="伏位（大吉）++++"
numlucky["88"]=numlucky["99"]="伏位（吉）+++"
numlucky["77"]=numlucky["66"]="伏位（小吉）++"
numlucky["33"]=numlucky["44"]="伏位（无悔）+"

numlucky["12"]=numlucky["21"]="绝命（凶）++++"
numlucky["69"]=numlucky["96"]="绝命（凶）+++"
numlucky["84"]=numlucky["48"]="绝命（咎）++"
numlucky["37"]=numlucky["73"]="绝命（厉）+"

numlucky["17"]=numlucky["71"]="祸害（凶）++++"
numlucky["89"]=numlucky["98"]="祸害（咎）+++"
numlucky["64"]=numlucky["46"]="祸害（厉）++"
numlucky["23"]=numlucky["32"]="祸害（吝）+"

numlucky["18"]=numlucky["81"]="五鬼（凶）++++"
numlucky["79"]=numlucky["97"]="五鬼（咎）+++"
numlucky["36"]=numlucky["63"]="五鬼（咎）++"
numlucky["24"]=numlucky["42"]="五鬼（厉）+"

numlucky["16"]=numlucky["61"]="六煞（咎）++++"
numlucky["74"]=numlucky["47"]="六煞（厉）+++"
numlucky["38"]=numlucky["83"]="六煞（吝）++"
numlucky["92"]=numlucky["29"]="六煞（悔）+"

var luckyinfo = new Array()
luckyinfo["天医"]="天医吉代表钱财，婚姻，业绩"
luckyinfo["生气"]="生气吉代表贵人，亲朋，同事"
luckyinfo["延年"]="延年吉代表事业，专业，能力"
luckyinfo["伏位"]="伏位吉代表延续，积蓄，被动"
luckyinfo["绝命"]="绝命凶代表投资，开支，破财"
luckyinfo["祸害"]="祸害凶代表口舌，小人，伤灾"
luckyinfo["五鬼"]="五鬼凶代表变动，异地，血光"
luckyinfo["六煞"]="六煞凶代表桃花，忧郁，时尚"

var spnumlucky = new Array()
spnumlucky["19"]=spnumlucky["91"]="延年有碍，易女强人"
spnumlucky["43"]=spnumlucky["34"]="延年有碍，若女性格"

export default class NumberMainPage extends Component {
  constructor(props) {

  super(props);
		this.state = {
      switchstate:true,
      selectedValue: '男',
      number:"",
      info:[],
      extra: [],
      spextra: [],
    };
    };

  config = {
    navigationBarTitleText: '数字八星'
  }

 clear(val)
 {
   this.setState({ number: "", info: [], extra: [], spextra: [],switchstate:"男"==val?true:false,selectedValue: val})
 }
  

  updatenumber(number)
  {
    console.log("number1",number)
    number=number.replace(/[^0-9]/g,"");

    var nums = new Array()
    nums = number.split("")
    var numbershort = new Array()
    numbershort=number.replace(/[0,5]/g,"");

    var any = new Array();
    var step = 0
    for (var key=0;key<nums.length;key++){    
      any[key]=""            
      if(nums[key]=="0" || nums[key]=="5" ){
        step++
        if(nums[key]==0)
        {
          any[key-step]=any[key-step]+"（减弱）"
        }
        else
        {
          any[key-step]=any[key-step]+"（增强）"
        }
      }
    }    

    for (var key=0;key<nums.length;key++){                
        if(nums[key]=="0" || nums[key]=="5" ){
            var index = nums.splice(key,1);
            key-=1;
        }
    }    
    var info = new Array()  
    var extra = new Array()
    var spextra = new Array()
    for (var key=1;key<nums.length;key++){                

          var index = nums[key-1] + nums[key]
          index = numlucky[index]
          var exp = index.substring(0,2)
          //console.log(exp)
          extra[exp]=luckyinfo[exp]
          info.push(index+(any[key-1]!=""?any[key-1]:""))
      }
      var extralist = new Array()
      for(var variable  in extra){   //variable  为 index
        if(-1==extralist.indexOf(luckyinfo[variable]))
        {
          extralist.push(luckyinfo[variable])
        }
      }
      //增加男女阴阳判定
      if("女"==this.state.selectedValue)
      {
          if(-1!=numbershort.indexOf("19") || -1!=numbershort.indexOf("91"))
          {
            spextra.push(spnumlucky["19"]);
          } 
      }
      else if("男"==this.state.selectedValue)
      {
        if(-1!=numbershort.indexOf("43") || -1!=numbershort.indexOf("34"))
        {

          spextra.push(spnumlucky["34"]);
        } 
      }
     
      if(''==number || "请输入数字"==number)
      {
        number = "请输入数字"
      }
      console.log("number",number)
      this.setState({number:number,info:info,extra:extralist,spextra:spextra})
      return number;
  }      

  begin(pagename)
  {
    const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate({ routeName: pagename}),
        ]
      })
      this.props.navigation.dispatch(resetAction)
  }
  
  render(){
    const {info} = this.state
    const contentinfo = info.map((item) => {
      console.log(item)
      return (
        <View key={item.index}>
          <Text key={item.item}>{item}</Text>
        </View>)
    })
    const { extra } = this.state
    const contentextra = extra.map((item) => {
      console.log(item)
      return (
        <View key={item.index}>
          <Text key={item.item}>{item}</Text>
        </View>)
    })
    const { spextra } = this.state
    const contentspextra = spextra.map((item) => {
      console.log(item)
      return (
        <View key={item.index}>
          <Text key={item.item}>{item}</Text>
        </View>)
    })
        return(
        <View  >
          <ScrollView>
  
          <View> 
                  <AtInput
                    name='value'
                    title='输入数字'
                    type='text'
                    placeholder=''
                    value={this.state.number}
                    onChange={(value) =>
                      this.setState({ number: this.updatenumber(value) })}
                  />
                  <AtForm>
                    <AtSwitch title={this.state.selectedValue} checked={"男"==this.state.selectedValue?true:false} onChange={()=>{
                      if("男"==this.state.selectedValue)
                      {
                        this.setState({ selectedValue:"女"})
                      }
                      else
                      {
                      this.setState({ selectedValue: "男" })
                      }
                    }
                  } />
                  </AtForm>
          
            </View>
              <View className={"result"}>
                <AtDivider lineColor='#ffffff' />
                {contentinfo}
                <AtDivider lineColor='#ffffff' />
                {contentextra}
                <AtDivider lineColor='#ffffff' />
                {contentspextra}

              </View>
          </ScrollView>
                         
                          </View>
                         
    )
  }
  };
