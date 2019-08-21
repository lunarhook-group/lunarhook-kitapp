import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import ScreenConfig from './ScreenConfig';

var StyleConfig = StyleSheet.create ({
  container: {
    flex:1,
  },
    menufont:{
      fontSize:ScreenConfig.__navigationMenuFontsize(),
      color: '#333333', 
      height:ScreenConfig.getFontheight()
    },
  });
  


module.exports=StyleConfig;  