define(function(require) {
	var $ = require('jquery');
	var helloTemplate = require('jade!views/hello');

	$('body').html(helloTemplate({text: "Hello from jquery"}));
});