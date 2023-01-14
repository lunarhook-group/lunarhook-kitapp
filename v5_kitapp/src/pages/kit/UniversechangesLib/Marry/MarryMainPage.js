import React, { Component } from 'react'
import { Taro, getCurrentInstance } from '@tarojs/taro'
import { View, Text, Image, Button, ScrollView, Picker } from '@tarojs/components'
import { AtProgress, AtDivider, AtTabBar, AtGrid, AtForm, AtSwitch, AtList, AtListItem, AtCard } from 'taro-ui'
import SixrandomModule from '../SixrandomLib/SixrandomModule'
import EightrandomModule from '../EightrandomLib/EightrandomModule'
let curyearmale = 0
let curmonthmale = 0
let curyearfemale = 0
let curmonthfemale = 0

/*

1喜用配合
如果男女日元相互克制，且衰旺一强一弱，必然是喜用一致的，同强同弱则喜用交战
如果男女日元相互比合，需要同强同弱，必然是喜用一致的，若一强一弱则喜用交战
2十神互补
喜用互补，硬配，自己的仇忌是对方的喜用
3、日元强弱中和
4、干支配合得体，干合而不克，支不冲克，或冲化忌神
5、八字不冲克
6、生肖配合
7、纳音相生，或者男克女命
8、命卦东西配合
*/

export default class MarryMainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      xingsumale:"",
      xingsufemale:"",
      gzxkmale: "",
      gzxkfemale: "",
      EightDatemale: "",
      EightDatefemale: "",
      birthmale: "",
      birthfemale: "",
      gzbirthmale: "",
      gzbirthfemale: "",
      buildeightmale: new Array(),
      buildeightfemale: new Array(),
      buildeightExtmale: new Array(),
      buildeightExtfemale: new Array(),

      daykeymale: new Array(),
      daykeyfemale: new Array(),
      luckyyearmale: "",
      luckyyearpositionmale: "",
      luckyearrelationmale: "",
      curluckyearnummale: 0,
      curminiluckyearnummale: 0,
      beginluckymale: 0,
      luckyyearfemale: "",
      luckyyearpositionfemale: "",
      luckyearrelationfemale: "",
      curluckyearnumfemale: 0,
      curminiluckyearnumfemale: 0,
      beginluckyfemale: 0,
      renderswitch: false,
    };
  };

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
      var t = parameter.birthmale.split(" ");
      var gzmale = new Date(t[0]);
      gzmale.setHours(t[1]);
      gzmale.setMinutes(undefined != t[2] ? t[2] : t[2] = 0)
      gzmale.setSeconds(undefined != t[3] ? t[3] : t[3] = 0)

      var EightDategzmale = SixrandomModule.lunar_f(gzmale)
      var gzDatemale = EightDategzmale.gzYear + " " + EightDategzmale.gzMonth + " " + EightDategzmale.gzDate + " " + EightDategzmale.gzTime;
      var gzxkmale = SixrandomModule.get_empty_sixty_cycle(EightDategzmale.gzYear) + " " + SixrandomModule.get_empty_sixty_cycle(EightDategzmale.gzMonth) + " " + SixrandomModule.get_empty_sixty_cycle(EightDategzmale.gzDate) + " " + SixrandomModule.get_empty_sixty_cycle(EightDategzmale.gzTime);

      curyearmale = EightDategzmale.Year;
      curmonthmale = EightDategzmale.Month

      var rettermmale = EightrandomModule.getYearTerm(gzmale.getFullYear())
      var beginluckymale = EightrandomModule.getbigluckyearbegin(rettermmale, gzmale, parameter.EightDatemale, "乾造");
      console.log("beginlucky", Math.floor(beginluckymale), Number(gzmale.getFullYear()))
      this.setState({
        EightDatemale: parameter.EightDatemale, birthmale: parameter.birthmale, gzbirthmale: gzDatemale, beginluckymale: Math.floor(beginluckymale), gzxkmale: gzxkmale,xingsumale:EightDategzmale.xingsu
      });
      parameter.EightDatemale = { ...parameter.EightDatemale, ...EightDategzmale }
      this.buildeight("乾造",parameter)

      t = parameter.birthfemale.split(" ");
      var gzfemale = new Date(t[0]);
      gzfemale.setHours(t[1]);
      gzfemale.setMinutes(undefined != t[2] ? t[2] : t[2] = 0)
      gzfemale.setSeconds(undefined != t[3] ? t[3] : t[3] = 0)
      console.log(gzfemale);
      var EightDategzfemale = SixrandomModule.lunar_f(gzfemale)
      var gzDatefemale = EightDategzfemale.gzYear + " " + EightDategzfemale.gzMonth + " " + EightDategzfemale.gzDate + " " + EightDategzfemale.gzTime;
      var gzxkfemale = SixrandomModule.get_empty_sixty_cycle(EightDategzfemale.gzYear) + " " + SixrandomModule.get_empty_sixty_cycle(EightDategzfemale.gzMonth) + " " + SixrandomModule.get_empty_sixty_cycle(EightDategzfemale.gzDate) + " " + SixrandomModule.get_empty_sixty_cycle(EightDategzfemale.gzTime);

      curyearfemale = EightDategzfemale.Year;
      curmonthfemale = EightDategzfemale.Month

      var rettermfemale = EightrandomModule.getYearTerm(gzfemale.getFullYear())
      var beginluckyfemale = EightrandomModule.getbigluckyearbegin(rettermfemale, gzfemale, parameter.EightDatefemale, "坤造");
      console.log("beginlucky", Math.floor(beginluckyfemale), Number(gzfemale.getFullYear()))
      this.setState({
        EightDatefemale: parameter.EightDatefemale, birthfemale: parameter.birthfemale, gzbirthfemale: gzDatefemale, beginluckyfemale: Math.floor(beginluckyfemale), gzxkfemale: gzxkfemale,xingsufemale:EightDategzfemale.xingsu,
      });
      parameter.EightDatefemale = { ...parameter.EightDatefemale, ...EightDategzfemale }
      this.buildeight("坤造",parameter)
      this.setState({renderswitch:true})
    }
    else {

    }
  }
  

  buildeight(sex,parameter) {
    var buildeight = new Array()
    if ("乾造" == sex) {
      buildeight[0] = EightrandomModule.parentday(parameter.EightDatemale[0], parameter.EightDatemale[4])
      buildeight[2] = EightrandomModule.parentday(parameter.EightDatemale[2], parameter.EightDatemale[4])
      buildeight[4] = "乾造" == sex ? "元男" : "元女"
      buildeight[6] = EightrandomModule.parentday(parameter.EightDatemale[6], parameter.EightDatemale[4])
      buildeight[1] = EightrandomModule.parentearth(parameter.EightDatemale[1], parameter.EightDatemale[4])
      buildeight[3] = EightrandomModule.parentearth(parameter.EightDatemale[3], parameter.EightDatemale[4])
      buildeight[5] = EightrandomModule.parentearth(parameter.EightDatemale[5], parameter.EightDatemale[4])
      buildeight[7] = EightrandomModule.parentearth(parameter.EightDatemale[7], parameter.EightDatemale[4])
      var buildeightExt = new Array()
      buildeightExt[0] = EightrandomModule.gethide(parameter.EightDatemale[1]);
      buildeightExt[2] = EightrandomModule.gethide(parameter.EightDatemale[3]);
      buildeightExt[4] = EightrandomModule.gethide(parameter.EightDatemale[5]);
      buildeightExt[6] = EightrandomModule.gethide(parameter.EightDatemale[7]);
      buildeightExt[1] = EightrandomModule.gethideshishen(buildeightExt[0], parameter.EightDatemale[4]);
      buildeightExt[3] = EightrandomModule.gethideshishen(buildeightExt[2], parameter.EightDatemale[4]);
      buildeightExt[5] = EightrandomModule.gethideshishen(buildeightExt[4], parameter.EightDatemale[4]);
      buildeightExt[7] = EightrandomModule.gethideshishen(buildeightExt[6], parameter.EightDatemale[4]);
      var precent = new Array();
      var daykey = new Array();
      var o = EightrandomModule.getfive(parameter.EightDatemale)
      precent = o.q
      daykey = o.p



      var luckyyear = new Array();
      luckyyear = EightrandomModule.getbigluckyear(parameter.EightDatemale, "乾造");
      var luckyearrelation = new Array();
      var luckyyearposition = new Array();
      for (var i in luckyyear) {

        var rel = luckyyear[i].slice(0, 1);
        //console.log("luckyyear",rel, luckyyear[i]);
        rel = EightrandomModule.parentday(rel, parameter.EightDatemale[4])
        //console.log(rel);
        luckyearrelation.push(rel);
        luckyyearposition.push(EightrandomModule.gettwelfthposition(parameter.EightDatemale[4] + luckyyear[i].slice(1, 2)))
      }


      this.setState({
        buildeightmale: buildeight, buildeightExtmale: buildeightExt,
        daykeymale: daykey, precentmale: precent,
        luckyyearmale: luckyyear,
        luckyyearpositionmale: luckyyearposition,
        luckyearrelationmale: luckyearrelation,
      });
      this.changeyear("", (new Date()).getFullYear(), "乾造")
    } else {
      buildeight[0] = EightrandomModule.parentday(parameter.EightDatefemale[0], parameter.EightDatefemale[4])
      buildeight[2] = EightrandomModule.parentday(parameter.EightDatefemale[2], parameter.EightDatefemale[4])
      buildeight[4] = "乾造" == sex ? "元男" : "元女"
      buildeight[6] = EightrandomModule.parentday(parameter.EightDatefemale[6], parameter.EightDatefemale[4])
      buildeight[1] = EightrandomModule.parentearth(parameter.EightDatefemale[1], parameter.EightDatefemale[4])
      buildeight[3] = EightrandomModule.parentearth(parameter.EightDatefemale[3], parameter.EightDatefemale[4])
      buildeight[5] = EightrandomModule.parentearth(parameter.EightDatefemale[5], parameter.EightDatefemale[4])
      buildeight[7] = EightrandomModule.parentearth(parameter.EightDatefemale[7], parameter.EightDatefemale[4])
      var buildeightExt = new Array()
      buildeightExt[0] = EightrandomModule.gethide(parameter.EightDatefemale[1]);
      buildeightExt[2] = EightrandomModule.gethide(parameter.EightDatefemale[3]);
      buildeightExt[4] = EightrandomModule.gethide(parameter.EightDatefemale[5]);
      buildeightExt[6] = EightrandomModule.gethide(parameter.EightDatefemale[7]);
      buildeightExt[1] = EightrandomModule.gethideshishen(buildeightExt[0], parameter.EightDatefemale[4]);
      buildeightExt[3] = EightrandomModule.gethideshishen(buildeightExt[2], parameter.EightDatefemale[4]);
      buildeightExt[5] = EightrandomModule.gethideshishen(buildeightExt[4], parameter.EightDatefemale[4]);
      buildeightExt[7] = EightrandomModule.gethideshishen(buildeightExt[6], parameter.EightDatefemale[4]);
      var precent = new Array();
      var daykey = new Array();
      var o = EightrandomModule.getfive(parameter.EightDatefemale)
      precent = o.q
      daykey = o.p



      var luckyyear = new Array();
      luckyyear = EightrandomModule.getbigluckyear(parameter.EightDatefemale, "坤造");
      var luckyearrelation = new Array();
      var luckyyearposition = new Array();
      for (var i in luckyyear) {

        var rel = luckyyear[i].slice(0, 1);
        //console.log("luckyyear",rel, luckyyear[i]);
        rel = EightrandomModule.parentday(rel, parameter.EightDatefemale[4])
        //console.log(rel);
        luckyearrelation.push(rel);
        luckyyearposition.push(EightrandomModule.gettwelfthposition(parameter.EightDatefemale[4] + luckyyear[i].slice(1, 2)))
      }


      this.setState({
        buildeightfemale: buildeight, buildeightExtfemale: buildeightExt,
        daykeyfemale: daykey, precentfemale: precent,
        luckyyearfemale: luckyyear,
        luckyyearpositionfemale: luckyyearposition,
        luckyearrelationfemale: luckyearrelation,
      });
      this.changeyear("", (new Date()).getFullYear(), "坤造")
    }

  }

  getColor(king, size) {
    if ("甲" == king || "乙" == king || "寅" == king || "卯" == king) {
      return (<Text style={[styles.Eightstylewithfont, { color: 'green', fontSize: size }]}>{king}</Text>)
    }
    if ("丙" == king || "丁" == king || "午" == king || "巳" == king) {
      return (<Text style={[styles.Eightstylewithfont, { color: 'red', fontSize: size }]}>{king}</Text>)
    }
    if ("戊" == king || "己" == king || "丑" == king || "未" == king || "辰" == king || "戌" == king) {
      return (<Text style={[styles.Eightstylewithfont, { color: '#8B4513', fontSize: size }]}>{king}</Text>)
    }
    if ("庚" == king || "辛" == king || "申" == king || "酉" == king) {
      return (<Text style={[styles.Eightstylewithfont, { color: '#DAA520', fontSize: size }]}>{king}</Text>)
    }
    if ("癸" == king || "壬" == king || "子" == king || "亥" == king) {
      return (<Text style={[styles.Eightstylewithfont, { color: '#1E90FF', fontSize: size }]}>{king}</Text>)
    }
    if (undefined != king && king.toString().length > 1) {
      return king
    }

    return (<Text style={[styles.Eightstylewithfont], { fontSize: size }}>{king}</Text>)
  }

  //keyExtractor = (item,index) => item.key
  keyExtractor = (item, index) => index.toString()

  renderItem(item) {
    return (

      <Text key={item.item} style={styles.flatTextfone}>{item.item}</Text>

    );
  }


  changeyear(bigyear, miniyear, sex) {
    var by = 0
    var my = new Date()
    my = my.getFullYear()
    if ("" !== bigyear) {
      //console.log("changeyearbig",bigyear,miniyear)
      by = Number(bigyear)
      if(by>7){by=7}
      if ("乾造" == sex) {
        my = Math.floor(Number(by * 10 + this.state.beginluckymale))
        this.setState({ curluckyearnummale: by, curminiluckyearnummale: my })
      } else {
        my = Math.floor(Number(by * 10 + this.state.beginluckyfemale))
        this.setState({ curluckyearnumfemale: by, curminiluckyearnumfemale: my })
      }


    }
    else if ("" !== miniyear) {

      my = Number(miniyear)
      if(my-70>this.state.beginluckymale){my=this.state.beginluckymale-60}
      console.log("changeyearmini", bigyear, miniyear, by, my)

      if ("乾造" == sex) {
        if (my >= this.state.beginluckymale) {
          by = Math.floor((my - this.state.beginluckymale) / 10)
        }
        this.setState({ curluckyearnummale: by, curminiluckyearnummale: my })
      } else {
        if (my >= this.state.beginluckyfemale) {
          by = Math.floor((my - this.state.beginluckyfemale) / 10)
        }
        this.setState({ curluckyearnumfemale: by, curminiluckyearnumfemale: my })
      }
    }
    //console.log("changeyear",bigyear,miniyear,by,my,this.state.beginlucky)
  }

  render() {


    if (undefined == this.state.luckyyearmale || "" == this.state.luckyyearmale || this.state.renderswitch == false) {
      return null
    }
    //这里是大运确定
    var curluckyearmale = this.state.luckyyearmale[this.state.curluckyearnummale]
    var curluckyearfemale = this.state.luckyyearfemale[this.state.curluckyearnumfemale]
    //console.log("curluckyearnum",Number(this.state.curluckyearnum))
    //这里小运，如果选了小运，用小运去换算大运
    var thisyear
    if (0 == this.state.curminiluckyearnummale) {
      thisyear = new Date();
    }
    else {
      console.log("curminiluckyearnum", Number(this.state.curminiluckyearnummale))
      thisyear = new Date()//这里应该选小运的年份
      //现在只能看当年的运势了，不能看具体那个小韵了
      //thisyear.setFullYear(this.state.beginluckymale)
      //这里必须要算出正月，所以流年月份按3月计算
      thisyear.setMonth(3)
    }

    //根据小运计算干支
    var eightyear = SixrandomModule.lunar_f(thisyear)
    var gzYear = eightyear.gzYear
    //计算大运，流年，原句的所有冲克信息
    console.log("curluckyearmale", this.state.luckyyear, this.state.curluckyearnum)
    var rmale = EightrandomModule.getrelationship(this.state.EightDatemale, gzYear[1], curluckyearmale, "乾造")
    var rfemale = EightrandomModule.getrelationship(this.state.EightDatefemale, gzYear[1], curluckyearfemale, "坤造")

    var luckyyearpositionmale = this.state.luckyyearpositionmale;
    var luckyyearpositionfemale = this.state.luckyyearpositionfemale;
    var luckyearrelationmale = this.state.luckyearrelationmale;
    var luckyearrelationfemale = this.state.luckyearrelationfemale;
    //拍出所有小运
    var birthdayyear = new Date()
    birthdayyear.setYear(curyearmale)
    birthdayyear.setMonth(curmonthmale)
    birthdayyear = SixrandomModule.lunar_f(birthdayyear)
    birthdayyear = birthdayyear.gzYear + birthdayyear.gzMonth + birthdayyear.gzDate + birthdayyear.gzTime;
    console.log("birthdayyear", birthdayyear, curyearmale, curmonthmale)
    //consol

    var testmale = new Array()
    testmale.push({ value: "时辰", hide: '' })
    testmale.push({ value: "大运", hide: '' })
    testmale.push({ value: "流年", hide: '' })
    testmale.push({ value: "年柱", hide: '' })
    testmale.push({ value: "月柱", hide: '' })
    testmale.push({ value: "日柱", hide: '' })
    testmale.push({ value: "时柱", hide: '' })

    testmale.push({ value: "十神", hide: '' })
    //console.log(gzYear[0],this.state.EightDatemale[4])
    testmale.push({ value: EightrandomModule.parentday(curluckyearmale[0], this.state.EightDatemale[4]), hide: '' })
    testmale.push({ value: EightrandomModule.parentday(gzYear[0], this.state.EightDatemale[4]), hide: '' })
    for (var i = 0; i < 4; i++) {
      testmale.push({ value: this.state.buildeightmale[i * 2], hide: '' })
    }

    testmale.push({ value: "天干", hide: '' })
    testmale.push({ value: curluckyearmale[0], hide: '' })
    testmale.push({ value: gzYear[0], hide: '' })
    for (var i = 0; i < 4; i++) {
      testmale.push({ value: this.state.EightDatemale[i * 2], hide: '' })
    }

    testmale.push({ value: "地支", hide: '' })
    testmale.push({ value: curluckyearmale[1], hide: "" })
    testmale.push({ value: gzYear[1], hide: "" })
    for (var i = 0; i < 4; i++) {
      testmale.push({ value: this.state.EightDatemale[i * 2 + 1], hide: "" })
    }

    testmale.push({ value: "十神", hide: '' })
    testmale.push({ value: EightrandomModule.parentearth(curluckyearmale[1], this.state.EightDatemale[4]), hide: "" })
    testmale.push({ value: EightrandomModule.parentearth(gzYear[1], this.state.EightDatemale[4]), hide: "" })

    for (var i = 0; i < 4; i++) {
      testmale.push({ value: this.state.buildeightmale[i * 2 + 1], hide: "" })
    }

    var testfemale = new Array()
    testfemale.push({ value: "时辰", hide: '' })
    testfemale.push({ value: "大运", hide: '' })
    testfemale.push({ value: "流年", hide: '' })
    testfemale.push({ value: "年柱", hide: '' })
    testfemale.push({ value: "月柱", hide: '' })
    testfemale.push({ value: "日柱", hide: '' })
    testfemale.push({ value: "时柱", hide: '' })

    testfemale.push({ value: "十神", hide: '' })
    //console.log(gzYear[0],this.state.EightDatemale[4])
    testfemale.push({ value: EightrandomModule.parentday(curluckyearfemale[0], this.state.EightDatefemale[4]), hide: '' })
    testfemale.push({ value: EightrandomModule.parentday(gzYear[0], this.state.EightDatefemale[4]), hide: '' })
    for (var i = 0; i < 4; i++) {
      testfemale.push({ value: this.state.buildeightfemale[i * 2], hide: '' })
    }

    testfemale.push({ value: "天干", hide: '' })
    testfemale.push({ value: curluckyearfemale[0], hide: '' })
    testfemale.push({ value: gzYear[0], hide: '' })
    for (var i = 0; i < 4; i++) {
      testfemale.push({ value: this.state.EightDatefemale[i * 2], hide: '' })
    }

    testfemale.push({ value: "地支", hide: '' })
    testfemale.push({ value: curluckyearfemale[1], hide: "" })
    testfemale.push({ value: gzYear[1], hide: "" })
    for (var i = 0; i < 4; i++) {
      testfemale.push({ value: this.state.EightDatefemale[i * 2 + 1], hide: "" })
    }

    testfemale.push({ value: "十神", hide: '' })
    testfemale.push({ value: EightrandomModule.parentearth(curluckyearfemale[1], this.state.EightDatefemale[4]), hide: "" })
    testfemale.push({ value: EightrandomModule.parentearth(gzYear[1], this.state.EightDatefemale[4]), hide: "" })

    for (var i = 0; i < 4; i++) {
      testfemale.push({ value: this.state.buildeightfemale[i * 2 + 1], hide: "" })
    }
  /*
    var test1male = new Array()

    test1male.push({ value: ["", "藏干"], hide: '' })
    var hidelist = EightrandomModule.gethide(curluckyearmale[1])
    hidelist = hidelist.split("")
    var hindinfo = new Array()
    hidelist.forEach(element => {

      hindinfo.push(element + EightrandomModule.parentday(element, this.state.EightDatemale[4]))
    });
    test1male.push({ value: hindinfo, hide: "" })

    hidelist = EightrandomModule.gethide(gzYear[1])
    hidelist = hidelist.split("")
    hindinfo = new Array()
    hidelist.forEach(element => {
      hindinfo.push(element + EightrandomModule.parentday(element, this.state.EightDatemale[4]))
    });
    test1male.push({ value: hindinfo, hide: "" })
    for (var i = 0; i < 4; i++) {
      hidelist = this.state.buildeightExtmale[i * 2]
      hidelist = hidelist.split("")
      hindinfo = new Array()
      hidelist.forEach(element => {
        hindinfo.push(element + EightrandomModule.parentday(element, this.state.EightDatemale[4]))
      });
      test1male.push({ value: hindinfo, hide: "" })
    }

    var test1female = new Array()

    test1female.push({ value: ["", "藏干"], hide: '' })
    var hidelist = EightrandomModule.gethide(curluckyearfemale[1])
    hidelist = hidelist.split("")
    var hindinfo = new Array()
    hidelist.forEach(element => {

      hindinfo.push(element + EightrandomModule.parentday(element, this.state.EightDatefemale[4]))
    });
    test1female.push({ value: hindinfo, hide: "" })

    hidelist = EightrandomModule.gethide(gzYear[1])
    hidelist = hidelist.split("")
    hindinfo = new Array()
    hidelist.forEach(element => {
      hindinfo.push(element + EightrandomModule.parentday(element, this.state.EightDatefemale[4]))
    });
    test1female.push({ value: hindinfo, hide: "" })
    for (var i = 0; i < 4; i++) {
      hidelist = this.state.buildeightExtfemale[i * 2]
      hidelist = hidelist.split("")
      hindinfo = new Array()
      hidelist.forEach(element => {
        hindinfo.push(element + EightrandomModule.parentday(element, this.state.EightDatefemale[4]))
      });
      test1female.push({ value: hindinfo, hide: "" })
    }
    */
    /*
        testmale.push({ value: "副星", hide: '' })
        testmale.push({ value: EightrandomModule.gethide(curluckyearmale[1]) + EightrandomModule.parentearth(curluckyearmale[1], this.state.EightDatemale[4]), hide: "" })
        testmale.push({ value: EightrandomModule.gethide(gzYear[1]) + EightrandomModule.parentearth(gzYear[1], this.state.EightDatemale[4]), hide: "" })
    
        for (var i = 0; i < 4; i++) {
          testmale.push({ value: this.state.buildeightExt[i * 2] + this.state.buildeight[i * 2 + 1], hide: this.state.buildeightExt[i * 2 + 1] })
        }
    */

    var test2male = new Array()

    test2male.push({ value: "长生", hide: '' })
    test2male.push({ value: EightrandomModule.gettwelfthposition(this.state.EightDatemale[4] + curluckyearmale[1]), hide: '' })
    test2male.push({ value: EightrandomModule.gettwelfthposition(this.state.EightDatemale[4] + gzYear[1]), hide: '' })
    for (var i = 0; i < 4; i++) {
      var x = EightrandomModule.gettwelfthposition(this.state.EightDatemale[4] + this.state.EightDatemale[i * 2 + 1])
      test2male.push({ value: x, hide: "" })
    }

    test2male.push({ value: "纳音", hide: '' })
    test2male.push({ value: EightrandomModule.gettwelfth(curluckyearmale[0] + curluckyearmale[1]), hide: '' })
    test2male.push({ value: EightrandomModule.gettwelfth(gzYear[0] + gzYear[1]), hide: '' })
    for (var i = 0; i < 4; i++) {
      var x = EightrandomModule.gettwelfth(this.state.EightDatemale[i * 2] + this.state.EightDatemale[i * 2 + 1])
      test2male.push({ value: x, hide: "" })
    }

    var test2female = new Array()

    test2female.push({ value: "长生", hide: '' })
    test2female.push({ value: EightrandomModule.gettwelfthposition(this.state.EightDatefemale[4] + curluckyearfemale[1]), hide: '' })
    test2female.push({ value: EightrandomModule.gettwelfthposition(this.state.EightDatefemale[4] + gzYear[1]), hide: '' })
    for (var i = 0; i < 4; i++) {
      var x = EightrandomModule.gettwelfthposition(this.state.EightDatefemale[4] + this.state.EightDatefemale[i * 2 + 1])
      test2female.push({ value: x, hide: "" })
    }

    test2female.push({ value: "纳音", hide: '' })
    test2female.push({ value: EightrandomModule.gettwelfth(curluckyearfemale[0] + curluckyearfemale[1]), hide: '' })
    test2female.push({ value: EightrandomModule.gettwelfth(gzYear[0] + gzYear[1]), hide: '' })
    for (var i = 0; i < 4; i++) {
      var x = EightrandomModule.gettwelfth(this.state.EightDatefemale[i * 2] + this.state.EightDatefemale[i * 2 + 1])
      test2female.push({ value: x, hide: "" })
    }

    var yearsnumbermale = new Array()
    for (var i = 0; i < 8; i++) {
      yearsnumbermale.push(i == 0 ? this.state.beginluckymale : yearsnumbermale[i - 1] + 10)
    }
    var yearsmale = new Array()
    yearsmale = luckyearrelationmale.concat(yearsnumbermale, this.state.luckyyearmale, luckyyearpositionmale)
    yearsnumbermale = new Array()
    //console.log("years", years, luckyearrelation, this.state.luckyyear, luckyyearposition)
    for (var i = 0; i < yearsmale.length; i++) {
      //var x = EightrandomModule.gettwelfth(this.state.EightDate[i * 2] + this.state.EightDate[i * 2 + 1])
      yearsnumbermale.push({ value: yearsmale[i] })
    }


    var yearsnumberfemale = new Array()
    for (var i = 0; i < 8; i++) {
      yearsnumberfemale.push(i == 0 ? this.state.beginluckyfemale : yearsnumberfemale[i - 1] + 10)
    }
    var yearsfemale = new Array()
    yearsfemale = luckyearrelationfemale.concat(yearsnumberfemale, this.state.luckyyearfemale, luckyyearpositionfemale)
    yearsnumberfemale = new Array()
    //console.log("years", years, luckyearrelation, this.state.luckyyear, luckyyearposition)
    for (var i = 0; i < yearsfemale.length; i++) {
      //var x = EightrandomModule.gettwelfth(this.state.EightDate[i * 2] + this.state.EightDate[i * 2 + 1])
      yearsnumberfemale.push({ value: yearsfemale[i] })
    }

    /*
    var fivemale = new Array();
    fivemale.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: 'green' }}>木</Text>)
    fivemale.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: 'red' }}>火</Text>)
    fivemale.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#8B4513' }}>土</Text>)
    fivemale.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#DAA520' }}>金</Text>)
    fivemale.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#1E90FF' }}>水</Text>)
    */
    /*
    fivemale.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: 'green' }}>甲:{this.state.daykeymale['甲']}</Text>)
    fivemale.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: 'red' }}>丙:{this.state.daykeymale['丙']}</Text>)
    fivemale.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#8B4513' }}>戊:{this.state.daykeymale['戊']}</Text>)
    fivemale.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#DAA520' }}>庚:{this.state.daykeymale['庚']}</Text>)
    fivemale.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#1E90FF' }}>壬:{this.state.daykeymale['壬']}</Text>)
    fivemale.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: 'green' }}>乙:{this.state.daykeymale['乙']}</Text>)
    fivemale.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: 'red' }}>丁:{this.state.daykeymale['丁']}</Text>)
    fivemale.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#8B4513' }}>己:{this.state.daykeymale['己']}</Text>)
    fivemale.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#DAA520' }}>辛:{this.state.daykeymale['辛']}</Text>)
    fivemale.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#1E90FF' }}>癸:{this.state.daykeymale['癸']}</Text>)
    */
   /*
    fivemale.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: 'green' }}>{this.state.precentmale[5]}%</Text>)
    fivemale.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: 'red' }}>{this.state.precentmale[6]}%</Text>)
    fivemale.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#8B4513' }}>{this.state.precentmale[7]}%</Text>)
    fivemale.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#DAA520' }}>{this.state.precentmale[8]}%</Text>)
    fivemale.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#1E90FF' }}>{this.state.precentmale[9]}%</Text>)
    var fivepowermale = EightrandomModule.geikeypower(this.state.EightDatemale[3]);
    var fivepowerfemale = EightrandomModule.geikeypower(this.state.EightDatefemale[3]);
    fivemale.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: 'green' }}>{fivepowermale[0]}</Text>)
    fivemale.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: 'red' }}>{fivepowermale[1]}</Text>)
    fivemale.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#8B4513' }}>{fivepowermale[2]}</Text>)
    fivemale.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#DAA520' }}>{fivepowermale[3]}</Text>)
    fivemale.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#1E90FF' }}>{fivepowermale[4]}</Text>)
    //console.log("five",five)

    var fivefemale = new Array();
    fivefemale.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: 'green' }}>木</Text>)
    fivefemale.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: 'red' }}>火</Text>)
    fivefemale.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#8B4513' }}>土</Text>)
    fivefemale.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#DAA520' }}>金</Text>)
    fivefemale.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#1E90FF' }}>水</Text>)
    /*
    fivefemale.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: 'green' }}>甲:{this.state.daykeymale['甲']}</Text>)
    fivefemale.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: 'red' }}>丙:{this.state.daykeymale['丙']}</Text>)
    fivefemale.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#8B4513' }}>戊:{this.state.daykeymale['戊']}</Text>)
    fivefemale.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#DAA520' }}>庚:{this.state.daykeymale['庚']}</Text>)
    fivefemale.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#1E90FF' }}>壬:{this.state.daykeymale['壬']}</Text>)
    fivefemale.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: 'green' }}>乙:{this.state.daykeymale['乙']}</Text>)
    fivefemale.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: 'red' }}>丁:{this.state.daykeymale['丁']}</Text>)
    fivefemale.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#8B4513' }}>己:{this.state.daykeymale['己']}</Text>)
    fivefemale.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#DAA520' }}>辛:{this.state.daykeymale['辛']}</Text>)
    fivefemale.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#1E90FF' }}>癸:{this.state.daykeymale['癸']}</Text>)
    */
   /*
    fivefemale.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: 'green' }}>{this.state.precentfemale[5]}%</Text>)
    fivefemale.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: 'red' }}>{this.state.precentfemale[6]}%</Text>)
    fivefemale.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#8B4513' }}>{this.state.precentfemale[7]}%</Text>)
    fivefemale.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#DAA520' }}>{this.state.precentfemale[8]}%</Text>)
    fivefemale.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#1E90FF' }}>{this.state.precentfemale[9]}%</Text>)
    var fivepowermale = EightrandomModule.geikeypower(this.state.EightDatemale[3]);
    var fivepowerfemale = EightrandomModule.geikeypower(this.state.EightDatefemale[3]);
    fivefemale.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: 'green' }}>{fivepowerfemale[0]}</Text>)
    fivefemale.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: 'red' }}>{fivepowerfemale[1]}</Text>)
    fivefemale.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#8B4513' }}>{fivepowerfemale[2]}</Text>)
    fivefemale.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#DAA520' }}>{fivepowerfemale[3]}</Text>)
    fivefemale.push(<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14, color: '#1E90FF' }}>{fivepowerfemale[4]}</Text>)
    //console.log("five",five)
    */


    var daymale = EightrandomModule.getselfinfo(this.state.EightDatemale[4] + this.state.EightDatemale[5])
    var dayfemale = EightrandomModule.getselfinfo(this.state.EightDatefemale[4] + this.state.EightDatefemale[5])

    var shensha = new Array()
    /*
    shensha[0] = '年柱：'
    shensha[1] = '月柱：'
    shensha[2] = '日柱：'
    shensha[3] = '时柱：'
    for (i = 0; i < 4; i++) {
      this.state.EightDatemale[i]
      shensha[i] = shensha[i] + EightrandomModule.shensha_dayg2earthz(this.state.EightDatemale[4], this.state.EightDatemale[i * 2 + 1]);
      shensha[i] = shensha[i] + EightrandomModule.shensha_moon(this.state.EightDatemale[3], this.state.EightDatemale[i * 2]);
      shensha[i] = shensha[i] + EightrandomModule.shensha_yearg2earthz(this.state.EightDatemale[0], this.state.EightDatemale[i * 2 +1]);
      if (i != 1) {
        shensha[i] = shensha[i] + EightrandomModule.shensha_moon(this.state.EightDatemale[3], this.state.EightDatemale[i * 2 + 1]);//月支不见月支
      }
      if (i != 2) {
        shensha[i] = shensha[i] + EightrandomModule.shensha_dayz2earthz(this.state.EightDatemale[5], this.state.EightDatemale[i * 2 + 1]);//日支不见自己
      }
      if (i != 0) {
        shensha[i] = shensha[i] + EightrandomModule.shensha_tianluo(this.state.EightDatemale[0] + this.state.EightDatemale[1], this.state.EightDatemale[i * 2 + 1]);//年支不见年支
        shensha[i] = shensha[i] + EightrandomModule.shensha_diwang(this.state.EightDatemale[0] + this.state.EightDatemale[1], this.state.EightDatemale[i * 2 + 1]);//年支不见年支
        shensha[i] = shensha[i] + EightrandomModule.shensha_yearz2earthz(this.state.EightDatemale[1], this.state.EightDatemale[i * 2 + 1]);//年支不见年支
      }

    }
    */
    //身旺判断
    var totalcountmale = 0
    var totalcountfemale = 0
    const daykey = "甲乙丙丁戊己庚辛壬癸"
    const dayfive = "木木火火土土金金水水"
    const earthkey = "子丑寅卯辰巳午未申酉戌亥"
    const earthfive = "水土木木土火火土金金土水"
    const kindmale = "木土，火金，土水，金木，水火，"
    const kindfemale = "土木，金火，水土，木金，火水，"
    const kindassistmale = "木火,火土,土金,金水,水木,"
    const kindassistfemale = "火木,土火,金土,水金,木水,"
    const kindassist = kindassistmale+kindassistfemale
    const kindsame = "木木，火火，土土，金金，水水"
    const kind = kindmale + kindfemale
    //四柱不应该被冲克刑
    const congtest = "辰戌，戌辰，子午，午子，寅申，申寅，卯酉，酉卯，丑未，未丑，巳亥，亥巳，子卯，卯子，午午，亥亥，酉酉，辰辰，酉戌，戌酉，卯辰，辰卯，子未，未子，丑午，午丑，申亥，亥申，寅巳，巳寅，丑午，午丑"
    const sixhetest = "子丑，丑子，寅亥，亥寅，卯戌，戌卯，辰酉，酉辰，巳申，申巳，午未，未午，"
    const sanhetest = "申子，子申，亥卯，卯亥，寅午，午寅，巳酉，酉巳，子辰，辰子，卯未，未卯，午戌，戌午，酉丑，丑酉，亥未，未亥，申辰，辰申，巳丑，丑巳，寅戌，戌寅"
    const hetest = sixhetest + sanhetest
    var tianganhuahe = []
    tianganhuahe["甲己"] = tianganhuahe["己甲"] = "土"
    tianganhuahe["乙庚"] = tianganhuahe["庚乙"] = "金"
    tianganhuahe["丙辛"] = tianganhuahe["辛丙"] = "水"
    tianganhuahe["丁壬"] = tianganhuahe["壬丁"] = "木"
    tianganhuahe["戊癸"] = tianganhuahe["癸戊"] = "火"

    var ret_powerselfmale = EightrandomModule.getpowerself(this.state.EightDatemale, this.state.buildeightmale,curluckyearmale[1],this.state.precentmale)
    var testpowerselfmale = ret_powerselfmale.powerself

    //身旺判断
    var ret_powerselffemale = EightrandomModule.getpowerself(this.state.EightDatefemale, this.state.buildeightfemale,curluckyearfemale[1],this.state.precentfemale)
    var testpowerselffemale = ret_powerselffemale.powerself

    var yongshenmale = EightrandomModule.getyongshen(this.state.EightDatemale, this.state.buildeightmale, curluckyearmale[1],this.state.precentmale)
    var yongshenfemale = EightrandomModule.getyongshen(this.state.EightDatefemale, this.state.buildeightfemale, curluckyearfemale[1],this.state.precentfemale)

    var marryinfomale = EightrandomModule.getmarryinfo(this.state.EightDatemale, "乾造", rmale, this.state.buildeightmale)
    var marryinfofemale = EightrandomModule.getmarryinfo(this.state.EightDatefemale, "坤造", rfemale, this.state.buildeightfemale)
    var locationselfmale = EightrandomModule.getlocationself(curyearmale, 0)
    var locationselffemale = EightrandomModule.getlocationself(curyearfemale, 1)
    var housemale = EightrandomModule.gethouselocation(locationselfmale)
    var housefemale = EightrandomModule.gethouselocation(locationselffemale)
    var homemale = new Array()
    homemale = homemale.concat(daymale.self)
    homemale = homemale.concat(daymale.tip)
    homemale = homemale.concat(housemale)
    var homefemale = new Array()
    homefemale = homefemale.concat(dayfemale.self)
    homefemale = homefemale.concat(dayfemale.tip)
    homefemale = homefemale.concat(housefemale)
    console.log("locationself", locationselfmale)
    var base = new Array()
    base.push(["命  造:", "乾造", "坤造"])
    base.push(["公  历:", this.state.birthmale, this.state.birthfemale])
    base.push(["四  柱:", this.state.gzbirthmale, this.state.gzbirthfemale])
    base.push(["旬  空:", this.state.gzxkmale, this.state.gzxkfemale])
    base.push(["起  运:", this.state.beginluckymale, this.state.beginluckyfemale])
    base.push(["命  卦:", locationselfmale, locationselffemale])
    base.push(["身  旺:", testpowerselfmale, testpowerselffemale])
    base.push(["用  神:", yongshenmale.yongshen, yongshenfemale.yongshen])
    base.push(["喜  神:", yongshenmale.xishen, yongshenfemale.xishen])
    if(""!=yongshenmale.xishen2 || ""!=yongshenfemale.xishen2)
    {
      base.push(["后  喜:", yongshenmale.xishen2, yongshenfemale.xishen2])
    }
    base.push(["忌  神:", yongshenmale.jishen, yongshenfemale.jishen])
    if(""!= yongshenmale.jishen2 || ""!=yongshenfemale.jishen2)
    {
      base.push(["后  忌:", yongshenmale.jishen2, yongshenfemale.jishen2])
    }
    base.push(["仇  神:", yongshenmale.choushen, yongshenfemale.choushen])
    if(undefined!=yongshenmale.buyongshen || undefined!=yongshenfemale.buyongshen)
    {
      base.push(["病  药:", undefined!=yongshenmale.buyongshen?yongshenmale.buyongshen:"", undefined!=yongshenfemale.buyongshen?yongshenfemale.buyongshen:""])
    
    }
    base.push([ "扶  抑:", yongshenmale.adjustyongshen,yongshenfemale.adjustyongshen ])
    var maleyongshencheck = yongshenmale.yongshen + yongshenmale.xishen
    var femaleyongshencheck = yongshenfemale.yongshen + yongshenfemale.xishen
    //喜用相同
    if ((-1 != maleyongshencheck.indexOf(yongshenfemale.yongshen) || -1 != maleyongshencheck.indexOf(yongshenfemale.xishen) || -1 != maleyongshencheck.indexOf(yongshenfemale.xishen2))) {
      maleyongshencheck = IconConfig.IconMarryCheck
    }
    //喜用互补
    else if((-1 != maleyongshencheck.indexOf(yongshenfemale.jishen) || -1 != maleyongshencheck.indexOf(yongshenfemale.jishen2) || -1 != maleyongshencheck.indexOf(yongshenfemale.choushen))){
      maleyongshencheck = IconConfig.IconMarryCheckhalf
    }
    else{
      maleyongshencheck = IconConfig.IconMarryCheckfault
    }
    //喜用相同
    if ((-1 != femaleyongshencheck.indexOf(yongshenmale.yongshen) || -1 != femaleyongshencheck.indexOf(yongshenmale.xishen) || -1 != femaleyongshencheck.indexOf(yongshenmale.xishen2))) {
      femaleyongshencheck = IconConfig.IconMarryCheck
    }
    //喜用互补
    else if((-1 != femaleyongshencheck.indexOf(yongshenmale.jishen) || -1 != femaleyongshencheck.indexOf(yongshenmale.jishen2) || -1 != femaleyongshencheck.indexOf(yongshenmale.choushen))){
      femaleyongshencheck = IconConfig.IconMarryCheckhalf
    } else {
      femaleyongshencheck = IconConfig.IconMarryCheckfault
    }
    if(IconConfig.IconMarryCheck==maleyongshencheck){totalcountmale  = totalcountmale+20}
    else if(IconConfig.IconMarryCheckhalf==maleyongshencheck){totalcountmale  = totalcountmale+10}
    if(IconConfig.IconMarryCheck==femaleyongshencheck){totalcountfemale  = totalcountfemale+20}
    else if(IconConfig.IconMarryCheckhalf==femaleyongshencheck){totalcountfemale  = totalcountfemale+10}
    base.push(["神  合:", maleyongshencheck, femaleyongshencheck])
    


    base.push(["日  元:", this.state.EightDatemale[4], this.state.EightDatefemale[4]])
    /*
    它的主和顺序是：同性克，比劫同 （ 异性克是很难克制的，比如甲去克己，直接合走，天干五合，生的关系就不太好，男命祖父，女命母亲，妈宝之类的）
    如果日元直接五合，也就是好婚配，所以同配就是一般了，比如丙配丙丁，相生就庚差一些，最下配
    甲 己戊庚辛 
    乙 庚己辛戊 
    丙 辛庚壬癸 
    丁 壬辛癸庚 
    戊 癸壬甲乙 
    己 甲癸乙壬 
    庚 乙甲丙丁 
    辛 丙乙丁甲 
    壬 丁丙戊己 
    癸 戊丁己丙
    */
    //日元不能相互克，除非男克女，旺衰对冲则用神相同
    //日元天干化合为喜用最佳
    var male = IconConfig.IconMarryCheckfault
    var female = IconConfig.IconMarryCheckfault

    if (undefined != tianganhuahe[this.state.EightDatemale[4] + this.state.EightDatefemale[4]]) {
      //天干化合，但是土为忌仇神，只能半合
      var x = tianganhuahe[this.state.EightDatemale[4] + this.state.EightDatefemale[4]]
      if (-1 != (yongshenmale.xishen + yongshenmale.yongshen).indexOf(x)) {
        male = IconConfig.IconMarryCheck
      }
      else{
        male = IconConfig.IconMarryCheckhalf
      }
      if (-1 != (yongshenfemale.xishen + yongshenfemale.yongshen).indexOf(x)) {
        female = IconConfig.IconMarryCheck
      }else
      {
        female = IconConfig.IconMarryCheckhalf
      }
    }
    else if (-1 != kind.indexOf(dayfive[daykey.indexOf(this.state.EightDatemale[4])] + dayfive[daykey.indexOf(this.state.EightDatefemale[4])])) {
      //天干相克半合，如果衰旺配合合理，就全合
      female = IconConfig.IconMarryCheck
      male = IconConfig.IconMarryCheck
      if (-1 != testpowerselfmale.indexOf("旺") || -1 != testpowerselfmale.indexOf("强")) {
        if (-1 != testpowerselffemale.indexOf("衰") || -1 != testpowerselffemale.indexOf("弱")) {
          if(-1 != kindmale.indexOf(dayfive[daykey.indexOf(this.state.EightDatemale[4])] + dayfive[daykey.indexOf(this.state.EightDatefemale[4])]))
          {
            //男强女弱男克女，不加分
            //totalcountmale = totalcountmale + 5
            //totalcountfemale = totalcountfemale + 5
          }else{
            //男强女弱女克男，男加分
            totalcountmale = totalcountmale + 5
            totalcountfemale = totalcountfemale - 5
          }

        }else{
          if(-1 != kindmale.indexOf(dayfive[daykey.indexOf(this.state.EightDatemale[4])] + dayfive[daykey.indexOf(this.state.EightDatefemale[4])]))
          {
            //男强女强男克女，男女加分
            totalcountmale = totalcountmale + 5
            totalcountfemale = totalcountfemale + 5
          }else{
            //男强女强女克男，女加分
            //totalcountmale = totalcountmale + 5
            totalcountfemale = totalcountfemale + 5
          }
        }
      } else if (-1 != testpowerselfmale.indexOf("弱") || -1 != testpowerselfmale.indexOf("衰")) {
        if (-1 != testpowerselffemale.indexOf("旺") || -1 != testpowerselffemale.indexOf("强")) {
          if(-1 != kindmale.indexOf(dayfive[daykey.indexOf(this.state.EightDatemale[4])] + dayfive[daykey.indexOf(this.state.EightDatefemale[4])]))
          {
            //男弱女强男克女，女加分
            //totalcountmale = totalcountmale + 5
            totalcountfemale = totalcountfemale + 5
          }else{
            //男弱女强女克男，女加分男加分
            totalcountmale = totalcountmale - 5
            totalcountfemale = totalcountfemale + 5
          }
        }else{
          if(-1 != kindmale.indexOf(dayfive[daykey.indexOf(this.state.EightDatemale[4])] + dayfive[daykey.indexOf(this.state.EightDatefemale[4])]))
          {
            //男弱女弱男克女，不加分
            //totalcountmale = totalcountmale + 5
            //totalcountfemale = totalcountfemale + 5
          }else{
            //男弱女强女克男，女男减分
            totalcountmale = totalcountmale - 5
            totalcountfemale = totalcountfemale - 5
          }
        }
      }
    }
    //日元印生，同强同弱用神不冲突
    else if (-1 != kindassist.indexOf(dayfive[daykey.indexOf(this.state.EightDatemale[4])] + dayfive[daykey.indexOf(this.state.EightDatefemale[4])])) {
      if (-1 != testpowerselfmale.indexOf("旺") || -1 != testpowerselfmale.indexOf("强")) {
        if (-1 != testpowerselffemale.indexOf("旺") || -1 != testpowerselffemale.indexOf("强")) {
          if(-1 != kindassistmale.indexOf(dayfive[daykey.indexOf(this.state.EightDatemale[4])] + dayfive[daykey.indexOf(this.state.EightDatefemale[4])]))
          {
            //男方旺女方
            male = IconConfig.IconMarryCheckhalf   
            female = IconConfig.IconMarryCheckfault
          }
          else{
            //女方旺男方
            male = IconConfig.IconMarryCheckfault
            female = IconConfig.IconMarryCheckhalf  
          }
        }
        else{
          //女方弱喜旺
          if(-1 != kindassistmale.indexOf(dayfive[daykey.indexOf(this.state.EightDatemale[4])] + dayfive[daykey.indexOf(this.state.EightDatefemale[4])]))
          {
            //男方旺女方
            male = IconConfig.IconMarryCheckhalf   
            female = IconConfig.IconMarryCheck
          }
          else{
            //女方旺男方，男方强，不合
            male = IconConfig.IconMarryCheckfault
            female = IconConfig.IconMarryCheckfault  
          }
        }
      } else if (-1 != testpowerselfmale.indexOf("弱") || -1 != testpowerselfmale.indexOf("衰")) {
        if (-1 != testpowerselffemale.indexOf("弱") || -1 != testpowerselffemale.indexOf("衰")) {
          if(-1 != kindassistmale.indexOf(dayfive[daykey.indexOf(this.state.EightDatemale[4])] + dayfive[daykey.indexOf(this.state.EightDatefemale[4])]))
          {
            //男方弱旺女方
            male = IconConfig.IconMarryCheckfault
            female = IconConfig.IconMarryCheck  
          }
          else{
            //女方弱旺男方
            male = IconConfig.IconMarryCheck   
            female = IconConfig.IconMarryCheckfault
          }
        }else{
          //男弱女强
          if(-1 != kindassistmale.indexOf(dayfive[daykey.indexOf(this.state.EightDatemale[4])] + dayfive[daykey.indexOf(this.state.EightDatefemale[4])]))
          {
            //男方弱旺女方，不合
            male = IconConfig.IconMarryCheckfault
            female = IconConfig.IconMarryCheckfault  
          }
          else{
            //女方强旺男方
            male = IconConfig.IconMarryCheck   
            female = IconConfig.IconMarryCheckhalf
          }
        }
      }
    }else if(dayfive[daykey.indexOf(this.state.EightDatemale[4])] == dayfive[daykey.indexOf(this.state.EightDatefemale[4])])
    {
      //同元总要争的
      female = IconConfig.IconMarryCheckhalf
      male = IconConfig.IconMarryCheckhalf
      if (-1 != testpowerselfmale.indexOf("旺") || -1 != testpowerselfmale.indexOf("强")) {
        if (-1 != testpowerselffemale.indexOf("衰") || -1 != testpowerselffemale.indexOf("弱")) {
          male = IconConfig.IconMarryCheckhalf        
          female = IconConfig.IconMarryCheckhalf
          //男方强，喜官杀来克，随班同元比合，所以要扣分
          totalcountmale =  totalcountmale - 5
        }
      } else if (-1 != testpowerselfmale.indexOf("弱") || -1 != testpowerselfmale.indexOf("衰")) {
        if (-1 != testpowerselffemale.indexOf("旺") || -1 != testpowerselffemale.indexOf("强")) {
          male = IconConfig.IconMarryCheckhalf        
          female = IconConfig.IconMarryCheckhalf
          //女方强，喜官杀来克，随班同元比合，所以要扣分
          totalcountfemale =  totalcountfemale - 5

        }
      }
    }
    if(IconConfig.IconMarryCheck==male){totalcountmale  = totalcountmale+20}
    else if(IconConfig.IconMarryCheckhalf==male){totalcountmale  = totalcountmale+10}
    if(IconConfig.IconMarryCheck==female){totalcountfemale  = totalcountfemale+20}
    else if(IconConfig.IconMarryCheckhalf==female){totalcountfemale  = totalcountfemale+10}
    base.push(["元  合:", male, female])
   

    base.push(["日  支:", this.state.EightDatemale[5], this.state.EightDatefemale[5]])
    female = IconConfig.IconMarryCheckfault
    male = IconConfig.IconMarryCheckfault
    //日支不能相互克制
    if (-1 == kind.indexOf(earthfive[earthkey.indexOf(this.state.EightDatemale[5])] + earthfive[earthkey.indexOf(this.state.EightDatefemale[5])])) {
      //日支不能刑冲
      if (-1 == congtest.indexOf(this.state.EightDatemale[5] + this.state.EightDatefemale[5])) {
        //日支最好是生，和日元完全相反，同一班，克最差，但是生也不能刑，比如子卯
        female = IconConfig.IconMarryCheck
        male = IconConfig.IconMarryCheck
        if(-1!=kindassist.indexOf(earthfive[earthkey.indexOf(this.state.EightDatemale[5])] + earthfive[earthkey.indexOf(this.state.EightDatefemale[5])]))
        {
          //相生加分
          totalcountmale  = totalcountmale+5
          totalcountfemale  = totalcountfemale+5
        }
      }
    }
    if(IconConfig.IconMarryCheck==male){totalcountmale  = totalcountmale+10}
    else if(IconConfig.IconMarryCheckhalf==male){totalcountmale  = totalcountmale+5}
    if(IconConfig.IconMarryCheck==female){totalcountfemale  = totalcountfemale+10}
    else if(IconConfig.IconMarryCheckhalf==female){totalcountfemale  = totalcountfemale+5}
    base.push(["支  合:",male, female])

    var ret_male = ""
    var ret_female = ""

    for (var i = 0; i < 5; i++) {
      //if( this.state.precentmale[i+5]>20){ret_male=  ret_male + kind[i] + (Math.floor(this.state.precentmale[i+5]-20)).toString() }
      //if( this.state.precentfemale[i+5]>20){ret_female= ret_female + kind[i]+ (Math.floor(this.state.precentfemale[i+5]-20)).toString()}
    }
    //base.push(["势  气:",ret_male,ret_female])

    var maleindex = Math.floor(daykey.indexOf(this.state.EightDatemale[4]) / 2)
    var femaleindex = Math.floor(daykey.indexOf(this.state.EightDatefemale[4]) / 2)
    var assistmaleindex = (maleindex - 1 + 4) % 4
    var assistfemaleindex = (femaleindex - 1 + 4) % 4
    var helpmale = Math.floor(50 - this.state.precentmale[maleindex + 5] - this.state.precentmale[assistmaleindex + 5])
    var helpfemale = Math.floor(50 - this.state.precentfemale[femaleindex + 5] - this.state.precentfemale[assistfemaleindex + 5])
    var daykeymale = kind
    var checkhelpmale = (helpmale >= 0 ? kind[maleindex] + kind[assistmaleindex] : daykeymale.replace(kind[assistmaleindex], "").replace(kind[maleindex], "")) + Math.abs(helpmale).toString();
    var checkhelpfemale = (helpfemale >= 0 ? kind[femaleindex] + kind[assistfemaleindex] : daykeymale.replace(kind[assistfemaleindex], "").replace(kind[femaleindex], "")) + Math.abs(helpfemale).toString();
    //base.push(["喜  用:",checkhelpmale,checkhelpfemale])

    ret_male = EightrandomModule.gettwelfth(this.state.EightDatemale[0] + this.state.EightDatemale[1])
    ret_female = EightrandomModule.gettwelfth(this.state.EightDatefemale[0] + this.state.EightDatefemale[1])
    base.push([{value:"纳  音:"}, {value:ret_male}, {value:ret_female}])

    //纳音以相生为主
    female = IconConfig.IconMarryCheckfault
    male = IconConfig.IconMarryCheckfault
    if (-1 != kind.indexOf(ret_male.charAt(2) + ret_female.charAt(2)) ) {
      female = IconConfig.IconMarryCheckfault
      male = IconConfig.IconMarryCheckfault
    }
    else if(-1 != kindassist.indexOf(ret_male.charAt(2) + ret_female.charAt(2)))
    {
      female = IconConfig.IconMarryCheck
      male = IconConfig.IconMarryCheck
    }else{
      female = IconConfig.IconMarryCheckhalf
      male = IconConfig.IconMarryCheckhalf
    }
    if(IconConfig.IconMarryCheck==male){totalcountmale  = totalcountmale+10}
    else if(IconConfig.IconMarryCheckhalf==male){totalcountmale  = totalcountmale+5}
    if(IconConfig.IconMarryCheck==female){totalcountfemale  = totalcountfemale+10}
    else if(IconConfig.IconMarryCheckhalf==female){totalcountfemale  = totalcountfemale+5}
    base.push(["音  合:",male, female])




    base.push(["大  运:", curluckyearmale[0] + curluckyearmale[1], curluckyearfemale[0] + curluckyearfemale[1]])
    base.push(["星  宿:", this.state.xingsumale.xingsu+this.state.xingsumale.r, this.state.xingsufemale.xingsu+this.state.xingsufemale.r])
    var xingsuretmale = EightrandomModule.getrongqin(this.state.xingsumale.xingsu, this.state.xingsufemale.xingsu)
    var xingsuretfemale = EightrandomModule.getrongqin(this.state.xingsufemale.xingsu, this.state.xingsumale.xingsu)
    base.push(["荣  亲:", xingsuretmale.r, xingsuretfemale.r])
    base.push(["关  系:", xingsuretmale.d<=4?"近":(xingsuretmale.d<=8?"中":"远"),  xingsuretfemale.d<=4?"近":(xingsuretfemale.d<=8?"中":"远")])

    ret_male = ""
    ret_female = ""
    for (var i = 0; i < 5; i++) {
      if (fivepowermale[i] == "旺") { ret_male = "木火土金水"[i] }
      if (fivepowerfemale[i] == "旺") { ret_female = "木火土金水"[i] }
    }
    base.push(["月  令:", ret_male, ret_female])
    base.push(["年  柱:", this.state.EightDatemale[0] + this.state.EightDatemale[1], this.state.EightDatefemale[0] + this.state.EightDatefemale[1]])
    var male = IconConfig.IconMarryCheckfault
    var female = IconConfig.IconMarryCheckfault
    if (undefined != tianganhuahe[this.state.EightDatemale[0] + this.state.EightDatefemale[0]]) {
        var x = tianganhuahe[this.state.EightDatemale[0] + this.state.EightDatefemale[0]]
        if (-1 != (yongshenmale.xishen + yongshenmale.yongshen).indexOf(x)) {
          male = IconConfig.IconMarryCheck
        }else{
          male = IconConfig.IconMarryCheckhalf
        }
        if (-1 != (yongshenfemale.xishen + yongshenfemale.yongshen).indexOf(x)) {
          female = IconConfig.IconMarryCheck
        }else{
          female = IconConfig.IconMarryCheckhalf
        }
      }
    else if (-1 == kind.indexOf(dayfive[daykey.indexOf(this.state.EightDatemale[0])] + dayfive[daykey.indexOf(this.state.EightDatefemale[0])])) {
      male = IconConfig.IconMarryCheck
      female = IconConfig.IconMarryCheck
    }
    if(IconConfig.IconMarryCheck==male){totalcountmale  = totalcountmale+10}
    else if(IconConfig.IconMarryCheckhalf==male){totalcountmale  = totalcountmale+5}
    if(IconConfig.IconMarryCheck==female){totalcountfemale  = totalcountfemale+10}
    else if(IconConfig.IconMarryCheckhalf==female){totalcountfemale  = totalcountfemale+5}
    base.push(["年  合:", male, female])


    base.push(["月  柱:", this.state.EightDatemale[2] + this.state.EightDatemale[3], this.state.EightDatefemale[2] + this.state.EightDatefemale[3]])
    male = IconConfig.IconMarryCheckfault
    female = IconConfig.IconMarryCheckfault
    if (-1 == kind.indexOf(dayfive[daykey.indexOf(this.state.EightDatemale[2])] + dayfive[daykey.indexOf(this.state.EightDatefemale[2])]) || undefined != tianganhuahe[this.state.EightDatemale[2] + this.state.EightDatefemale[2]]) {
      if (-1 == kind.indexOf(earthfive[earthkey.indexOf(this.state.EightDatemale[3])] + earthfive[earthkey.indexOf(this.state.EightDatefemale[3])])) {
        male = IconConfig.IconMarryCheck
        female = IconConfig.IconMarryCheck
        if (-1 != congtest.indexOf(this.state.EightDatefemale[3] + this.state.EightDatemale[3])) {
          //如果有冲克，就看天干合以后的喜用
          male = IconConfig.IconMarryCheckfault
          female = IconConfig.IconMarryCheckfault
          if (undefined != tianganhuahe[this.state.EightDatemale[2] + this.state.EightDatefemale[2]]) {
            //因为有地支冲突，所以天干合还是要扣分的，如果天干无合不会进来，也不会扣分
            totalcountfemale =  totalcountfemale - 5
            totalcountmale =  totalcountmale - 5
            //这里对天干五合在评价，如果五合为忌仇，虽合但是无分数
            female = IconConfig.IconMarryCheckfault
            male = IconConfig.IconMarryCheck
            female = IconConfig.IconMarryCheck
            var x = tianganhuahe[this.state.EightDatemale[2] + this.state.EightDatefemale[2]]
            if (-1 != (yongshenmale.xishen + yongshenmale.yongshen).indexOf(x)) {
              male = IconConfig.IconMarryCheck
            } else {
              male = IconConfig.IconMarryCheckhalf
            }
            if (-1 != (yongshenfemale.xishen + yongshenfemale.yongshen).indexOf(x)) {
              female = IconConfig.IconMarryCheck
            } else {
              female = IconConfig.IconMarryCheckhalf
            }
          }
        } else if (undefined != tianganhuahe[this.state.EightDatemale[2] + this.state.EightDatefemale[2]]) {

          var x = tianganhuahe[this.state.EightDatemale[2] + this.state.EightDatefemale[2]]
          if (-1 != (yongshenmale.xishen + yongshenmale.yongshen).indexOf(x)) {
            male = IconConfig.IconMarryCheck
          } else {
            male = IconConfig.IconMarryCheckhalf
          }
          if (-1 != (yongshenfemale.xishen + yongshenfemale.yongshen).indexOf(x)) {
            female = IconConfig.IconMarryCheck
          } else {
            female = IconConfig.IconMarryCheckhalf
          }
        }
      }
    }
    if(IconConfig.IconMarryCheck==male){totalcountmale  = totalcountmale+20}
    else if(IconConfig.IconMarryCheckhalf==male){totalcountmale  = totalcountmale+10}
    if(IconConfig.IconMarryCheck==female){totalcountfemale  = totalcountfemale+20}
    else if(IconConfig.IconMarryCheckhalf==female){totalcountfemale  = totalcountfemale+10}
    base.push(["月  合:", male, female])



    base.push(["属  象:", this.state.EightDatemale[1], this.state.EightDatefemale[1]])
    var male = IconConfig.IconMarryCheckfault
    var female = IconConfig.IconMarryCheckfault
    
    if(-1 != hetest.indexOf(this.state.EightDatemale[1] + this.state.EightDatefemale[1]))
    {
      //生肖最好三合暗合
      male = IconConfig.IconMarryCheck
      female = IconConfig.IconMarryCheck
      //合而不冲
      if (-1 != congtest.indexOf(this.state.EightDatemale[1] + this.state.EightDatefemale[1])) {
        male = IconConfig.IconMarryCheckhalf
        female = IconConfig.IconMarryCheckhalf
      }
    }else if ((-1 == kind.indexOf(earthfive[(earthkey.indexOf(this.state.EightDatemale[1]))] + earthfive[(earthkey.indexOf(this.state.EightDatefemale[1]))]))){
      if (-1 == congtest.indexOf(this.state.EightDatemale[1] + this.state.EightDatefemale[1])) {
        //地支五行不克且不刑冲
        male = IconConfig.IconMarryCheck
        female = IconConfig.IconMarryCheck
      }else{
        male = IconConfig.IconMarryCheckhalf
        female = IconConfig.IconMarryCheckhalf
      }
    }

    if(IconConfig.IconMarryCheck==male){totalcountmale  = totalcountmale+10}
    else if(IconConfig.IconMarryCheckhalf==male){totalcountmale  = totalcountmale+5}
    if(IconConfig.IconMarryCheck==female){totalcountfemale  = totalcountfemale+10}
    else if(IconConfig.IconMarryCheckhalf==female){totalcountfemale  = totalcountfemale+5}
    base.push(["象  合:", male, female])
    base.push(["评  分:", totalcountmale>100?IconConfig.IconMarryDiamond:totalcountmale, totalcountfemale>100?IconConfig.IconMarryDiamond:totalcountfemale])
    base.push(["合婚四合（红心）以上为适婚，评分65-75以上为适婚"])
    base.push(["顺序重点为元 神 支 音 年 月 象"])
    base.push(["以元神支为两人关系重点各占20分"])
    base.push(["音年月象为双方主要的人际关系各项10分"])
    base.push(["合婚主要判断双方沟通成本和人际关系复杂程度"])

    return (
      <View  >
        <ScrollView >
          <View >
          <AtGrid className='basegrid'
              data={base}
              columnNum={3}
               hasBorder ={false}
              mode='rect'
            />
          </View>
        </ScrollView>
      </View>
    )
  }
};