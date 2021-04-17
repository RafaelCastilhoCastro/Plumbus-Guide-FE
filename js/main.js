// --------- PRELOAD PHRASES ---------
var phrases = [
  "Smoothing the dinglebop with schleem.",
  "Repurposing the schleem.",
  "Pushing the dinglebop through the grumbo.",
  "Rubbing the fleeb thoroughly.",
  "A Schlami is now rubbing it.",
  "Cutting the fleeb.",
  "Taking care of the several hizzards.",
  "Rubbing the blamfs against the chumbles.",
  "Shaving away the ploobis and grumbo.",
];

// APPLY RANDOM PHRASE AND FADE-OUT TO PRELOAD PAGE
window.addEventListener('load', function(){
  phrase = document.querySelector('.pl-preload-phrase');
  var chosenPhrase = phrases[Math.floor(Math.random() * phrases.length)];
  phrase.innerHTML = chosenPhrase;
  preload = document.querySelector('.pl-preloader');
  preload.classList.toggle('pl-fadeout');

  setTimeout(function(){
    preload.style.display = 'none';
  }, 2000);
});


// DISPLAY TOGGLE ON OVERLAY AND CONTACT MODAL
var toggleModal = document.querySelectorAll('.pl-toggle-modal');

for (var i = 0; i < toggleModal.length; i++) {
  toggleModal[i].addEventListener("click", function(){
    var overlay = document.querySelector('.pl-overlay');
    var contactModal = document.querySelector('.pl-contact-modal');
    overlay.classList.toggle('pl-toggleDisplayBlock');
    contactModal.classList.toggle('pl-Anim-Slide-Top');
  }
)};


// APPLY SLIDE EFFECT ON CONTACT BTN & INFO BOX
var btn1 = document.querySelector(".pl-btn-contact");
var box1 = document.querySelector(".pl-info-box");
var arrow = document.querySelector(".pl-contact-arrowcorner");

btn1.addEventListener("click", function(){
    btn1.classList.toggle('pl-btn-contact-Y')
    box1.classList.toggle('pl-toggleDisplayBlock');
    arrow.classList.toggle('pl-toggleDisplayBlock');
});


// APPLY FADE EFFECT OF ARROWS UP & DOWN ON PAGE SCROLL

var waypoint = new Waypoint({
  element: document.querySelector('.pl-arrowdown-box'),
  handler: function() {
    console.log('test');
  }
})
