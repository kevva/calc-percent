# calc-percent [![Build Status](https://travis-ci.org/kevva/calc-percent.svg?branch=master)](https://travis-ci.org/kevva/calc-percent)

> Calculate percentage


## Install

```
$ npm install --save calc-percent
```


## Usage

```js
var calcPercent = require('calc-percent');

calcPercent(10, 50);
//=> '20'

calcPercent(10, 50, {suffix: '%'});
//=> '20%'

calcPercent(100, 3, {decimal: 2});
//=> '33.33'
```


## API

### calcPercent(val, total, options)

#### val

Type: `number`

Value which should be calculated.

#### total

Type: `number`

Total that `val` should be compared against.

#### options.decimal

Type: `number`  
Default: `0`

Number of decimals.

#### options.suffix

Type: `string`

Append a suffix.


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
