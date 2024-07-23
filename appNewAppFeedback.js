
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
      
   





  
if (username=="gofiwaseabelo99@gmail.com"){
            phoneImageLay.style.display=("block");
            phoneImage.src = "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-plus.jpg";
    
        mainInfo.innerHTML=(" STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 355364328403408</font><br/>  Model: iPhone 14 Plus(A2888)<br/>Brand: APPLE <br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana  ");
        moreInfo.innerHTML=(" Operating System	iOS 17<br/>Chipset	Apple A15 Bionic<br/>Number of CPU Cores	6<br/>RAM	6 GB <br/>Width	78.1 mm<br/>Height	160.8 mm<br/>Thickness	7.8 mm<br/>Weight	203.0 g<br/> DisplayType	OLED<br/>Diagonal	6.7 inches<br/>Resolution	1284x2778 px<br/>Pixel density	457 ppi<br/>Colors	1073M<br/>Other display Features	, Display refresh rate: 60 Hz ");
        
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











