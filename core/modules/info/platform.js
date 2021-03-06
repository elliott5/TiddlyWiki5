/*\
title: $:/core/modules/info/platform.js
type: application/javascript
module-type: info

Initialise basic platform $:/info/ tiddlers

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

exports.getInfoTiddlerFields = function() {
	var mapBoolean = function(value) {return value ? "yes" : "no";},
		infoTiddlerFields = [];
	// Basics
	infoTiddlerFields.push({title: "$:/info/browser", text: mapBoolean(!!$tw.browser)});
	infoTiddlerFields.push({title: "$:/info/node", text: mapBoolean(!!$tw.node)});
	// Document location
	if($tw.browser) {
		var setLocationProperty = function(name,value) {
				infoTiddlerFields.push({title: "$:/info/url/" + name, text: value});			
			},
			location = document.location;
		setLocationProperty("full", (location.toString()).split("#")[0]);
		setLocationProperty("host", location.host);
		setLocationProperty("hostname", location.hostname);
		setLocationProperty("protocol", location.protocol);
		setLocationProperty("port", location.port);
		setLocationProperty("pathname", location.pathname);
		setLocationProperty("search", location.search);
		setLocationProperty("origin", location.origin);
	}
	return infoTiddlerFields;
};

})();
