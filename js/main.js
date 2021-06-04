// OVERLAY & CONTACT MODAL
var toggleContactModal = document.querySelectorAll('.pl-toggle-contact-modal');
for (let i = 0; i < toggleContactModal.length; i++) {
  toggleContactModal[i].addEventListener("click", function(){

    // CONTACT MODAL SLIDE IN & OUT
    var contactModal = document.querySelector('.pl-contact-modal');
    contactModal.classList.remove('pl-contact-modal-no-anim');
    contactModal.classList.toggle('pl-contact-modal-out');
    contactModal.classList.toggle('pl-contact-modal-in');

    // OVERLAY APPEAR & FADE
    var contactOverlay = document.querySelector('.pl-contact-overlay');
    if (contactOverlay.classList.contains('pl-vanish')){
      contactOverlay.classList.toggle('pl-toggleDisplayBlock');
      setTimeout(function(){
        contactOverlay.classList.remove('pl-vanish');
      }, 10);
    }else{
      contactOverlay.classList.add('pl-vanish');
      setTimeout(function(){
        contactOverlay.classList.toggle('pl-toggleDisplayBlock');
      }, 500);
    }
  });
}


//  SLIDE EFFECT ON CONTACT BTN & INFO BOX
var btnContact = document.querySelector(".pl-btn-contact");
var infoBox = document.querySelector(".pl-info-box");
var arrowCorner = document.querySelector(".pl-contact-arrowcorner");
var infoBoxContent = document.querySelectorAll(".pl-infobox-content");

btnContact.addEventListener("click", function(){
  btnContact.classList.toggle('pl-btn-contact-Y');

  infoBox.classList.remove('pl-info-box-no-anim');
  infoBox.classList.toggle('pl-info-box-grow');
  infoBox.classList.toggle('pl-info-box-shrink');

  arrowCorner.classList.remove('pl-contact-arrowcorner-no-anim');
  arrowCorner.classList.toggle('pl-contact-arrowcorner-in');
  arrowCorner.classList.toggle('pl-contact-arrowcorner-out');

  setTimeout(function(){
    for (var i = 0; i < infoBoxContent.length; i++) {
      if (infoBoxContent[i].classList.contains('pl-vanish')) {
        infoBoxContent[i].classList.toggle('pl-toggleDisplayBlock');
        setTimeout(function(){
          infoBoxContent[i].classList.remove('pl-vanish');
        }, 10);
      }else{
        infoBoxContent[i].classList.add('pl-vanish');
        setTimeout(function(){
          infoBoxContent[i].classList.toggle('pl-toggleDisplayBlock');
        }, 500);
      }
    }
  }, 400);
});



// RELLAX PARALLAX ACTIVATION
var rellax = new Rellax('.rellax');


// MOBILE MENU BTN, SLIDE EFFECT & OVERLAY FADE
var btnMenuMobile = document.querySelector('.pl-btn-menu-mobile');
var btnMenuMobileIcon = document.querySelector('.pl-btn-menu-mobile ion-icon');
var menuMobile = document.querySelector('.pl-topmenu-mobile');
var menuMobileOverlay = document.querySelector('.pl-overlay-menu-mobile');
var toggleMobileMenu = document.querySelectorAll('.pl-toggle-mobile-menu');

// MOBILE MENU SLIDE
for (let i = 0; i < toggleMobileMenu.length; i++) {
  toggleMobileMenu[i].addEventListener("click", function(){
    menuMobile.classList.remove("pl-menu-mob-no-anim");
    menuMobile.classList.toggle("pl-menu-mob-in");
    menuMobile.classList.toggle("pl-menu-mob-out");

    // OVERLAY APPEAR & FADE
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

    // MOBILE MENU BTN CHANGE
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
}
