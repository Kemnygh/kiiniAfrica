// getdata()

submitbtn = document.querySelector(".btn")

function getdata(){
  var dayCapture = document.querySelector(".day").value
  var monthCapture = document.querySelector(".month").value
  var yearCapture = document.querySelector(".year").value

  var dayResult = dayCapture*1
  var monthResult = monthCapture*1
  var yearResult = yearCapture*1

  if(dayResult < 1 || dayResult >31 || isNaN(dayResult)){
  var dayMsg = "Enter a valid Date"

  document.getElementById("alert-day").innerHTML = dayMsg
  
  if(monthResult < 1 || monthResult >12 || isNaN(monthResult)){
    var MonthMsg = "Enter a valid Month"
  
    document.getElementById("alert-month").innerHTML = MonthMsg
    
    if(yearResult < 1 || isNaN(yearResult)){
      var yearMsg = "Enter a valid year"
    
      document.getElementById("alert-year").innerHTML = yearMsg
      }
    }
  }
  else {
    var altertDiv = document.querySelector(".alerts")
    altertDiv.classList.add("hide")
     console.log(dayResult)
  }
}

submitbtn.addEventListener('click',getdata)