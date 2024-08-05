

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
    
        mainInfo.innerHTML=(" STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 355088379692128</font><br/>  Model: Galaxy A04e(SM-A042F)<br/>Brand: Samsung<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana ");
        moreInfo.innerHTML=("<br/>Model Info: MOBILE SM-A042F/DS BLACK AFC<br/>Search Term: 355088379692128<br/>IMEI 1: 355088379692128<br/>Serial Number:<font color="#ff0000"> R8YW9036B8Y </font><br/>Model Desc: A04e<br/>Model Name: SM-A042F/DS<br/>Model Number: SM-A042FZKDAFC<br/>Warranty Status: Warranty Active<br/>Estimated Warranty End Date: 04-09-2025<br/>Production location: Korea SEC<br/>Production Date: 04-09-2023  ");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block")
     }
     
}













