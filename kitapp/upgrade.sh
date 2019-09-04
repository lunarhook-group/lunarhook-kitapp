#!/bin/sh
cd ..
git pull
cd kitapp
taro update self
taro update project
yarn global add @tarojs/cli@latest
yarn

