var worker = require('./')

worker([1, 2, 3], console.log, 1000)
// should print 1, 2, 3 a second apart