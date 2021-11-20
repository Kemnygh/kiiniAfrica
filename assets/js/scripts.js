// prompt("name")
genderImage()
coverImage()
validation()



function genderImage(){
var imageparent = document.querySelector("#img-box");
var m_image = document.createElement('img');
imageparent.appendChild(m_image);
m_image.classList.add("gnd-img")
// var femaleIcon = m_image.src = "./assets/images/female.g.png";
 m_image.src = "./assets/images/neutral.g.png";

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
m_image.style.maxHeight = "247px";
}

function coverImage(){
var secondimage = document.querySelector("#main-right");
var pictureController = document.createElement('div');
secondimage.appendChild(pictureController);
var cover_image = document.createElement('img');
// var spanTitle = document.createElement("p");
var mainTitle = document.createElement("p");
pictureController.appendChild(cover_image);
// pictureController.appendChild(spanTitle);
pictureController.appendChild(mainTitle);



var c_img = cover_image.src = "./assets/images/cover-img.png";
var text_input = mainTitle.textContent = "Welcome to the Akan Names App enter your birthdate, choose gender and submit to see what could be your akan name."
// spanTitle.textContent = "welcome to the"


pictureController.style.marginTop = "40px";
pictureController.style.marginBottom = "10px";
pictureController.style.maxWidth = "100%";
pictureController.style.maxHeight = "100%";
cover_image.style.maxWidth = "100%";
cover_image.style.maxHeight = "100%";
cover_image.style.opacity = "0.2";
cover_image.style.borderRadius = "10px";
pictureController.style.position = "relative";
mainTitle.style.position = "absolute";
mainTitle.style.top = "40%";
mainTitle.style.marginLeft = "20px";
mainTitle.style.marginRight = "20px";
mainTitle.style.color = "#1dbf74";
mainTitle.style.textAlign = "center";
mainTitle.style.fontWeight = "bold";
// spanTitle.style.position = "absolute";
// spanTitle.style.top = "50%";
// spanTitle.style.left = "10%";
// mainTitle.style.fontSize = "30px";

var contentController = document.querySelector("#content-box");
contentController.classList.add("hide")



var submitButton = document.querySelector(".btn");

submitButton.addEventListener('click', function(event){
  // contentController.classList.remove("hide")
  // pictureController.classList.add("hide")
})



}

function validation(){
  var id = (id) => document.getElementById(id);
  
  var classes = (classes) => document.getElementsByClassName(classes);
  
  var day = id("day"),
    month = id("month"),
    year = id("year"),
    form = id("main-left"),
    gender = id("gender"),
    female = id("flexRadioDefault1")
    male = id("flexRadioDefault2")
    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    
      engine1(day, 0, "Enter valid date");
      engine2(month, 1, "Enter valid month");
      engine3(year, 2, "Enter valid year");
      engine4(gender, 3, "Select Gender");
    });
  
    var engine1 = (id, serial, message) => {
      if ((id.value < 1 || id.value > 31 || isNaN(id.value)) && serial === 0) {
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";  
        // // icons
        // failureIcon[serial].style.opacity = "1";
        // successIcon[serial].style.opacity = "0";
      } else {
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green";
        console.log(id.value);
    
        // icons
        // failureIcon[serial].style.opacity = "0";
        // successIcon[serial].style.opacity = "1";
      }
    };
  
    var engine2 = (id, serial, message) => {
      if ((id.value < 1 || id.value > 12 || isNaN(id.value)) && serial === 1) {
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";  
        // // icons
        // failureIcon[serial].style.opacity = "1";
        // successIcon[serial].style.opacity = "0";
      } else {
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green";
    
        // icons
        // failureIcon[serial].style.opacity = "0";
        // successIcon[serial].style.opacity = "1";
      }
    };
    var engine3 = (id, serial, message) => {
      if ((id.value < 1 || id.value > 3500 || isNaN(id.value)) && serial === 2) {
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";  
        // // icons
        // failureIcon[serial].style.opacity = "1";
        // successIcon[serial].style.opacity = "0";
      } else {
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green";
    
        // icons
        // failureIcon[serial].style.opacity = "0";
        // successIcon[serial].style.opacity = "1";
      }
    };
    var engine4 = (id, serial, message) => {
      if ((!female.checked && !male.checked) && serial === 3) {
        errorMsg[serial].innerHTML = message;
        male.style.border = "2px solid red";
        female.style.border = "2px solid red";    
        // console.log(male.value);
        // // icons
        // failureIcon[serial].style.opacity = "1";
        // successIcon[serial].style.opacity = "0";
      } 
      else if (female.checked  && serial === 3) {
        errorMsg[serial].innerHTML = "";
        male.style.border = "";
        female.style.border = "";  
        // console.log(male.checked.value); 
        console.log(female.value); 
    
        // icons
        // failureIcon[serial].style.opacity = "0";
        // successIcon[serial].style.opacity = "1";
      }
      else if (male.checked  && serial === 3) {
        errorMsg[serial].innerHTML = "";
        male.style.border = "";
        female.style.border = "";  
        // console.log(male.checked.value); 
        console.log(male.value); 
    
        // icons
        // failureIcon[serial].style.opacity = "0";
        // successIcon[serial].style.opacity = "1";
      }
    };
    return this
  }


