// browserify -t brfs ./main.js > bundle.js
//
var sshWidget = require('../');
var sshWidget = sshWidget();
sshWidget.appendTo('#widget');

document.querySelector('#testform').addEventListener('submit', function (ev) {
    sshWidget.emit('addKeyToList', 'ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAz/rUdVby0r4WbWpMuysYOk9wcuyEMT/Bj7nI8tUPYElgxlXEjh+6vzHllLM46u31p5e2VRoFe3FjeoQds3iM0haCFWHKRi0qSv6Ye9/T25Zh0Z9ty9feIWeK3odl8WTebt13qPegfkHB8mHF6Gl1YhFuIKI2gFr+5GaA/HAO2xgI8gUq/sMyM8Rp7Qzt0zyO8hGfxUaQLXHAIGFJubJ07WLaN8NeS3yT+7jOgGJ8DnrLz4WVTxrUJeMevRm/Iq8iNXJHhpuD+cwr25JOcetCojwGo8UdCr2D9dzDJmsJJHrswqnP3/WMEqyyndB+OvtE9ha1TUp9pmrHXrxMIUTkgQ== peteris.krumins@gmail.com');
    sshWidget.emit('addKeyToList', 'ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAz/rUdVby0r4WbWpMuysYOk9wcuyEMT/Bj7nI8tUPYElgxlXEjh+6vzHllLM46u31p5e2VRoFe3FjeoQds3iM0haCFWHKRi0qSv6Ye9/T25Zh0Z9ty9feIWeK3odl8WTebt13qPegfkHB8mHF6Gl1YhFuIKI2gFr+5GaA/HAO2xgI8gUq/sMyM8Rp7Qzt0zyO8hGfxUaQLXHAIGFJubJ07WLaN8NeS3yT+7jOgGJ8DnrLz4WVTxrUJeMevRm/Iq8iNXJHhpuD+cwr25JOcetCojwGo8UdCr2D9dzDJmsJJHrswqnP3/WMEqyyndB+OvtE9ha1TUp9pmrHXrxMIUTkgQ== peteris.krumins@gmail.com');
    sshWidget.emit('addKeyToList', 'ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAz/rUdVby0r4WbWpMuysYOk9wcuyEMT/Bj7nI8tUPYElgxlXEjh+6vzHllLM46u31p5e2VRoFe3FjeoQds3iM0haCFWHKRi0qSv6Ye9/T25Zh0Z9ty9feIWeK3odl8WTebt13qPegfkHB8mHF6Gl1YhFuIKI2gFr+5GaA/HAO2xgI8gUq/sMyM8Rp7Qzt0zyO8hGfxUaQLXHAIGFJubJ07WLaN8NeS3yT+7jOgGJ8DnrLz4WVTxrUJeMevRm/Iq8iNXJHhpuD+cwr25JOcetCojwGo8UdCr2D9dzDJmsJJHrswqnP3/WMEqyyndB+OvtE9ha1TUp9pmrHXrxMIUTkgQ== peteris.krumins@gmail.com');
    sshWidget.emit('addKeyToList', 'ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAz/rUdVby0r4WbWpMuysYOk9wcuyEMT/Bj7nI8tUPYElgxlXEjh+6vzHllLM46u31p5e2VRoFe3FjeoQds3iM0haCFWHKRi0qSv6Ye9/T25Zh0Z9ty9feIWeK3odl8WTebt13qPegfkHB8mHF6Gl1YhFuIKI2gFr+5GaA/HAO2xgI8gUq/sMyM8Rp7Qzt0zyO8hGfxUaQLXHAIGFJubJ07WLaN8NeS3yT+7jOgGJ8DnrLz4WVTxrUJeMevRm/Iq8iNXJHhpuD+cwr25JOcetCojwGo8UdCr2D9dzDJmsJJHrswqnP3/WMEqyyndB+OvtE9ha1TUp9pmrHXrxMIUTkgQ== peteris.krumins@gmail.com');
    sshWidget.emit('addKeyToList', 'ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAz/rUdVby0r4WbWpMuysYOk9wcuyEMT/Bj7nI8tUPYElgxlXEjh+6vzHllLM46u31p5e2VRoFe3FjeoQds3iM0haCFWHKRi0qSv6Ye9/T25Zh0Z9ty9feIWeK3odl8WTebt13qPegfkHB8mHF6Gl1YhFuIKI2gFr+5GaA/HAO2xgI8gUq/sMyM8Rp7Qzt0zyO8hGfxUaQLXHAIGFJubJ07WLaN8NeS3yT+7jOgGJ8DnrLz4WVTxrUJeMevRm/Iq8iNXJHhpuD+cwr25JOcetCojwGo8UdCr2D9dzDJmsJJHrswqnP3/WMEqyyndB+OvtE9ha1TUp9pmrHXrxMIUTkgQ== peteris.krumins@gmail.com');
    ev.preventDefault();
    return false;
});

sshWidget.on('newKey', function (key) {
    document.querySelector('#output').appendChild(
        document.createElement('div').appendChild(
            document.createTextNode('New key: ' + key)
        )
    );
});
