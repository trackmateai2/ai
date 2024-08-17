
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
      
   


 
 if (username=="facethebushman@gmail.com"){
            window.location.href=("resultsGabriel3551.html");
   }
  
    
 if (username=="Ogaatlale@gmail.com"){
            phoneImageLay.style.display=("block");
            phoneImage.src = "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a04s.jpg";
    
        mainInfo.innerHTML=("STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 350026555947689</font><br/>  Model: Galaxy A04S(SM-A047F)<br/>Brand: Samsung<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana  ");
        moreInfo.innerHTML=("Model Info: MOBILE SM-A047F/DS BLACK MEA<br/>Search Term: 350026555947689<br/>IMEI 1: 350026555947689<br/>Serial Number: R58W91CFCJP<br/>Model Desc: Galaxy A04s<br/>Model Name: SM-A047F/DS<br/>Model Number: SM-A047FZKDMEA<br/>Warranty Status: Warranty Active<br/>Estimated Warranty End Date: 26-09-2025<br/>Production location: Korea SEC<br/>Production Date: 26-09-2023<br/>Country: Botswana<br/>Carrier: Factory Unlocked ");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
   }
  
 if (username=="tntmots@gmail.com"){
           window.location.href=("resultsTntmots.html");
   }
if (username=="gmasele15@gmail.com"){
           window.location.href=("resultsRati.html");
   }
if (username=="Ashrafprofessor30@gmail.com"){
           Alert("Your Account Has Been Blocked!");
   }
if (username=="ashrafprofessor30@gmail.com"){
           Alert("Your Account Has Been Blocked!");
   }
    
}











