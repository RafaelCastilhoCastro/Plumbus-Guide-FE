// --------- PRELOAD PHRASES ---------
var phrases = [
  "Smoothing the dinglebop with schleem.",
  "Repurposing the schleem.",
  "Pushing the dinglebop through the grumbo.",
  "Rubbing the fleeb thoroughly.",
  "A Schlami is rubbing it.",
  "The fleeb is been cut.",
  'Taking care of the several hizzards.',
  'Blamfs rubbing against the chumbles.',
  'The ploobis and grumbo are been shaved away.',
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



// APPLY SLIDE EFFECTS ON CONTACT BTN & INFO BOX
btn1 = document.getElementById("btnContact");
box1 = document.getElementById("contactInfo");
arrow = document.getElementById("arrowDown");

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
