import React, { Component } from 'react'
import Taro, { getCurrentInstance } from '@tarojs/taro'
import { StyleSheet, View, PixelRatio, Alert, Text, FlatList, ScrollView, CameraRoll } from '@tarojs/components'
import { AtToast, AtGrid, AtTabBar, AtCheckbox, AtRadio, AtButton, AtDivider, AtIcon } from 'taro-ui'
import './TrigramsTestModule.scss'

const checkright = <AtIcon value='check' size='24' color='green'></AtIcon>
const checkfalse = <AtIcon value='close' size='24' color='red'></AtIcon>
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
  "rank": "3",
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
  "rank": "3",
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
  "rank": "1",
}
Trigrams[3] = {
  "key": "3",
  "q": "后天八卦说的是阳气从东方运行的情况，是从四时推移和万物生长收藏得出的规律",
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

Trigrams[5] = {
  "key": "5",
  "q": "《周易》本事是占卜用的书",
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
Trigrams[6] = {
  "key": "6",
  "q": "凡阳爻居中位，象征“刚中”之德，如（ ）",
  "a": "A 《坤》之六二",
  "b": "B 《乾》之九五",
  "c": "C 《坤》之六三",
  "d": "D 《乾》之九四",
  "ret_a": "a",
  "ret_b": "1",
  "ret_c": "c",
  "ret_d": "d",
  "sel": "",
}
Trigrams[7] = {
  "key": "7",
  "q": "三四五爻合成上卦，谓之（ ）",
  "a": "A. “当位”",
  "b": "B. “不当位”",
  "c": "C. “上互” ",
  "d": "D. “下互”",
  "ret_a": "a",
  "ret_b": "b",
  "ret_c": "1",
  "ret_d": "d",
  "sel": "",
}
Trigrams[8] = {
  "key": "8",
  "q": "卦象中的六爻，应该从上往下看",
  "a": "A 对",
  "b": "B 错",
  "c": "",
  "d": "",
  "ret_a": "a",
  "ret_b": "1",
  "ret_c": "",
  "ret_d": "",
  "sel": "",
}
Trigrams[9] = {
  "key": "9",
  "q": "坤卦的（ ）爻是最完美的一爻",
  "a": "A 六五",
  "b": "B 六四",
  "c": "C 刘三",
  "d": "D 六二",
  "ret_a": "a",
  "ret_b": "b",
  "ret_c": "c",
  "ret_d": "1",
  "sel": "",
}

Trigrams[10] = {
  "key": "10",
  "q": "（ ）象征事物的发展合乎正道",
  "a": "A “当位”",
  "b": "B “不当位”",
  "c": "C “应”",
  "d": "D “无应”",
  "ret_a": "1",
  "ret_b": "b",
  "ret_c": "c",
  "ret_d": "d",
  "sel": "",
}
Trigrams[11] = {
  "key": "11",
  "q": "陇右是指",
  "a": "A 陇东",
  "b": "B 陇南",
  "c": "C 陇西",
  "d": "D 陇北",
  "ret_a": "a",
  "ret_b": "b",
  "ret_c": "1",
  "ret_d": "d",
  "sel": "",
}
Trigrams[12] = {
  "key": "12",
  "q": "八卦中代表风的是",
  "a": "A 离",
  "b": "B 艮",
  "c": "C 兑",
  "d": "D 巽",
  "ret_a": "a",
  "ret_b": "b",
  "ret_c": "c",
  "ret_d": "1",
  "sel": "",
}
Trigrams[13] = {
  "key": "13",
  "q": "天地定位，山泽通气，雷风相薄，水火不相谢，出自",
  "a": "A《文言》",
  "b": "B《彖传》",
  "c": "C《杂卦》",
  "d": "D《说卦》",
  "ret_a": "a",
  "ret_b": "b",
  "ret_c": "c",
  "ret_d": "1",
  "sel": "",
}
Trigrams[14] = {
  "key": "14",
  "q": "表达止的意思的卦象是",
  "a": "A 离",
  "b": "B 艮",
  "c": "C 兑",
  "d": "D 巽",
  "ret_a": "a",
  "ret_b": "1",
  "ret_c": "c",
  "ret_d": "d",
  "sel": "",
}

Trigrams[15] = {
  "key": "15",
  "q": "《周易》给人提供的帮助不包括",
  "a": "A 明机适变",
  "b": "B 无欲无求",
  "c": "C 执中守正",
  "d": "D 趋吉避凶",
  "ret_a": "a",
  "ret_b": "1",
  "ret_c": "c",
  "ret_d": "d",
  "sel": "",
}
Trigrams[16] = {
  "key": "16",
  "q": "上卦为离，下卦为乾的卦是",
  "a": "A 大有卦",
  "b": "B 同人卦",
  "c": "C 小畜卦",
  "d": "D 大畜卦",
  "ret_a": "1",
  "ret_b": "b",
  "ret_c": "c",
  "ret_d": "d",
  "sel": "",
}
Trigrams[17] = {
  "key": "17",
  "q": "天尊地卑，乾坤定矣，卑高以岑，贵贱位矣，动静有常，刚柔断矣，出自",
  "a": "A 《易经》",
  "b": "B 《说卦》",
  "c": "C 《系辞》",
  "d": "D 《序卦》",
  "ret_a": "a",
  "ret_b": "b",
  "ret_c": "1",
  "ret_d": "d",
  "sel": "",
}
Trigrams[18] = {
  "key": "18",
  "q": "《易传》成书年代",
  "a": "A 西周初",
  "b": "B 西周末",
  "c": "C 春秋战国",
  "d": "D 西汉初",
  "ret_a": "a",
  "ret_b": "b",
  "ret_c": "1",
  "ret_d": "d",
  "sel": "",
}
Trigrams[19] = {
  "key": "19",
  "q": "《周易》占噬的意思是爻",
  "a": "A 算命",
  "b": "B 趋吉避凶",
  "c": "C 以鬼神迷惑人",
  "d": "D 以术证道",
  "ret_a": "a",
  "ret_b": "b",
  "ret_c": "c",
  "ret_d": "1",
  "sel": "",
}

Trigrams[20] = {
  "key": "20",
  "q": "如果以爻代表社会的不同阶层，那么代表诸侯的是",
  "a": "A 二爻",
  "b": "B 三爻",
  "c": "C 四爻",
  "d": "D 五爻",
  "ret_a": "a",
  "ret_b": "1",
  "ret_c": "c",
  "ret_d": "d",
  "sel": "",
}
Trigrams[21] = {
  "key": "21",
  "q": "如果（）爻处于中位，并且当位，就可以称为即中且正，是最好的情况",
  "a": "A 一",
  "b": "B 二",
  "c": "C 五",
  "d": "D 六",
  "ret_a": "1",
  "ret_b": "b",
  "ret_c": "c",
  "ret_d": "d",
  "sel": "",
}
Trigrams[22] = {
  "key": "22",
  "q": "下列哪项属于阴的性质",
  "a": "A 白天，上面，膨胀，外展。",
  "b": "B 光明，积极，向上。",
  "c": "C 黑夜，下面，消沉，收缩。",
  "d": "D 男人，温暖，豪放。",
  "ret_a": "a",
  "ret_b": "b",
  "ret_c": "1",
  "ret_d": "d",
  "sel": "",
}
Trigrams[23] = {
  "key": "23",
  "q": "下列哪项不是阴阳论学说的内容？",
  "a": "A 阴阳对立论",
  "b": "B 阴阳统一论",
  "c": "C 阴阳转化论",
  "d": "D 阴阳脱离论",
  "ret_a": "a",
  "ret_b": "b",
  "ret_c": "c",
  "ret_d": "1",
  "sel": "",
}
Trigrams[24] = {
  "key": "24",
  "q": "什么是五行",
  "a": "A 木，火，土，金，水。",
  "b": "B 山，医，命，卜，相。",
  "c": "C 礼，信，仁，义，智。",
  "d": "D 肝，心，脾，肺，肾。",
  "ret_a": "1",
  "ret_b": "b",
  "ret_c": "c",
  "ret_d": "d",
  "sel": "",
}

Trigrams[25] = {
  "key": "25",
  "q": "五行相生是指",
  "a": "A、木生火，火生金，金生土。",
  "b": "B、火生土，土生水，水生木。",
  "c": "C、水生木，木生火，火生土。",
  "d": "D、土生木，木生水，金生火。 ",
  "ret_a": "a",
  "ret_b": "b",
  "ret_c": "1",
  "ret_d": "d",
  "sel": "",
}
Trigrams[26] = {
  "key": "26",
  "q": "五行相克是指?",
  "a": "A、金克土，土克木，水克火。",
  "b": "B、水克火，火克金，金克木。",
  "c": "C、土克水，金克木，木克水。",
  "d": "D、火克土，水克土，木克土。",
  "ret_a": "a",
  "ret_b": "1",
  "ret_c": "c",
  "ret_d": "d",
  "sel": "",
}
Trigrams[27] = {
  "key": "27",
  "q": "五行旺相正确的是？",
  "a": "A、春季，火旺土相",
  "b": "B、夏季，火旺木相",
  "c": "C、秋季，金旺水相",
  "d": "D、冬季，土旺金相",
  "ret_a": "a",
  "ret_b": "b",
  "ret_c": "1",
  "ret_d": "d",
  "sel": "",
}
Trigrams[28] = {
  "key": "28",
  "q": "符合五行属金的是哪项 ？",
  "a": "A、方形，脾，礼性。",
  "b": "B、圆形，肺，义气。",
  "c": "C、菱形，肝，黑色。",
  "d": "D、细长，胆，红色。",
  "ret_a": "a",
  "ret_b": "1",
  "ret_c": "c",
  "ret_d": "d",
  "sel": "",
}
Trigrams[29] = {
  "key": "29",
  "q": "符合五行属水的是哪项？",
  "a": "A、方形，白色，胃，南方。",
  "b": "B、尖形，仁和，青色，东方。",
  "c": "C、波浪形，智慧聪明，黑色，正北方。",
  "d": "D、椭圆形，信用，赤红色，西北方。",
  "ret_a": "a",
  "ret_b": "b",
  "ret_c": "1",
  "ret_d": "d",
  "sel": "",
}

Trigrams[30] = {
  "key": "30",
  "q": "下列哪项是地支类？",
  "a": "A、己，丑，卯，丁。",
  "b": "B、巳，午，戌，未。",
  "c": "C、丑，辛，庚，癸。",
  "d": "D、寅，申，丙，未",
  "ret_a": "a",
  "ret_b": "1",
  "ret_c": "c",
  "ret_d": "d",
  "sel": "",
}
Trigrams[31] = {
  "key": "31",
  "q": "天干的顺序正确是",
  "a": "A、乙，丁，己，壬，癸，戊。",
  "b": "B、乙，丙，丁，戊，己，庚。",
  "c": "C、子，丑，寅，卯，辰，巳。",
  "d": "D、甲，子，庚，丑，乙，亥。",
  "ret_a": "a",
  "ret_b": "1",
  "ret_c": "c",
  "ret_d": "d",
  "sel": "",
}
Trigrams[32] = {
  "key": "32",
  "q": "地支的顺序正确的是？",
  "a": "A、子，寅，巳，丑，亥。",
  "b": "B、甲，辰，午，酉，戌。",
  "c": "C、卯，辰，巳，午，未。",
  "d": "D、丑，申，己，未，酉。",
  "ret_a": "a",
  "ret_b": "b",
  "ret_c": "1",
  "ret_d": "d",
  "sel": "",
}
Trigrams[33] = {
  "key": "33",
  "q": "下列哪组干支五行属火 ？",
  "a": "A、甲乙，丑寅。",
  "b": "B、戊子，未申。",
  "c": "C、丙午，丁巳。",
  "d": "D、酉戌，庚辰",
  "ret_a": "a",
  "ret_b": "b",
  "ret_c": "1",
  "ret_d": "d",
  "sel": "",
}
Trigrams[34] = {
  "key": "34",
  "q": "下列哪组干支五行属金 ？",
  "a": "A、己酉，辰戌。",
  "b": "B、庚申，辛酉。",
  "c": "C、丁丑，戊寅。",
  "d": "D、壬辰，癸亥。",
  "ret_a": "a",
  "ret_b": "1",
  "ret_c": "c",
  "ret_d": "d",
  "sel": "",
}

Trigrams[35] = {
  "key": "35",
  "q": "下列哪项是属阴性的干支？",
  "a": "A、乙，丑，卯，丁，未，亥。",
  "b": "B、甲，子，庚，辰，壬，丙。",
  "c": "C、寅，戊，申，壬，子，丑。",
  "d": "D、己，卯，午，酉，亥，庚。",
  "ret_a": "1",
  "ret_b": "b",
  "ret_c": "c",
  "ret_d": "d",
  "sel": "",
}
Trigrams[36] = {
  "key": "36",
  "q": "代表北方水的干支是？",
  "a": "A、甲子，乙丑。",
  "b": "B、丁卯，丙申。",
  "c": "C、壬子，癸亥。",
  "d": "D、己酉，辛未。",
  "ret_a": "a",
  "ret_b": "b",
  "ret_c": "1",
  "ret_d": "d",
  "sel": "",
}
Trigrams[37] = {
  "key": "37",
  "q": "代表东方木的干支是？",
  "a": "A、甲乙，寅卯",
  "b": "B、丙丁，午未",
  "c": "C、庚辛，申酉",
  "d": "D、壬癸，亥子",
  "ret_a": "1",
  "ret_b": "b",
  "ret_c": "c",
  "ret_d": "d",
  "sel": "",
}
Trigrams[38] = {
  "key": "38",
  "q": "下列天干寄生十二宫（生旺死绝）正确的论述是？",
  "a": "A、乙长生在卯，旺在午，墓在未，绝在申",
  "b": "B、庚长生在辰，旺在酉，墓在寅，绝在丑",
  "c": "C、丙戊长生在寅，旺在午，墓在戌，绝在亥",
  "d": "D、辛长生在子，旺在巳，墓在辰，绝在酉 ",
  "ret_a": "a",
  "ret_b": "b",
  "ret_c": "1",
  "ret_d": "d",
  "sel": "",
}
Trigrams[39] = {
  "key": "39",
  "q": "下列天干相合，相冲正确的是哪组？",
  "a": "A、乙丙相合，丙庚相冲",
  "b": "B、壬丁相冲，戊己相合",
  "c": "C、丙辛相合，甲庚相冲",
  "d": "D、甲己相冲，丁癸相合 ",
  "ret_a": "a",
  "ret_b": "b",
  "ret_c": "1",
  "ret_d": "d",
  "sel": "",
}

Trigrams[40] = {
  "key": "40",
  "q": "下列地支相刑，相合正确的是哪组？",
  "a": "A、丑未合，巳午申刑",
  "b": "B、寅戌合，子辰酉刑",
  "c": "C、卯戌合，寅巳申刑",
  "d": "D、亥子合，子卯刑",
  "ret_a": "a",
  "ret_b": "b",
  "ret_c": "1",
  "ret_d": "d",
  "sel": "",
}
Trigrams[41] = {
  "key": "41",
  "q": "下列地支相冲，相害正确的是哪组? ",
  "a": "A、子午冲，寅卯害",
  "b": "B、辰亥冲，申丑害",
  "c": "C、寅申冲，酉戌害",
  "d": "D、巳亥冲，子酉害",
  "ret_a": "a",
  "ret_b": "b",
  "ret_c": "1",
  "ret_d": "d",
  "sel": "",
}
Trigrams[42] = {
  "key": "42",
  "q": "下列地支三合局正确的是哪项？",
  "a": "A、寅午戌合水局",
  "b": "B、亥卯未合木局",
  "c": "C、申子辰合火局",
  "d": "D、巳酉丑合土局 ",
  "ret_a": "a",
  "ret_b": "1",
  "ret_c": "c",
  "ret_d": "d",
  "sel": "",
}
Trigrams[43] = {
  "key": "43",
  "q": "下列地支代表生肖正确是哪项？",
  "a": "A、子鼠，寅牛，卯兔，午猪。",
  "b": "B、未马，酉兔，亥蛇，寅狗。",
  "c": "C、辰蛇，巳龙，戌虎，申羊。",
  "d": "D、卯兔，戌狗，申猴，寅虎。",
  "ret_a": "a",
  "ret_b": "b",
  "ret_c": "c",
  "ret_d": "1",
  "sel": "",
}
Trigrams[44] = {
  "key": "44",
  "q": "古代时辰常说“丑时”代表几点？",
  "a": "A、7-9点",
  "b": "B、11-13点",
  "c": "C、1-3点",
  "d": "D、3-5点",
  "ret_a": "a",
  "ret_b": "b",
  "ret_c": "1",
  "ret_d": "d",
  "sel": "",
}


Trigrams[45] = {
  "key": "45",
  "q": "古时常说的“午时”代表几点？",
  "a": "A、1-2点",
  "b": "B、3-5点",
  "c": "C、11-13点",
  "d": "D、15-17点",
  "ret_a": "a",
  "ret_b": "b",
  "ret_c": "1",
  "ret_d": "d",
  "sel": "",
}
Trigrams[46] = {
  "key": "46",
  "q": "古时常说的“卯月”代表现在阴历（阴阳合历）的哪个月？",
  "a": "A、一月",
  "b": "B、一至三月",
  "c": "C、二月",
  "d": "D、四月",
  "ret_a": "a",
  "ret_b": "b",
  "ret_c": "1",
  "ret_d": "d",
  "sel": "",
}
Trigrams[47] = {
  "key": "47",
  "q": "古时常说的“酉月”代表现在阴历的几月？",
  "a": "A、七至八月",
  "b": "B、八月",
  "c": "C、九月",
  "d": "D、十一月",
  "ret_a": "a",
  "ret_b": "1",
  "ret_c": "c",
  "ret_d": "d",
  "sel": "",
}
Trigrams[48] = {
  "key": "48",
  "q": "下列哪项地支组合代表夏季？",
  "a": "A、寅卯辰",
  "b": "B、申酉戌",
  "c": "C、巳午未",
  "d": "D、亥子丑",
  "ret_a": "a",
  "ret_b": "b",
  "ret_c": "1",
  "ret_d": "d",
  "sel": "",
}
Trigrams[49] = {
  "key": "49",
  "q": "四象中阴爻在上阳爻在下者代表？",
  "a": "A、老阴",
  "b": "B、少阴",
  "c": "C、少阳",
  "d": "D、老阳",
  "ret_a": "a",
  "ret_b": "b",
  "ret_c": "1",
  "ret_d": "d",
  "sel": "",
}


Trigrams[50] = {
  "key": "50",
  "q": "四象中少阴可生出哪两个卦？",
  "a": "A、坤与艮",
  "b": "B、乾与兑",
  "c": "C、震与离",
  "d": "D、坎与巽",
  "ret_a": "a",
  "ret_b": "b",
  "ret_c": "1",
  "ret_d": "d",
  "sel": "",
}
Trigrams[51] = {
  "key": "51",
  "q": "先天八卦顺序正确的是？",
  "a": "A、一乾二兑三震四离五坤六艮七坎八巽",
  "b": "B、一兑二乾三离四震五坤六坎七巽八艮",
  "c": "C、一坎二坤三离四震五乾六兑七巽八艮",
  "d": "D、一乾二兑三离四震五巽六坎七艮八坤",
  "ret_a": "a",
  "ret_b": "b",
  "ret_c": "c",
  "ret_d": "1",
  "sel": "",
}
Trigrams[52] = {
  "key": "52",
  "q": "八卦中“下阳爻-中阴爻-上阳爻”代表什么卦？",
  "a": "A、坎卦",
  "b": "B、坤卦",
  "c": "C、离卦",
  "d": "D、巽卦",
  "ret_a": "a",
  "ret_b": "b",
  "ret_c": "1",
  "ret_d": "d",
  "sel": "",
}
Trigrams[53] = {
  "key": "53",
  "q": "八卦中“下阴爻-中阴爻-上阴爻”代表什么卦？",
  "a": "A、兑卦",
  "b": "B、坤卦",
  "c": "C、乾卦",
  "d": "D、震卦",
  "ret_a": "a",
  "ret_b": "1",
  "ret_c": "c",
  "ret_d": "d",
  "sel": "",
}
Trigrams[54] = {
  "key": "54",
  "q": "后天八卦中“兑卦类象”正确的是哪项",
  "a": "A、代表南方，中男，雷，黑色。",
  "b": "B、代表正西，少女，口说，水泽，卦中地支为酉。",
  "c": "C、代表老母，性质为土，脾胃，大众，地支为未。",
  "d": "D、代表中女，北方，肾，高山，地支为午",
  "ret_a": "a",
  "ret_b": "1",
  "ret_c": "c",
  "ret_d": "d",
  "sel": "",
}
Trigrams[55] = {
  "key": "55",
  "q": "后天八卦中“乾卦类象”正确的是哪项？",
  "a": "A、老父，首脑，西北，白色，肺，地支为戌亥。",
  "b": "B、少男，手，东北，肠胃，高山，地支为丑寅。",
  "c": "C、中女，心脏，眼睛，正南，尖形物，地支为午。",
  "d": "D、长女，风，股，神经，花木，细线，地支为辰巳。",
  "ret_a": "1",
  "ret_b": "b",
  "ret_c": "c",
  "ret_d": "d",
  "sel": "",
}
Trigrams[56] = {
  "key": "56",
  "q": "一个人从东北方走到西南方后转到西北方，最后在南方停下，若用后天八卦方位表示，他走了哪几个卦？",
  "a": "A、巽-离-艮-坤",
  "b": "B、坎-乾-震-兑",
  "c": "C、兑-坤-离-艮",
  "d": "D、艮-坤-乾-离",
  "ret_a": "a",
  "ret_b": "b",
  "ret_c": "c",
  "ret_d": "1",
  "sel": "",
}
Trigrams[57] = {
  "key": "57",
  "q": "九宫中“三宫”有哪两个卦？",
  "a": "A、离，巽",
  "b": "B、坤，兑",
  "c": "C、震，离",
  "d": "D、乾，艮",
  "ret_a": "a",
  "ret_b": "b",
  "ret_c": "1",
  "ret_d": "d",
  "sel": "",
}
Trigrams[58] = {
  "key": "58",
  "q": "九宫中“六宫”有哪两个卦？",
  "a": "A、兑，巽",
  "b": "B、巽，艮",
  "c": "C、乾，艮",
  "d": "D、坎，离",
  "ret_a": "a",
  "ret_b": "b",
  "ret_c": "1",
  "ret_d": "d",
  "sel": "",
}
Trigrams[59] = {
  "key": "59",
  "q": "河图有一方位中，外有七个阳点和内面两个阴点代表了什么？",
  "a": "A、南方火",
  "b": "B、东方木",
  "c": "C、中间土",
  "d": "D、北方水",
  "ret_a": "1",
  "ret_b": "b",
  "ret_c": "c",
  "ret_d": "d",
  "sel": "",
}

Trigrams[60] = {
  "key": "60",
  "q": "河图有一方中，外有八个阴点和内有三个阳点代表了什么？",
  "a": "A、中央土",
  "b": "B、西方金",
  "c": "C、南方火",
  "d": "D、东方木",
  "ret_a": "a",
  "ret_b": "b",
  "ret_c": "c",
  "ret_d": "1",
  "sel": "",
}
Trigrams[61] = {
  "key": "61",
  "q": "河图中：外有九个阳点和内有四个阴点，代表了什么？属于哪方位？",
  "a": "A、北方水",
  "b": "B、东北土",
  "c": "C、南方火",
  "d": "D、西方金",
  "ret_a": "a",
  "ret_b": "b",
  "ret_c": "c",
  "ret_d": "1",
  "sel": "",
}
Trigrams[62] = {
  "key": "62",
  "q": "下列描述河图正确的是哪项？",
  "a": "A、天三生金，地八成之故三八为朋，居东",
  "b": "B、地二生火，天七成之故二七同道，居南",
  "c": "C、天五生水，地十成之故五十同途，居中",
  "d": "D、天一生木，地六成之故一六共宗，居北",
  "ret_a": "a",
  "ret_b": "1",
  "ret_c": "c",
  "ret_d": "d",
  "sel": "",
}
Trigrams[63] = {
  "key": "63",
  "q": "洛书中有六个阴点的代表什么方位？称什么宫？ ",
  "a": "A、南方，离九宫",
  "b": "B、东南，巽四宫",
  "c": "C、西北，乾六宫",
  "d": "D、北方，坎一宫",
  "ret_a": "a",
  "ret_b": "b",
  "ret_c": "1",
  "ret_d": "d",
  "sel": "",
}
Trigrams[64] = {
  "key": "64",
  "q": "洛书中有九个阳点代表什么方位？称什么宫？",
  "a": "A、北方，坎一宫",
  "b": "B、南方，离九宫",
  "c": "C、西北，兑七宫",
  "d": "D、东方，震三宫",
  "ret_a": "a",
  "ret_b": "1",
  "ret_c": "c",
  "ret_d": "d",
  "sel": "",
}
Trigrams[65] = {
  "key": "65",
  "q": "《易传》成书于（）时期。 ",
  "a": "A 西周",
  "b": "B 殷商",
  "c": "C 战国",
  "d": "D 秦汉",
  "ret_a": "a",
  "ret_b": "b",
  "ret_c": "1",
  "ret_d": "d",
  "sel": "",
}
Trigrams[66] = {
  "key": "66",
  "q": "圣人设立八卦的目的是为了（）",
  "a": "A 占卜",
  "b": "B 观象",
  "c": "C 祈福",
  "d": "D 立法",
  "ret_a": "a",
  "ret_b": "1",
  "ret_c": "c",
  "ret_d": "d",
  "sel": "",
}
Trigrams[67] = {
  "key": "67",
  "q": "屯卦讲的是",
  "a": "A、天",
  "b": "B、地",
  "c": "C、人",
  "d": "D、风",
  "ret_a": "a",
  "ret_b": "b",
  "ret_c": "1",
  "ret_d": "d",
  "sel": "",
}
Trigrams[68] = {
  "key": "68",
  "q": "“雷在地中”出自（）卦的象辞",
  "a": "A、渐",
  "b": "B、益",
  "c": "C、复",
  "d": "D、小过",
  "ret_a": "a",
  "ret_b": "b",
  "ret_c": "1",
  "ret_d": "d",
  "sel": "",
}
Trigrams[69] = {
  "key": "69",
  "q": "“神也者，妙万物而为言者也。”出自（）",
  "a": "A、《论语》",
  "b": "B、《易传》",
  "c": "C、《礼记》",
  "d": "D、《老子》",
  "ret_a": "a",
  "ret_b": "1",
  "ret_c": "c",
  "ret_d": "d",
  "sel": "",
}
/*
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

var limitquestTrigrams = 10
export default class TrigramsTest extends Component {
  $instance = getCurrentInstance()
  constructor(props) {
    super(props);
    this.state = {
      checked: [],
      Trigrams: [],
      ret: undefined,
      percent: "",
      extrainfo: [],
      retdetail: [],
      closetest: false,
      easy: false,
    }

  }
  componentDidMount() {
    var p = this.$instance.router.params
    if (undefined != p && undefined != p.test && "easy" == p.test) {
      this.setState({ easy: true })
      limitquestTrigrams = 5
    }else
    {
      this.setState({ easy: false })
      limitquestTrigrams = 10
    }
    Taro.showShareMenu({
      withShareTicket: true,
      showShareItems: ['shareAppMessage', 'shareTimeline', 'wechatFriends', 'wechatMoment']
    })
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
      ret: undefined,
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
    for (var i = 0; i < testTrigrams.length; i++) {
      var indextest = testTrigrams[i]
      if ("1" == testTrigrams[i].sel) {
        ret++
        testTrigrams[i].ret = true
      }
      else {
        testTrigrams[i].ret = false
      }
    }

    this.setState({
      Trigrams: testTrigrams,
      ret: ret,
      extrainfo: [],
      retdetail: [],
      closetest: true,

    })
  }

  shworesult() {
    if (this.state.ret == undefined) { return }
    else {
      var tips = "初出茅庐，砥砺前行"
      if (this.state.ret >= limitquestTrigrams) {
        tips = "高山仰望，世外高人"
      }
      else if (this.state.ret >= limitquestTrigrams - 2) {
        tips = "云游四海，路踏青云"
      }
      else if (this.state.ret >= limitquestTrigrams - 4) {
        tips = "逆水行舟，尚需努力"
      }
      return (
        <View className='at-row' style="flex-direction:column">
          <Text className='at-col' style="text-align:center;font-size:24px">您的得分：{this.state.ret}</Text>
          <Text style="text-align:center;font-size:16px">{tips}</Text>
        </View>)
    }
  }

  render() {
    const { Trigrams } = this.state;
    const content = Trigrams.map((item) => {
      if ("" != item.ret_d) {
        //　增加abcd随机洗牌位
        for (var i = 0; i < 3 && false == this.state.easy; i++) {
          var x = new Object()
          var T = Math.random()
          if (T > 0.8)//ac换位
          {
            x.x = item.c
            x.ret_x = item.ret_c
            item.c = item.a
            item.ret_c = item.ret_a
            item.a = x.x
            item.ret_a = x.ret_x
          }
          else if (T > 0.6)//ad换位
          {
            x.x = item.d
            x.ret_x = item.ret_d
            item.d = item.a
            item.ret_d = item.ret_a
            item.a = x.x
            item.ret_a = x.ret_x
          }
          else if (T > 0.4)//bc换位
          {
            x.x = item.b
            x.ret_x = item.ret_b
            item.b = item.c
            item.ret_b = item.ret_c
            item.c = x.x
            item.ret_c = x.ret_x
          }
          else if (T > 0.2)//ab换位
          {
            x.x = item.b
            x.ret_x = item.ret_b
            item.b = item.a
            item.ret_b = item.ret_a
            item.a = x.x
            item.ret_a = x.ret_x
          }
          else//cd换位
          {
            x.x = item.c
            x.ret_x = item.ret_c
            item.c = item.d
            item.ret_c = item.ret_d
            item.d = x.x
            item.ret_d = x.ret_x
          }
        }
        return (
          <View key={item.id}>
            <View className={'question'}>

              <Text >第{item.index + 1}题：{item.q}</Text>
              {true == item.ret ? checkright : (false == item.ret ? checkfalse : "")}</View>
            <AtRadio options={[{ label: item.a, value: item.ret_a }
              , { label: item.b, value: item.ret_b }
              , { label: item.c, value: item.ret_c }
              , { label: item.d, value: item.ret_d }]}
              value={this.state.checked[Number(item.key)]}
              onClick={(value) => this.updateIndex(value, item.key)} />
          </View>)
      } else {
        // 增加ab随机洗拍位
        if (Math.random() > 0.5 && false == this.state.easy) {
          var x = new Object()
          x.x = item.a
          x.ret_x = item.ret_a
          item.a = item.b
          item.ret_a = item.ret_b
          item.b = x.x
          item.ret_b = x.ret_x
        }
        return (
          <View key={item.id}>
            <View className={'question'}><Text >第{item.index + 1}题：{item.q}</Text>
              {true == item.ret ? checkright : (false == item.ret ? checkfalse : "")}
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
            {this.shworesult()}
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