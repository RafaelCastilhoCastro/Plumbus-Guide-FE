// --------- PRELOAD PAGE EFFECTS ---------

// Select random phrase and inject it
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

var injectPhrase = function(){
  phrase = document.querySelector('.pl-preload-phrase');
  var chosenPhrase = phrases[Math.floor(Math.random() * phrases.length)];
  phrase.innerHTML = chosenPhrase;
}

// Fadeout effect
var fadePreload = function(){
  preload = document.querySelector('.pl-preloader');
  preload.classList.toggle('pl-fadeout-delay');
}

// Triggers
window.addEventListener('load', function(){
  injectPhrase();
  fadePreload();
});
