module.exports = function (arr, funk, onEnd, time) {
  var interval, i = 0
  interval = setInterval(function () {
    funk(arr[i++])
    if (i >= arr.length) {
      clearInterval(interval)
      onEnd()
    }
  }, time)
}
