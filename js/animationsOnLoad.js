  window.onload = function() {
    const topElement = document.getElementById('slideFromTop');
    topElement.classList.add('slide-in-top');
    const leftElement = document.getElementById('slideFromLeft');
    leftElement.classList.add('slide-in-left');
    const rightElement = document.getElementById('slideFromRight');
    rightElement.classList.add('slide-in-right');
  };

  setTimeout(function() {
    var inspireButton = document.getElementById('inspireButton');
    inspireButton.classList.remove('btn-outline-primary');
    inspireButton.classList.add('btn-primary');
    inspireButton.addEventListener('transitionend', function() {
        inspireButton.classList.remove('transitioning');
    });
    inspireButton.classList.add('transitioning');

    // var consultButton = document.getElementById('consultButton');
    // consultButton.classList.remove('btn-outline-success');
    // consultButton.classList.add('btn-success');
    // consultButton.addEventListener('transitionend', function() {
    //     consultButton.classList.remove('transitioning');
    // });
    // consultButton.classList.add('transitioning');

    var talkButton = document.getElementById('talkButton');
    talkButton.classList.remove('btn-outline-secondary');
    talkButton.classList.add('btn-secondary');
    talkButton.addEventListener('transitionend', function() {
        talkButton.classList.remove('transitioning');
    });
    talkButton.classList.add('transitioning');
  }, 1250);
