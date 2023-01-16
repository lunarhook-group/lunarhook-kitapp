
import Taro from '@tarojs/taro'
function handleClick(val) {
  var value = val
  if (3 == value) {
    Taro.navigateTo({ url: '../../../pages/user/userCenter' })
  }
  else if (2 == value) {
    Taro.redirectTo({ url: '../../../pages/kit/tools/Psy' })
  }
  else if (1 == value) {
    Taro.redirectTo({ url: '../../../pages/kit/tools/litekitPage' })
  }
  else if (0 == value) {
    Taro.redirectTo({ url: '../../../pages/kit/tools/base' })
  }
}

var tablist = [

  {
    title: '基  础', iconPrefixClass: 'mdi',
    size: 36,
    color: "#1FA7DE",
    iconType: 'head-dots-horizontal-outline'
  },
  {
    title: '易  学',
    iconPrefixClass: 'mdi',
    size: 36,
    color: "#1FA7DE",
    iconType: 'yin-yang'
  },
  {
    title: '心  理', iconPrefixClass: 'mdi',
    size: 36,
    color: "#1FA7DE",
    iconType: 'check-decagram-outline'
  },
  {
    title: '分  享', iconPrefixClass: 'mdi',
    size: 36,
    color: "#1FA7DE",
    iconType: 'share-circle'
  }
]

export { handleClick, tablist };
