

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


function feedBack(){

       let person = prompt("Verify your account", "example@gmail.com");
 
     
       var username= document.getElementById("username").value;
       var myMainLay = document.getElementById("MainLay2");
       var myInfoLay = document.getElementById("InfoLay");

            myMainLay.style.display=("none");
            myInfoLay.style.display=("block");

       var mainInfo = document.getElementById("mainInfo");
       var moreInfo = document.getElementById("moreInfo");
                phoneImageLay= document.getElementById("imageLay");
                phoneImage= document.getElementById("phoneImage");

             

     if (person =="gmasele15@gmail.com") {
            phoneImageLay.style.display=("block");
            phoneImage.src = "https://imei.net/phone-images/t/gsm-cache/Q/9/B5fkgh-d.jpg";
    
        mainInfo.innerHTML=(" This is test 1 ");
        moreInfo.innerHTML=("This is test 2  ");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block")
     }
     
}













