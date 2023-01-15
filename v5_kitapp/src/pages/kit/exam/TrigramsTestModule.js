import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { StyleSheet, View, PixelRatio, Alert, Text, FlatList, ScrollView, CameraRoll } from '@tarojs/components'
import { AtToast, AtGrid, AtTabBar, AtCheckbox, AtRadio, AtButton, AtDivider, AtIcon } from 'taro-ui'
import './TrigramsTestModule.scss'

const  checkright=<AtIcon  value='check' size='24' color='green'></AtIcon>
const  checkfalse=<AtIcon  value='close' size='24' color='red'></AtIcon>
var Trigrams = Array();
Trigrams[0] = {
  "key": "0",
  "q": "所谓“变”与“错”，指《周易》两卦卦画以互相颠倒的方式排列，如《屯》与《蒙》",
  "a": "A 对",
  "b": "B 错",
  "c": "",
  "d": "",
  "ret_a": "1",
  "ret_b": "b",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
  "rank":"3",
}
Trigrams[1] = {
  "key": "1",
  "q": "在《易》各卦六爻之间，初、上两爻外，中四爻又可能包含着他卦之形体。",
  "a": "A 对",
  "b": "B 错",
  "c": "",
  "d": "",
  "ret_a": "1",
  "ret_b": "b",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
  "rank":"3",
}
Trigrams[2] = {
  "key": "2",
  "q": "《周易 乾卦》“上九”爻辞是（ ）",
  "a": "A 潜龙勿用",
  "b": "B 亢龙有悔",
  "c": "C 飞龙在天",
  "d": "D 见龙在田",
  "ret_a": "a",
  "ret_b": "1",
  "ret_c": "c",
  "ret_d": "d",
  "sel": "",
  "rank":"1",
}
Trigrams[3] = {
  "key": "3",
  "q": "后天八卦说的是阳气从东方运行的情况，是从四事推移和万物生长收藏得出的规律",
  "a": "A 对",
  "b": "B 错",
  "c": "",
  "d": "",
  "ret_a": "1",
  "ret_b": "b",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[4] = {
  "key": "4",
  "q": "阴阳概念的提出是（）提出的",
  "a": "A 老子",
  "b": "B 孔子",
  "c": "C 周文王",
  "d": "D 伏羲",
  "ret_a": "a",
  "ret_b": "1",
  "ret_c": "c",
  "ret_d": "d",
  "sel": "",
}
/*
Trigrams[5] = {
  "key": "5",
  "q": "你是否经常让",
  "a": "A 你的情感支配你的理智",
  "b": "B 你的理智主宰你的情感",
  "c": "",
  "d": "",
  "ret_a": "f",
  "ret_b": "t",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[6] = {
  "key": "6",
  "q": "处理许多事情上，你会喜欢",
  "a": "A 凭兴所至行事",
  "b": "B 按照计划行事",
  "c": "",
  "d": "",
  "ret_a": "p",
  "ret_b": "j",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[7] = {
  "key": "7",
  "q": "你是否",
  "a": "A 容易让人了解",
  "b": "B 难于让人了解",
  "c": "",
  "d": "",
  "ret_a": "e",
  "ret_b": "i",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[8] = {
  "key": "8",
  "q": "你认为别人一般",
  "a": "A 要花很长时间才认识你",
  "b": "B 用很短的时间便认识你",
  "c": "",
  "d": "",
  "ret_a": "i",
  "ret_b": "e",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[9] = {
  "key": "9",
  "q": "按照程序表做事",
  "a": "A 合你心意",
  "b": "B 令你感到束缚",
  "c": "",
  "d": "",
  "ret_a": "j",
  "ret_b": "p",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[10] = {
  "key": "10",
  "q": "当你有一份特别的任务，你会喜欢",
  "a": "A 开始前小心组织计划",
  "b": "B 边做边找须做什么",
  "c": "",
  "d": "",
  "ret_a": "j",
  "ret_b": "p",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[11] = {
  "key": "11",
  "q": "在大多数情况下，你会选择",
  "a": "A 顺其自然",
  "b": "B 按程序表做事",
  "c": "",
  "d": "",
  "ret_a": "p",
  "ret_b": "j",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[12] = {
  "key": "12",
  "q": "大多数人会说你是一个",
  "a": "A 重视自我隐私的人",
  "b": "B 非常坦率开放的人",
  "c": "",
  "d": "",
  "ret_a": "i",
  "ret_b": "e",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[13] = {
  "key": "13",
  "q": "你宁愿被人认为是一个",
  "a": "A 实事求是的人",
  "b": "B 机灵的人",
  "c": "",
  "d": "",
  "ret_a": "s",
  "ret_b": "n",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[14] = {
  "key": "14",
  "q": "在一大群人当中，通常是",
  "a": "A 你介绍大家认识",
  "b": "B 别人介绍你",
  "c": "",
  "d": "",
  "ret_a": "e",
  "ret_b": "i",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[15] = {
  "key": "15",
  "q": "你会跟哪些人做朋友？",
  "a": "A 常提出新注意的",
  "b": "B 脚踏实地的",
  "c": "",
  "d": "",
  "ret_a": "n",
  "ret_b": "s",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[16] = {
  "key": "16",
  "q": "你倾向",
  "a": "A 重视感情多于逻辑",
  "b": "B 重视逻辑多于感情",
  "c": "",
  "d": "",
  "ret_a": "f",
  "ret_b": "t",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[17] = {
  "key": "17",
  "q": "你比较喜欢",
  "a": "A 坐观事情发展才作计划",
  "b": "B 很早就作计划",
  "c": "",
  "d": "",
  "ret_a": "p",
  "ret_b": "j",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[18] = {
  "key": "18",
  "q": "你喜欢花很多的时间",
  "a": "A 一个人独处",
  "b": "B 合别人在一起",
  "c": "",
  "d": "",
  "ret_a": "i",
  "ret_b": "e",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[19] = {
  "key": "19",
  "q": "与很多人一起会",
  "a": "A 令你活力培增",
  "b": "B 常常令你心力憔悴",
  "c": "",
  "d": "",
  "ret_a": "e",
  "ret_b": "i",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[20] = {
  "key": "20",
  "q": "你比较喜欢",
  "a": "A 很早便把约会、社交聚集等事情安排妥当",
  "b": "B 无拘无束，看当时有什么好玩就做什么",
  "c": "",
  "d": "",
  "ret_a": "j",
  "ret_b": "p",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[21] = {
  "key": "21",
  "q": "计划一个旅程时，你较喜欢",
  "a": "A 大部分的时间都是跟当天的感觉行事",
  "b": "B 事先知道大部分的日子会做什么",
  "c": "",
  "d": "",
  "ret_a": "p",
  "ret_b": "j",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[22] = {
  "key": "22",
  "q": "在社交聚会中，你",
  "a": "A 有时感到郁闷",
  "b": "B 常常乐在其中",
  "c": "",
  "d": "",
  "ret_a": "i",
  "ret_b": "e",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[23] = {
  "key": "23",
  "q": "你通常",
  "a": "A 和别人容易混熟",
  "b": "B 趋向自处一隅",
  "c": "",
  "d": "",
  "ret_a": "e",
  "ret_b": "i",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[24] = {
  "key": "24",
  "q": "哪些人会更吸引你？",
  "a": "A 一个思想敏捷及非常聪颖的人",
  "b": "B 实事求是，具丰富常识的人",
  "c": "",
  "d": "",
  "ret_a": "n",
  "ret_b": "s",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[25] = {
  "key": "25",
  "q": "在日常工作中，你会",
  "a": "A 颇为喜欢处理迫使你分秒必争的突发",
  "b": "B 通常预先计划，以免要在压力下工作",
  "c": "",
  "d": "",
  "ret_a": "j",
  "ret_b": "p",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[26] = {
  "key": "26",
  "q": "你认为别人一般",
  "a": "A 要花很长时间才认识你",
  "b": "B 用很短的时间便认识你",
  "c": "",
  "d": "",
  "ret_a": "i",
  "ret_b": "e",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[27] = {
  "key": "27",
  "q": "那个更符合心意",
  "a": "A 注重隐私",
  "b": "B 坦率开放",
  "c": "",
  "d": "",
  "ret_a": "i",
  "ret_b": "e",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[28] = {
  "key": "28",
  "q": "那个更符合心意",
  "a": "A 预先安排的",
  "b": "B 无计划的",
  "c": "",
  "d": "",
  "ret_a": "j",
  "ret_b": "p",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[29] = {
  "key": "29",
  "q": "那个更符合心意",
  "a": "A 抽象",
  "b": "A 具体",
  "c": "",
  "d": "",
  "ret_a": "n",
  "ret_b": "s",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[30] = {
  "key": "30",
  "q": "你比较喜欢",
  "a": "A 思考",
  "b": "B 感受",
  "c": "",
  "d": "",
  "ret_a": "t",
  "ret_b": "f",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[31] = {
  "key": "31",
  "q": "你比较喜欢",
  "a": "A 事实",
  "b": "B 意念",
  "c": "",
  "d": "",
  "ret_a": "s",
  "ret_b": "n",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[32] = {
  "key": "32",
  "q": "你比较喜欢",
  "a": "A 冲动",
  "b": "B 决定",
  "c": "",
  "d": "",
  "ret_a": "p",
  "ret_b": "j",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[33] = {
  "key": "33",
  "q": "你比较喜欢",
  "a": "A 冲动",
  "b": "B 决定",
  "c": "",
  "d": "",
  "ret_a": "p",
  "ret_b": "j",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[34] = {
  "key": "34",
  "q": "你比较喜欢",
  "a": "A 热衷",
  "b": "B 文静",
  "c": "",
  "d": "",
  "ret_a": "e",
  "ret_b": "i",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[35] = {
  "key": "35",
  "q": "你比较喜欢",
  "a": "A 文静",
  "b": "B 外向",
  "c": "",
  "d": "",
  "ret_a": "i",
  "ret_b": "e",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[36] = {
  "key": "36",
  "q": "你比较喜欢",
  "a": "A 有系统",
  "b": "B 随意",
  "c": "",
  "d": "",
  "ret_a": "j",
  "ret_b": "p",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[37] = {
  "key": "37",
  "q": "你比较喜欢",
  "a": "A 理论",
  "b": "B 肯定",
  "c": "",
  "d": "",
  "ret_a": "i",
  "ret_b": "e",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[38] = {
  "key": "38",
  "q": "你比较喜欢",
  "a": "A 敏感",
  "b": "B 公正",
  "c": "",
  "d": "",
  "ret_a": "f",
  "ret_b": "t",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[39] = {
  "key": "39",
  "q": "你比较喜欢",
  "a": "A 令人信服",
  "b": "B 感人的",
  "c": "",
  "d": "",
  "ret_a": "t",
  "ret_b": "f",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[40] = {
  "key": "40",
  "q": "你比较喜欢",
  "a": "A 声明",
  "b": "B 概念",
  "c": "",
  "d": "",
  "ret_a": "s",
  "ret_b": "n",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[41] = {
  "key": "41",
  "q": "你比较喜欢",
  "a": "A 不受约束",
  "b": "B 预先安排",
  "c": "",
  "d": "",
  "ret_a": "p",
  "ret_b": "j",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[42] = {
  "key": "42",
  "q": "你比较喜欢",
  "a": "A 矜持",
  "b": "B 健谈",
  "c": "",
  "d": "",
  "ret_a": "i",
  "ret_b": "e",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[43] = {
  "key": "43",
  "q": "你比较喜欢",
  "a": "A 有条不紊",
  "b": "B 不拘小节",
  "c": "",
  "d": "",
  "ret_a": "j",
  "ret_b": "p",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[44] = {
  "key": "44",
  "q": "你比较喜欢",
  "a": "A 意念",
  "b": "B 实况",
  "c": "",
  "d": "",
  "ret_a": "n",
  "ret_b": "s",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[45] = {
  "key": "45",
  "q": "你比较喜欢",
  "a": "A 同情怜悯",
  "b": "B 远见",
  "c": "",
  "d": "",
  "ret_a": "f",
  "ret_b": "t",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[46] = {
  "key": "46",
  "q": "你比较喜欢",
  "a": "A 利益",
  "b": "B 祝福",
  "c": "",
  "d": "",
  "ret_a": "t",
  "ret_b": "f",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[47] = {
  "key": "47",
  "q": "你比较喜欢",
  "a": "A 务实的",
  "b": "B 理论的",
  "c": "",
  "d": "",
  "ret_a": "s",
  "ret_b": "n",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[48] = {
  "key": "48",
  "q": "你比较喜欢",
  "a": "A 朋友不多",
  "b": "B 朋友众多",
  "c": "",
  "d": "",
  "ret_a": "i",
  "ret_b": "e",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[49] = {
  "key": "49",
  "q": "你比较喜欢",
  "a": "A 有系统",
  "b": "B 即兴",
  "c": "",
  "d": "",
  "ret_a": "j",
  "ret_b": "p",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[50] = {
  "key": "50",
  "q": "你比较喜欢",
  "a": "A 富想象的",
  "b": "B 以事论事",
  "c": "",
  "d": "",
  "ret_a": "n",
  "ret_b": "s",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[51] = {
  "key": "51",
  "q": "你比较喜欢",
  "a": "A 亲切的",
  "b": "B 客观的",
  "c": "",
  "d": "",
  "ret_a": "f",
  "ret_b": "t",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[52] = {
  "key": "52",
  "q": "你比较喜欢",
  "a": "A 客观的",
  "b": "B 热情的",
  "c": "",
  "d": "",
  "ret_a": "t",
  "ret_b": "f",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[53] = {
  "key": "53",
  "q": "你比较喜欢",
  "a": "A 建造",
  "b": "B 发明",
  "c": "",
  "d": "",
  "ret_a": "s",
  "ret_b": "n",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[54] = {
  "key": "54",
  "q": "你比较喜欢",
  "a": "A 理论",
  "b": "B 事实",
  "c": "",
  "d": "",
  "ret_a": "n",
  "ret_b": "s",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[55] = {
  "key": "55",
  "q": "你比较喜欢",
  "a": "A 文静",
  "b": "B 爱合群",
  "c": "",
  "d": "",
  "ret_a": "i",
  "ret_b": "e",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[56] = {
  "key": "56",
  "q": "你比较喜欢",
  "a": "A 富同情",
  "b": "B 合逻辑",
  "c": "",
  "d": "",
  "ret_a": "f",
  "ret_b": "t",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[57] = {
  "key": "57",
  "q": "你比较喜欢",
  "a": "A 具分析力",
  "b": "B 多愁善感",
  "c": "",
  "d": "",
  "ret_a": "t",
  "ret_b": "f",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[58] = {
  "key": "58",
  "q": "你比较喜欢",
  "a": "A 合情合理",
  "b": "B 令人着迷",
  "c": "",
  "d": "",
  "ret_a": "s",
  "ret_b": "n",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[59] = {
  "key": "59",
  "q": "当你要在一个星期内完成一个大项目，你在开始的时候会",
  "a": "A 把要做的不同工作依次列出",
  "b": "B 马上动工",
  "c": "",
  "d": "",
  "ret_a": "j",
  "ret_b": "p",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[60] = {
  "key": "60",
  "q": "在社交场合中，你经常会感到",
  "a": "A 与某些人很难打开话匣儿和保持对话，或是",
  "b": "B 与多数人都能从容地长谈",
  "c": "",
  "d": "",
  "ret_a": "i",
  "ret_b": "e",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[61] = {
  "key": "61",
  "q": "要做许多人也做的事，你比较喜欢",
  "a": "A 按照一般认可的方法去做",
  "b": "B 构想一个自己的想法",
  "c": "",
  "d": "",
  "ret_a": "s",
  "ret_b": "n",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[62] = {
  "key": "62",
  "q": "你刚认识的朋友能否说出你的兴趣？",
  "a": "A 讲授概念和原则的",
  "b": "B 要待他们真正了解你之后才可以",
  "c": "",
  "d": "",
  "ret_a": "e",
  "ret_b": "i",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[63] = {
  "key": "63",
  "q": "你通常较喜欢的科目是",
  "a": "A 讲授概念和原则的",
  "b": "B 讲授事实和数据的",
  "c": "",
  "d": "",
  "ret_a": "n",
  "ret_b": "s",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[64] = {
  "key": "64",
  "q": "哪个是较高的赞誉，或称许为？",
  "a": "A 一贯感性的人",
  "b": "B 一贯理性的人",
  "c": "",
  "d": "",
  "ret_a": "f",
  "ret_b": "t",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[65] = {
  "key": "65",
  "q": "你认为按照程序表做事",
  "a": "A 有时是需要的，但一般来说你不大喜欢这样做，或是",
  "b": "B 大多数情况下是有帮助而且是你喜欢做的",
  "c": "",
  "d": "",
  "ret_a": "p",
  "ret_b": "j",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[66] = {
  "key": "66",
  "q": "和一群人在一起，你通常会选",
  "a": "A 跟你很熟悉的个别人谈话",
  "b": "B 参与大伙的谈话",
  "c": "",
  "d": "",
  "ret_a": "i",
  "ret_b": "e",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[67] = {
  "key": "67",
  "q": "在社交聚会上，你会",
  "a": "A 是说话很多的一个",
  "b": "B 让别人多说话",
  "c": "",
  "d": "",
  "ret_a": "e",
  "ret_b": "i",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[68] = {
  "key": "68",
  "q": "把周末期间要完成的事列成清单，这个主意会",
  "a": "A 合你意",
  "b": "B 使你提不起劲",
  "c": "",
  "d": "",
  "ret_a": "j",
  "ret_b": "p",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[69] = {
  "key": "69",
  "q": "哪个是较高的赞誉，或称许为",
  "a": "A 能干的",
  "b": "B 富有同情心",
  "c": "",
  "d": "",
  "ret_a": "t",
  "ret_b": "f",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[70] = {
  "key": "70",
  "q": "你通常喜欢",
  "a": "A 事先安排你的社交约会",
  "b": "B 随兴之所至做事",
  "c": "",
  "d": "",
  "ret_a": "j",
  "ret_b": "p",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[71] = {
  "key": "71",
  "q": "总的说来，要做一个大型作业时，你会选",
  "a": "A 边做边想该做什么",
  "b": "B 首先把工作按步细分",
  "c": "",
  "d": "",
  "ret_a": "p",
  "ret_b": "j",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[72] = {
  "key": "72",
  "q": "你能否滔滔不绝地与人聊天",
  "a": "A 只限于跟你有共同兴趣的人",
  "b": "B 几乎跟任何人都可以",
  "c": "",
  "d": "",
  "ret_a": "i",
  "ret_b": "e",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[73] = {
  "key": "73",
  "q": "你会",
  "a": "A 跟随一些证明有效的方法，或是",
  "b": "B 分析还有什么毛病，及针对尚未解决的难题",
  "c": "",
  "d": "",
  "ret_a": "s",
  "ret_b": "n",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[74] = {
  "key": "74",
  "q": "为乐趣而阅读时，你会",
  "a": "A 喜欢奇特或创新的表达方式",
  "b": "B 喜欢作者直话直说",
  "c": "",
  "d": "",
  "ret_a": "n",
  "ret_b": "s",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[75] = {
  "key": "75",
  "q": "你宁愿替哪一类上司（或者老师）工作？",
  "a": "A 天性淳良，但常常前后不一的",
  "b": "B 言词尖锐但永远合乎逻辑的",
  "c": "",
  "d": "",
  "ret_a": "f",
  "ret_b": "t",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[76] = {
  "key": "76",
  "q": "你做事多数是",
  "a": "A 按当天心情去做",
  "b": "B 照拟好的程序表去做",
  "c": "",
  "d": "",
  "ret_a": "p",
  "ret_b": "j",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[77] = {
  "key": "77",
  "q": "你是否",
  "a": "A 可以和任何人按需求从容地交谈，或是",
  "b": "B 只是对某些人或在某种情况下才可以畅所欲言",
  "c": "",
  "d": "",
  "ret_a": "e",
  "ret_b": "i",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[78] = {
  "key": "78",
  "q": "要作决定时，你认为比较重要的是",
  "a": "A 据事实衡量",
  "b": "B 考虑他人的感受和意见",
  "c": "",
  "d": "",
  "ret_a": "t",
  "ret_b": "f",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[79] = {
  "key": "79",
  "q": "那个更和你心意",
  "a": "A 想象的",
  "b": "B 真实的",
  "c": "",
  "d": "",
  "ret_a": "n",
  "ret_b": "s",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[80] = {
  "key": "80",
  "q": "那个更和你心意",
  "a": "A 仁慈慷慨的",
  "b": "B 意志坚定的",
  "c": "",
  "d": "",
  "ret_a": "f",
  "ret_b": "t",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[81] = {
  "key": "81",
  "q": "那个更和你心意",
  "a": "A 公正的",
  "b": "B 有关怀心",
  "c": "",
  "d": "",
  "ret_a": "t",
  "ret_b": "f",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[82] = {
  "key": "82",
  "q": "那个更和你心意",
  "a": "A 制作",
  "b": "B 设计",
  "c": "",
  "d": "",
  "ret_a": "s",
  "ret_b": "n",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[83] = {
  "key": "83",
  "q": "那个更和你心意",
  "a": "A 可能性",
  "b": "B 必然性",
  "c": "",
  "d": "",
  "ret_a": "n",
  "ret_b": "s",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[84] = {
  "key": "84",
  "q": "那个更和你心意",
  "a": "A 温柔",
  "b": "B 力量",
  "c": "",
  "d": "",
  "ret_a": "f",
  "ret_b": "t",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[85] = {
  "key": "85",
  "q": "那个更和你心意",
  "a": "A 实际",
  "b": "B 多愁善感",
  "c": "",
  "d": "",
  "ret_a": "t",
  "ret_b": "f",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[86] = {
  "key": "86",
  "q": "那个更和你心意",
  "a": "A 制造",
  "b": "B 创造",
  "c": "",
  "d": "",
  "ret_a": "s",
  "ret_b": "n",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[87] = {
  "key": "87",
  "q": "那个更和你心意",
  "a": "A 新颖的",
  "b": "B 已知的",
  "c": "",
  "d": "",
  "ret_a": "n",
  "ret_b": "s",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[88] = {
  "key": "88",
  "q": "那个更和你心意",
  "a": "A 同情",
  "b": "B 分析",
  "c": "",
  "d": "",
  "ret_a": "f",
  "ret_b": "t",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[89] = {
  "key": "89",
  "q": "那个更和你心意",
  "a": "A 坚持己见",
  "b": "B 温柔有爱心",
  "c": "",
  "d": "",
  "ret_a": "t",
  "ret_b": "f",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[90] = {
  "key": "90",
  "q": "那个更和你心意",
  "a": "A 具体的",
  "b": "B 抽象的",
  "c": "",
  "d": "",
  "ret_a": "s",
  "ret_b": "n",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[91] = {
  "key": "91",
  "q": "那个更和你心意",
  "a": "A 全身心投入",
  "b": "B 有决心的",
  "c": "",
  "d": "",
  "ret_a": "f",
  "ret_b": "t",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[92] = {
  "key": "92",
  "q": "那个更和你心意",
  "a": "A 能干的",
  "b": "B 仁慈的",
  "c": "",
  "d": "",
  "ret_a": "t",
  "ret_b": "f",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
*/

const limitquestTrigrams = 3
export default class TrigramsTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [],
      Trigrams: [],
      ret: "",
      percent: "",
      extrainfo: [],
      retdetail: [],
      closetest: false,
    }

  }
  componentDidMount() { 
    this.clear()
  }



  clear() {
    var ret = new Array();
    var runtimeTrigrams = Trigrams.concat()
    var checked = new Array();
    while (runtimeTrigrams.length > limitquestTrigrams) {
      var p = Math.random() * runtimeTrigrams.length
      runtimeTrigrams.splice(p, 1)
    }
    var checked = new Array();
    for (var i = 0; i < runtimeTrigrams.length; i++) {
      checked[i] = ""
      runtimeTrigrams[i].index = i
      runtimeTrigrams[i].key = i
      runtimeTrigrams[i].ret = undefined
    }
    this.setState({
      checked: checked,
      Trigrams: runtimeTrigrams,
      ret: "",
      percent: "",
      extrainfo: [],
      retdetail: [],
      closetest: false,
      showtip: false,
    })
  }

  updateIndex(sel, key) {
    console.log(key, sel)
    if (false == this.state.closetest) {
      //console.log(key,sel)
      if ("" != sel) {
        this.state.Trigrams[Number(key)].sel = sel
      }
      this.state.checked[Number(key)] = sel
      this.setState({ checked: this.state.checked });
    }
  }
  check() {
    for (var i = 0; i < limitquestTrigrams; i++) {
      if (this.state.checked[i] == "") {
        this.setState({ showtip: true })
        return false;
      }
    }
  }

  result() {
    if (false == this.check()) {
      return
    }
    var ret = 0
    var testTrigrams = this.state.Trigrams
    for(var i=0;i<testTrigrams.length;i++)
    {
      var indextest = testTrigrams[i]
      if("1"==testTrigrams[i].sel)
      {
        ret++
        testTrigrams[i].ret=true
      }
      else{
        testTrigrams[i].ret=false
      }
    }

    this.setState({
      Trigrams:testTrigrams,
      ret: "",
      extrainfo:  [],
      retdetail:  [],
      closetest: true,

    })
  }

  render() {
    const { Trigrams } = this.state;
    const content = Trigrams.map((item) => {
      if(""!=item.ret_d){
        return (
          <View key={item.id}>
            <View className={'question'}>
            
            <Text >第{item.index + 1}题：{item.q}</Text>
            {true==item.ret?checkright:(false==item.ret?checkfalse:"")}</View>
            <AtRadio options={[{ label: item.a, value: item.ret_a }
            , { label: item.b, value: item.ret_b }
            , { label: item.c, value: item.ret_c }
            , { label: item.d, value: item.ret_d }]}
              value={this.state.checked[Number(item.key)]}
              onClick={(value) => this.updateIndex(value, item.key)} />
          </View>)
      }else{
        return (
          <View key={item.id}>
            <View className={'question'}><Text >第{item.index + 1}题：{item.q}</Text>
            {true==item.ret?checkright:(false==item.ret?checkfalse:"")}
            </View>
            <AtRadio options={[{ label: item.a, value: item.ret_a }, { label: item.b, value: item.ret_b }]}
              value={this.state.checked[Number(item.key)]}
              onClick={(value) => this.updateIndex(value, item.key)} />
          </View>)
      }
      
    })
    const { retdetail } = this.state;
    const content1 = retdetail.map((item) => {
      console.log(item.item)
      return (
        <View key={item.index}>
          <Text  >{item}</Text>
        </View>)
    })
    const { extrainfo } = this.state;
    const content2 = extrainfo.map((item) => {
      console.log(item)
      return (
        <View key={item.index}>
          <Text  >{item}</Text>
        </View>)
    })

    return (
      <View className='contain'>
        <ScrollView >
          <View  >
            <AtToast isOpened={this.state.showtip} text="请先完成题目" icon="alert-circle" onClose={() => this.setState({ showtip: false })}></AtToast>
            <View className={'title'}>
              <Text >乾坤九考</Text>
            </View>
              {content}
            <View className={'result'}>
              {content1}
              {content2}
            </View>
            <AtDivider>
              <AtIcon fontColor='#2d8cf0' lineColor='#2d8cf0' value='check-circle'></AtIcon>
            </AtDivider>
            <AtButton type='primary' circle={true} onClick={(value) => this.result()}>提交结果</AtButton>
            <AtDivider>
              <AtIcon fontColor='#2d8cf0' lineColor='#2d8cf0' value='reload'></AtIcon>
            </AtDivider>
            <AtButton type='primary' circle={true} onClick={(value) => this.clear()}>随机重测</AtButton>
          </View>
        </ScrollView>
      </View>
    )
  }

} 