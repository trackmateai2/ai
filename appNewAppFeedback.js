
function feedBack(){

             
    
    var username= document.getElementById("username").value;
    
    var myLoginLay = document.getElementById("LoginLay");
    var myMainLay = document.getElementById("MainLay");
    var myInfoLay = document.getElementById("InfoLay");

            myMainLay.style.display=("none");
            myLoginLay.style.display=("none");
            myInfoLay.style.display=("block");
    
    var mainInfo = document.getElementById("mainInfo");
    var moreInfo = document.getElementById("moreInfo");

    
                phoneImageLay= document.getElementById("imageLay")
                phoneImage= document.getElementById("phoneImage")
      
   


 
 if (username=="facethebushman@yahoo.com"){
            window.location.href=("resultsGabriel3551.html");
   }
  
    
 if (username=="flockie2002@gmail.com"){
            phoneImageLay.style.display=("block");
            phoneImage.src = "https://imei.net/phone-images/t/gsm-cache/x/9/Eq3lPN-d.jpg";
    
        mainInfo.innerHTML=(" STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 357492755696661</font><br/>  Model: Galaxy A05 (SM-A055F)<br/>Brand: Samsung<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana ");
        moreInfo.innerHTML=(" Model Info: MOBILE SM-A055F/DS BLACK AFC<br/>Search Term: 357492755696661<br/>IMEI 1: 357492755696661<br/>Serial Number: R92X20V6XBZ<br/>Model Desc: Galaxy A05<br/>Model Name: SM-A055F/DS<br/>Model Number: SM-A055FZKDAFC<br/>Warranty Status: Warranty Active<br/>Estimated Warranty End Date: 01-03-2026<br/>Production location: Korea SEC<br/>Production Date: 29-02-2024 ");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
   }
  
 if (username=="tntmots@gmail.com"){
           window.location.href=("resultsTntmots.html");
   }
if (username=="Ogaatlale@gmail.com"){
           window.location.href=("resultsGabriel35388.html");
   }
    
}











