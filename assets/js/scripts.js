// prompt("name")
genderImage()

function genderImage(){
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
m_image.style.marginBottom = "50px";
m_image.style.maxWidth = "100%";
m_image.style.maxHeight = "300px";
}

var secondimage = document.querySelector("#main-right");
var pictureController = document.createElement('div');
secondimage.appendChild(pictureController);
var cover_image = document.createElement('img');
pictureController.appendChild(cover_image);
var c_img = cover_image.src = "./assets/images/cover-img.png";

var contentController = document.querySelector("#content-box");
contentController.classList.add("hide")



var submitButton = document.querySelector(".btn");

submitButton.addEventListener('click', function(event){
  console.log("I have been clicked")
  contentController.classList.remove("hide")
  pictureController.classList.add("hide")
})





