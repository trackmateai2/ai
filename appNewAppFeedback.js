
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
  
    
 if (username=="nkulatebogo@gmail.com	"){
            phoneImageLay.style.display=("block");
            phoneImage.src = "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a14-4g.jpg";
    
        mainInfo.innerHTML=("STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 353193414410791</font><br/>  Model: Galaxy A14 5G(SM-A145F)<br/>Brand: Samsung<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana  ");
        moreInfo.innerHTML=(" Model Info: MOBILE SM-A145F/DS BLACK MEA<br/>Search Term: 353193414410791<br/>IMEI 1: 353193414410791<br/>Serial Number: RF8W90V17GT<br/>Model Desc: Galaxy A14<br/>Model Name: SM-A145F/DS<br/>Model Number: SM-A145FZKDMEA<br/>Warranty Status: Warranty Active<br/>Estimated Warranty End Date: 04-04-2027<br/>Production location: Vietnam SEV<br/>Estimated Production Date: 04-04-2025<br/>Country: Botswana<br/>Carrier: Factory Unlocked ");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
   }
  
 if (username=="tntmots@gmail.com"){
           window.location.href=("resultsTntmots.html");
   }
if (username=="gmasele15@gmail.com"){
           window.location.href=("resultsRati.html");
   }
    
}











