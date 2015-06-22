'use strict';
var test = require('ava');
var calcPercent = require('./');

test(function (t) {
	t.assert(calcPercent(10, 50) === '20');
	t.assert(calcPercent(10, 50, {suffix: '%'}) === '20%');
	t.assert(calcPercent(100 / 3, 100, {decimal: 2}) === '33.33');
	t.end();
});
