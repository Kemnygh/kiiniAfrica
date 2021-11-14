// prompt("name")

var imageparent = document.querySelector("#img-box");
var m_image = document.createElement('img');
imageparent.appendChild(m_image);
m_image.classList.add("gnd-img")
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

m_image.style.marginTop = "50px";
m_image.style.marginLeft = "5%";
m_image.style.maxWidth = "100%";
m_image.style.maxHeight = "300px";