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
mainTitle.style.color = "#6b6969";
mainTitle.style.textAlign = "center";
mainTitle.style.fontWeight = "600";
mainTitle.style.fontFamily = "'Amatic SC', cursive";
mainTitle.style.fontSize = "30px";

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

      var maleMeaning = ["Kwasi is used to depict the day God descended, the day God began to create, it is regarded as the 1st Day. Essentially, the name marks the creating prowess of God, the beginning of it all!",
      "Kwadwo highlights the second day of creation, the day God made the firmament or sky, so the day means ‘Lord of Life firmament day’ and so does Kwadwo.",
      "The name brings to focus the the 3rd day in the creation story, Tuesday also further known as (Benada, Beda or Beneada), is the day God created dry land. Koyabeneda or Kwabenada commonly used for males and also known as Kwabena means ‘The Lord of Life’s day of the land’.",
      "Kwaku means Lord of Life’s host, which highlights the fourth day of creation, the day God adorned the skies with the moon, sun and stars. Originally the day was pronounced Wikuda or Yukuda, which means ‘day of the heavenly hosts’.",
      "Yaw together with the names Yaa/Aya, Yaw/Yao, Aya/Awo, Kwawo and Kwaw all represent the belief the Akans hold about God creating life on the 5th day when God made animals of various kinds and plants so the day means the day life began.",
      "The name is a testament to God’s creation of ‘the home where the idea of a home for humans came to fruition on the 6th day. The day is fully called Kwaofida; Fiada is an abridged version that translates to ‘Lord of Life’s home day’. It also symbolises God’s creation of the institution of marriage and the endorsement of the concept of two people finding each other. So, Kofi has the meaning as ‘Lord of Life home’.",
      "The name symbolizes the day God completed creation and took a rest, the Sabbath the day of God’s satisfaction. So, the name denotes and commemorates the day God rested. This is why the day is separated as a day of rest, sabbath, a practice that has gone on for generations."]

      var femaleMeaning = ["Akosua also know as ESI is used to depict the day God descended, the day God began to create, it is regarded as the 1st Day. Essentially, the name marks the creating prowess of God, the beginning of it all!",
      "Adwo highlights the second day of creation, the day God made the firmament or sky, so the day means ‘Lord of Life firmament day’ and so does Kwadwo.",
      "Also known as Abena means ‘the land’s day’, the name brings to focus the the 3rd day in the creation story, Tuesday also further put as (Benada, Beda or Beneada), is the day God created dry land.",
      "Akua celebrates the creation of the heavenly bodies, which highlights the fourth day of creation, the day God adorned the skies with the moon, sun and stars. Originally the day was pronounced Wikuda or Yukuda, which means ‘day of the heavenly hosts’.",
      "Yaa together with the names Yaa/Aya, Yaw/Yao, Aya/Awo, Kwawo and Kwaw all represent the belief the Akans hold about God creating life on the 5th day when God made animals of various kinds and plants so the day means the day life began.",
      "Afua also Afia, is a name testament to God’s creation of ‘the home where the idea of a home for humans came to fruition on the 6th day. The day is fully called Kwaofida; Fiada is a bridged version that translates to ‘Lord of Life’s home day’. It also symbolises God’s creation of the institution of marriage and the endorsement of the concept of two people finding each other. So, Afia has the meaning as ‘Lord of Life home’.",
      "The name symbolizes the day God completed creation and took a rest, the Sabbath the day of God’s satisfaction. So, the name denotes and commemorates the day God rested. This is why the day is separated as a day of rest, sabbath, a practice that has gone on for generations."]

     
      // formula not working correctly switched to getDay() inbuilt in javascript
      // var d = ((((parseInt(yearValue.substr(0,2))/4)-2*parseInt(yearValue.substr(0,2))-1)+((5*parseInt(yearValue.substr(2,2))/4))+((26*(parseInt(monValue)+1)/10))+parseInt(dayValue)) % 7 )
      
      // -------------- date variables -------------
      var fullDate = monValue+"/"+dayValue+"/"+yearValue;
      const d = new Date(fullDate);
      var dayIndex = d.getDay();
      

      for(var i = 0;  i < weekDays.length; i++){
        if (i === dayIndex && genValue === "female"){
          var wd = weekDays[i].toUpperCase();
          var wda = weekDaysAkan[i].toUpperCase();
          var fn = femaleNames[i];
          var fm = femaleMeaning[i];
          contentController.classList.remove("hide");
          pictureController.classList.add("hide");
        return document.querySelector(".day-tag").innerHTML = wd,
         document.querySelector(".dayAkan").innerHTML = wda,
         document.querySelector(".name-tag").innerHTML = fn,
         document.querySelector(".meaning-tag").innerHTML = fm;
        }
        else if (i === dayIndex && genValue === "male"){
          var wd = weekDays[i].toUpperCase();
          var wda = weekDaysAkan[i].toUpperCase();
          var mn = maleNames[i];
          var mm = maleMeaning[i];
          contentController.classList.remove("hide");
          pictureController.classList.add("hide");
        return document.querySelector(".day-tag").innerHTML = wd,
         document.querySelector(".dayAkan").innerHTML = wda,
         document.querySelector(".name-tag").innerHTML = mn,
         document.querySelector(".meaning-tag").innerHTML = mm;
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


