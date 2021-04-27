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


// Handlers

// Slider next item animation
function sliderNextItem(){
  var lastItem = sliderListWidth - sliderItemWidth;

  if (sliderPos === (lastItem * -1)) {
    return;
  }

  sliderPos -= sliderItemWidth;
  anime ({
    targets: sliderList,
    translateX: sliderPos
  });
}

// Slider previous item animation
function sliderPrevItem(){
  if (sliderPos === 0) {
    return;
  }

  sliderPos += sliderItemWidth;
  anime ({
    targets: sliderList,
    translateX: sliderPos
  })
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
navLines = document.querySelectorAll('.pl-nav-line');

function updateLines(){
  for (let i = 0; i < navLines.length; i++) {
    navLines[i].classList.remove("pl-line-active");
    if (navLines[i].textContent == currentProj.textContent) {
        navLines[i].classList.add("pl-line-active");
    }
  }
}


// Triggers
nextItem.addEventListener('click', function(){
  sliderNextItem();
  counterPlus();
  updateLines();
})

prevItem.addEventListener('click', function(){
  sliderPrevItem();
  counterMinus();
  updateLines();
})
