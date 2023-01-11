export default class shareimg extends Component{
async drawImage (cname) {
    // 创建canvas对象
    let ctx = Taro.createCanvasContext('cname')
    
    // 填充背景色
    let grd = ctx.createLinearGradient(0, 0, 1, 500)
    grd.addColorStop(0, '#1452d0')
    grd.addColorStop(0.5, '#FFF')
    ctx.setFillStyle(grd)
    ctx.fillRect(0, 0, 400, 500)
    // // 绘制圆形用户头像
    let { userInfo } = this.state
    let res = await Taro.downloadFile({
      url: userInfo.avatarUrl
    })
    ctx.save()
    ctx.beginPath()
    ctx.arc(160, 88, 66, 0, Math.PI * 2)
    ctx.closePath()
    ctx.clip()
    ctx.stroke()
    ctx.translate(160, 88)
    ctx.drawImage(res.tempFilePath, -66, -66, 132, 132)
    ctx.restore()
    // 绘制文字
    ctx.save()
    ctx.setFontSize(16)
    ctx.setFillStyle('black')
    ctx.fillText('乾坤爻小程序', 50, 240)
    ctx.restore()
    // 绘制二维码
    let qrcode = await Taro.downloadFile({
      url: 'https://upload-images.jianshu.io/upload_images/3091895-f0b4b900390aec73.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/258/format/webp.jpg'
    })
    ctx.drawImage(qrcode.tempFilePath, 70, 260, 180, 180)
    // 将以上绘画操作进行渲染
    ctx.draw()
  }

  async saveCard () {
    // 将Canvas图片内容导出指定大小的图片
    let res = await Taro.canvasToTempFilePath({
      x: 0,
      y: 0,
      width: 400,
      height: 500,
      destWidth: 360,
      destHeight: 450,
      canvasId: 'cardCanvas',
      fileType: 'png'
    })
    let saveRes = await Taro.saveImageToPhotosAlbum({
      filePath: res.tempFilePath
    })
    if (saveRes.errMsg === 'saveImageToPhotosAlbum:ok') {
      Taro.showModal({
        title: '图片保存成功',
        content: '图片成功保存到相册了，快去发朋友圈吧~',
        showCancel: false,
        confirmText: '确认'
      })
    } else {
      Taro.showModal({
        title: '图片保存失败',
        content: '请重新尝试!',
        showCancel: false,
        confirmText: '确认'
      })
    }
  }
}