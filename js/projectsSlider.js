/* ------- PROJECTS SLIDER DYNAMIC WIDTH ------- */

var sliderContainer = document.querySelector('.pl-slider-container');
var sliderList = document.querySelector('.pl-slider-list');
var sliderItem = document.querySelectorAll('.pl-slider-item');

var containerWidth = sliderContainer.parentElement.offsetWidth;
sliderContainer.style.width = containerWidth + 'px';

var sliderListWidth = null;

for (let i = 0; i < sliderItem.length; i++) {
  sliderItem[i].style.width = containerWidth + 'px';

  sliderItemWidth = sliderItem[i].offsetWidth;

  sliderListWidth += sliderItemWidth;
}

sliderList.style.width = sliderListWidth+'px';



// ------- PROJECTS SLIDER ANIMATION WITH ANIMEJS -------

// Variables
var prevItem = document.querySelector('.pl-prev-icon');
var nextItem = document.querySelector('.pl-next-icon');
var sliderPos = 0;


// Slider next item animation
function sliderNextItem(){
  var lastItem = sliderListWidth - sliderItemWidth;

  if (sliderPos === (lastItem * -1)) {
    return;
  }

  sliderPos -= sliderItemWidth;
  var sliderPosStr = sliderPos.toString();
  sliderList.style.transform = "translateX(" + sliderPosStr + "px)";

  // anime ({
  //   targets: sliderList,
  //   translateX: sliderPos,
  //   easing: 'easeOutQuint'
  // });
}

// Slider previous item animation
function sliderPrevItem(){
  if (sliderPos === 0) {
    return;
  }

  sliderPos += sliderItemWidth;
  var sliderPosStr = sliderPos.toString();
  sliderList.style.transform = "translateX(" + sliderPosStr + "px)";


  // anime ({
  //   targets: sliderList,
  //   translateX: sliderPos,
  //   easing: 'easeOutQuint'
  // })
}



// ---------- PROJECTS COUNTERS ----------

const sliderTotalItems = sliderItem.length;
var bigCounter = document.querySelector('.pl-big-counter');
var currentProj = document.querySelector('.pl-current-proj');
var totalProjs = document.querySelector('.pl-total-projs');

function addZero(n){
  if (n < 10){
    return '0' + n;
  }else {
    return n;
  }
}

// Total projects number
totalProjs.textContent = addZero(sliderTotalItems);

// Current project number (big and small counter)
function counterPlus(){
  let currNum = parseInt(currentProj.textContent);
  if (currNum < sliderTotalItems){
    currNum++;
    currentProj.textContent = addZero(currNum);
    bigCounter.textContent = addZero(currNum);
  }
}

function counterMinus(){
  let currNum = parseInt(currentProj.textContent);
  if (currNum <= sliderTotalItems && currNum >= 2){
    currNum--;
    currentProj.textContent = addZero(currNum);
    bigCounter.textContent = addZero(currNum);
  }
}

// Nav-lines effects
var navLines = document.querySelectorAll('.pl-nav-line');

function updateLines(){
  for (let i = 0; i < navLines.length; i++) {
    navLines[i].classList.remove("pl-line-active");
    if (navLines[i].textContent == currentProj.textContent) {
        navLines[i].classList.add("pl-line-active");
    }
  }
}


// Projects images scale
var projImages = document.querySelectorAll('.pl-projImg');

function scaleImg(){
  for (let i = 0; i < projImages.length; i++) {
    projImages[i].classList.remove('pl-scaleUp');
    let imgNum = projImages[i].getAttribute('data-imgNum');
    if (imgNum === currentProj.textContent) {
      projImages[i].classList.add('pl-scaleUp');
    }
  }
}



// Projects titles animation
const projTitle = (entries, observer) => {
  entries.forEach(entry => {
    entry.target.classList.toggle("pl-animLetters", entry.isIntersecting);
  });
};

const projTitleOpt = {
  threshold: 1.0
}

const obsProjTitle = new IntersectionObserver(projTitle, projTitleOpt);

const projTitles = document.querySelectorAll('.pl-projTitle');

for (let i = 0; i < projTitles.length; i++) {
  obsProjTitle.observe(projTitles[i]);
}



// Projects subtitle & btn animation
const projSubtitle = (entries, observer) => {
  entries.forEach(entry => {
    entry.target.classList.toggle("pl-appear", entry.isIntersecting);
  });
};

const projSubtitleOpt = {
  threshold: 1.0
}

const obsProjSubtitle = new IntersectionObserver(projSubtitle, projSubtitleOpt);

const projSubtitles = document.querySelectorAll('.pl-projSubtitle');

for (let i = 0; i < projSubtitles.length; i++) {
  obsProjSubtitle.observe(projSubtitles[i]);
}




// ------- TRIGGERS -------

nextItem.addEventListener('click', function(){
  sliderNextItem();
  counterPlus();
  updateLines();
  scaleImg()
})

prevItem.addEventListener('click', function(){
  sliderPrevItem();
  counterMinus();
  updateLines();
  scaleImg()
})
