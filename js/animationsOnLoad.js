setTimeout(function() {
    var blogButton = document.getElementById('blogButton');
    blogButton.classList.remove('btn-outline-primary');
    blogButton.classList.add('btn-primary');
    blogButton.addEventListener('transitionend', function() {
        blogButton.classList.remove('transitioning');
    });
    blogButton.classList.add('transitioning');

    var inspireButton = document.getElementById('inspireButton');
    inspireButton.classList.remove('btn-outline-primary');
    inspireButton.classList.add('btn-primary');
    inspireButton.addEventListener('transitionend', function() {
        inspireButton.classList.remove('transitioning');
    });
    inspireButton.classList.add('transitioning');

    var consultButton = document.getElementById('consultButton');
    consultButton.classList.remove('btn-outline-success');
    consultButton.classList.add('btn-success');
    consultButton.addEventListener('transitionend', function() {
        consultButton.classList.remove('transitioning');
    });
    consultButton.classList.add('transitioning');

    var talkButton = document.getElementById('talkButton');
    talkButton.classList.remove('btn-outline-success');
    talkButton.classList.add('btn-success');
    talkButton.addEventListener('transitionend', function() {
        talkButton.classList.remove('transitioning');
    });
    talkButton.classList.add('transitioning');
}, 1250);
