// import token compatibility for nodeJS
require('babel-register')({
	presets: [
		'es2015',
		'react'
	]
});

require('./index');