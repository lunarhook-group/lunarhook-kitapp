
import React, { Component } from 'react'
import { Taro, getCurrentInstance } from '@tarojs/taro'
import { View, Text, Image, Button, ScrollView, Picker } from '@tarojs/components'
import { AtProgress, AtDivider, AtTabBar, AtGrid, AtForm, AtSwitch, AtList, AtListItem, AtCard } from 'taro-ui'
import SixrandomModule from '../SixrandomLib/SixrandomModule'
import EightrandomModule from './EightrandomModule'
import './EightrandomMainPage.scss'
var jump = false
let curyear = 0
let curmonth = 0
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
      gzxk:"",
      xingsu: "",
      enhance: "空",
      sex: sex,
      EightDate: EightDate,
      birth: birth,
      gzbirth: gzbirth,
      buildeight: buildeight,
      buildeightExt: buildeightExt,
      precent: precent,
      daykey: daykey,
      luckyyear: "",
      luckyyearposition: "",
      luckyearrelation: "",
      curluckyearnum: 0,
      curminiluckyearnum: 0,
      beginlucky: 0,
      activeSections: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    };

  };

  componentDidMount() {

  }

  config = {
    navigationBarTitleText: '八字分析'
  }

  componentWillMount() {

    var parameter = getCurrentInstance().router.params
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
      var gzDate = EightDate.gzYear + " " + EightDate.gzMonth + " " + EightDate.gzDate + " " + EightDate.gzTime;
      var gzxk = SixrandomModule.get_empty_sixty_cycle(EightDate.gzYear)+ " " + SixrandomModule.get_empty_sixty_cycle(EightDate.gzMonth) + " " + SixrandomModule.get_empty_sixty_cycle(EightDate.gzDate) + " " + SixrandomModule.get_empty_sixty_cycle(EightDate.gzTime);
      this.setState({gzxk:gzxk})
      
      curyear = EightDate.Year;
      curmonth = EightDate.Month

      var retterm = EightrandomModule.getYearTerm(gz.getFullYear())
      var beginlucky = EightrandomModule.getbigluckyearbegin(retterm, gz, parameter.EightDate, parameter.sex);
      console.log("beginlucky", Math.floor(beginlucky), Number(gz.getFullYear()))
      console.log("lunar_f", parameter.sex, parameter.EightDate);
      parameter.EightDate = { ...parameter.EightDate, ...EightDate }
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
    console.log("lunar_f", gzDate, beginlucky);
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
      console.log("luckyyear", i, rel, luckyyear[i]);
      rel = EightrandomModule.parentday(rel, parameter.EightDate[4])
      //console.log(rel);
      luckyearrelation.push(rel);
      luckyyearposition.push(EightrandomModule.gettwelfthposition(parameter.EightDate[4] + luckyyear[i].slice(1, 2)))
    }


    this.setState({
      xingsu: parameter.EightDate.xingsu,
      sex: parameter.sex,
      EightDate: parameter.EightDate,
      birth: parameter.birth,
      gzbirth: gzDate,
      beginlucky: Math.floor(beginlucky),
      buildeight: buildeight, buildeightExt: buildeightExt,
      daykey: daykey, precent: precent,
      luckyyear: luckyyear,
      luckyyearposition: luckyyearposition,
      luckyearrelation: luckyearrelation,
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
    if (year[1] == this.state.curminiluckyearnum) {
      yearcolor = IconConfig.colorblue
    }
    console.log("color", yearcolor, year[1], this.state.curminiluckyearnum)
    return (
      <View style={[styles.grid, { height: 25 }]}>
        <Text style={{ fontSize: 14, color: yearcolor }}>{year[0]}</Text>
        <Text style={{ fontSize: 14, color: yearcolor }}>{year[1]}</Text>
      </View>

    );
  }
  changeyear(bigyear, miniyear, beginlucky) {
    console.log("changeyear", bigyear, miniyear, beginlucky)
    var by = 0
    var my = new Date()
    my = my.getFullYear()
    if ("" !== bigyear) {

      by = Number(bigyear)
      my = Math.floor(Number(by * 10 + beginlucky))
      console.log("changeyearbig", by, my)
      this.setState({ curluckyearnum: by, curminiluckyearnum: my })

    }
    else if ("" !== miniyear) {
      //console.log("changeyearmini", bigyear, miniyear, beginlucky)
      my = Number(miniyear)
      if (my >= beginlucky) {
        by = Math.floor((my - beginlucky) / 10)
      }
      console.log("changeyearmini", by, my)
      this.setState({ curluckyearnum: by, curminiluckyearnum: my })
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
  testselectyear(item, curluckyear) {
    const { curluckyearnum } = this.state
    var yearcolor = IconConfig.colorred
    if (curluckyearnum == curluckyear) {
      yearcolor = IconConfig.colorgreen
    }
    yearcolor = "color:" + yearcolor
    //console.log("testselectyear",item,curluckyear,yearcolor)
    return (
      <Text style="yearcolor">{item}</Text>
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


    if (undefined == this.state.luckyyear || "" == this.state.luckyyear) {
      return null
    }
    //这里是大运确定
    var curluckyear = this.state.luckyyear[Number(this.state.curluckyearnum)]
    console.log("curluckyearnum1", Number(this.state.curluckyearnum), curluckyear)
    //这里小运，如果选了小运，用小运去换算大运
    var thisyear
    if (0 == this.state.curminiluckyearnum) {
      thisyear = new Date();
    }
    else {
      console.log("curminiluckyearnum2", Number(this.state.curminiluckyearnum))
      thisyear = new Date()//这里应该选小运的年份
      thisyear.setFullYear(this.state.curminiluckyearnum)
      //这里必须要算出正月，所以流年月份按3月计算
      thisyear.setMonth(3)
    }

    //根据小运计算干支
    var eightyear = SixrandomModule.lunar_f(thisyear)
    var gzYear = eightyear.gzYear
    //计算大运，流年，原句的所有冲克信息
    console.log("curluckyear", this.state.luckyyear, this.state.curluckyearnum, curluckyear)
    var r = EightrandomModule.getrelationship(this.state.EightDate, gzYear[1], curluckyear)


    jump = false;


    var luckyyearposition = this.state.luckyyearposition;
    var minluckyyeararray = new Array()
    var luckyearrelation = this.state.luckyearrelation;
    //拍出所有小运
    var birthdayyear = new Date()
    birthdayyear.setYear(curyear)
    birthdayyear.setMonth(curmonth)
    birthdayyear = SixrandomModule.lunar_f(birthdayyear)
    birthdayyear = birthdayyear.gzYear + birthdayyear.gzMonth + birthdayyear.gzDate + birthdayyear.gzTime;
    console.log("birthdayyear", birthdayyear)
    minluckyyeararray = EightrandomModule.getminlucky(birthdayyear, this.state.sex, curyear);
    var minluckyyear = new Array()
    for (var i = 0; i < minluckyyeararray.length; i++) {
      minluckyyear.push({ value: minluckyyeararray[i] })
    }
    //console.log(minluckyyear)

    var test = new Array()
    test.push({ value: "时辰", hide: '' })
    test.push({ value: "运", hide: '' })
    test.push({ value: "流", hide: '' })
    test.push({ value: "年", hide: '' })
    test.push({ value: "月", hide: '' })
    test.push({ value: "日", hide: '' })
    test.push({ value: "时", hide: '' })

    test.push({ value: "十神", hide: '' })
    //console.log(gzYear[0],this.state.EightDate[4])
    test.push({ value: EightrandomModule.parentday(curluckyear[0], this.state.EightDate[4]), hide: '' })
    test.push({ value: EightrandomModule.parentday(gzYear[0], this.state.EightDate[4]), hide: '' })
    for (var i = 0; i < 4; i++) {
      test.push({ value: this.state.buildeight[i * 2], hide: '' })
    }

    test.push({ value: "天干", hide: '' })
    test.push({ value: curluckyear[0], hide: '' })
    test.push({ value: gzYear[0], hide: '' })
    for (var i = 0; i < 4; i++) {
      test.push({ value: this.state.EightDate[i * 2], hide: '' })
    }

    test.push({ value: "地支", hide: '藏干' })
    test.push({ value: curluckyear[1], hide: EightrandomModule.gethide(curluckyear[1]) })
    test.push({ value: gzYear[1], hide: EightrandomModule.gethide(gzYear[1]) })
    for (var i = 0; i < 4; i++) {
      test.push({ value: this.state.EightDate[i * 2 + 1], hide: this.state.buildeightExt[i * 2] })
    }

    test.push({ value: "十神", hide: '副星' })
    test.push({ value: EightrandomModule.parentearth(curluckyear[1], this.state.EightDate[4]), hide: EightrandomModule.gethideshishen(EightrandomModule.gethide(curluckyear[1]), this.state.EightDate[4]) })
    test.push({ value: EightrandomModule.parentearth(gzYear[1], this.state.EightDate[4]), hide: EightrandomModule.gethideshishen(EightrandomModule.gethide(gzYear[1]), this.state.EightDate[4]) })

    for (var i = 0; i < 4; i++) {
      test.push({ value: this.state.buildeight[i * 2 + 1], hide: this.state.buildeightExt[i * 2 + 1] })
    }

    /*
    test.push({ value: "藏干", hide: '' })
    var hidelist = EightrandomModule.gethide(curluckyear[1])
    hidelist = hidelist.split("")
    var hindinfo = new Array()
    hidelist.forEach(element => {
      hindinfo.push(element + EightrandomModule.parentday(element, this.state.EightDate[4]))
    });
    test.push({ value: hindinfo, hide: "" })

    hidelist = EightrandomModule.gethide(gzYear[1])
    hidelist = hidelist.split("")
    hindinfo = new Array()
    hidelist.forEach(element => {
      hindinfo.push(element + EightrandomModule.parentday(element, this.state.EightDate[4]))
    });
    test.push({ value: hindinfo, hide: "" })

    for (var i = 0; i < 4; i++) {
      hidelist = this.state.buildeightExt[i * 2]
      hidelist = hidelist.split("")
      hindinfo = new Array()
      hidelist.forEach(element => {
        hindinfo.push(element + EightrandomModule.parentday(element, this.state.EightDate[4]))
      });
      test.push({ value: hindinfo, hide: "" })
    }
    */


    test.push({ value: "长生", hide: '' })
    test.push({ value: EightrandomModule.gettwelfthposition(this.state.EightDate[4] + curluckyear[1]), hide: '' })
    test.push({ value: EightrandomModule.gettwelfthposition(this.state.EightDate[4] + gzYear[1]), hide: '' })
    for (var i = 0; i < 4; i++) {
      var x = EightrandomModule.gettwelfthposition(this.state.EightDate[4] + this.state.EightDate[i * 2 + 1])
      test.push({ value: x, hide: "" })
    }

    test.push({ value: "纳音", hide: '' })
    test.push({ value: EightrandomModule.gettwelfth(curluckyear[0] + curluckyear[1]), hide: '' })
    test.push({ value: EightrandomModule.gettwelfth(gzYear[0] + gzYear[1]), hide: '' })
    for (var i = 0; i < 4; i++) {
      var x = EightrandomModule.gettwelfth(this.state.EightDate[i * 2] + this.state.EightDate[i * 2 + 1])
      test.push({ value: x, hide: "" })
    }

    var years = new Array()
    for (var i = 0; i < 8; i++) {
      years.push(i == 0 ? this.state.beginlucky : years[i - 1] + 10)
    }
    var yearsarray = new Array()
    yearsarray = luckyearrelation.concat(years, this.state.luckyyear, luckyyearposition)
    years = new Array()
    //console.log("years", years, luckyearrelation, this.state.luckyyear, luckyyearposition)
    for (var i = 0; i < yearsarray.length; i++) {
      //var x = EightrandomModule.gettwelfth(this.state.EightDate[i * 2] + this.state.EightDate[i * 2 + 1])
      years.push({ value: yearsarray[i] })
    }



    var day = EightrandomModule.getselfinfo(this.state.EightDate[4] + this.state.EightDate[5])

    var shenshaarray = new Array()
    shenshaarray[0] = '年柱：'
    shenshaarray[1] = '月柱：'
    shenshaarray[2] = '日柱：'
    shenshaarray[3] = '时柱：'
    for (var i = 0; i < 4; i++) {
      this.state.EightDate[i]
      shenshaarray[i] = shenshaarray[i] + EightrandomModule.shensha_dayg2earthz(this.state.EightDate[4], this.state.EightDate[i * 2 + 1]);
      shenshaarray[i] = shenshaarray[i] + EightrandomModule.shensha_moon(this.state.EightDate[3], this.state.EightDate[i * 2]);
      if (i != 1) {
        shenshaarray[i] = shenshaarray[i] + EightrandomModule.shensha_moon(this.state.EightDate[3], this.state.EightDate[i * 2 + 1]);//月支不见月支
      }
      if (i != 2) {
        shenshaarray[i] = shenshaarray[i] + EightrandomModule.shensha_dayz2earthz(this.state.EightDate[5], this.state.EightDate[i * 2 + 1]);//日支不见自己
      }
      if (i != 0) {
        shenshaarray[i] = shenshaarray[i] + EightrandomModule.shensha_tianluo(this.state.EightDate[0] + this.state.EightDate[1], this.state.EightDate[i * 2 + 1]);//年支不见年支
        shenshaarray[i] = shenshaarray[i] + EightrandomModule.shensha_diwang(this.state.EightDate[0] + this.state.EightDate[1], this.state.EightDate[i * 2 + 1]);//年支不见年支
        shenshaarray[i] = shenshaarray[i] + EightrandomModule.shensha_yearz2earthz(this.state.EightDate[1], this.state.EightDate[i * 2 + 1]);//年支不见年支
      }

    }
    var shensha = new Array()
    for (var i = 0; i < 4; i++) {
      shensha.push({ value: shenshaarray[i] })
    }

    var marryinfo = EightrandomModule.getmarryinfo(this.state.EightDate, this.state.sex, r, this.state.buildeight)

    var locationself = EightrandomModule.getlocationself(curyear, this.state.sex == "乾造" ? 0 : 1)
    var house = EightrandomModule.gethouselocation(locationself)
    var yongshen = EightrandomModule.getyongshen(this.state.EightDate, this.state.buildeight, curluckyear[1], this.state.precent)
    var home = new Array()
    home = home.concat(day.self)
    home = home.concat(day.tip)
    home = home.concat(house)
    console.log("locationself", locationself)
    var base = new Array()
    base.push({ value: "公历: " + this.state.birth })
    base.push({ value: " " })
    base.push({ value: "四柱: " + this.state.gzbirth })
    base.push({ value: " " })
    base.push({ value: "旬空: " + this.state.gzxk })
    base.push({ value: " " })
    base.push({ value: "命造: " + this.state.sex })
    base.push({ value: "起运: " + this.state.beginlucky })
    base.push({ value: "命卦: " + locationself })
    var ret_powerself = EightrandomModule.getpowerself(this.state.EightDate, this.state.buildeight, curluckyear[1], this.state.precent)
    base.push({ value: "命身: " + ret_powerself.powerself })
    base.push({ value: "喜用: " + yongshen.xishen + yongshen.yongshen + (yongshen.special != undefined ? "(" + yongshen.special + ")" : "") })
    base.push({ value: " " })
    base.push({ value: "忌仇: " + yongshen.jishen + yongshen.choushen })
    if (undefined != yongshen.passyonshen) {
      base.push({ value: "通关: " + yongshen.passyonshen })
    }
    base.push({ value: "扶抑: " + yongshen.adjustyongshen })
    if (undefined != yongshen.buyongshen) {
      base.push({ value: "病药: " + yongshen.buyongshen })
    }

    base.push({ value: "星宿: " + this.state.xingsu.xingsu + this.state.xingsu.r })


    var map = new Array()
    //甲乙丙丁戊己庚辛壬癸
    map['寅'] = [1.14, 1.14, 1.2, 1.2, 1.06, 1.06, 1, 1, 1, 1]
    map['卯'] = [1.2, 1.2, 1.2, 1.2, 1, 1, 1, 1, 1, 1]
    map['辰'] = [1.1, 1.1, 1.06, 1.06, 1.1, 1.1, 1.1, 1.1, 1.04, 1.04]
    map['巳'] = [1, 1, 1.14, 1.14, 1.14, 1.14, 1.06, 1.06, 1.06, 1.06]
    map['午'] = [1, 1, 1.2, 1.2, 1.2, 1.2, 1, 1, 1, 1]
    map['未'] = [1.04, 1.04, 1.1, 1.1, 1.16, 1.16, 1.1, 1.1, 1, 1]
    map['申'] = [1.06, 1.06, 1, 1, 1, 1, 1.14, 1.14, 1.2, 1.2]
    map['酉'] = [1, 1, 1, 1, 1, 1, 1.2, 1.2, 1.2, 1.2]
    map['戌'] = [1, 1, 1.04, 1.04, 1.14, 1.14, 1.16, 1.16, 1.06, 1.6]
    map['亥'] = [1.2, 1.2, 1, 1, 1, 1, 1, 1, 1.14, 1.14]
    map['子'] = [1.2, 1.2, 1, 1, 1, 1, 1, 1, 1.2, 1.2]
    map['丑'] = [1.06, 1.06, 1, 1, 1.1, 1.1, 1.14, 1.14, 1.1, 1.1]
    var display = new Array()
    display['甲'] = "空" != this.state.enhance ? Math.floor(map[this.state.enhance][0] * this.state.daykey['甲']) : this.state.daykey['甲']
    display['乙'] = "空" != this.state.enhance ? Math.floor(map[this.state.enhance][1] * this.state.daykey['乙']) : this.state.daykey['乙']
    display['丙'] = "空" != this.state.enhance ? Math.floor(map[this.state.enhance][2] * this.state.daykey['丙']) : this.state.daykey['丙']
    display['丁'] = "空" != this.state.enhance ? Math.floor(map[this.state.enhance][3] * this.state.daykey['丁']) : this.state.daykey['丁']
    display['戊'] = "空" != this.state.enhance ? Math.floor(map[this.state.enhance][4] * this.state.daykey['戊']) : this.state.daykey['戊']
    display['己'] = "空" != this.state.enhance ? Math.floor(map[this.state.enhance][5] * this.state.daykey['己']) : this.state.daykey['己']
    display['庚'] = "空" != this.state.enhance ? Math.floor(map[this.state.enhance][6] * this.state.daykey['庚']) : this.state.daykey['庚']
    display['辛'] = "空" != this.state.enhance ? Math.floor(map[this.state.enhance][7] * this.state.daykey['辛']) : this.state.daykey['辛']
    display['壬'] = "空" != this.state.enhance ? Math.floor(map[this.state.enhance][8] * this.state.daykey['壬']) : this.state.daykey['壬']
    display['癸'] = "空" != this.state.enhance ? Math.floor(map[this.state.enhance][9] * this.state.daykey['癸']) : this.state.daykey['癸']
    var totalfive =  display['甲'] +  display['乙']+ display['丙']+ display['丁']+ display['戊']+ display['己']+ display['庚']+ display['辛']+ display['壬']+ display['癸']
    var fiveprecent = new Array()
    fiveprecent["木"] = Math.floor((display["甲"]+display["乙"])*100/totalfive)
    fiveprecent["火"] = Math.floor((display["丙"]+display["丁"])*100/totalfive)
    fiveprecent["土"] = Math.floor((display["戊"]+display["己"])*100/totalfive)
    fiveprecent["金"] = Math.floor((display["庚"]+display["辛"])*100/totalfive)
    fiveprecent["水"] = Math.floor((display["壬"]+display["癸"])*100/totalfive)
    return (
      <View >
        <ScrollView >
          <View>
            <AtGrid className='basegrid'
              data={base}
              columnNum={2}
               hasBorder ={false}
              mode='rect'
            />
            <Text style="opacity: 0">blockline</Text>
            <AtGrid className='basegrid'
              data={test}
              columnNum={7}
               hasBorder ={true}
              mode='rect'
            />
            <Text style="opacity: 0">blockline</Text>
            <AtGrid className='basegrid'
              data={shensha}
              columnNum={1}
               hasBorder ={false}
              mode='rect'
            />
            <Text style="opacity: 0">blockline</Text>
            <View className="contain">
              <Text style="color:#13CE66">木</Text>            <Text style="color:#FF4949">火</Text>            <Text style="color:#8B4513">土</Text>            <Text style="color:#FFC82C">金</Text>            <Text style="color:#1E90FF">水</Text>
            <AtProgress percent={fiveprecent["木"]} color='#13CE66' />
            <AtProgress percent={fiveprecent["火"]} color='#FF4949' />
            <AtProgress percent={fiveprecent["土"]} color='#8B4513' />
            <AtProgress percent={fiveprecent["金"]} color='#FFC82C' />
            <AtProgress percent={fiveprecent["水"]} color='#1E90FF' />
            </View>
            <Text style="opacity: 0">blockline</Text>
            <AtGrid className='basegrid'
              data={years}
              columnNum={8}
               hasBorder ={false}
              mode='rect'
              //当选择大运的时候，相当于选择了流年小运
              onClick={(_el, index) => this.changeyear(Number(index % 8), "", this.state.beginlucky)}
            />
            <Text style="opacity: 0">blockline</Text>
            <AtGrid
              data={minluckyyear}
              columnNum={8}
               hasBorder ={false}
              isCarousel={true}
              carouselMaxRow={4}
              //当选择大运的时候，相当于选择了流年小运
              onClick={(_el, index) => this.changeyear("", Number(_el.value.split(" ")[1]), this.state.beginlucky)}
            />
                            <View>
              <Text style="opacity: 0">blockline</Text>
              </View>
            <View className="contain">
              <Text>天干信息</Text>
              {
                r.dr.map((item) => {
                  return (
                    <View key={item.index}>
                      <Text key={item.item} >{item}</Text>
                    </View>)
                })}
                              <View>
              <Text style="opacity: 0">blockline</Text>
              </View>
              <Text>地支冲克</Text>
              {
                r.er.map((item) => {
                  return (
                    <View key={item.index}>
                      <Text key={item.item} >{item}</Text>
                    </View>)
                })}
                              <View>
              <Text style="opacity: 0">blockline</Text>
              </View>
              <Text>流年冲克</Text>
              {
                r.lr.map((item) => {
                  return (
                    <View key={item.index}>
                      <Text key={item.item} >{item}</Text>
                    </View>)
                })}
                <View>
              <Text style="opacity: 0">blockline</Text>
              </View>
              <Text>大运冲克</Text>
              {
                r.br.map((item) => {
                  return (
                    <View key={item.index}>
                      <Text key={item.item} >{item}</Text>
                    </View>)
                })}
                <View>
              <Text style="opacity: 0">blockline</Text>
              </View>
              <Text>日柱信息</Text>
              <View >
                <Text  >{home[0]}</Text>
                <Text >{home[1]}</Text>
                <Text >{home[2]}</Text>
              </View>
              <View>
              <Text style="opacity: 0">blockline</Text>
              </View>
              <Text>婚姻提示（受流年大运影响）</Text>
              {
                marryinfo.map((item) => {
                  return (
                    <View key={item.index}>
                      <Text key={item.item} >{item}</Text>
                    </View>)
                })}
                                <View>
              <Text style="opacity: 0">blockline</Text>
              </View>
              <View>
              <Text style="opacity: 0">blockline</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
};
