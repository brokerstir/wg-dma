setTimeout(function() {
    var inspireButton = document.getElementById('inspireButton');
    inspireButton.classList.remove('btn-outline-primary');
    inspireButton.classList.add('btn-primary');
    inspireButton.addEventListener('transitionend', function() {
        inspireButton.classList.remove('transitioning');
    });
    inspireButton.classList.add('transitioning');

    var consultButton = document.getElementById('consultButton');
    consultButton.classList.remove('btn-outline-warning');
    consultButton.classList.add('btn-warning');
    consultButton.addEventListener('transitionend', function() {
        consultButton.classList.remove('transitioning');
    });
    consultButton.classList.add('transitioning');

    var talkButton = document.getElementById('talkButton');
    talkButton.classList.remove('btn-outline-warning');
    talkButton.classList.add('btn-warning');
    talkButton.addEventListener('transitionend', function() {
        talkButton.classList.remove('transitioning');
    });
    talkButton.classList.add('transitioning');
}, 1250);
