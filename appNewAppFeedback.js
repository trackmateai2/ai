
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
      
   

 if (username=="gmasele15@gmail.com"){
            phoneImageLay.style.display=("block");
            phoneImage.src = "https://imei.net/phone-images/t/gsm-cache/x/9/Eq3lPN-d.jpg";
    
        mainInfo.innerHTML=(" STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 354649160968075</font><br/>  Model: Galaxy A05(SM-A055F)<br/>Brand: Samsung<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana ");
        moreInfo.innerHTML=(" Model Info: MOBILE SM-A055F/DS BLACK AFA<br/>Search Term: 354649160968075<br/>IMEI 1: 354649160968075<br/>Serial Number:<font color=#ff0000> R92X418TNFA</font><br/>Model Desc: Galaxy A05<br/>Model Name: SM-A055F/DS<br/>Model Number: SM-A055FZKDAFA<br/>Warranty Status: Warranty Active<br/>Estimated Warranty End Date: 17-04-2026<br/>Production location: Korea SEC<br/>Production Date: 17-04-2024<br/>Country: Botswana<br/>Carrier: Factory Unlocked ");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
   }

 
 if (username=="ramofiselelo@gmail.com"){
            phoneImageLay.style.display=("block");
            phoneImage.src = "https://imei.net/phone-images/t/gsm-cache/x/9/Eq3lPN-d.jpg";
    
        mainInfo.innerHTML=(" STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 354649160968075</font><br/>  Model: Galaxy A05(SM-A055F)<br/>Brand: Samsung<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana ");
        moreInfo.innerHTML=(" Model Info: MOBILE SM-A055F/DS BLACK AFA<br/>Search Term: 354649160968075<br/>IMEI 1: 354649160968075<br/>Serial Number:<font color=#ff0000> R92X418TNFA</font><br/>Model Desc: Galaxy A05<br/>Model Name: SM-A055F/DS<br/>Model Number: SM-A055FZKDAFA<br/>Warranty Status: Warranty Active<br/>Estimated Warranty End Date: 17-04-2026<br/>Production location: Korea SEC<br/>Production Date: 17-04-2024<br/>Country: Botswana<br/>Carrier: Factory Unlocked ");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
   }
  
    



    
}











