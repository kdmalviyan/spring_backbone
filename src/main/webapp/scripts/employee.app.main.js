requirejs.config({
	waitSeconds : 120,
	baseUrl : 'scripts/',
	paths : {
		'html' : '../ui-views/dust-templates',
		'jquery' : 'lib/jquery-1.10.2',
		'underscore' : 'lib/underscore',
		'backbone' : 'lib/backbone',
		'dust' : 'lib/dust-full-2.2.0',
		'dust-helpers' : 'lib/dust-helpers',
		'dustLoader' : 'helpers/dust.template.loader',
		'text' : 'lib/text'
	},
	shim : {
		'backbone' : {
			deps : [ 'underscore', 'jquery' ],
			exports : 'Backbone'
		},
		'underscore' : {
			exports : '_'
		},
		'dust' : {
			exports : 'dust'
		}
	}
});