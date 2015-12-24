work-ethic
--------------------------

a super duper simple module for applying a function to an array for it's side effects, but at a spaced out interval, so as to avoid rate-limiting and buffer overflows and such.

# EXAMPLE

```
var worker = require('work-ethic')

worker([1, 2, 3], console.log, 1000)
// prints 1, 2, 3 a second apart
```

# API

`workEthic(array, function, interval)`
- array: an array of datas to apply the function to
- function: an function that accepts 1 element of the given array, whatever that may be
- interval: the time to wait in between iterations
