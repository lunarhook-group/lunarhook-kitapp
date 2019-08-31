import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Button, ScrollView, Picker } from '@tarojs/components'
import { AtButton, AtDivider, AtTabBar, AtGrid, AtForm, AtSwitch, AtList} from 'taro-ui'
import SixrandomModule from '../SixrandomLib/SixrandomModule'
import EightrandomModule from './EightrandomModule'
import './EightrandomMainPage.scss'


var jump = false
let curyear = 0
/*
八字要展现的东西就比较多了
1、公立生日
2、生肖
3、星座
4、农历生日
5、命卦
6、姓名，性别
7、八字盘
8、地势
9、纳音
10、节气
11、大运
12、排大运
13、流年小运
14、四柱神煞
15、五行力量分析
16、日柱分析
17、八字婚姻
18、日柱分析
19、六亲
20、事业
21、健康
22、运势太岁关系
*/



export default class EightrandomMainPage extends Component {
  constructor(props) {

    super(props);

    var sex = ""
    var EightDate = ""
    var birth = ""
    var gzbirth = ""
    var buildeight = new Array();
    var buildeightExt = new Array();
    var precent = new Array();
    var daykey = new Array();

    this.state = {
      sex: sex,
      EightDate: EightDate,
      birth: birth,
      gzbirth: gzbirth,
      buildeight: buildeight,
      buildeightExt: buildeightExt,
      precent: precent,
      daykey: daykey,
      luckyyear:"",
      luckyyearposition:"",
      luckyearrelation:"",
      curluckyearnum:0,
      curminiluckyearnum:0,
      beginlucky:0,
      activeSections: [0, 1, 2, 3, 4, 5, 6,7,8,9],
    };

  };

  componentDidMount() {

  }

  config = {
    navigationBarTitleText: '八字分析'
  }

  componentWillMount() {

    var parameter = this.$router.params
    //console.log("componentWillMount", parameter)

    if (undefined != parameter) {
      var info = null;

      var ret;
      var args = {};
      var match = null;
      var search = decodeURIComponent(parameter);
      var reg = /(?:([^&]+)=([^&]+))/g;
      while ((match = reg.exec(search)) !== null) {
        args[match[1]] = match[2];
      }
      info = args
      console.log(parameter);
      //console.log(info.sex);
      //console.log(info.birth);
      var t = parameter.birth.split(" ");
      var gz = new Date(t[0]);
      gz.setHours(t[1]);
      //console.log("gz",gz);
      var EightDate = SixrandomModule.lunar_f(gz)
      //console.log("lunar_f", EightDate);
      var gzDate = EightDate.gzYear + " " + EightDate.gzMonth + " " + EightDate.gzDate + " "+EightDate.gzTime;
      curyear = EightDate.Year;

      var retterm = EightrandomModule.getYearTerm(gz.getFullYear())
      var beginlucky = EightrandomModule.getbigluckyearbegin(retterm, gz, parameter.EightDate, parameter.sex);
      console.log("beginlucky",Math.floor(beginlucky),Number(gz.getFullYear()))
      console.log("lunar_f", parameter.sex, parameter.EightDate);

    this.buildeight(parameter, gzDate, beginlucky);
    }
    else {
      /*
      StorageModule.load({
        key: "lastname",
      }).then(ret => {
        this.setState({
          sex: ret.sex, EightDate: ret.EightDate
        });
      }).catch(err => {
        if (false == jump) {
          this.begin('EightrandomNewPage')
          jump = true
        }
      })
      */
    }
    
  }

  buildeight(parameter, gzDate, beginlucky) {
    var buildeight = new Array()
    console.log("lunar_f", parameter.EightDate);
    buildeight[0] = EightrandomModule.parentday(parameter.EightDate[0], parameter.EightDate[4])
    buildeight[2] = EightrandomModule.parentday(parameter.EightDate[2], parameter.EightDate[4])
    buildeight[4] = "元"//this.parentday(parameter.EightDate[4],parameter.EightDate[4])
    buildeight[6] = EightrandomModule.parentday(parameter.EightDate[6], parameter.EightDate[4])
    buildeight[1] = EightrandomModule.parentearth(parameter.EightDate[1], parameter.EightDate[4])
    buildeight[3] = EightrandomModule.parentearth(parameter.EightDate[3], parameter.EightDate[4])
    buildeight[5] = EightrandomModule.parentearth(parameter.EightDate[5], parameter.EightDate[4])
    buildeight[7] = EightrandomModule.parentearth(parameter.EightDate[7], parameter.EightDate[4])
    var buildeightExt = new Array()
    buildeightExt[0] = EightrandomModule.gethide(parameter.EightDate[1]);
    buildeightExt[2] = EightrandomModule.gethide(parameter.EightDate[3]);
    buildeightExt[4] = EightrandomModule.gethide(parameter.EightDate[5]);
    buildeightExt[6] = EightrandomModule.gethide(parameter.EightDate[7]);
    buildeightExt[1] = EightrandomModule.gethideshishen(buildeightExt[0], parameter.EightDate[4]);
    buildeightExt[3] = EightrandomModule.gethideshishen(buildeightExt[2], parameter.EightDate[4]);
    buildeightExt[5] = EightrandomModule.gethideshishen(buildeightExt[4], parameter.EightDate[4]);
    buildeightExt[7] = EightrandomModule.gethideshishen(buildeightExt[6], parameter.EightDate[4]);
    var precent = new Array();
    var daykey = new Array();
    var o = EightrandomModule.getfive(parameter.EightDate)
    precent = o.q
    daykey = o.p

   

    var luckyyear = new Array();
    luckyyear = EightrandomModule.getbigluckyear(parameter.EightDate, parameter.sex);
    console.log("buildeight", luckyyear)
    var luckyearrelation = new Array();
    var luckyyearposition = new Array();
    for (var i in luckyyear) {

      var rel = luckyyear[i].slice(0, 1);
      console.log("luckyyear", i,rel, luckyyear[i]);
      rel = EightrandomModule.parentday(rel, parameter.EightDate[4])
      //console.log(rel);
      luckyearrelation.push(rel);
      luckyyearposition.push(EightrandomModule.gettwelfthposition(parameter.EightDate[4] + luckyyear[i].slice(1, 2)))
    }

   
  this.setState({
      sex: parameter.sex, 
      EightDate: parameter.EightDate, 
      birth: parameter.birth, 
      gzbirth: gzDate, 
      beginlucky: Math.floor(beginlucky),
      buildeight: buildeight, buildeightExt: buildeightExt,
      daykey: daykey, precent: precent,
      luckyyear:luckyyear,
      luckyyearposition:luckyyearposition,
      luckyearrelation:luckyearrelation,
    });
    this.changeyear("", (new Date()).getFullYear(), Math.floor(beginlucky))
  }

  getColor(king) {
    if ("甲" == king || "乙" == king || "寅" == king || "卯" == king) {
      return (<Text style={[styles.Eightstylewithfont, { color: 'green' }]}>{king}</Text>)
    }
    if ("丙" == king || "丁" == king || "午" == king || "巳" == king) {
      return (<Text style={[styles.Eightstylewithfont, { color: 'red' }]}>{king}</Text>)
    }
    if ("戊" == king || "己" == king || "丑" == king || "未" == king || "辰" == king || "戌" == king) {
      return (<Text style={[styles.Eightstylewithfont, { color: 'brown' }]}>{king}</Text>)
    }
    if ("庚" == king || "辛" == king || "申" == king || "酉" == king) {
      return (<Text style={[styles.Eightstylewithfont, { color: 'gold' }]}>{king}</Text>)
    }
    if ("癸" == king || "壬" == king || "子" == king || "亥" == king) {
      return (<Text style={[styles.Eightstylewithfont, { color: 'blue' }]}>{king}</Text>)
    }
    if (undefined != king && king.toString().length > 1) {
      return king
    }

    return (<Text style={[styles.Eightstylewithfont]}>{king}</Text>)
  }

  //keyExtractor = (item,index) => item.key
  keyExtractor = (item, index) => index.toString()

  renderItem(item) {
    return (

      <Text key={item.item} style={styles.flatTextfone}>{item.item}</Text>

    );
  }

  renderminyearItem(item) {
    
    var year = item.split(" ");
    var yearcolor = IconConfig.colororange
    if(year[1]==this.state.curminiluckyearnum)
    {
        yearcolor = IconConfig.colorblue
    }
    console.log("color",yearcolor,year[1],this.state.curminiluckyearnum)
    return (
      <View style={[styles.grid,{height:25}]}>
        <Text style={{ fontSize: 14 ,color:yearcolor}}>{year[0]}</Text>
        <Text style={{ fontSize: 14 ,color:yearcolor}}>{year[1]}</Text>
      </View>

    );
  }
  changeyear(bigyear, miniyear, beginlucky)
  {
    var by = 0
    var my = new Date()
    my = my.getFullYear()
    if(""!==bigyear)
    {
      
      by = Number(bigyear)
      my = Math.floor(Number(by*10+beginlucky))
      console.log("changeyearbig",by,my)
      this.setState({curluckyearnum:by,curminiluckyearnum:my})

    }
    else if(""!==miniyear)
    {
      console.log("changeyearmini", bigyear, miniyear, beginlucky)
      my = Number(miniyear)
      if(my>=beginlucky)
      {
        by = Math.floor((my-beginlucky)/10)
      }
      console.log("curluckyearnum", by, my)
      this.setState({curluckyearnum:by,curminiluckyearnum:my})
    }
    //console.log("changeyear",bigyear,miniyear,by,my,this.state.beginlucky)
  }


  checksub(hide) {
    if (undefined != hide) {
      return (
        <View >
          <Text >{hide}</Text>
        </View>
      )
    }
  }
  testselectyear(item,curluckyear)
  {
    const { curluckyearnum } = this.state
    var yearcolor = IconConfig.colorred
    if (curluckyearnum==curluckyear)
    {
        yearcolor = IconConfig.colorgreen
    }
    //console.log("testselectyear",item,curluckyear,yearcolor)
    return(
      <Text >{item}</Text>
    )
  }
/*
  createpie()
  {
    if (this.state.precent != "") {
      var ret = this.state.pie
      console.log("createpie",ret)
      return (
        <View style={[{ textAlign: 'center', alignItems: 'center' }]}>
          <Svg width={300} height={300} >
            <VictoryPie
              colorScale={["green", "red","brown",  "yellow", "blue"]}
              data={[
                { x: 1, y: this.state.precent[5]+0, label: '木' },
                { x: 2, y: this.state.precent[6]+0, label: '火' },
                { x: 3, y: this.state.precent[7]+0, label: '土' },
                { x: 4, y: this.state.precent[8]+0, label: '金' },
                { x: 5, y: this.state.precent[9]+0, label: '水' },
              ]}
              standalone={false}
              width={300} height={300}
            /></Svg></View>
      )
    }
  }
  */

  render() {


    if(undefined==this.state.luckyyear || ""==this.state.luckyyear)
    {
      return null
    }
    //这里是大运确定
    var curluckyear = this.state.luckyyear[Number(this.state.curluckyearnum)]
    console.log("curluckyearnum", Number(this.state.curluckyearnum), curluckyear)
    //这里小运，如果选了小运，用小运去换算大运
    var thisyear
    if(0==this.state.curminiluckyearnum)
    {
      thisyear = new Date();
    }
    else
    {
      console.log("curminiluckyearnum",Number(this.state.curminiluckyearnum))
      thisyear = new Date()//这里应该选小运的年份
      thisyear.setFullYear(this.state.curminiluckyearnum)
      //curluckyear 这里应该更新大运
    }

    //根据小运计算干支
    var eightyear = SixrandomModule.lunar_f(thisyear)
    var gzYear = eightyear.gzYear
    //计算大运，流年，原句的所有冲克信息
    console.log("curluckyear", this.state.luckyyear, this.state.curluckyearnum, curluckyear)
    var r = EightrandomModule.getrelationship(this.state.EightDate,gzYear[1],curluckyear)


    jump = false;
    
    
    var luckyyearposition = this.state.luckyyearposition;
    var minluckyyear = new Array()
    var luckyearrelation = this.state.luckyearrelation;
    //拍出所有小运
    var birthdayyear = new Date()
    birthdayyear.setYear(curyear)
    birthdayyear.setMonth(4)
    birthdayyear = SixrandomModule.lunar_f(birthdayyear)
    birthdayyear = birthdayyear.gzYear  + birthdayyear.gzMonth  + birthdayyear.gzDate +birthdayyear.gzTime;
    console.log("birthdayyear",birthdayyear)
    minluckyyear = EightrandomModule.getminlucky(birthdayyear, this.state.sex, curyear);


    //console.log(minluckyyear)

    var test = new Array()
    test.push({ info: "时辰", hide: '' })
    test.push({ info: "运", hide: '' })
    test.push({ info: "流", hide: '' })
    test.push({ info: "年", hide: '' })
    test.push({ info: "月", hide: '' })
    test.push({ info: "日", hide: '' })
    test.push({ info: "时", hide: '' })

    test.push({ info: "十神", hide: '' })
    //console.log(gzYear[0],this.state.EightDate[4])
    test.push({ info:EightrandomModule.parentday(curluckyear[0],this.state.EightDate[4]), hide: '' })
    test.push({ info:EightrandomModule.parentday(gzYear[0],this.state.EightDate[4]), hide: '' })
    for (var i = 0; i < 4; i++) {
      test.push({ info: this.state.buildeight[i * 2], hide: '' })
    }

    test.push({ info: "天干", hide: '' })
    test.push({ info: curluckyear[0], hide: '' })
    test.push({ info: gzYear[0], hide: '' })
    for (var i = 0; i < 4; i++) {
      test.push({ info: this.state.EightDate[i * 2], hide: '' })
    }

    test.push({ info: "地支", hide: '藏干' })
    test.push({ info: curluckyear[1],hide: EightrandomModule.gethide(curluckyear[1])})
    test.push({ info: gzYear[1], hide: EightrandomModule.gethide(gzYear[1]) })
    for (var i = 0; i < 4; i++) {
      test.push({ info: this.state.EightDate[i * 2 + 1], hide: this.state.buildeightExt[i * 2] })
    }

    test.push({ info: "十神", hide: '副星' })
    test.push({ info:EightrandomModule.parentearth(curluckyear[1],this.state.EightDate[4]), hide:EightrandomModule.gethideshishen(EightrandomModule.gethide(curluckyear[1]),this.state.EightDate[4])})
    test.push({ info:EightrandomModule.parentearth(gzYear[1],this.state.EightDate[4]), hide:EightrandomModule.gethideshishen(EightrandomModule.gethide(gzYear[1]),this.state.EightDate[4])})
    
    for (var i = 0; i < 4; i++) {
      test.push({ info: this.state.buildeight[i * 2 + 1], hide: this.state.buildeightExt[i * 2 + 1] })
    }

    test.push({ info: "长生", hide: '' })
    test.push({ info:  EightrandomModule.gettwelfthposition(this.state.EightDate[4] + curluckyear[1]), hide: '' })
    test.push({ info:  EightrandomModule.gettwelfthposition(this.state.EightDate[4] + gzYear[1]), hide: '' })
    for (var i = 0; i < 4; i++) {
      var x = EightrandomModule.gettwelfthposition(this.state.EightDate[4] + this.state.EightDate[i * 2 + 1])
      test.push({ info: x, hide: "" })
    }

    test.push({ info: "纳音", hide: '' })
    test.push({ info:  EightrandomModule.gettwelfth( curluckyear[0] + curluckyear[1]), hide: '' })
    test.push({ info:  EightrandomModule.gettwelfth( gzYear[0] + gzYear[1]), hide: '' })
    for (var i = 0; i < 4; i++) {
      var x = EightrandomModule.gettwelfth(this.state.EightDate[i * 2] + this.state.EightDate[i * 2 + 1])
      test.push({ info: x, hide: "" })
    }

    var years = new Array()
    years = luckyearrelation.concat(this.state.luckyyear, luckyyearposition)
    //console.log("years", years, luckyearrelation, this.state.luckyyear, luckyyearposition)

    


    var day = EightrandomModule.getselfinfo(this.state.EightDate[4] + this.state.EightDate[5])

    var shensha = new Array()
    shensha[0] = '年柱：'
    shensha[1] = '月柱：'
    shensha[2] = '日柱：'
    shensha[3] = '时柱：'
    for(var i=0;i<4;i++)
    {
      this.state.EightDate[i]
      shensha[i] =shensha[i] +  EightrandomModule.shensha_dayg2earthz(this.state.EightDate[4],this.state.EightDate[i*2+1]);
      shensha[i] =shensha[i] +  EightrandomModule.shensha_moon(this.state.EightDate[3],this.state.EightDate[i*2]);
      if(i!=1)
      {
        shensha[i] =shensha[i] +  EightrandomModule.shensha_moon(this.state.EightDate[3],this.state.EightDate[i*2+1]);//月支不见月支
      }
      if(i!=2)
      {
        shensha[i] =shensha[i] +  EightrandomModule.shensha_dayz2earthz(this.state.EightDate[5],this.state.EightDate[i*2+1]);//日支不见自己
      }
      if(i!=0)
      {
        shensha[i] =shensha[i] +  EightrandomModule.shensha_tianluo(this.state.EightDate[0]+this.state.EightDate[1],this.state.EightDate[i*2+1]);//年支不见年支
        shensha[i] =shensha[i] +  EightrandomModule.shensha_diwang(this.state.EightDate[0]+this.state.EightDate[1],this.state.EightDate[i*2+1]);//年支不见年支
        shensha[i] =shensha[i] +  EightrandomModule.shensha_yearz2earthz(this.state.EightDate[1],this.state.EightDate[i*2+1]);//年支不见年支
      }
      
    }

    var marryinfo = EightrandomModule.getmarryinfo(this.state.EightDate,this.state.sex,r,this.state.buildeight)

    var base = new Array()
    base.push({value:"公历: "+this.state.birth})
    base.push({ value:"四柱: " + this.state.gzbirth})
    base.push({ value:"命造: "+this.state.sex})
    base.push({ value:"起运: " + this.state.beginlucky})


    return (
      <View  >
        <ScrollView >


          <View >

            <AtGrid
                    data={base}
                    columnNum={4}
                    hasLine={true}
                    />
            <AtGrid
                    data={test}
                    columnNum={7}
                    hasLine={true}
                    itemStyle={{ height: 40 }}
                    
                    /*renderItem={dataItem => (
                      <View>
                        <View >
                          <Text >{this.getColor(dataItem.info)}</Text>
                        </View>
                        {this.checksub(dataItem.hide)}
                      </View>


                    )}*/
                  //isCarousel
                  //onClick={()}
                  />
                  <AtGrid
                    data={shensha}
                    columnNum={1}
                    hasLine={true}
                    
                  //isCarousel
                  //onClick={()}
                  />
            <AtGrid
                    data={years}
                    columnNum={8}
                    hasLine={true}
                    itemStyle={{ height: 25 }}
                    //当选择大运的时候，相当于选择了流年小运
                    onPress={(_el: any, index: any) => this.changeyear(Number(index%8),"")}
                    /*
                    renderItem={(dataItem, itemIndex) => (
                      <View >


                          {this.testselectyear(dataItem,itemIndex%8)}

                      </View>


                    )}
                    */
                  //isCarousel
                  //onClick={()}
                  />

                  <AtGrid
                    data={minluckyyear}
                    columnNum={6}
                    hasLine={true}
                    itemStyle={{ height: 35 }}
                    isCarousel = {true}
                    carouselMaxRow = {4}
                    //当选择大运的时候，相当于选择了流年小运
                    //onPress={(_el: any, index: any) => this.changeyear("",Number(_el.split(" ")[1]))}
                    //renderItem={dataItem => this.renderminyearItem(dataItem)}
                  //isCarousel
                  //onClick={()}
                  />

                 
                  
                  
            <AtList>
              <AtListItem wrap multipleLine
              ><Text > {r.dr}</Text></AtListItem>
                    
              <AtListItem wrap multipleLine
              ><Text > {r.er}</Text></AtListItem>
              <AtListItem wrap multipleLine
              ><Text > {r.lr}</Text></AtListItem>
              <AtListItem wrap multipleLine
              ><Text > {r.br}</Text></AtListItem>
            </AtList>
            <AtList>
              <AtListItem
                    >
                    <Text > {day.self}</Text>
                    <Text > {day.tip}</Text>
              </AtListItem>
                    
            </AtList>
            <AtList>
              <AtListItem wrap multipleLine
              ><Text > {marryinfo}</Text></AtListItem>
            </AtList>




            
          </View>
        </ScrollView>

       
      </View>

    )
  }

};
