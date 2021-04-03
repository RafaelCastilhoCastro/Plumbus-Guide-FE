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
