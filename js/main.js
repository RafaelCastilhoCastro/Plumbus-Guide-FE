// ------- DISPLAY TOGGLE ON OVERLAY AND CONTACT MODAL -------

var toggleModal = document.querySelectorAll('.pl-toggle-modal');

for (let i = 0; i < toggleModal.length; i++) {
  toggleModal[i].addEventListener("click", function(){
    var overlay = document.querySelector('.pl-overlay');
    var contactModal = document.querySelector('.pl-contact-modal');
    overlay.classList.toggle('pl-toggleDisplayBlock');
    contactModal.classList.toggle('pl-Anim-Slide-Top');
  }
)};


// ------- SLIDE EFFECT ON CONTACT BTN & INFO BOX -------
var btnContact = document.querySelector(".pl-btn-contact");
var infoBox = document.querySelector(".pl-info-box");
var arrowCorner = document.querySelector(".pl-contact-arrowcorner");

btnContact.addEventListener("click", function(){
    btnContact.classList.toggle('pl-btn-contact-Y')
    infoBox.classList.toggle('pl-toggleDisplayBlock');
    arrowCorner.classList.toggle('pl-toggleDisplayBlock');
});
