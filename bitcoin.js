

/*******************************************************************************

Date And Time

*******************************************************************************/



document.addEventListener("DOMContentLoaded", function() {
  
  var datetimeElement = document.getElementById("dateTime");

  function updateDateTime() {
  
    var now = new Date();

    var dateTimeString = now.toLocaleString();

    datetimeElement.textContent = dateTimeString+" Today";
  }

  updateDateTime();
  setInterval(updateDateTime, 1000);

});


//***************************************************************************//


function updateNumber() {
  
  
       var randomNum = Math.floor(Math.random() * (80 - 50 + 1) + 50);

       var numberElem = document.getElementById("number");

       numberElem.textContent = "Balance: "+"529." + randomNum + " USD";
}

setInterval(updateNumber, 2000);






/*
function privacy(){
 
          
         home= document.getElementById('MainLay');
         home.style.display=('none');
         
         window.location.href=('privacy.html');
           
}
*/



function privacy(){
    
    alert("No open trades. Please try again later");
    
}














        
