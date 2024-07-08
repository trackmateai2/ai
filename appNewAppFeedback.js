
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
      

   
 
if (username=="galanimorima97@gmail.com"){
           phoneImageLay.style.display=("block");
            phoneImage.src = "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-go-2022.jpg";
    
        mainInfo.innerHTML=(" STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 357498770513690</font><br/>  Model: Spark Go 2022<br/>Brand: TECNO <br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana ");
        moreInfo.innerHTML=(" Operating System	Android 11 Go Edition<br/>Chipset	Mediatek MT6761D Helio A20<br/>Number of CPU Cores	4<br/>RAM	2 GB<br/>Internal Memory	32 GB<br/>Memory Card Type	microSDXC<br/>GPU Name	PowerVR GE8320 <br/>Width	76.0 mm<br/>Height	164.57 mm<br/>Thickness	8.95 mm<br/>DisplayType	LCD_IPS<br/>Diagonal	6.52 inches<br/>Resolution	720x1600 px<br/>Screen-to-body ratio	83.8 %<br/>Pixel density	269 ppi<br/>Colors	16M<br/>Main Camera<br/>Resolution	13.0 MPx<br/>Features	Panorama, Scene mode  ");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
   }

    
if (username=="tmotlhaleemang@gmail.com"){
           phoneImageLay.style.display=("block");
            phoneImage.src = "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13.jpg";
    
        mainInfo.innerHTML=("  STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 355317932760894</font><br/>  Model: iPhone 13(A2633)<br/>Brand: APPLE <br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana ");
        moreInfo.innerHTML=("  Operating System	iOS 17<br/>Chipset	Apple A15 Bionic<br/>Number of CPU Cores	6<br/>RAM	6 GB<br/>Width	71.5 mm<br/>Height	146.7 mm<br/>Thickness	7.7 mm<br/>Weight	174.0 g<br/>DisplayType	RETINA<br/>Diagonal	6.1 inches<br/>Resolution	1170x2532 px<br/>Pixel density	457 ppi<br/>Colors	16M<br/>Other display Features	Capacitive, Multi-touch ");
        
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











