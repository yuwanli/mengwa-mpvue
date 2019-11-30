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

export default {
  formatNumber,
  formatTime,
  throttle,
  debounce
}
