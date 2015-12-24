module.exports = function (arr, funk, time) {
  var interval, i = 0
  interval = setInterval(function () {
    funk(arr[i++])
    if (i >= arr.length) clearInterval(interval)
  }, time)
}
