// import token compatibility for nodeJS
require('babel-register')({
	presets: [
		'es2015',
		'react'
	]
});

var a = 1;

a = 2;

require('./index');
