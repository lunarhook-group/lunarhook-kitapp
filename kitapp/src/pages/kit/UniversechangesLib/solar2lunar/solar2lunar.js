/**
* @1900-2100鍖洪棿鍐呯殑鍏巻銆佸啘鍘嗕簰杞�
* @charset UTF-8
* @Author  Jea鏉�(JJonline@JJonline.Cn) 
* @Time    2014-7-21
* @Time    2016-8-13 Fixed 2033hex銆丄ttribution Annals
* @Time    2016-9-25 Fixed lunar LeapMonth Param Bug
* @Time    2017-7-24 Fixed use getTerm Func Param Error.use solar year,NOT lunar year
* @Version 1.0.3
* @鍏巻杞啘鍘嗭細calendar.solar2lunar(1987,11,01); //[you can ignore params of prefix 0]
* @鍐滃巻杞叕鍘嗭細calendar.lunar2solar(1987,09,10); //[you can ignore params of prefix 0]
*/
var calendar = {

    /**
      * 鍐滃巻1900-2100鐨勬鼎澶у皬淇℃伅琛�
      * @Array Of Property
      * @return Hex 
      */
    lunarInfo:[0x04bd8,0x04ae0,0x0a570,0x054d5,0x0d260,0x0d950,0x16554,0x056a0,0x09ad0,0x055d2,//1900-1909
            0x04ae0,0x0a5b6,0x0a4d0,0x0d250,0x1d255,0x0b540,0x0d6a0,0x0ada2,0x095b0,0x14977,//1910-1919
            0x04970,0x0a4b0,0x0b4b5,0x06a50,0x06d40,0x1ab54,0x02b60,0x09570,0x052f2,0x04970,//1920-1929
            0x06566,0x0d4a0,0x0ea50,0x06e95,0x05ad0,0x02b60,0x186e3,0x092e0,0x1c8d7,0x0c950,//1930-1939
            0x0d4a0,0x1d8a6,0x0b550,0x056a0,0x1a5b4,0x025d0,0x092d0,0x0d2b2,0x0a950,0x0b557,//1940-1949
            0x06ca0,0x0b550,0x15355,0x04da0,0x0a5b0,0x14573,0x052b0,0x0a9a8,0x0e950,0x06aa0,//1950-1959
            0x0aea6,0x0ab50,0x04b60,0x0aae4,0x0a570,0x05260,0x0f263,0x0d950,0x05b57,0x056a0,//1960-1969
            0x096d0,0x04dd5,0x04ad0,0x0a4d0,0x0d4d4,0x0d250,0x0d558,0x0b540,0x0b6a0,0x195a6,//1970-1979
            0x095b0,0x049b0,0x0a974,0x0a4b0,0x0b27a,0x06a50,0x06d40,0x0af46,0x0ab60,0x09570,//1980-1989
            0x04af5,0x04970,0x064b0,0x074a3,0x0ea50,0x06b58,0x055c0,0x0ab60,0x096d5,0x092e0,//1990-1999
            0x0c960,0x0d954,0x0d4a0,0x0da50,0x07552,0x056a0,0x0abb7,0x025d0,0x092d0,0x0cab5,//2000-2009
            0x0a950,0x0b4a0,0x0baa4,0x0ad50,0x055d9,0x04ba0,0x0a5b0,0x15176,0x052b0,0x0a930,//2010-2019
            0x07954,0x06aa0,0x0ad50,0x05b52,0x04b60,0x0a6e6,0x0a4e0,0x0d260,0x0ea65,0x0d530,//2020-2029
            0x05aa0,0x076a3,0x096d0,0x04afb,0x04ad0,0x0a4d0,0x1d0b6,0x0d250,0x0d520,0x0dd45,//2030-2039
            0x0b5a0,0x056d0,0x055b2,0x049b0,0x0a577,0x0a4b0,0x0aa50,0x1b255,0x06d20,0x0ada0,//2040-2049
            /**Add By JJonline@JJonline.Cn**/
            0x14b63,0x09370,0x049f8,0x04970,0x064b0,0x168a6,0x0ea50, 0x06b20,0x1a6c4,0x0aae0,//2050-2059
            0x0a2e0,0x0d2e3,0x0c960,0x0d557,0x0d4a0,0x0da50,0x05d55,0x056a0,0x0a6d0,0x055d4,//2060-2069
            0x052d0,0x0a9b8,0x0a950,0x0b4a0,0x0b6a6,0x0ad50,0x055a0,0x0aba4,0x0a5b0,0x052b0,//2070-2079
            0x0b273,0x06930,0x07337,0x06aa0,0x0ad50,0x14b55,0x04b60,0x0a570,0x054e4,0x0d160,//2080-2089
            0x0e968,0x0d520,0x0daa0,0x16aa6,0x056d0,0x04ae0,0x0a9d4,0x0a2d0,0x0d150,0x0f252,//2090-2099
            0x0d520],//2100

    /**
      * 鍏巻姣忎釜鏈堜唤鐨勫ぉ鏁版櫘閫氳〃
      * @Array Of Property
      * @return Number 
      */
    solarMonth:[31,28,31,30,31,30,31,31,30,31,30,31],

    /**
      * 澶╁共鍦版敮涔嬪ぉ骞查€熸煡琛�
      * @Array Of Property trans["鐢�","涔�","涓�","涓�","鎴�","宸�","搴�","杈�","澹�","鐧�"]
      * @return Cn string 
      */
    Gan:["\u7532","\u4e59","\u4e19","\u4e01","\u620a","\u5df1","\u5e9a","\u8f9b","\u58ec","\u7678"],

    /**
      * 澶╁共鍦版敮涔嬪湴鏀€熸煡琛�
      * @Array Of Property 
      * @trans["瀛�","涓�","瀵�","鍗�","杈�","宸�","鍗�","鏈�","鐢�","閰�","鎴�","浜�"]
      * @return Cn string 
      */
    Zhi:["\u5b50","\u4e11","\u5bc5","\u536f","\u8fb0","\u5df3","\u5348","\u672a","\u7533","\u9149","\u620c","\u4ea5"],

    /**
      * 澶╁共鍦版敮涔嬪湴鏀€熸煡琛�<=>鐢熻倴
      * @Array Of Property 
      * @trans["榧�","鐗�","铏�","鍏�","榫�","铔�","椹�","缇�","鐚�","楦�","鐙�","鐚�"]
      * @return Cn string 
      */
    Animals:["\u9f20","\u725b","\u864e","\u5154","\u9f99","\u86c7","\u9a6c","\u7f8a","\u7334","\u9e21","\u72d7","\u732a"],

    /**
      * 24鑺傛皵閫熸煡琛�
      * @Array Of Property 
      * @trans["灏忓瘨","澶у瘨","绔嬫槬","闆ㄦ按","鎯婅洶","鏄ュ垎","娓呮槑","璋烽洦","绔嬪","灏忔弧","鑺掔","澶忚嚦","灏忔殤","澶ф殤","绔嬬","澶勬殤","鐧介湶","绉嬪垎","瀵掗湶","闇滈檷","绔嬪啲","灏忛洩","澶ч洩","鍐嚦"]
      * @return Cn string 
      */
    solarTerm:["\u5c0f\u5bd2","\u5927\u5bd2","\u7acb\u6625","\u96e8\u6c34","\u60ca\u86f0","\u6625\u5206","\u6e05\u660e","\u8c37\u96e8","\u7acb\u590f","\u5c0f\u6ee1","\u8292\u79cd","\u590f\u81f3","\u5c0f\u6691","\u5927\u6691","\u7acb\u79cb","\u5904\u6691","\u767d\u9732","\u79cb\u5206","\u5bd2\u9732","\u971c\u964d","\u7acb\u51ac","\u5c0f\u96ea","\u5927\u96ea","\u51ac\u81f3"],

    /**
      * 1900-2100鍚勫勾鐨�24鑺傛皵鏃ユ湡閫熸煡琛�
      * @Array Of Property 
      * @return 0x string For splice
      */
    sTermInfo:['9778397bd097c36b0b6fc9274c91aa','97b6b97bd19801ec9210c965cc920e','97bcf97c3598082c95f8c965cc920f',
              '97bd0b06bdb0722c965ce1cfcc920f','b027097bd097c36b0b6fc9274c91aa','97b6b97bd19801ec9210c965cc920e',
              '97bcf97c359801ec95f8c965cc920f','97bd0b06bdb0722c965ce1cfcc920f','b027097bd097c36b0b6fc9274c91aa',
              '97b6b97bd19801ec9210c965cc920e','97bcf97c359801ec95f8c965cc920f','97bd0b06bdb0722c965ce1cfcc920f',
              'b027097bd097c36b0b6fc9274c91aa','9778397bd19801ec9210c965cc920e','97b6b97bd19801ec95f8c965cc920f',
              '97bd09801d98082c95f8e1cfcc920f','97bd097bd097c36b0b6fc9210c8dc2','9778397bd197c36c9210c9274c91aa',
              '97b6b97bd19801ec95f8c965cc920e','97bd09801d98082c95f8e1cfcc920f','97bd097bd097c36b0b6fc9210c8dc2',
              '9778397bd097c36c9210c9274c91aa','97b6b97bd19801ec95f8c965cc920e','97bcf97c3598082c95f8e1cfcc920f',
              '97bd097bd097c36b0b6fc9210c8dc2','9778397bd097c36c9210c9274c91aa','97b6b97bd19801ec9210c965cc920e',
              '97bcf97c3598082c95f8c965cc920f','97bd097bd097c35b0b6fc920fb0722','9778397bd097c36b0b6fc9274c91aa',
              '97b6b97bd19801ec9210c965cc920e','97bcf97c3598082c95f8c965cc920f','97bd097bd097c35b0b6fc920fb0722',
              '9778397bd097c36b0b6fc9274c91aa','97b6b97bd19801ec9210c965cc920e','97bcf97c359801ec95f8c965cc920f',
              '97bd097bd097c35b0b6fc920fb0722','9778397bd097c36b0b6fc9274c91aa','97b6b97bd19801ec9210c965cc920e',
              '97bcf97c359801ec95f8c965cc920f','97bd097bd097c35b0b6fc920fb0722','9778397bd097c36b0b6fc9274c91aa',
              '97b6b97bd19801ec9210c965cc920e','97bcf97c359801ec95f8c965cc920f','97bd097bd07f595b0b6fc920fb0722',
              '9778397bd097c36b0b6fc9210c8dc2','9778397bd19801ec9210c9274c920e','97b6b97bd19801ec95f8c965cc920f',
              '97bd07f5307f595b0b0bc920fb0722','7f0e397bd097c36b0b6fc9210c8dc2','9778397bd097c36c9210c9274c920e',
              '97b6b97bd19801ec95f8c965cc920f','97bd07f5307f595b0b0bc920fb0722','7f0e397bd097c36b0b6fc9210c8dc2',
              '9778397bd097c36c9210c9274c91aa','97b6b97bd19801ec9210c965cc920e','97bd07f1487f595b0b0bc920fb0722',
              '7f0e397bd097c36b0b6fc9210c8dc2','9778397bd097c36b0b6fc9274c91aa','97b6b97bd19801ec9210c965cc920e',
              '97bcf7f1487f595b0b0bb0b6fb0722','7f0e397bd097c35b0b6fc920fb0722','9778397bd097c36b0b6fc9274c91aa',
              '97b6b97bd19801ec9210c965cc920e','97bcf7f1487f595b0b0bb0b6fb0722','7f0e397bd097c35b0b6fc920fb0722',
              '9778397bd097c36b0b6fc9274c91aa','97b6b97bd19801ec9210c965cc920e','97bcf7f1487f531b0b0bb0b6fb0722',
              '7f0e397bd097c35b0b6fc920fb0722','9778397bd097c36b0b6fc9274c91aa','97b6b97bd19801ec9210c965cc920e',
              '97bcf7f1487f531b0b0bb0b6fb0722','7f0e397bd07f595b0b6fc920fb0722','9778397bd097c36b0b6fc9274c91aa',
              '97b6b97bd19801ec9210c9274c920e','97bcf7f0e47f531b0b0bb0b6fb0722','7f0e397bd07f595b0b0bc920fb0722',
              '9778397bd097c36b0b6fc9210c91aa','97b6b97bd197c36c9210c9274c920e','97bcf7f0e47f531b0b0bb0b6fb0722',
              '7f0e397bd07f595b0b0bc920fb0722','9778397bd097c36b0b6fc9210c8dc2','9778397bd097c36c9210c9274c920e',
              '97b6b7f0e47f531b0723b0b6fb0722','7f0e37f5307f595b0b0bc920fb0722','7f0e397bd097c36b0b6fc9210c8dc2',
              '9778397bd097c36b0b70c9274c91aa','97b6b7f0e47f531b0723b0b6fb0721','7f0e37f1487f595b0b0bb0b6fb0722',
              '7f0e397bd097c35b0b6fc9210c8dc2','9778397bd097c36b0b6fc9274c91aa','97b6b7f0e47f531b0723b0b6fb0721',
              '7f0e27f1487f595b0b0bb0b6fb0722','7f0e397bd097c35b0b6fc920fb0722','9778397bd097c36b0b6fc9274c91aa',
              '97b6b7f0e47f531b0723b0b6fb0721','7f0e27f1487f531b0b0bb0b6fb0722','7f0e397bd097c35b0b6fc920fb0722',
              '9778397bd097c36b0b6fc9274c91aa','97b6b7f0e47f531b0723b0b6fb0721','7f0e27f1487f531b0b0bb0b6fb0722',
              '7f0e397bd097c35b0b6fc920fb0722','9778397bd097c36b0b6fc9274c91aa','97b6b7f0e47f531b0723b0b6fb0721',
              '7f0e27f1487f531b0b0bb0b6fb0722','7f0e397bd07f595b0b0bc920fb0722','9778397bd097c36b0b6fc9274c91aa',
              '97b6b7f0e47f531b0723b0787b0721','7f0e27f0e47f531b0b0bb0b6fb0722','7f0e397bd07f595b0b0bc920fb0722',
              '9778397bd097c36b0b6fc9210c91aa','97b6b7f0e47f149b0723b0787b0721','7f0e27f0e47f531b0723b0b6fb0722',
              '7f0e397bd07f595b0b0bc920fb0722','9778397bd097c36b0b6fc9210c8dc2','977837f0e37f149b0723b0787b0721',
              '7f07e7f0e47f531b0723b0b6fb0722','7f0e37f5307f595b0b0bc920fb0722','7f0e397bd097c35b0b6fc9210c8dc2',
              '977837f0e37f14998082b0787b0721','7f07e7f0e47f531b0723b0b6fb0721','7f0e37f1487f595b0b0bb0b6fb0722',
              '7f0e397bd097c35b0b6fc9210c8dc2','977837f0e37f14998082b0787b06bd','7f07e7f0e47f531b0723b0b6fb0721',
              '7f0e27f1487f531b0b0bb0b6fb0722','7f0e397bd097c35b0b6fc920fb0722','977837f0e37f14998082b0787b06bd',
              '7f07e7f0e47f531b0723b0b6fb0721','7f0e27f1487f531b0b0bb0b6fb0722','7f0e397bd097c35b0b6fc920fb0722',
              '977837f0e37f14998082b0787b06bd','7f07e7f0e47f531b0723b0b6fb0721','7f0e27f1487f531b0b0bb0b6fb0722',
              '7f0e397bd07f595b0b0bc920fb0722','977837f0e37f14998082b0787b06bd','7f07e7f0e47f531b0723b0b6fb0721',
              '7f0e27f1487f531b0b0bb0b6fb0722','7f0e397bd07f595b0b0bc920fb0722','977837f0e37f14998082b0787b06bd',
              '7f07e7f0e47f149b0723b0787b0721','7f0e27f0e47f531b0b0bb0b6fb0722','7f0e397bd07f595b0b0bc920fb0722',
              '977837f0e37f14998082b0723b06bd','7f07e7f0e37f149b0723b0787b0721','7f0e27f0e47f531b0723b0b6fb0722',
              '7f0e397bd07f595b0b0bc920fb0722','977837f0e37f14898082b0723b02d5','7ec967f0e37f14998082b0787b0721',
              '7f07e7f0e47f531b0723b0b6fb0722','7f0e37f1487f595b0b0bb0b6fb0722','7f0e37f0e37f14898082b0723b02d5',
              '7ec967f0e37f14998082b0787b0721','7f07e7f0e47f531b0723b0b6fb0722','7f0e37f1487f531b0b0bb0b6fb0722',
              '7f0e37f0e37f14898082b0723b02d5','7ec967f0e37f14998082b0787b06bd','7f07e7f0e47f531b0723b0b6fb0721',
              '7f0e37f1487f531b0b0bb0b6fb0722','7f0e37f0e37f14898082b072297c35','7ec967f0e37f14998082b0787b06bd',
              '7f07e7f0e47f531b0723b0b6fb0721','7f0e27f1487f531b0b0bb0b6fb0722','7f0e37f0e37f14898082b072297c35',
              '7ec967f0e37f14998082b0787b06bd','7f07e7f0e47f531b0723b0b6fb0721','7f0e27f1487f531b0b0bb0b6fb0722',
              '7f0e37f0e366aa89801eb072297c35','7ec967f0e37f14998082b0787b06bd','7f07e7f0e47f149b0723b0787b0721',
              '7f0e27f1487f531b0b0bb0b6fb0722','7f0e37f0e366aa89801eb072297c35','7ec967f0e37f14998082b0723b06bd',
              '7f07e7f0e47f149b0723b0787b0721','7f0e27f0e47f531b0723b0b6fb0722','7f0e37f0e366aa89801eb072297c35',
              '7ec967f0e37f14998082b0723b06bd','7f07e7f0e37f14998083b0787b0721','7f0e27f0e47f531b0723b0b6fb0722',
              '7f0e37f0e366aa89801eb072297c35','7ec967f0e37f14898082b0723b02d5','7f07e7f0e37f14998082b0787b0721',
              '7f07e7f0e47f531b0723b0b6fb0722','7f0e36665b66aa89801e9808297c35','665f67f0e37f14898082b0723b02d5',
              '7ec967f0e37f14998082b0787b0721','7f07e7f0e47f531b0723b0b6fb0722','7f0e36665b66a449801e9808297c35',
              '665f67f0e37f14898082b0723b02d5','7ec967f0e37f14998082b0787b06bd','7f07e7f0e47f531b0723b0b6fb0721',
              '7f0e36665b66a449801e9808297c35','665f67f0e37f14898082b072297c35','7ec967f0e37f14998082b0787b06bd',
              '7f07e7f0e47f531b0723b0b6fb0721','7f0e26665b66a449801e9808297c35','665f67f0e37f1489801eb072297c35',
              '7ec967f0e37f14998082b0787b06bd','7f07e7f0e47f531b0723b0b6fb0721','7f0e27f1487f531b0b0bb0b6fb0722'],

    /**
      * 鏁板瓧杞腑鏂囬€熸煡琛�
      * @Array Of Property 
      * @trans ['鏃�','涓€','浜�','涓�','鍥�','浜�','鍏�','涓�','鍏�','涔�','鍗�']
      * @return Cn string 
      */
    nStr1:["\u65e5","\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d","\u4e03","\u516b","\u4e5d","\u5341"],

    /**
      * 鏃ユ湡杞啘鍘嗙О鍛奸€熸煡琛�
      * @Array Of Property 
      * @trans ['鍒�','鍗�','寤�','鍗�']
      * @return Cn string 
      */
    nStr2:["\u521d","\u5341","\u5eff","\u5345"],

    /**
      * 鏈堜唤杞啘鍘嗙О鍛奸€熸煡琛�
      * @Array Of Property 
      * @trans ['姝�','涓€','浜�','涓�','鍥�','浜�','鍏�','涓�','鍏�','涔�','鍗�','鍐�','鑵�']
      * @return Cn string 
      */
    nStr3:["\u6b63","\u4e8c","\u4e09","\u56db","\u4e94","\u516d","\u4e03","\u516b","\u4e5d","\u5341","\u51ac","\u814a"],

    /**
      * 杩斿洖鍐滃巻y骞翠竴鏁村勾鐨勬€诲ぉ鏁�
      * @param lunar Year
      * @return Number
      * @eg:var count = calendar.lYearDays(1987) ;//count=387
      */
    lYearDays:function(y) {
        var i, sum = 348;
        for(i=0x8000; i>0x8; i>>=1) { sum += (calendar.lunarInfo[y-1900] & i)? 1: 0; }
        return(sum+calendar.leapDays(y));
    },

    /**
      * 杩斿洖鍐滃巻y骞撮棸鏈堟槸鍝釜鏈堬紱鑻骞存病鏈夐棸鏈� 鍒欒繑鍥�0
      * @param lunar Year
      * @return Number (0-12)
      * @eg:var leapMonth = calendar.leapMonth(1987) ;//leapMonth=6
      */
    leapMonth:function(y) { //闂板瓧缂栫爜 \u95f0
        return(calendar.lunarInfo[y-1900] & 0xf);
    },

    /**
      * 杩斿洖鍐滃巻y骞撮棸鏈堢殑澶╂暟 鑻ヨ骞存病鏈夐棸鏈堝垯杩斿洖0
      * @param lunar Year
      * @return Number (0銆�29銆�30)
      * @eg:var leapMonthDay = calendar.leapDays(1987) ;//leapMonthDay=29
      */
    leapDays:function(y) {
        if(calendar.leapMonth(y))  { 
            return((calendar.lunarInfo[y-1900] & 0x10000)? 30: 29); 
        }
        return(0);
    },

    /**
      * 杩斿洖鍐滃巻y骞磎鏈堬紙闈為棸鏈堬級鐨勬€诲ぉ鏁帮紝璁＄畻m涓洪棸鏈堟椂鐨勫ぉ鏁拌浣跨敤leapDays鏂规硶
      * @param lunar Year
      * @return Number (-1銆�29銆�30)
      * @eg:var MonthDay = calendar.monthDays(1987,9) ;//MonthDay=29
      */
    monthDays:function(y,m) {
        if(m>12 || m<1) {return -1}//鏈堜唤鍙傛暟浠�1鑷�12锛屽弬鏁伴敊璇繑鍥�-1
        return( (calendar.lunarInfo[y-1900] & (0x10000>>m))? 30: 29 );
    },

    /**
      * 杩斿洖鍏巻(!)y骞磎鏈堢殑澶╂暟
      * @param solar Year
      * @return Number (-1銆�28銆�29銆�30銆�31)
      * @eg:var solarMonthDay = calendar.leapDays(1987) ;//solarMonthDay=30
      */
    solarDays:function(y,m) {
        if(m>12 || m<1) {return -1} //鑻ュ弬鏁伴敊璇� 杩斿洖-1
        var ms = m-1;
        if(ms==1) { //2鏈堜唤鐨勯棸骞宠寰嬫祴绠楀悗纭杩斿洖28鎴�29
            return(((y%4 == 0) && (y%100 != 0) || (y%400 == 0))? 29: 28);
        }else {
            return(calendar.solarMonth[ms]);
        }
    },

    /**
     * 鍐滃巻骞翠唤杞崲涓哄共鏀邯骞�
     * @param  lYear 鍐滃巻骞寸殑骞翠唤鏁�
     * @return Cn string
     */
    toGanZhiYear:function(lYear) {
        var ganKey = (lYear - 3) % 10;
        var zhiKey = (lYear - 3) % 12;
        if(ganKey == 0) ganKey = 10;//濡傛灉浣欐暟涓�0鍒欎负鏈€鍚庝竴涓ぉ骞�
        if(zhiKey == 0) zhiKey = 12;//濡傛灉浣欐暟涓�0鍒欎负鏈€鍚庝竴涓湴鏀�
        return calendar.Gan[ganKey-1] + calendar.Zhi[zhiKey-1];
        
    },

    /**
     * 鍏巻鏈堛€佹棩鍒ゆ柇鎵€灞炴槦搴�
     * @param  cMonth [description]
     * @param  cDay [description]
     * @return Cn string
     */
    toAstro:function(cMonth,cDay) {
        var s   = "\u9b54\u7faf\u6c34\u74f6\u53cc\u9c7c\u767d\u7f8a\u91d1\u725b\u53cc\u5b50\u5de8\u87f9\u72ee\u5b50\u5904\u5973\u5929\u79e4\u5929\u874e\u5c04\u624b\u9b54\u7faf";
        var arr = [20,19,21,21,21,22,23,23,23,23,22,22];
        return s.substr(cMonth*2 - (cDay < arr[cMonth-1] ? 2 : 0),2) + "\u5ea7";//搴�
    },

    /**
      * 浼犲叆offset鍋忕Щ閲忚繑鍥炲共鏀�
      * @param offset 鐩稿鐢插瓙鐨勫亸绉婚噺
      * @return Cn string
      */
    toGanZhi:function(offset) {
        return calendar.Gan[offset%10] + calendar.Zhi[offset%12];
    },

    /**
      * 浼犲叆鍏巻(!)y骞磋幏寰楄骞寸n涓妭姘旂殑鍏巻鏃ユ湡
      * @param y鍏巻骞�(1900-2100)锛沶浜屽崄鍥涜妭姘斾腑鐨勭鍑犱釜鑺傛皵(1~24)锛涗粠n=1(灏忓瘨)绠楄捣 
      * @return day Number
      * @eg:var _24 = calendar.getTerm(1987,3) ;//_24=4;鎰忓嵆1987骞�2鏈�4鏃ョ珛鏄�
      */
    getTerm:function(y,n) {
        if(y<1900 || y>2100) {return -1;}
        if(n<1 || n>24) {return -1;}
        var _table = calendar.sTermInfo[y-1900];
        var _info = [
            parseInt('0x'+_table.substr(0,5)).toString() ,
            parseInt('0x'+_table.substr(5,5)).toString(),
            parseInt('0x'+_table.substr(10,5)).toString(),
            parseInt('0x'+_table.substr(15,5)).toString(),
            parseInt('0x'+_table.substr(20,5)).toString(),
            parseInt('0x'+_table.substr(25,5)).toString()
        ];
        var _calday = [
            _info[0].substr(0,1),
            _info[0].substr(1,2),
            _info[0].substr(3,1),
            _info[0].substr(4,2),
            
            _info[1].substr(0,1),
            _info[1].substr(1,2),
            _info[1].substr(3,1),
            _info[1].substr(4,2),
            
            _info[2].substr(0,1),
            _info[2].substr(1,2),
            _info[2].substr(3,1),
            _info[2].substr(4,2),
            
            _info[3].substr(0,1),
            _info[3].substr(1,2),
            _info[3].substr(3,1),
            _info[3].substr(4,2),
            
            _info[4].substr(0,1),
            _info[4].substr(1,2),
            _info[4].substr(3,1),
            _info[4].substr(4,2),
            
            _info[5].substr(0,1),
            _info[5].substr(1,2),
            _info[5].substr(3,1),
            _info[5].substr(4,2),
        ];
        return parseInt(_calday[n-1]);
    },

    /**
      * 浼犲叆鍐滃巻鏁板瓧鏈堜唤杩斿洖姹夎閫氫織琛ㄧず娉�
      * @param lunar month
      * @return Cn string
      * @eg:var cnMonth = calendar.toChinaMonth(12) ;//cnMonth='鑵婃湀'
      */
    toChinaMonth:function(m) { // 鏈� => \u6708
        if(m>12 || m<1) {return -1} //鑻ュ弬鏁伴敊璇� 杩斿洖-1
        var s = calendar.nStr3[m-1];
        s+= "\u6708";//鍔犱笂鏈堝瓧
        return s;
    },

    /**
      * 浼犲叆鍐滃巻鏃ユ湡鏁板瓧杩斿洖姹夊瓧琛ㄧず娉�
      * @param lunar day
      * @return Cn string
      * @eg:var cnDay = calendar.toChinaDay(21) ;//cnMonth='寤夸竴'
      */
    toChinaDay:function(d){ //鏃� => \u65e5
        var s;
        switch (d) {
            case 10:
            s = '\u521d\u5341'; break;
        case 20:
            s = '\u4e8c\u5341'; break;
            break;
        case 30:
            s = '\u4e09\u5341'; break;
            break;
        default :
            s = calendar.nStr2[Math.floor(d/10)];
            s += calendar.nStr1[d%10];
        }
        return(s);
    },

    /**
      * 骞翠唤杞敓鑲朳!浠呰兘澶ц嚧杞崲] => 绮剧‘鍒掑垎鐢熻倴鍒嗙晫绾挎槸鈥滅珛鏄モ€�
      * @param y year
      * @return Cn string
      * @eg:var animal = calendar.getAnimal(1987) ;//animal='鍏�'
      */
    getAnimal: function(y) {
        return calendar.Animals[(y - 4) % 12]
    },

    /**
      * 浼犲叆闃冲巻骞存湀鏃ヨ幏寰楄缁嗙殑鍏巻銆佸啘鍘唎bject淇℃伅 <=>JSON
      * @param y  solar year
      * @param m  solar month
      * @param d  solar day
      * @return JSON object
      * @eg:console.log(calendar.solar2lunar(1987,11,01));
      */
    solar2lunar:function (y,m,d) { //鍙傛暟鍖洪棿1900.1.31~2100.12.31
        //骞翠唤闄愬畾銆佷笂闄�
        if(y<1900 || y>2100) {
            return -1;// undefined杞崲涓烘暟瀛楀彉涓篘aN
        }
        //鍏巻浼犲弬鏈€涓嬮檺
        if(y==1900&&m==1&&d<31) {
            return -1;
        }
        //鏈紶鍙�  鑾峰緱褰撳ぉ
        if(!y) {
            var objDate = new Date();
        }else {
            var objDate = new Date(y,parseInt(m)-1,d)
        }
        var i, leap=0, temp=0;
        //淇ymd鍙傛暟
        var y = objDate.getFullYear(),
            m = objDate.getMonth()+1,
            d = objDate.getDate();
        var offset = (Date.UTC(objDate.getFullYear(),objDate.getMonth(),objDate.getDate()) - Date.UTC(1900,0,31))/86400000;
        for(i=1900; i<2101 && offset>0; i++) {
            temp    = calendar.lYearDays(i);
            offset -= temp;
        }
        if(offset<0) {
            offset+=temp; i--;
        }
        
        //鏄惁浠婂ぉ
        var isTodayObj = new Date(),
            isToday    = false;
        if(isTodayObj.getFullYear()==y && isTodayObj.getMonth()+1==m && isTodayObj.getDate()==d) {
            isToday = true;
        }
        //鏄熸湡鍑�
        var nWeek = objDate.getDay(),
           cWeek  = calendar.nStr1[nWeek];
        //鏁板瓧琛ㄧず鍛ㄥ嚑椤哄簲澶╂湞鍛ㄤ竴寮€濮嬬殑鎯緥
        if(nWeek==0) {
            nWeek = 7;
        }
        //鍐滃巻骞�
        var year   = i;
        var leap   = calendar.leapMonth(i); //闂板摢涓湀
        var isLeap = false;
        
        //鏁堥獙闂版湀
        for(i=1; i<13 && offset>0; i++) {
            //闂版湀
            if(leap>0 && i==(leap+1) && isLeap==false){ 
                --i;
                isLeap = true; temp = calendar.leapDays(year); //璁＄畻鍐滃巻闂版湀澶╂暟
            }
            else{
                temp = calendar.monthDays(year, i);//璁＄畻鍐滃巻鏅€氭湀澶╂暟
            }
            //瑙ｉ櫎闂版湀
            if(isLeap==true && i==(leap+1)) { isLeap = false; }
            offset -= temp;
        }
        // 闂版湀瀵艰嚧鏁扮粍涓嬫爣閲嶅彔鍙栧弽
        if(offset==0 && leap>0 && i==leap+1)
        {
            if(isLeap){
                isLeap = false;
            }else{ 
                isLeap = true; --i;
            }
        }
        if(offset<0)
        {
            offset += temp; --i;
        }
        //鍐滃巻鏈�
        var month      = i;
        //鍐滃巻鏃�
        var day        = offset + 1;
        //澶╁共鍦版敮澶勭悊
        var sm         = m-1;
        var gzY        = calendar.toGanZhiYear(year);
        
        // 褰撴湀鐨勪袱涓妭姘�
        // bugfix-2017-7-24 11:03:38 use lunar Year Param `y` Not `year`
        var firstNode  = calendar.getTerm(y,(m*2-1));//杩斿洖褰撴湀銆岃妭銆嶄负鍑犳棩寮€濮�
        var secondNode = calendar.getTerm(y,(m*2));//杩斿洖褰撴湀銆岃妭銆嶄负鍑犳棩寮€濮�

        // 渚濇嵁12鑺傛皵淇骞叉敮鏈�
        var gzM        = calendar.toGanZhi((y-1900)*12+m+11);
        if(d>=firstNode) {
            gzM        = calendar.toGanZhi((y-1900)*12+m+12);
        }
        
        //浼犲叆鐨勬棩鏈熺殑鑺傛皵涓庡惁
        var isTerm = false;
        var Term   = null;
        if(firstNode==d) {
            isTerm  = true;
            Term    = calendar.solarTerm[m*2-2];
        }
        if(secondNode==d) {
            isTerm  = true;
            Term    = calendar.solarTerm[m*2-1];
        }
        //鏃ユ煴 褰撴湀涓€鏃ヤ笌 1900/1/1 鐩稿樊澶╂暟
        var dayCyclical = Date.UTC(y,sm,1,0,0,0,0)/86400000+25567+10;
        var gzD         = calendar.toGanZhi(dayCyclical+d-1);
        //璇ユ棩鏈熸墍灞炵殑鏄熷骇
        var astro       = calendar.toAstro(m,d);
        
        return {'lYear':year,'lMonth':month,'lDay':day,'Animal':calendar.getAnimal(year),'IMonthCn':(isLeap?"\u95f0":'')+calendar.toChinaMonth(month),'IDayCn':calendar.toChinaDay(day),'cYear':y,'cMonth':m,'cDay':d,'gzYear':gzY,'gzMonth':gzM,'gzDay':gzD,'isToday':isToday,'isLeap':isLeap,'nWeek':nWeek,'ncWeek':"\u661f\u671f"+cWeek,'isTerm':isTerm,'Term':Term,'astro':astro};
    },

    /**
      * 浼犲叆鍐滃巻骞存湀鏃ヤ互鍙婁紶鍏ョ殑鏈堜唤鏄惁闂版湀鑾峰緱璇︾粏鐨勫叕鍘嗐€佸啘鍘唎bject淇℃伅 <=>JSON
      * @param y  lunar year
      * @param m  lunar month
      * @param d  lunar day
      * @param isLeapMonth  lunar month is leap or not.[濡傛灉鏄啘鍘嗛棸鏈堢鍥涗釜鍙傛暟璧嬪€紅rue鍗冲彲]
      * @return JSON object
      * @eg:console.log(calendar.lunar2solar(1987,9,10));
      */
    lunar2solar:function(y,m,d,isLeapMonth) {   //鍙傛暟鍖洪棿1900.1.31~2100.12.1
        var isLeapMonth = !!isLeapMonth;
        var leapOffset  = 0;
        var leapMonth   = calendar.leapMonth(y);
        var leapDay     = calendar.leapDays(y);
        if(isLeapMonth&&(leapMonth!=m)) {return -1;}//浼犲弬瑕佹眰璁＄畻璇ラ棸鏈堝叕鍘� 浣嗚骞村緱鍑虹殑闂版湀涓庝紶鍙傜殑鏈堜唤骞朵笉鍚�
        if(y==2100&&m==12&&d>1 || y==1900&&m==1&&d<31) {return -1;}//瓒呭嚭浜嗘渶澶ф瀬闄愬€� 
        var day  = calendar.monthDays(y,m); 
        var _day = day;
        //bugFix 2016-9-25 
        //if month is leap, _day use leapDays method 
        if(isLeapMonth) {
            _day = calendar.leapDays(y,m);
        }
        if(y < 1900 || y > 2100 || d > _day) {return -1;}//鍙傛暟鍚堟硶鎬ф晥楠�
        
        //璁＄畻鍐滃巻鐨勬椂闂村樊
        var offset = 0;
        for(var i=1900;i<y;i++) {
            offset+=calendar.lYearDays(i);
        }
        var leap = 0,isAdd= false;
        for(var i=1;i<m;i++) {
            leap = calendar.leapMonth(y);
            if(!isAdd) {//澶勭悊闂版湀
                if(leap<=i && leap>0) {
                    offset+=calendar.leapDays(y);isAdd = true;
                }
            }
            offset+=calendar.monthDays(y,i);
        }
        //杞崲闂版湀鍐滃巻 闇€琛ュ厖璇ュ勾闂版湀鐨勫墠涓€涓湀鐨勬椂宸�
        if(isLeapMonth) {offset+=day;}
        //1900骞村啘鍘嗘鏈堜竴鏃ョ殑鍏巻鏃堕棿涓�1900骞�1鏈�30鏃�0鏃�0鍒�0绉�(璇ユ椂闂翠篃鏄湰鍐滃巻鐨勬渶寮€濮嬭捣濮嬬偣)
        var stmap   =   Date.UTC(1900,1,30,0,0,0);
        var calObj  =   new Date((offset+d-31)*86400000+stmap);
        var cY      =   calObj.getUTCFullYear();
        var cM      =   calObj.getUTCMonth()+1;
        var cD      =   calObj.getUTCDate();

        return calendar.solar2lunar(cY,cM,cD);
    }
};