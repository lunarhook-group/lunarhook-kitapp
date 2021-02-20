import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { AtAvatar, AtList, AtListItem } from 'taro-ui';
import { View ,Image} from '@tarojs/components';
import './userCenter.scss';
import service from '../../assets/service.jpeg'
import  plumber  from '../plumbertrace'

export default class UserCenter extends Component {
  componentDidMount() { 

  }
  componentDidHide() { }
  componentDidCatchError() { }
  componentDidShow() {
    //plumber(this.props.tid)
  }

  static defaultProps = {
    privateList: [],
    walletList: [],
    controlList: [],
    userCenterList: []
  };


  // 获取用户列表API
  render() {
    const { userCenterList } =this.props
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

      </View>
    );
  }
};
