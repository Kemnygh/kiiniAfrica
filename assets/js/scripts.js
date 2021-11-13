// prompt("name")

var imageparent = document.querySelector("#main-left");
var m_image = document.createElement('img');
imageparent.appendChild(m_image);
// var femaleIcon = m_image.src = "./assets/images/female.g.png";
var neutralIcon = m_image.src = "./assets/images/neutral.g.png";

var fe_icon = document.querySelector(".fe-icon")
var ma_icon = document.querySelector(".ma-icon")

fe_icon.addEventListener('click',function(event){
  m_image.src = "./assets/images/female.g.png";
})

ma_icon.addEventListener('click',function(event){
  m_image.src = "./assets/images/male.g.png";
})