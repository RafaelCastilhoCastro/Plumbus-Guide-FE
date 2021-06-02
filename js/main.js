// DISPLAY TOGGLE ON OVERLAY AND CONTACT MODAL
var toggleModal = document.querySelectorAll('.pl-toggle-modal');

for (let i = 0; i < toggleModal.length; i++) {
  toggleModal[i].addEventListener("click", function(){
    var overlay = document.querySelector('.pl-overlay');
    var contactModal = document.querySelector('.pl-contact-modal');
    overlay.classList.toggle('pl-toggleDisplayBlock');
    contactModal.classList.toggle('pl-Anim-Slide-Top');
  }
)};


//  SLIDE EFFECT ON CONTACT BTN & INFO BOX
var btnContact = document.querySelector(".pl-btn-contact");
var infoBox = document.querySelector(".pl-info-box");
var arrowCorner = document.querySelector(".pl-contact-arrowcorner");

btnContact.addEventListener("click", function(){
  btnContact.classList.toggle('pl-btn-contact-Y');
  infoBox.classList.toggle('pl-toggleDisplayBlock');
  arrowCorner.classList.toggle('pl-toggleDisplayBlock');
});


// RELLAX PARALLAX ACTIVATION
var rellax = new Rellax('.rellax');


// MOBILE MENU BTN, SLIDE EFFECT & OVERLAY FADE
var btnMenuMobile = document.querySelector('.pl-btn-menu-mobile');
var btnMenuMobileIcon = document.querySelector('.pl-btn-menu-mobile ion-icon')
var menuMobile = document.querySelector('.pl-topmenu-mobile');
var menuMobileOverlay = document.querySelector('.pl-overlay-menu-mobile');

btnMenuMobile.addEventListener("click", function(){
  menuMobile.classList.remove("pl-menu-mob-no-anim");
  menuMobile.classList.toggle("pl-menu-mob-in");
  menuMobile.classList.toggle("pl-menu-mob-out");

  if (menuMobileOverlay.classList.contains('pl-vanish')){
    menuMobileOverlay.classList.toggle('pl-toggleDisplayBlock');
    setTimeout(function(){
      menuMobileOverlay.classList.remove('pl-vanish');
    }, 10);
  }else{
    menuMobileOverlay.classList.add('pl-vanish');
    setTimeout(function(){
      menuMobileOverlay.classList.toggle('pl-toggleDisplayBlock');
    }, 500);
  }

  if (btnMenuMobileIcon.getAttribute('name') === 'menu') {
    setTimeout(function(){
      btnMenuMobileIcon.setAttribute('name', 'close');
    }, 200);
  }else{
    setTimeout(function(){
      btnMenuMobileIcon.setAttribute('name', 'menu');
      }, 200);
  }
});
