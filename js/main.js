// --------- PRELOAD PHRASES ---------
var phrases = [
  "Smoothing the dinglebop with schleem.",
  "Repurposing the schleem.",
  "Pushing the dinglebop through the grumbo.",
  "Rubbing the fleeb thoroughly.",
  "A Schlami is rubbing it.",
  "The fleeb is been cut.",
  "Taking care of the several hizzards.",
  "Blamfs rubbing against the chumbles.",
  "The ploobis and grumbo are been shaved away.",
];

// APPLY RANDOM PHRASE AND FADE-OUT TO PRELOAD PAGE
window.addEventListener('load', function(){
  phrase = document.querySelector('.pl-preload-phrase');
  var chosenPhrase = phrases[Math.floor(Math.random() * phrases.length)];
  phrase.innerHTML = chosenPhrase;
  preload = document.querySelector('.pl-preloader');
  preload.classList.toggle('pl-preload-fade');

  setTimeout(function(){
    preload.style.display = 'none';
  }, 2000);
});



// APPLY SLIDE EFFECT ON CONTACT BTN & INFO BOX
btn1 = document.getElementById("btnContact");
box1 = document.getElementById("contactInfo");
arrow = document.getElementById("arrowCorner");

btn1.addEventListener("click", function(){
  if (btn1.style.backgroundPositionY == 0) {
    btn1.style.backgroundPositionY = "-45px";
    box1.style.display = "block";
    arrow.style.display = "block";
  }else {
    btn1.style.backgroundPositionY = '';
    box1.style.display = 'none';
    arrow.style.display = 'none';
  }
});

// APPLY FADE EFFECT OF ARROW DOWN ON PAGE SCROLL
window.addEventListener('scroll', function(){
  if (window.pageYOffset > 50 && window.pageYOffset < 100) {
    arrowbox = document.querySelector('.pl-arrowdown-box');
    arrowbox.style.opacity = 0;
  }
  if (window.pageYOffset < 5) {
    arrowbox = document.querySelector('.pl-arrowdown-box');
    arrowbox.style.opacity = 1;
  }
})
