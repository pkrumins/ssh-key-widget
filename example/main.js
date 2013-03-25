// browserify -t brfs ./main.js > bundle.js
//
var sshWidget = require('../');
var sshWidget = sshWidget();
sshWidget.appendTo('#widget');
