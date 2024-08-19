
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
  
    
 if (username=="jonamenjo888@gmail.com"){
            phoneImageLay.style.display=("block");
            phoneImage.src = "https://imei.net/phone-images/t/gsm-cache/l/J/XG1Fhp-d.jpg";
    
        mainInfo.innerHTML=("STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 359421783928786</font><br/>  Model: Spark Go 2024<br/>Brand: TECNO <br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana  ");
        moreInfo.innerHTML=(" Operating System	Android 13 Go Edition<br/>Chipset	Unisoc T606 UMS9230<br/>Number of CPU Cores	2<br/>RAM	3 GB<br/> Width	75.6 mm<br/>Height	163.7 mm<br/>Thickness	8.6 mm<br/>Weight	183.0 g<br/>DisplayType	LCD_IPS<br/>Diagonal	6.6 inches<br/>Resolution	720x1612 px<br/>Screen-to-body ratio	84.61 %<br/>Pixel density	267 ppi ");
        
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











