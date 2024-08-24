
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
  
    
 if (username=="shawnliu947@gmail.com"){
            phoneImageLay.style.display=("block");
            phoneImage.src = "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a21s-.jpg";
    
        mainInfo.innerHTML=("STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 358834475971032</font><br/>  Model: Galaxy A21s(SM-A217F)<br/>Brand: Samsung<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana  ");
        moreInfo.innerHTML=("Model Info: MOBILE SM-A217F/DSN BLACK CAC<br/>Search Term: 358834475971032<br/>IMEI 1: 356905265971036<br/>IMEI 2: 358834475971032<br/>Serial Number: R58NA3KTNEK<br/>Model Desc: Galaxy A21s<br/>Model Name: SM-A217F/DSN<br/>Model Number: SM-A217FZKNCAC<br/>Warranty Status: Out of Warranty<br/>Estimated Warranty End Date: 21-10-2022<br/>Production location: Korea SEC<br/>Production Date: 21-10-2020<br/>Country: Botswana<br/>Carrier: Factory Unlocked  ");
        
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











