function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

export const throttle = (fn, delay, mustRunDelay) => {
  let timer = null
  let starttime = +new Date()

  return function () {
    let context = this
    let args = arguments
    let curTime = +new Date()
    clearTimeout(timer)
    if (!starttime) {
      starttime = curTime
    }
    if (curTime - starttime >= mustRunDelay) {
      fn.apply(context, args)
      starttime = curTime
    } else {
      timer = setTimeout(() => {
        fn.apply(context, args)
      }, delay)
    }
  }
}

export const debounce = (fn, delay) => {
  let timer = null
  return function () {
    let context = this
    let args = arguments
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(context, args)
    }, delay)
  }
}

export const wxFun2Async = (name, obj = {}, completeCallBack) => {
  return new Promise((resolve, reject) => {
    if (!wx[name]) {
      reject(new Error(`函数名有误--${name}`))
      return
    }
    wx[name]({
      ...obj,
      success (res) {
        resolve(res)
      },
      fail (err) {
        reject(err)
      },
      complete () {
        if (completeCallBack && typeof completeCallBack === 'function') {
          completeCallBack()
        }
      }
    })
  })
}
const drawText = (ctx, str, leftWidth, initHeight, lineHeight, maxWidth) => {
  let lineWidth = 0
  let lastSubStrIndex = 0 // 每次开始截取的字符串的索引

  for (let i = 0; i < str.length; i++) {
    lineWidth += ctx.measureText(str[i]).width
    if (lineWidth > maxWidth) {
      ctx.fillText(str.substring(lastSubStrIndex, i), leftWidth, initHeight) // 绘制截取部分
      initHeight += lineHeight // 16为字体的高度
      lineWidth = 0
      lastSubStrIndex = i
    }
    if (i === str.length - 1) {
      ctx.fillText(str.substring(lastSubStrIndex, i + 1), leftWidth, initHeight)
    }
  }
}

export const generateShareImg = (() => {
  let ratio = 0
  return async (canvasId, obj) => {
    if (!ratio) {
      const res = await wxFun2Async('getSystemInfo', {})
      ratio = res.windowWidth / 1080
    }
    const [shareDemo] = await Promise.all([
      // downloadFileAsync('https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3402063479,1936521224&fm=11&gp=0.jpg'),
      // wxFun2Async('getUserInfo'),
      wxFun2Async('getImageInfo', {
        src: obj.img
      })
      // wx.cloud.callFunction({
      //   name: 'createQRCode',
      //   data: {
      //     page: 'pages/detail/main',
      //     scene: 'id=1'
      //   }
      // })
    ]).catch(err => {
      console.error(err)
      return false
    })

    const context = wx.createCanvasContext(canvasId)
    context.setFillStyle('#498a68')
    context.fillRect(0, 0, 540 * ratio, 960 * ratio)
    context.save()
    context.beginPath()
    context.arc(270 * ratio, 120 * ratio, 70 * ratio, 0, 2 * Math.PI)
    context.clip()
    context.drawImage('/static/images/index__avatar.png', 200 * ratio, 50 * ratio, 140 * ratio, 140 * ratio)
    context.restore()
    context.drawImage('/static/images/base__water.png', 237 * ratio, 23 * ratio, 49 * ratio, 58 * ratio)
    context.setFillStyle('#ffff7f')
    context.setFontSize(24 * ratio)
    context.setTextAlign('center')
    context.fillText('小草莓的妈妈', 270 * ratio, 225 * ratio)
    context.setTextAlign('left')
    drawText(context, `邻居们，我在「萌蛙」平台发布了闲置品《${obj.name}》，感兴趣的友邻请扫码查看详细信息！`, 70 * ratio, 290 * ratio, 40 * ratio, 400 * ratio)
    context.drawImage('/static/images/share__demo.png', 0, 0, shareDemo.width, shareDemo.width * 86 / 152, 14 * ratio, 414 * ratio, 512 * ratio, 290 * ratio)

    context.setFillStyle('white')
    context.fillRect(14 * ratio, 704 * ratio, 512 * ratio, 240 * ratio)

    context.drawImage('/static/images/share__bottom.png', 14 * ratio, 858 * ratio, 512 * ratio, 86 * ratio)
    context.drawImage('/static/images/share__logo.png', 35 * ratio, 760 * ratio, 183 * ratio, 99 * ratio)
    context.setFillStyle('#000')
    context.fillText('小区里的母婴闲置平台', 108 * ratio, 860 * ratio)

    // context.drawImage('data:image/jpeg;base64,' + wx.arrayBufferToBase64(codeInfo.result.buffer), 356 * ratio, 730 * ratio, 150 * ratio, 150 * ratio)

    context.draw()
    return true
  }
})()

export const saveCanvasImg = async (obj) => {
  const res = await wxFun2Async('canvasToTempFilePath', obj).catch(err => {
    console.error(err)
  })
  await wxFun2Async('saveImageToPhotosAlbum', {
    filePath: res.tempFilePath
  }).catch(err => {
    console.error(err)
  })
  return true
}

export default {
  formatNumber,
  formatTime,
  throttle,
  debounce,
  wxFun2Async,
  generateShareImg,
  saveCanvasImg
}
