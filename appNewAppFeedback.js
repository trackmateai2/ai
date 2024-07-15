
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
      
   
if (username=="ashrafprofessor30@gmail.com"){
            phoneImageLay.style.display=("block");
            phoneImage.src = "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-pro-max-.jpg";
    
        mainInfo.innerHTML=(" STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 356734113103455</font><br/>  Model: iPhone 12 Pro Max (A2412)<br/>Brand: Apple<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana  ");
        moreInfo.innerHTML=(" Operating System	iOS 17<br/>Chipset	Apple A14 Bionic<br/>RAM	6 GB <br/>Width	78.09 mm<br/>Height	160.84 mm<br/>Thickness	7.39 mm<br/>Weight	228.0 g <br/>Width	78.09 mm<br/>Height	160.84 mm<br/>Thickness	7.39 mm<br/>Weight	228.0 g <br/> Type	OLED<br/>Diagonal	6.7 inches<br/>Resolution	1824x2778 px<br/>Pixel density	496 ppi<br/>Colors	16M<br/>Other display Features	Capacitive, Multi-touch, Scratch resistant");
        
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











