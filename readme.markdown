SSH Key Widget
==============

An ssh key widget. Add new keys or list and delete existing keys.

Example
=======

```js
var sshWidget = require('ssh-key-widget');
var sshWidget = sshWidget();
sshWidget.appendTo('#widget');

sshWidget.on('newKey', function (key) {
  console.log('user submitted a new key: ' + key);
  sshWidget.emit('addKeyToList', key);
});
```

In this example when a user submits a new key, the widget emits `newKey` event. We just log this to console and emit it back to ssh widget via `addKeyToList` event so it was added to the list of existing keys. Similarly by using `addKeyToList` you can submit all other user keys to the list.

Todo: deleting keys.

Methods
=======

## var sshWidget = sshWidget()

Return a new ssh widget instance.

## keyboard.appendTo(target)

Append the ssh widget to the dom element or query selector string target.

Events
======

## keyboard.on('newKey', function (key) { })

Ssh widget emits the `newKey` events when you add a new key. The callback receives `key` parameter which is the key the user pasted in the textarea.

## keyboard.emit('addKeyToList', key);

Ssh widget listens for `addKeyToList` events so you can update the list of all the user's ssh keys.

Todo: deleting keys.

Install
=======

With [npm](https://npmjs.org) do:

```
npm install ssh-key-widget
```

Use [browserify](http://browserify.org) to `require('ssh-key-widget')`.

License
=======

MIT
