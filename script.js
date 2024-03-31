var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true,
    wrapperClassName: 'typeText',
    cursorClassName: 'typeCursor'
});

typewriter.typeString('<font size="+3">Qaiser@Al-Hashmi:~$ </font>')
    .typeString('<font size="+3">Penetration Tester</font>')
    .pauseFor(1000)
    .deleteChars(18)
    .typeString('<font size="+3">Red Teamer</font>')
    .pauseFor(1000)
    .deleteChars(10)
    .typeString('<font size="+3">Pych0 @ HTB</font>')
    .pauseFor(1000)
    .start();