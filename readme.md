# calc-percent [![Build Status](http://img.shields.io/travis/kevva/calc-percent.svg?style=flat)](https://travis-ci.org/kevva/calc-percent)

> Calculate percentage

## Install

```bash
$ npm install --save calc-percent
```

## Usage

```js
var calcPercent = require('calc-percent');

calcPercent(10, 50);
//=> 20

calcPercent(10, 50, {suffix: '%'});
//=> 20%

calcPercent(100 / 3, 100, {decimal: 2});
//=> 33.33
```

## API

### calcPercent(val, total, opts)

#### val

Type: `number`

Value which should be calculated.

#### total

Type: `number`

Total that `val` should be compared against.

#### opts.decimal

Type: `number`  
Default: `0`

Number of decimals.

#### opts.suffix

Type: `string`

Append a suffix.

## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
