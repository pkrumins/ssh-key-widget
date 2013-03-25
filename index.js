var hyperglue = require('hyperglue');
var EventEmitter = require('events').EventEmitter;
var fs = require('fs');

var html = fs.readFileSync(__dirname + '/static/ssh-widget.html');
var css = fs.readFileSync(__dirname + '/static/ssh-widget.css');

var insertedCss = false;

module.exports = SSHKeyWidget;
SSHKeyWidget.prototype = new EventEmitter;

function SSHKeyWidget () {
    if (!(this instanceof SSHKeyWidget)) return new SSHKeyWidget();
    EventEmitter.call(this);
    var self = this;

    if (!insertedCss) {
        var style = document.createElement('style');
        style.appendChild(document.createTextNode(css));

        if (document.head.childNodes.length) {
            document.head.insertBefore(style, document.head.childNodes[0]);
        }
        else {
            document.head.appendChild(style);
        }
        insertedCss = true;
    }

    var root = hyperglue(html);
    var newKey = root.querySelector('#sshwidget-new-key');
    var newKeyForm = newKey.querySelector('form[name="new-ssh-key"]');
    var keyList = root.querySelector('#sshwidget-list-keys');

    newKey.style.display = 'visible';
    keyList.style.display = 'hidden';

    var a_addKey = root.querySelectorAll('#navigation a')[0];
    var a_listKeys = root.querySelectorAll('#navigation a')[1];

    a_addKey.addEventListener('onclick', function (ev) {
        newKey.style.display = 'visible';
        keyList.style.display = 'hidden';
        return false;
    });

    a_listKeys.addEventListener('onclick', function (ev) {
        newKey.style.display = 'hidden';
        keyList.style.display = 'visible';
        return false;
    });

    newKeyForm.addEventListener('submit', function (ev) {
        alert('moo');
    });

    self.on('key', function (key) {
        var div = document.createElement('div');
        div.appendChild(document.createTextNode(key));
        keyList.apendChild(div);
    });

    this.appendTo = function (target) {
        if (typeof target === 'string') {
            target = document.querySelector(target);
        }
        target.appendChild(root);
    }
}
