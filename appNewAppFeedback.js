
function feedBack(){
    
                card3=document.getElementById("card3");
                card3.style.display=("none");
    
    var username= document.getElementById("emailVerify").value;
    
    var myMainLay = document.getElementById("MainLay2");
    var myInfoLay = document.getElementById("InfoLay");

            myMainLay.style.display=("none");
            myInfoLay.style.display=("block");
    
    var mainInfo = document.getElementById("mainInfo");
    var moreInfo = document.getElementById("moreInfo");

    
                phoneImageLay= document.getElementById("imageLay")
                phoneImage= document.getElementById("phoneImage")
      
   


if (username=="keitiretsesamuel@gmail.com"){
            phoneImageLay.style.display=("block");
            phoneImage.src = "data:image/jpeg;base64,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";
    
        mainInfo.innerHTML=("  STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 861095061322598</font><br/>  Model: HLTE109E<br/>Brand: HISENSE <br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana ");
        moreInfo.innerHTML=(" IMEI: 861095061322598<br/>Brand: Qingdao Hisense Communications Co Ltd<br/>Model: HLTE109E<br/>Model Name: Hisense U70 Pro ");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
   }

if (username=="faithisang21@gmail.com"){
            phoneImageLay.style.display=("block");
            phoneImage.src = "https://imei.net/phone-images/t/gsm-cache/x/9/Eq3lPN-d.jpg";
    
        mainInfo.innerHTML=("  STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 350584181491910</font><br/>  Model: Galaxy A05(SM-A055F)<br/>Brand: SAMSUNG <br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana ");
        moreInfo.innerHTML=("Model Info: MOBILE SM-A055F/DS BLACK XID<br/>Search Term: 350584181491910<br/>IMEI 1: 350584181491910<br/>Serial Number: R9CX401MVAM<br/>Model Desc: Galaxy A05<br/>Model Name: SM-A055F/DS<br/>Model Number: SM-A055FZKDXID<br/>Warranty Status: Warranty Active<br/>Estimated Warranty End Date: 17-04-2026<br/>Production location: Korea SEC<br/>Production Date: 17-04-2024<br/>Country: Botswana<br/>Carrier: Factory Unlocked  ");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
   }

if (username=="kagisotrucker@gmail.com"){
            phoneImageLay.style.display=("block");
            phoneImage.src = "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a14-4g.jpg";
    
        mainInfo.innerHTML=(" STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 351712243160665</font><br/>  Model: Galaxy A14 5G(SM-A145F) <br/>Brand: Samsung<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana  ");
        moreInfo.innerHTML=(" Model Info: MOBILE SM-A145F/DS BLACK INS<br/>Search Term: 351712243160665<br/>IMEI 1: 351712243160665<br/>Serial Number: RZ8WA046VTH<br/>Model Desc: Galaxy A14<br/>Model Name: SM-A145F/DS<br/>Model Number: SM-A145FZKDINS<br/>Warranty Status: Warranty Active<br/>Estimated Warranty End Date: 06-10-2025<br/>Production location: Brazil SEDA<br/>Production Date: 06-10-2023<br/>Country: Botswana<br/>Carrier: Factory Unlocked");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
   }

if (username=="tidimalotshwenyego@gmail.com"){
            window.location.href=("resultsTidimalo.html");
   }

if (username=="neoboy71@gmail.com"){
            phoneImageLay.style.display=("block");
            phoneImage.src = "https://imei.net/phone-images/t/gsm-cache/k/O/MCpIfl-d.jpg";
    
        mainInfo.innerHTML=(" STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 354916449393783</font><br/>  Model: Galaxy A24(SM-A245F)<br/>Brand: SAMSUNG <br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana  ");
        moreInfo.innerHTML=("Model Info: MOBILE SM-A245F/DSN AFA<br/>Search Term: 354916449393783<br/>IMEI 1: 354916449393783<br/>Serial Number: RZ8W80BH11A<br/>Model Desc: Galaxy A24<br/>Model Name: SM-A245F/DSN<br/>Model Number: SM-A245FLGUAFA<br/>Warranty Status: Warranty Active<br/>Estimated Warranty End Date: 17-08-2025<br/>Production location: Brazil SEDA<br/>Production Date: 17-08-2023<br/>Country: Botswana<br/>Carrier: Factory Unlocked  ");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
   }

if (username=="ashrafprofessor30@gmail.com"){
            phoneImageLay.style.display=("block");
            phoneImage.src = "https://imei.net/phone-images/t/gsm-cache/x/h/HbJQI8-d.jpg";
    
        mainInfo.innerHTML=(" STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 359603237766280</font><br/>  Model: Spark 10 5G<br/>Brand: TECNO<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana  ");
        moreInfo.innerHTML=("Operating System	Android 13<br/>Chipset	Mediatek Dimensity 6020<br/>Number of CPU Cores	2<br/>RAM	4 GB<br/>Internal Memory	64 GB<br/>Memory Card Type	microSDXC<br/>GPU Name	Mali-G57 MC2<br/> Width	75.45 mm<br/>Height	164.37 mm<br/>Thickness	8.4 mm<br/>Weight	202.0 g<br/>DisplayType	LCD_IPS<br/>Diagonal	6.6 inches<br/>Resolution	720x1612 px<br/>Pixel density	267 ppi<br/>Colors	16M<br/>Other display Features	, Display refresh rate: 90 Hz ");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
   }
if (username=="karabopelekekae@gmail.com"){
            phoneImageLay.style.display=("block");
            phoneImage.src = "https://imei.net/phone-images/t/gsm-cache/7/m/zJRkRf-d.jpg";
    
        mainInfo.innerHTML=(" STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 865198054428954</font><br/>  Model: Y7a(PPA-LX2) <br/>Brand: HUAWEI <br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana  ");
        moreInfo.innerHTML=(" Operating System	Android 10<br/>Chipset	Huawei HiSilicon KIRIN 710A<br/>Number of CPU Cores	4<br/>RAM	4 GB<br/>Width	76.88 mm<br/>Height	165.65 mm<br/>Thickness	9.26 mm<br/>Weight	206.0 g<br/>DisplayType	LCD_IPS<br/>Diagonal	6.67 inches<br/>Resolution	1080x2400 px<br/>Screen-to-body ratio	84.4 %<br/>Pixel density	395 ppi<br/>Colors	16M<br/>Other display Features	Capacitive, Multi-touch  ");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
   }
  
if (username=="tavongatichagwa0@gmail.com"){
            phoneImageLay.style.display=("block");
            phoneImage.src = "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-7r4.jpg";
    
        mainInfo.innerHTML=("STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 358685094773260</font><br/>  Model: iPhone 7(A1778) <br/>Brand: APPLE <br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>   ");
        moreInfo.innerHTML=(" Operating System	iOS<br/>Chipset	Apple A10 Fusion APL1W24<br/>Number of CPU Cores	4<br/>RAM	2 GB<br/>Width	67.1 mm<br/>Height	138.3 mm<br/>Thickness	7.1 mm<br/>Weight	138.0 g<br/>DisplayType	RETINA<br/>Diagonal	4.7 inches<br/>Resolution	750x1334 px<br/>Screen-to-body ratio	65.6 %<br/>Pixel density	326 ppi<br/>Colors	16M<br/>Other display Features	Capacitive, Multi-touch  ");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
   }  
    
    /*
   if (username=="gofiwaseabelo99@gmail.com"){
          var x = document.getElementById("snackbar");
          x.className = "show";
          setTimeout(function(){ x.className = x.className.replace("show", ""); }, 4000);
   }
    if (username=="gmasele15@gmail.com"){
          var x = document.getElementById("snackbar");
          x.className = "show";
          setTimeout(function(){ x.className = x.className.replace("show", ""); }, 4000);
   } 
   */
    
}











