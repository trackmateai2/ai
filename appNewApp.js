

function startTracking(){
     window.location.href=("appNewAppTracking.html");
}
function goHomee(){
          var LoginLay = document.getElementById("LoginLay");
          var MainLay = document.getElementById("MainLay");
          
          LoginLay.style.display=("none");
          MainLay.style.display=("Block");
}
function back(){
    window.location.href=("appNewAppMain.html");
}
function disclaimer(){
    window.location.href=("disclaimer.html");
}
function privacyPolicy(){
    window.location.href=("privacyPolicy.html");
}
function feedBackkk(){
       
       var username= document.getElementById("username").value;
       var myMainLay = document.getElementById("MainLay2");
       var myInfoLay = document.getElementById("InfoLay");

            myMainLay.style.display=("none");
            myInfoLay.style.display=("block");

       var mainInfo = document.getElementById("mainInfo");
       var moreInfo = document.getElementById("moreInfo");
                phoneImageLay= document.getElementById("imageLay");
                phoneImage= document.getElementById("phoneImage");

             

      if (username=="gmasele15@gmail.com"){
             mainInfo.style.display=("block");
             alert(username);
             mainInfo.innerHTML=(username);
   }
     
}

function feedBack(){

let person = prompt("Verify your account", "example@gmail.com");
 
 if (person != null) {
    document.getElementById("demo").innerHTML =
    "Hello " + person + "thisis a test";
  }

}














