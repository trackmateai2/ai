
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
      
   


 
 if (username=="Ogaatlale@gmail.com"){
            window.location.href=("resultsGabriel3551.html");
   }
  
    
 if (username=="ratiketlogetswe@gmail.com"){
            window.location.href=("resultsRati.html");
   }
 if (username=="mojwadigaongalelwe@gmail.com"){
            phoneImageLay.style.display=("block");
            phoneImage.src = "https://imei.net/phone-images/t/gsm-cache/h/D/c30ozb-d.jpg";
    
        mainInfo.innerHTML=(" STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 865165049716892</font><br/>  Model: Y8s (JKM-LX1)<br/>Brand: HUAWEI<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana ");
        moreInfo.innerHTML=(" Operating System	Android 9.0 Pie<br/>Chipset	Huawei HiSilicon KIRIN 710F<br/>Number of CPU Cores	4<br/>RAM	4 GB<br/>Width	77.1 mm<br/>Height	162.4 mm<br/>Thickness	8.135 mm<br/>Weight	180.0 g<br/>DisplayType	LCD_IPS<br/>Diagonal	6.5 inches<br/>Resolution	1080x2340 px<br/>Screen-to-body ratio	82.7 %<br/>Pixel density	396 ppi<br/>Colors	16M<br/>Other display Features	Capacitive, Multi-touch");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
   }
  
 if (username=="tntmots@gmail.com"){
           window.location.href=("resultsTntmots.html");
   }
if (username=="gmasele15@gmail.com"){
           window.location.href=("resultsRati.html");
   }
if (username=="moalosi@cnl.co.bw"){
            phoneImageLay.style.display=("block");
            phoneImage.src = "https://imei.net/phone-images/t/gsm-cache/r/c/324qM6-d.jpg";
    
        mainInfo.innerHTML=(" STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 356844112290235</font><br/>  Model: iPhone SE 2020(A2275)<br/>Brand: APPLE <br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana");
        moreInfo.innerHTML=(" Operating System	iOS<br/>Chipset	Apple A13 Bionic APL1W85<br/>Number of CPU Cores	6<br/>RAM	3 GB<br/> Width	67.3 mm<br/>Height	138.4 mm<br/>Thickness	7.3 mm<br/>Weight	148.0 g<br/>DisplayType	LCD_IPS<br/>Diagonal	4.7 inches<br/>Resolution	750x1334 px<br/>Screen-to-body ratio	65.3 %<br/>Pixel density	326 ppi<br/>Colors	16M<br/>Other display Features	Capacitive, Multi-touch, Scratch resistant ");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
   }

    
}











