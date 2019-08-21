
import React, {Component} from 'react';
import IconConfig from './IconConfig'
import Taro, { Component } from '@tarojs/taro'
import { View, Text ,Image,Button} from '@tarojs/components'
/*
系统的设计主要从探索这个步骤开始，我们碰到问题：首先是需要探索的，我们是通过测试（扩散社交行为）来完成的
当探索到问题的本质以后，需要去理解这个问题，以及背后的逻辑，那些是安全的，那些是不确定的，那些是有利的，那些是不利的，因此需要内容来进行识别，因此需要内容来解答自己的问题
当掌握内容以后，或者需要进一步了解内容的时候，则需要学习，甚至进一步学习，然后又回到探索的过程，检测自己的知识和判断
总结：
1、碰到已知问题（主动/被动过程）-》使用高效工具执行（工具的效率即收益）（我们需要提供工具）
2、碰到未知问题（主动/被动过程）-》咨询认识 -》变成已知问题 -》使用高效工具执行（学习过程需求最低成本）（我们需要提供提咨询，再工具，）
3、碰到未知问题（主动/被动过程）-》咨询认识 -》变成复杂问题 -》最低成本高效学习 -》变成已知问题 -》使用高效工具执行（学习过程需求最低成本）（我们提供教育培训，其次提供咨询，最后提供工具）
4、探索复杂问题（主动过程）-》 高成本学习过程（高投入低产出）（我们提供研究资源，基本无法商业化）
所以人生就是寻找问题并解决问题的过程，如果想扩大收益即解决成功，需要解决更大的问题，因此需要社交来扩大组织规模以提高安全和效率，所以需要一个足够良好的组织，因为探索问题以后需要分享所有成功到组织内，让组织效率更高，同时扩大组织规模
*/
RouteConfig={
    "MainPage":{"name":"月如钩","titlename":"知否社区","route":"MainPage","icon":IconConfig.IconLunarConfide},
    //社区是所有流量和需求的大入口，社区对沟通的需求是巨大的，必须免费获得流量
    "ExplorationTab":{"name":"知否社区","titlename":"知否社区","route":"ExplorationTab","icon":IconConfig.IconLunarConfide},
        "NightFmPage":{"name":"围炉夜话","titlename":"知否社区","route":"NightFmPage","icon":IconConfig.IconLunarConfide},
            "NightFmDetailPage":{"name":"夜话点评","titlename":"知否社区","route":"NightFmDetailPage","icon":IconConfig.IconNightFm},
        "ExplorationPage":{"name":"树洞寄语","titlename":"知否社区","route":"ExplorationPage","icon":IconConfig.IconNightFm},   
            "ExplorationDetailPage":{"name":"寄语详情","titlename":"寄语详情","route":"ExplorationDetailPage","icon":IconConfig.IconDetail},
            "ExplorationAnswerPage":{"name":"参与话题","titlename":"参与话题","route":"ExplorationAnswerPage","icon":IconConfig.IconLunarExplain},
            "ExplorationAskPage":{"name":"提个话题","titlename":"提个话题","route":"ExplorationAskPage","icon":IconConfig.IconDetail},
        //生活咨询服务包括所有咨询服务，可以给课程导流，其中简单的生活类咨询免费，心理咨询是需要收费的，因为必须立刻请人来协助解决，收费解决
        "ChatPage":{"name":"海棠依旧","titlename":"知否社区","route":"ChatPaged","icon":IconConfig.Iconchat},   
        "LunaranswerPage":{"name":"知否话题","route":"LunaranswerPage","icon":IconConfig.IconLunask},
        "LunaranswerPageFake":{"name":"知否话题","route":"LunaranswerPageFake","icon":IconConfig.IconLunask},
        "ConfidePage":{"name":"私信列表","route":"ConfidePage","icon":IconConfig.IconPagelines}, 
        "LunarConsultantListPage":{"name":"咨询师","route":"LunarConsultantListPage","icon":IconConfig.IconLunarchanges},
            "ConsultantDetailPage":{"name":"咨询师介绍","route":"ConsultantDetailPage","icon":IconConfig.IconLunask},
            "ConsultantChatPage":{"name":"咨询沟通","route":"ConsultantChatPage","icon":IconConfig.IconLunask}, 
        "MyExplorationPage":{"name":"我的话题","titlename":"我的话题","route":"MyExplorationPage","icon":IconConfig.IconUniversechanges},
        
    //工具是优先解决需求的工具，尽量免费
    "kitPage":{"name":"玄鸟测评","route":"kitPage","titlename":"玄鸟评测","icon":IconConfig.IconKit},
    "litekitPage":{"name":"玄鸟测评","route":"litekitPage","titlename":"玄鸟评测","icon":IconConfig.IconKit},
        //周易工具
        "UniversechangesPage":{"name":"周易八卦","route":"UniversechangesPage","icon":IconConfig.IconUniversechanges},
            "CalendarPage":{"name":"浑天甲子历","route":"UniversechangesPage","icon":IconConfig.CalendarIcon},
                "SixrandomNewPage":{"name":"六爻问卦","route":"SixrandomNewPage","icon":IconConfig.SixrandomSel},
                "SixrandomHistoryPage":{"name":"六爻历史","route":"SixrandomHistoryPage","icon":IconConfig.IconDetail},
                "EightrandomNewPage":{"name":"八字格局","route":"EightrandomNewPage","icon":IconConfig.EightrandomSel},
                "NumberMainPage":{"name":"数字八星","route":"NumberMainPage","icon":IconConfig.numluckySel},
                "EightrandomHistoryPage":{"name":"八字历史","route":"EightrandomHistoryPage","icon":IconConfig.IconDetail},
        //乾坤三式
        "ThreechangesPage":{"name":"乾坤三式","route":"ThreechangesPage","icon":IconConfig.IconThreechanges},
                "SixCourseNewPage":{"name":"六壬四课","route":"SixCourseNewPage","icon":IconConfig.IconSixCourse},
                "SixCourseHistoryPage":{"name":"六壬历史","route":"SixCourseHistoryPage","icon":IconConfig.IconDetail},
                "qimenNewPage":{"name":"奇门排盘","route":"qimenNewPage","icon":IconConfig.Iconqimen},
                "qimenMainPage":{"name":"奇门遁甲","route":"qimenHistoryPage","icon":IconConfig.Iconqimen},
                "qimenHistoryPage":{"name":"奇门历史","route":"qimenHistoryPage","icon":IconConfig.IconDetail},
                "taiyiNewPage":{"name":"太乙神数","route":"taiyiNewPage","icon":IconConfig.Icontaiyi},
                "taiyiHistoryPage":{"name":"太乙历史","route":"taiyiHistoryPage","icon":IconConfig.IconDetail},
        //星座星盘
        "ChangesuniversePage":{"name":"塔罗星盘","route":"ChangesuniversePage","icon":IconConfig.IconChangesuniverse},
            "StarInfoPage":{"name":"星座知识","route":"StarInfoPage","icon":IconConfig.IconStarInfo},
                "GamblePage":{"name":"星座骰子","route":"GamblePage","icon":IconConfig.IconGamble},       
                "AstroPage":{"name":"星盘人格","route":"AstroPage","icon":IconConfig.AstroPage},
                "TarotTab":{"name":"塔罗占卜","route":"TarotTab","icon":IconConfig.TarotTab},
                    "TarotPage":{"name":"圣三角占卜","route":"TarotPage","icon":IconConfig.TarotPage},
                    "TarotVenusPage":{"name":"爱情维纳斯","route":"TarotVenusPage","icon":IconConfig.TarotVenus},
                    "TarotStarofDavidPage":{"name":"决策六芒星","route":"TarotStarofDavidPage","icon":IconConfig.TarotStarofDavid},
                    "TarotCeltsPage":{"name":"凯尔特十字","route":"TarotCeltsPage","icon":IconConfig.TarotCelts},
        //心理学辅助测试
        "PsychTestPage":{"name":"心理性格","route":"PsychTestPage","icon":IconConfig.IconQuiz},     
            "MBTIModule":{"name":"职业性格测试","route":"MBTIModule","icon":IconConfig.IconMBTI},
            "EnneagramModule":{"name":"九型人格测试","route":"EnneagramModule","icon":IconConfig.IconEnneagram},
            "HollandModule":{"name":"霍兰德测试","route":"HollandModule","icon":IconConfig.IconHolland},
        //亲属查询工具
        "relationshipcalcpage":{"name":"亲戚关系查询","route":"relationshipcalcpage","icon":IconConfig.IconLunarCourse},
        "SloganShare":{"name":"开屏语","route":"SloganShare","icon":IconConfig.IconSloganShare},
        //心理咨询录音工具
        "ConsultantAudioRecord":{"name":"咨询录音","route":"ConsultantAudioRecord","icon":IconConfig.ConfigIcon},
        "permutationcombination":{"name":"排列组合计算器","route":"permutationcombination","icon":IconConfig.ConfigIcon},
        
    
    //课程是进一步提高成本，解决问题的方法，合理收费
    "LunarCoursePage":{"name":"思无邪","route":"LunarCoursePage","titlename":"无邪书院","icon":IconConfig.IconLunarCourse},
        "AncientChineseLiteraturePage":{"name":"国风","route":"LanguagesCoursePage","icon":IconConfig.IconLunarCourse},
            "UniversBookPage":{"name":"易经","route":"UniversBookPage","icon":IconConfig.IconLunarCourse},
            "OldBookPage":{"name":"老子","route":"","icon":IconConfig.IconLunarCourse},
            "ZhuangBookPage":{"name":"庄子","route":"","icon":IconConfig.IconLunarCourse},
            "LunyuBookPage":{"name":"论语","route":"","icon":IconConfig.IconLunarCourse},
            "MengziBookPage":{"name":"孟子","route":"","icon":IconConfig.IconLunarCourse},
            "ZhongyongBookPage":{"name":"中庸","route":"","icon":IconConfig.IconLunarCourse},
            "DaxueBookPage":{"name":"大学","route":"","icon":IconConfig.IconLunarCourse},
            "ShijingBookPage":{"name":"诗经","route":"","icon":IconConfig.IconLunarCourse},
            "ShangshuBookPage":{"name":"尚书","route":"","icon":IconConfig.IconLunarCourse},
            "LijiBookPage":{"name":"礼记","route":"","icon":IconConfig.IconLunarCourse},
            "ChunqiuBookPage":{"name":"春秋","route":"","icon":IconConfig.IconLunarCourse},
        "AncientChineseLiteratureExtPage":{"name":"春秋","route":"LanguagesCourseExtPage","icon":IconConfig.IconLunarCourse},
            "zhanguoPage":{"name":"战国策","route":"","icon":IconConfig.IconLunarCourse},
            "guiguziPage":{"name":"鬼谷子","route":"","icon":IconConfig.IconLunarCourse},
            "guanziPage":{"name":"管子","route":"","icon":IconConfig.IconLunarCourse},
            "hanfeiziPage":{"name":"韩非子","route":"","icon":IconConfig.IconLunarCourse},
            "chuciPage":{"name":"楚辞","route":"","icon":IconConfig.IconLunarCourse},
            "sushuPage":{"name":"素书","route":"","icon":IconConfig.IconLunarCourse},
            "chunqiuzuozhuanPage":{"name":"春秋左传","route":"","icon":IconConfig.IconLunarCourse},
            "liutaosanluePage":{"name":"六韬三略","route":"","icon":IconConfig.IconLunarCourse},
            "sunzibingfaPage":{"name":"孙子兵法","route":"","icon":IconConfig.IconLunarCourse},
            "sanshiliujiPage":{"name":"三十六计","route":"","icon":IconConfig.IconLunarCourse},
        "AncientChineseKidPage":{"name":"蒙学","route":"LanguagesCourseKidPage","icon":IconConfig.IconLunarCourse},
            "zhanguoPage":{"name":"百家姓","route":"","icon":IconConfig.IconLunarCourse},
            "zhanguoPage":{"name":"千字文","route":"","icon":IconConfig.IconLunarCourse},
            "zhanguoPage":{"name":"三字经","route":"","icon":IconConfig.IconLunarCourse},
            "zhanguoPage":{"name":"朱子家训","route":"","icon":IconConfig.IconLunarCourse},
            "zhanguoPage":{"name":"增广贤文","route":"","icon":IconConfig.IconLunarCourse},
            "zhanguoPage":{"name":"千家诗","route":"","icon":IconConfig.IconLunarCourse},
            "zhanguoPage":{"name":"古文观止","route":"","icon":IconConfig.IconLunarCourse},
            "zhanguoPage":{"name":"唐诗三百首","route":"","icon":IconConfig.IconLunarCourse},
            "zhanguoPage":{"name":"宋词三百首","route":"","icon":IconConfig.IconLunarCourse},
            "zhanguoPage":{"name":"元曲三百首","route":"","icon":IconConfig.IconLunarCourse},
        "AncientChineseKidPage":{"name":"诗三百","route":"LanguagesCourseKidPage","icon":IconConfig.IconLunarCourse},
            "zhanguoPage":{"name":"山海经","route":"","icon":IconConfig.IconLunarCourse},
            "zhanguoPage":{"name":"墨子","route":"","icon":IconConfig.IconLunarCourse},
            "zhanguoPage":{"name":"荀子","route":"","icon":IconConfig.IconLunarCourse},
            "zhanguoPage":{"name":"左传","route":"","icon":IconConfig.IconLunarCourse},
            "zhanguoPage":{"name":"吕氏春秋","route":"","icon":IconConfig.IconLunarCourse},
            "zhanguoPage":{"name":"史记","route":"","icon":IconConfig.IconLunarCourse},
            "zhanguoPage":{"name":"冰鉴","route":"","icon":IconConfig.IconLunarCourse},
            "zhanguoPage":{"name":"声律启蒙","route":"","icon":IconConfig.IconLunarCourse},
            "zhanguoPage":{"name":"颜氏家训","route":"","icon":IconConfig.IconLunarCourse},
            "zhanguoPage":{"name":"世说新语","route":"","icon":IconConfig.IconLunarCourse},
            "zhanguoPage":{"name":"幼学琼林","route":"","icon":IconConfig.IconLunarCourse},
            "zhanguoPage":{"name":"资治通鉴","route":"","icon":IconConfig.IconLunarCourse},
            "zhanguoPage":{"name":"金刚经","route":"","icon":IconConfig.IconLunarCourse},
            "zhanguoPage":{"name":"心经坛经","route":"","icon":IconConfig.IconLunarCourse},
            "zhanguoPage":{"name":"醒世恒言","route":"","icon":IconConfig.IconLunarCourse},
            "zhanguoPage":{"name":"菜根谭","route":"","icon":IconConfig.IconLunarCourse},
            "zhanguoPage":{"name":"黄帝内经","route":"","icon":IconConfig.IconLunarCourse},
            "zhanguoPage":{"name":"二十五史","route":"","icon":IconConfig.IconLunarCourse},
            "zhanguoPage":{"name":"纳兰词","route":"","icon":IconConfig.IconLunarCourse},
            "zhanguoPage":{"name":"说文解字","route":"","icon":IconConfig.IconLunarCourse},
            
            
            
            


    "MyPage":{"name":"我的","card":"管理","route":"MyPage","icon":IconConfig.IconPerson},
        "MyconfigPage":{"name":"我的信息","route":"","icon":IconConfig.MyConfigIcon},
        "GeneralPage":{"name":"通用配置","route":"","icon":IconConfig.ConfigIcon}, 
         
    "DetailInfo":{"name":"详细信息","route":"","icon":IconConfig.IconDetail},
    "ScreenImage":{"name":"截图分享","route":"","icon":IconConfig.IconScreen},
    "RefreshImage":{"name":"刷新","route":"","icon":IconConfig.IconCyclefresh},
    "Lunarsubmit":{"name":"咨询提交","route":"","icon":IconConfig.IconSubmit},
    "submit":{"name":"提交","route":"","icon":IconConfig.IconSubmit},
    "malecall":{"name":"联系方式","route":"","icon":IconConfig.Iconmale},
    "femalecall":{"name":"联系方式","route":"","icon":IconConfig.Iconfemale},
    "business":{"name":"商务合作","route":"","icon":IconConfig.Iconbusiness},
    "email":{"name":"电子邮件","route":"","icon":IconConfig.Iconemail},
    "qrcode":{"name":"扫码关注公众号","route":"","icon":IconConfig.Iconqrcode},
    "wechat":{"name":"微信搜索公众号","route":"","icon":IconConfig.Iconqwechat},
    
    "GamblePageButton":{"name":"骰子","route":"","icon":IconConfig.IconGambleButton},
    "BeginImage":{"name":"开牌","route":"","icon":IconConfig.TarotStart},

    "AudioRecord":{"name":"录音","route":"","icon":IconConfig.IconAudioRecord},
    "AudioPlay":{"name":"播放","route":"","icon":IconConfig.IconAudioPlay},
    "AudioStop":{"name":"停止","route":"","icon":IconConfig.IconAudioStop},
    "AudioPause":{"name":"暂停","route":"","icon":IconConfig.IconAudioPause},

    "IconNext":{"name":" ","route":"","icon":IconConfig.IconNext},
    "IconLast":{"name":" ","route":"","icon":IconConfig.IconLast},

}
module.exports=RouteConfig;  