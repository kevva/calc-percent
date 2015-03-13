'use strict';

module.exports = function (val, total, opts) {
	opts = opts || {};
	opts.decimal = opts.decimal || 0;
	opts.suffix = opts.suffix || '';

	return (val / total * 100).toFixed(opts.decimal) + opts.suffix;
};
