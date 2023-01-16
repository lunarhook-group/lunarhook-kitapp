
import Taro from '@tarojs/taro'
function handleClick(val){
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

export { handleClick};
