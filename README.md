work-ethic
--------------------------

a super duper simple module for applying a function to an array for it's side effects, but at a spaced out interval, so as to avoid rate-limiting and buffer overflows and such.

# EXAMPLE

```
var worker = require('work-ethic')

worker([1, 2, 3], console.log, alert.apply('WOWWW'), 1000)
// prints 1, 2, 3 a second apart, then immediately opens an alert dialog 'WOWWW'
```

# API

`workEthic(array, function, onEnd, interval)`
- array: an array of datas to apply the function to
- function: an function that accepts 1 element of the given array, whatever that may be
- onEnd: a callback that is called w/ no args when everything has finished
- interval: the time to wait in between iterations
