﻿
document.write('<link rel="stylesheet" type="text/css" href="style.css">');
document.write('<script type="text/javascript" src="WidgetCreate.js"></script>');

var myElement = document.getElementById('myFirstWidget');
var JavaScriptCode = document.createElement("script");
JavaScriptCode.setAttribute('type', 'text/javascript');
JavaScriptCode.setAttribute("src", 'data.js');
document.getElementById('myFirstWidget').appendChild(JavaScriptCode);
 