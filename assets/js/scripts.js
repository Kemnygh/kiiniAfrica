// prompt("name")
genderImage()
coverImage()



function genderImage(){
var imageparent = document.querySelector("#img-box");
var m_image = document.createElement('img');
imageparent.appendChild(m_image);
m_image.classList.add("gnd-img")

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
var mainTitle = document.createElement("p");
pictureController.appendChild(cover_image);
pictureController.appendChild(mainTitle);



var c_img = cover_image.src = "./assets/images/cover-img.png";
var text_input = mainTitle.textContent = "Welcome to the Akan Names App enter your birthdate, choose gender and submit to see what could be your akan name."



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

var contentController = document.querySelector("#content-box");
contentController.classList.add("hide");



var submitButton = document.querySelector(".btn");

submitButton.addEventListener('click', function(event){
  
})


//--------------------- validation --------------

  var id = (id) => document.getElementById(id);
  
  var classes = (classes) => document.getElementsByClassName(classes);
  
  var day = id("day"),
    month = id("month"),
    year = id("year"),
    form = id("main-left"),
    gender = id("gender"),
    female = id("flexRadioDefault1")
    male = id("flexRadioDefault2")
    errorMsg = classes("error");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    
      var dayValue = engine1(day, 0, "Enter valid date");
      var monValue = engine2(month, 1, "Enter valid month");
      var yearValue = engine3(year, 2, "Enter valid year");
      var genValue = engine4(gender, 3, "Select Gender");

      //---------- entry variables -----------
      var weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"]
      var weekDaysAkan = ["Kwasiada","Dwoada","Benada","Wukuada","Yawoada","Fiada","Memeneda"]
      var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
      var femaleNames = ["Akosua","Awoa","Abenaa","Akua","Yaa","Afua","Ama"]

     
      // formula not working correctly switched to getDay() inbuilt in javascript
      // var d = ((((parseInt(yearValue.substr(0,2))/4)-2*parseInt(yearValue.substr(0,2))-1)+((5*parseInt(yearValue.substr(2,2))/4))+((26*(parseInt(monValue)+1)/10))+parseInt(dayValue)) % 7 )
      
      // -------------- date variables -------------
      var fullDate = monValue+"/"+dayValue+"/"+yearValue;
      const d = new Date(fullDate);
      var dayIndex = d.getDay();
      console.log(genValue);

      for(var i = 0;  i < weekDays.length; i++){
        if (i === dayIndex && genValue === "female"){
          var wd = weekDays[i].toUpperCase();
          var wda = weekDaysAkan[i].toUpperCase();
          var fn = femaleNames[i];
          contentController.classList.remove("hide");
          pictureController.classList.add("hide");
        return document.querySelector(".day-tag").innerHTML = wd,
         document.querySelector(".dayAkan").innerHTML = wda,
         document.querySelector(".name-tag").innerHTML = fn;
        }
        else if (i === dayIndex && genValue === "male"){
          var wd = weekDays[i].toUpperCase();
          var wda = weekDaysAkan[i].toUpperCase();
          var mn = maleNames[i];
          contentController.classList.remove("hide");
          pictureController.classList.add("hide");
        return document.querySelector(".day-tag").innerHTML = wd,
         document.querySelector(".dayAkan").innerHTML = wda,
         document.querySelector(".name-tag").innerHTML = mn;
        }
      }

    });
  
    var engine1 = (id, serial, message) => {
      if ((id.value < 1 || id.value > 31 || isNaN(id.value)) && serial === 0) {
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";  
      } else {
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green";
        return id.value;
        // console.log(id.value);
      }
    };
  
    var engine2 = (id, serial, message) => {
      if ((id.value < 1 || id.value > 12 || isNaN(id.value)) && serial === 1) {
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";  
      } else {
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green";
        return id.value;
      }
    };

    var engine3 = (id, serial, message) => {
      if ((id.value < 1 || id.value > 3500 || isNaN(id.value)) && serial === 2) {
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";  
      } else {
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green";
        return id.value;
      }
    };

    var engine4 = (id, serial, message) => {
      if ((!female.checked && !male.checked) && serial === 3) {
        errorMsg[serial].innerHTML = message;
        male.style.border = "2px solid red";
        female.style.border = "2px solid red";   
      } 
      else if (female.checked  && serial === 3) {
        errorMsg[serial].innerHTML = "";
        male.style.border = "";
        female.style.border = ""; 
        return female.value; 
        console.log(female.value); 
      }
      else if (male.checked  && serial === 3) {
        errorMsg[serial].innerHTML = "";
        male.style.border = "";
        female.style.border = "";  
        return male.value;
        console.log(male.value); 
      }
    };

  
    
  }


