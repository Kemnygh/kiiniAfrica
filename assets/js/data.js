validation() 

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
      pictureController.classList.add("hide")
  
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
}
  




// submitbtn = document.querySelector(".btn")

// altertDiv.classList.add("hide")
// submitbtn.addEventListener('click',getdata)