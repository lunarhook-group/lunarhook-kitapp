import Taro from '@tarojs/taro';
import { AtAvatar, AtList, AtListItem } from 'taro-ui';
import { View } from '@tarojs/components';
import './userCenter.scss';
import service from '../../assets/service.jpeg'
class UserCenter extends Taro.Component {
  constructor() {
    super(...arguments);
    this.state = {
      privateList: [],
      walletList: [],
      controlList: [],
      userCenterList: []
    };
  }

  config = {
    navigationBarTitleText: '信息'
  };
  // 获取用户列表API


  componentDidMount() {
    //this.getUserCenterList();
  }
  render() {
    const { userCenterList } = this.state;
    return (
      <View className="container">
        <View className="userinfo">
          <View className="userinfo-avatar">
            <AtAvatar circle openData={{ type: 'userAvatarUrl' }}></AtAvatar>
          </View>
          <View>
            <View className="userinfo-nickname">
              <open-data type="userNickName" lang="zh_CN"></open-data>
            </View>
            <View className="userinfo-tip"></View>
          </View>
        </View>
        {/*  用户列表信息   */}
        {userCenterList.map((item, index) => {
          return (
            <AtList className="user-list" key={index.id}>
              {item.map((i, itemIndex) => {
                return (
                  <View className="user-list-item" key={itemIndex.id}>
                    <AtListItem
                      className="user-list-title"
                      arrow="right"
                      title={i.title}
                      thumb={i.icon}
                    />
                  </View>
                );
              })}
            </AtList>
          );
        })}
        <Image
          className={'imageslogan'}
          mode='widthFix'
          style='width:50%'
          src={service}
        />
      </View>
    );
  }
}

export default UserCenter;
