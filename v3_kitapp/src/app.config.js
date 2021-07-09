export default {
  pages: [
    'pages/Slogan',
    /*
    'pages/kit/litekitPage',


    'pages/kit/tools/SloganShare',

    'pages/kit/LunarMotionsLib/PsychLib/MBTIModule',
    'pages/kit/LunarMotionsLib/PsychLib/EnneagramModule',
    'pages/kit/LunarMotionsLib/PsychLib/HollandModule',
    */
    'pages/user/userCenter',
    /*
    'pages/kit/UniversechangesLib/NumberLib/NumberMainPage',
    'pages/kit/UniversechangesLib/EightrandomLib/EightrandomNewPage',
    'pages/kit/UniversechangesLib/EightrandomLib/EightrandomMainPage',
    'pages/kit/UniversechangesLib/SixrandomLib/SixrandomNewPage',
    'pages/kit/UniversechangesLib/SixrandomLib/SixrandomFullInfoPage',
    */

  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '乾坤爻',
    navigationBarTextStyle: 'black'
  },
  subPackages:[
    {
      "root": "pages/kit/tools",
      "pages": [
        "litekitPage",
        "SloganShare",
      ]
    }, 
    {
      "root": "pages/kit/LunarMotionsLib",
      "pages": [
        "PsychLib/MBTIModule",
        "PsychLib/EnneagramModule",
        "PsychLib/HollandModule",
      ]
    }, 
    {
      "root": "pages/kit/UniversechangesLib",
      "pages": [
        "NumberLib/NumberMainPage",
        "EightrandomLib/EightrandomNewPage",
        "EightrandomLib/EightrandomMainPage",
        "SixrandomLib/SixrandomNewPage",
        "SixrandomLib/SixrandomFullInfoPage",
      ]
    }, 
  ]

}
