



function openNav(){
    window.location.href=("appTracking.html");
}





function startTracking(){

   
 
    
    
    var trkDv= document.getElementById("trackingDiv");
    var mapDv= document.getElementById("mapDiv");
    var homeDv= document.getElementById("home");
    var infoDv= document.getElementById("myInfo0");
    var disclaDv= document.getElementById("disclaDiv");
    var feedDv= document.getElementById("feedback0");
    
    var textTrk= document.getElementById("startTracking0");
    var textInf= document.getElementById("myInfo0");
    var textHm= document.getElementById("all");
    var textDisc= document.getElementById("disclaimer0");
    var textFeed= document.getElementById("feed00");
    
    textTrk.style.color=("#ffffff");
    textInf.style.color=("#374151");
    textHm.style.color=("#374151");
    textDisc.style.color=("#374151");
    textFeed.style.color=("#374151");
    
    mapDv.style.display=("none");
    trkDv.style.display=("block");
    homeDv.style.display=("none");
    homeDv.style.display=("none");
    diclaDiv.style.display=("none");
    feedDv.style.display=("none"); 
}

function home(){
    
     window.location.href=("https://trackmateai.authgearapps.com/settings");
    
    /*
    var trkDv= document.getElementById("trackingDiv");
    var mapDv= document.getElementById("mapDiv");
    var homeDv= document.getElementById("home");
    var disclaDv= document.getElementById("disclaDiv");
    var feedDv= document.getElementById("feedback0");
    
    var textTrk= document.getElementById("startTracking0");
    var textInf= document.getElementById("myInfo0");
    var textHm= document.getElementById("all");
    var textDisc= document.getElementById("disclaimer0");
    var textFeed= document.getElementById("feed00");
    
    
    textTrk.style.color=("#374151");
    textInf.style.color=("#374151");
    textHm.style.color=("#ffffff");
    textDisc.style.color=("#374151");
    textFeed.style.color=("#374151");
    
    mapDv.style.display=("none");
    trkDv.style.display=("none");
    homeDv.style.display=("block");
    diclaDiv.style.display=("none");
    feedDv.style.display=("none"); */
}


function info(){
    
    
    var trkDv= document.getElementById("trackingDiv");
    var mapDv= document.getElementById("mapDiv");
    var homeDv= document.getElementById("home");
    var disclaDv= document.getElementById("disclaDiv");
    var feedDv= document.getElementById("feedback0");
    
    var textTrk= document.getElementById("startTracking0");
    var textInf= document.getElementById("myInfo0");
    var textHm= document.getElementById("all");
    var textDisc= document.getElementById("disclaimer0");
    var textFeed= document.getElementById("feed00");
    
    
    textTrk.style.color=("#374151");
    textInf.style.color=("#ffffff");
    textHm.style.color=("#374151");
    textDisc.style.color=("#374151");
    textFeed.style.color=("#374151");
    
    mapDv.style.display=("block");
    trkDv.style.display=("none");
    homeDv.style.display=("none");
    homeDv.style.display=("none");
    diclaDiv.style.display=("none");
    feedDv.style.display=("none");
}


function disclaimer(){

   

    
    var trkDv= document.getElementById("trackingDiv");
    var mapDv= document.getElementById("mapDiv");
    var homeDv= document.getElementById("home");
    var disclaDv= document.getElementById("disclaDiv");
    var feedDv= document.getElementById("feedback0");
    
    var textTrk= document.getElementById("startTracking0");
    var textInf= document.getElementById("myInfo0");
    var textHm= document.getElementById("all");
    var textDisc= document.getElementById("disclaimer0");
    var textFeed= document.getElementById("feed00");
    
    textTrk.style.color=("#374151");
    textInf.style.color=("#374151");
    textHm.style.color=("#374151");
    textDisc.style.color=("#ffffff");
    textFeed.style.color=("#374151");
    
    mapDv.style.display=("none");
    trkDv.style.display=("none");
    homeDv.style.display=("none");
    homeDv.style.display=("none");
    diclaDiv.style.display=("block");
    
    var loader= document.getElementById("loader20");
    loader.style.display=("none");
    feedDv.style.display=("none"); 

                
          
    
}






           function showCard(){
                card3=document.getElementById("card3");
                card3.style.display=("block");
             }
           





function feedBack0(){


                card3=document.getElementById("card3");
                card3.style.display=("none");
    
    var username= document.getElementById("emailVerify").value;
    
    var myMainLay = document.getElementById("MainLay");
    var myInfoLay = document.getElementById("InfoLay");

            myMainLay.style.display=("none");
            myInfoLay.style.display=("block");
    
    var mainInfo = document.getElementById("mainInfo");
    var moreInfo = document.getElementById("moreInfo");

    
                phoneImageLay= document.getElementById("imageLay")
                phoneImage= document.getElementById("phoneImage")
                

    
    if (username=="Masele"){

            phoneImageLay.style.display=("block");
            phoneImage.src = "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a03-core.jpg";
        
        mainInfo.innerHTML=("STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 350655750479195</font><br/>  Model: Galaxy A03 Core (SM-A032F)<br/>Brand: Samsung<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana ");
        moreInfo.innerHTML=("Model Info: MOBILE SM-A032F INS <br/>Search Term: 350655750479195 <br/>IMEI 1: 350655750479195 <br/>Serial Number: <font color=#5F264A>R9ZTB0DXXEE</font> <br/>Model Desc: Samsung Galaxy A03 Core <br/>Model Name: SM-A032F <br/>Model Number: SM-A032FLG6INS <br/>Warranty Status: Warranty Active <br/>Estimated Warranty End Date: 16-11-2024 <br/>Production location: Korea SEC <br/>Production Date: 16-11-2022 <br/>Country: India <br/>Carrier: Factory Unlocked ");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");   
    }


if (username=="segotsoreuben@gmail.com"){
       
            phoneImageLay.style.display=("block");
            phoneImage.src = "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-19.jpg";
        
        mainInfo.innerHTML=("STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 356487582505524</font><br/>  Model: Camon 19<br/>Brand: TECNO<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana ");
        moreInfo.innerHTML=("Release Year	2022<br/>Operating System	Android 12<br/>Chipset	Mediatek MT6781 Helio G96<br/>Number of CPU Cores	2<br/>RAM	4 GB<br/>Internal Memory	128 GB<br/>Memory Card Type	microSDXC<br/>GPU Name	Mali-G52 MC2<br/>GPU Cores	2<br/>GPU Clock	1000.0 MHz<br/> Width	74.4 mm<br/>Height	166.6 mm<br/>Thickness	8.3 mm " );
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");  
    }
    
if (username=="ashrafprofessor30@gmail.com"){
        mainInfo.innerHTML=("<font color=#00ee00>356324221162426 </font>is an <font color=#ff0000>INVAILD</font> IMEi. Please check and input the correct IMEi ");
        moreInfo.innerHTML=(" ");
        
    mainInfo.style.display=("block");
        moreInfo.style.display=("block");
    }
if (username=="ftando8@gmail.com"){

        mainInfo.innerHTML=(" STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 352938776602737</font><br/>  Model: Galaxy A52 4G(525F) <br/>Brand: Samsung<br/>DeviceType:  Smartphone<br/>  Location: <font color=#00ee00>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana");
        moreInfo.innerHTML=(" Model Info: MOBILE SM-A525F BLUE MEA Search Term: 352938776602737 IMEI 1: 352938776602737 Serial Number: RZ8R322MZ0E Model Desc: Samsung Galaxy A52 4G Model Name: SM-A525F Model Number: SM-A525FZBHMEA Warranty Status: Out of Warranty Estimated Warranty End Date: 20-03-2023 Production location: Brazil SEDA Production Date: 20-03-2021 Country: United Arab Emirates Carrier: Factory Unlocked");
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
    }
if (username=="vincent.madome7@gmail.com"){

        window.location.href=("results.html");
    }

if (username=="neosystems.follow@gmail.com"){

        mainInfo.innerHTML=(" STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 350867773079361</font><br/>  Model: Galaxy A23 (SM-A235F)<br/>Brand: Samsung<br/>DeviceType:  Smartphone<br/>  Location: <font color=#00ee00>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana ");
        moreInfo.innerHTML=(" Model Info: MOBILE SM-A235F BLACK MEA <br/>Search Term: 350867773079361 <br/> IMEI 1: 350867773079361 <br/>Serial Number:<font color=#00ee00> R58TB0AYMDP </font><br/>Model Desc: Samsung Galaxy A23<br/>Model Name: SM-A235F<br/> Model Number: SM-A235FZKUMEA <br/>Warranty Status: Warranty Active <br/>Estimated Warranty End Date: 03-11-2024 <br/>Production location: Korea SEC <br/>Production Date: 03-11-2022 <br/>Country: United Arab Emirates <br/>Carrier: Factory Unlocked");
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
    }
if (username=="frankburu77@gmail.com"){

        mainInfo.innerHTML=("STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 357026893153928</font><br/>  Model: Galaxy A12 (SM-A127F)<br/>Brand: Samsung<br/>DeviceType:  Smartphone<br/>  Location: <font color=#00ee00>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana");
        moreInfo.innerHTML=("Model Info: MOBILE SM-A127F BLUE THL <br/>Search Term: 357026893153928 <br/>IMEI 1: 357026893153928 <br/>Serial Number:<font color=#00ee00> R58R93JC1NJ</font> <br/>Model Desc: Samsung Galaxy A12 <br/>Model Name: SM-A127F <br/>Model Number: SM-A127FZBHTHL <br/>Warranty Status: Warranty Active <br/>Estimated Warranty End Date: 27-09-2023 <br/>Production location: Korea SEC <br/>Production Date: 27-09-2021 <br/>Country: Thailand <br/>Carrier: Factory Unlocked ");
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
    }
if (username=="vusatshegofatso@gmail.com"){

        mainInfo.innerHTML=("STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 863706058814458</font><br/>  Model: Note 11 Pro 4G (2201116TI) <br/>Brand: REDMI<br/>DeviceType:  Smartphone<br/>  Location: <font color=#00ee00>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana ");
        moreInfo.innerHTML=("Description: Redmi Note 11 Pro Stealth Black 6GB RAM 128GB ROM <br/>IMEI: 863706058814458 <br/>Brand: Redmi <br/>Model: 2201116TI <br/>Name: Note 11 Pro 4G <br/>Purchase Country: India <br/>MI Activation Lock: OFF");
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
    }
if (username=="bamerakolanyane@gmail.com"){
      window.location.href=("resultsBame353855.html");
    }
if (username=="sengwekelediyakgotla@gmail.com"){

        mainInfo.innerHTML=("STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00>355235621011199</font><br/>  Model: Galaxy A12 (SM-A125F)<br/>Brand: Samsung<br/>DeviceType:  Smartphone<br/>  Location: <font color=#00ee00>  -19.9892349,23.3975764</font><br/>  Country Code: BW<br/>  Country Name: Botswana ");
        moreInfo.innerHTML=("Model Info: MOBILE SM-A125F BLUE XXV <br/>Search Term:<font color=#00ee00> 355235621011199</font> <br/>IMEI 1: 354312131011190 <br/>Serial Number: <font color=#00ee00>R58R93BFVWE</font> <br/>Model Desc: Samsung Galaxy A12 <br/>Model Name: SM-A125F <br/>Model Number: SM-A125FZBHXXV <br/>Warranty Status: Warranty Active <br/>Estimated Warranty End Date: 25-09-2023 <br/>Production location: Korea SEC <br/>Production Date: 25-09-2021 <br/>Country: Vietnam <br/>Carrier: Factory Unlocked");
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
    }
if (username=="gideon2203@gmail.com"){

        window.location.href=("resultsGideon.html");
    
    }
if (username=="phlpkhaya@gmail.com"){

        window.location.href=("resultsPhlp.html");
    
    }
if (username=="emmahdt@gmail.com"){

        window.location.href=("resultsEmmah.html");
    
    }
if (username=="sirserwalo@gmail.com"){

        window.location.href=("resultsSirserwalo.html");
    
    }
if (username=="thabangthutogidion@gmail.com"){

        window.location.href=("resultsThabang.html");
    
    }

if (username=="Ompsmooki@gmail.com"){

        mainInfo.innerHTML=("STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 359015631110090</font><br/>  Model: iPhone 12 Pro Max (A2342)<br/>Brand: APPLE<br/>DeviceType:  Smartphone<br/>  Location: <font color=#00ee00>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana");
        moreInfo.innerHTML=("Search Term: 359015631110090 <br/>Brand: Apple <br/>Model: iPhone 12 Pro Max (A2342) <br/>Model Name: iPhone 12 Pro Max <br/>Carrier/SimLock Info: <a href=('#')>HERE</a> (FREE) <br/>Activation/Coverage Check: <a href=('#')>HERE</a> <br/>Find My iPhone: <font color=#ff0000>ON</font> <br/>iCloud Status: Clean");
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
    }
if (username=="mmasole92@gmail.com"){

        mainInfo.innerHTML=("STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 350888748416496</font><br/>  Model: iPhone 12 Pro Max (A2411)<br/>Brand: APPLE<br/>DeviceType:  Smartphone<br/>  Last Seen: <font color=#ff0000>  -24.6262300663882, 25.934047286017062 </font><br/>  Country Code: BW<br/>  Country Name: Botswana");
        moreInfo.innerHTML=("Search Term: 350888748416496 <br/>Brand: Apple <br/>Model: iPhone 12 Pro Max (A2411) <br/>Model Name: iPhone 12 Pro Max <br/>Carrier/SimLock Info: <a href=('#')>HERE</a> <br/>Activation/Coverage Check: <a href=('#')>HERE</a> <br/>Find My iPhone: ON <br/>iCloud Status: <font color#ff0000>Lost Mode</font>");
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
    }
if (username=="Lebogangmds@gmail.com"){

        mainInfo.innerHTML=("Proper <font color=#00ee00>identification</font> required to reveal your device location and information");
        moreInfo.innerHTML=("Please complete your account information on Settings");
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
    }
if (username=="tshephangks@gmail.com"){

        window.location.href=("resultsTshephang.html");
    }
if (username=="ogaatlale@gmail.com"){
            window.location.href=("resultsGabriel.html");
    }           
                      
if (username=="kgomotsofelizbapalami@gmail.com"){
        alert('Dear User,you have exhausted your usage limit.Please consider payment to proceed ');
        window.location.href=("resultsKgomotso.html");
    }   
if (username=="onalethatamooketsi@gmail.com"){

        alert("A different email address was used to request information of the same device. Please resort to the previous email or confirm your identity.Please note that you risk your IMEi being blocked on the system ");
    }  
     
if (username=="thabochizwe81@gmail.com"){

       window.location.href=("resultsThabo35257.html");        
   }  
if (username=="muzadziwillarda@gmail.com"){

        window.location.href=("resultsMuzadzi.html");
    }   

    
if (username=="boimatome2@gmail.com"){

        mainInfo.innerHTML=(" Argumented parameters [<font color=#ff0000>37798/R1ZW10034</font>] do not exist");
        moreInfo.innerHTML=("");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");  
    }

if (username=="nthagame@gmail.com"){

            phoneImageLay.style.display=("block");
            phoneImage.src = "https://www.imei.info/media/t/gsm-cache/J/b/Cky5Wt-d/tecno-pop-7.jpg";
        
        mainInfo.innerHTML=("STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 357777960206284</font><br/>  Model: POP 7<br/>Brand: TECNO<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana");
        moreInfo.innerHTML=("Brand: Tecno <br/>Model: BF6 <br/>Model Name: Pop 7 perating System	Android 12 <br/>Chipset	Unisoc SC9863A1 <br/>Number of CPU Cores	4 <br/>RAM	2 GB <br/>Internal Memory	64 GB <br/>Memory Card Type	microSDXC <br/>GPU Name	PowerVR GE832  Width	75.5 mm<br/>Height	163.9 mm <br/>Thickness	8.9 mmDisplay<br/>Type	LCD_IPS <br/>Diagonal	6.6 inches <br/>Resolution	720x1612 px <br/>Screen-to-body ratio	84.6 % <br/>Pixel density	267 ppi <br/>Colors	16M <br/>Other display Features	Capacitive, Multi-touch, 2.5D curved glass screen "  );
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
    }           

if (username=="moxbont@gmail.com"){

            phoneImageLay.style.display=("block");
            phoneImage.src = "https://www.imei.info/media/t/gsm-cache/5/Y/rPlNlt-d/huawei-p-smart-pro.jpg";
        
        mainInfo.innerHTML=(" STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 867679045338251</font><br/>  Model: P smart Pro (STK-L21)<br/>Brand: HUAWEI<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana");
        moreInfo.innerHTML=("Description Full: HUAWEI Y9s 6GB+128GB Breathing Crystal Dual Card Open Market Ver. EU Charger<br/>IMEI: 867679045338251 <br/>S/N:<font color=#ff0000> 78KVB19C25021623 </font><br/>Item Code: 51094UMW <br/>Offer Code: OFFE00121221 <br/>Country Code: NA <br/>Country Name: Namibia <br/>Warranty Status: Out of Warranty <br/>Operating System	Android 9.0 Pie <br/>Chipset	Huawei HiSilicon KIRIN 710F <br/>Number of CPU Cores	4 <br/>RAM	6 GB <br/>Internal Memory	128 GB <br/>Memory Card Type	microSDXC <br/>GPU Name	ARM Mali-G51 MP4 <br/>GPU Cores	4  ");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
    }       

if (username=="dicemodiagane@gmail.com"){

            phoneImageLay.style.display=("block");
            phoneImage.src = "https://www.imei.info/media/t/gsm-cache/2/V/4lyvlH-d/oppo-a96-4g.jpg";
        
        mainInfo.innerHTML=(" STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 867908050443155</font><br/>  Model: A96 4G (CPH2333) <br/>Brand: OPPO<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana");
        moreInfo.innerHTML=(" Operating System	Android 11<br/>Chipset	Qualcomm Snapdragon 680 <br/>Number of CPU Cores	8 <br/>RAM	8 GB <br/>Internal Memory	256 GB <br/>Memory Card Type	microSDXC <br/>GPU Name	Adreno 610<br/> Width	75.7 mm <br/>Height	164.4 mm <br/>Thickness	8.4 mm <br/>Weight	191.0 g<br/>Resolution	1080x2412 px <br/>Screen-to-body ratio	84.0 % <br/>Pixel density	401 ppi <br/>Colors	16M " );
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");  
    }
    
if (username=="tumedigilbert@gmail.com"){

            phoneImageLay.style.display=("block");
            phoneImage.src = "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-11-pro-max-.jpg";
        
        mainInfo.innerHTML=(" STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 353233104687785</font><br/>  Model:  iPhone 11 Pro (A2160)<br/>Brand: APPLE<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana ");
        moreInfo.innerHTML=(" Code name	A2160 <br/>Release Year	2019 <br/> Operating System	iOS <br/>Chipset	Apple A13 Bionic <br/>Number of CPU Cores	6 <br/>RAM	6 GB <br/> GPU Cores	4 <br/> Width	71.4 mm<br/>Height	144.0 mm <br/>Thickness	8.1 mm <br/>Weight	188.0 g <br/>   Type	OLED<br/>Diagonal	5.8 inches <br/>Resolution	1125x2436 px <br/>Screen-to-body ratio	80.4 % <br/>Pixel density	463 ppi <br/>Colors	16M"  );
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");  
    }

if (username=="deeztwinsbookings@gmail.com"){
       window.location.href=("resultsDeez.html");
    }

if (username=="kangprinters909@gmail.com"){
       alert("The IMEi you entered(355962610436676) is incorrect.Please check and try again");
    }
if (username=="ralefalajulius@gmail.com"){

            phoneImageLay.style.display=("block");
            phoneImage.src = "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a12-sm-a125.jpg";
        
        mainInfo.innerHTML=(" STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 354875894627758</font><br/>  Model:  Galaxy A12 (SM-A127F)<br/>Brand: Samsung<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana ");
        moreInfo.innerHTML=(" Model Info: MOBILE SM-A127F BLUE THL <br/>Search Term: 354875894627758 <br/>IMEI 1: 352277224627750 <br/>Serial Number: <font color=#ff0000>RZ8T302YRTP </font><br/>Model Desc: Samsung Galaxy A12 <br/>Model Name: SM-A127F <br/>Model Number: SM-A127FZBHTHL <br/>Warranty Status: Warranty Active <br/>Estimated Warranty End Date: 01-03-2024 <br/>Production location: Brazil SEDA <br/>Production Date: 01-03-2022 <br/>Country: Thailand <br/>Carrier: Factory Unlocked<br/> Operating System	Android 10 <br/>Chipset	MediaTek Helio P35 MT6765 <br/>Number of CPU Cores	4 <br/>RAM	3 GB <br/> Width	75.8 mm <br/>Height	164.0 mm <br/>Thickness	8.9 mm <br/>Weight	205.0 g " );
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");  
    }

if (username=="thuto2018th@gmail.com"){

            phoneImageLay.style.display=("block");
            phoneImage.src = "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-17.jpg";
        
        mainInfo.innerHTML=(" STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 356894533810244</font><br/>  Model: Camon 18i<br/>Brand: TECNO<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana ");
        moreInfo.innerHTML=("Operating System	Android 11<br/>Chipset	MediaTek Helio G85<br/>Number of CPU Cores	2<br/>RAM	4 GB<br/>Internal Memory	128 GB<br/>Memory Card Type	microSDXC<br/>GPU Name	Mali-G52 MC2<br/>GPU Cores	2<br/>GPU Clock	1000.0 MHz <br/>Width	76.5 mm<br/>Height	164.5 mm<br/>Thickness	8.95 mm<br/>Display Type	LCD_IPS<br/>Diagonal	6.6 inches<br/>Resolution	720x1600 px<br/>Screen-to-body ratio	84.9 %<br/>Pixel density	266 ppi<br/>Colors	16M");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");  
    }
    
if (username=="90pilaneva@gmail"){

            phoneImageLay.style.display=("block");
            phoneImage.src = "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-8c.jpg";
        
        mainInfo.innerHTML=(" STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 356077480896107</font><br/>  Model: Spark 8C<br/>Brand: TECNO<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana ");
        moreInfo.innerHTML=(" Operating System	Android 11 Go Edition <br/>Chipset	Unisoc Tiger T606 <br/>Number of CPU Cores	2 <br/>RAM	2 GB <br/>Internal Memory	64 GB <br/>Memory Card Type	microSDXC <br/>GPU Name	Mali-G57 MC2 <br/>  Width	76.0 mm<br/>Height	164.57 mm <br/>Thickness	8.95 mm    <br/> Display <br/>Type	LCD_IPS <br/>Diagonal	6.6 inches <br/>Resolution	720x1600 px <br/>Screen-to-body ratio	82.6 % <br/>Pixel density	266 ppi <br/>Colors	16M"  );
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");  
    }
if (username=="mosimanegapekgausa@gmail.com"){
     
            phoneImageLay.style.display=("block");
            phoneImage.src = "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-go-2022.jpg";
        
        mainInfo.innerHTML=(" Device inactive.Please note that a device can only be tracked when its active.");
        moreInfo.innerHTML=(" ");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
}                      
    
if (username=="mauntma13@gmail.com"){
     
            phoneImageLay.style.display=("block");
            phoneImage.src = "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-pro-max-.jpg";
        
        mainInfo.innerHTML=(" STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 353730395299949</font><br/>  Model: iPhone 12 Pro Max (A2342) <br/>Brand: APPLE<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana");
        moreInfo.innerHTML=(" Code name	A2342<br/>Release Year	2020 <br/>Operating System	iOS<br/>Chipset	Apple A14 Bionic<br/>RAM	6 GB<br/> Width	78.09 mm<br/>Height	160.84 mm<br/>Thickness	7.39 mm<br/>Weight	228.0 g<br/>Diagonal	6.7 inches<br/>Resolution	1824x2778 px <br/>Pixel density	496 ppi <br/>Colors	16M  " );
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
}   

if (username=="nthobelang83@gmail.com"){
    
            phoneImageLay.style.display=("block");
            phoneImage.src = "data:image/jpeg;base64,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";
        
        mainInfo.innerHTML=(" Your account:nthobelang83@gmail.com has been suspended for <font color=#ff0000>spamming</font>.");
        moreInfo.innerHTML=("Please try again in 24hrs   " );

        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
}                      

if (username=="gossymaphorisa@gmail.com"){
    
            phoneImageLay.style.display=("block");
            phoneImage.src = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn0.iconfinder.com%2Fdata%2Ficons%2Fshift-interfaces%2F32%2FError-512.png&tbnid=ALjKAcn6xUfHBM&vet=12ahUKEwjXnc_luv2BAxWGY6QEHZ15BRQQMygAegQIARBt..i&imgrefurl=https%3A%2F%2Fwww.iconfinder.com%2Ficons%2F381336%2Ferror_icon&docid=g9tLCgGFrQFlVM&w=512&h=512&q=error%20icon%20png&hl=en&ved=2ahUKEwjXnc_luv2BAxWGY6QEHZ15BRQQMygAegQIARBt";
        
        mainInfo.innerHTML=(" Invalid IMEI<fnt color=#ff0000>(35871111321290)");
        moreInfo.innerHTML=(" The IMEI must contain 15 digits.You entered 14 digits.  " );

        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
}                      

if (username=="baatmonoholdings@gmail.com"){
    
            phoneImageLay.style.display=("block");
            phoneImage.src = "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13.jpg";
        
        mainInfo.innerHTML=(" STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 351606647323145</font><br/>  Model: iPhone 13 (A2633) <br/>Brand: APPLE<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana");
        moreInfo.innerHTML=(" Operating System	iOS 15<br/>Chipset	Apple A15 Bionic<br/>Number of CPU Cores	6<br/>RAM	6 GB<br/>Width	71.5 mm<br/>Height	146.7 mm<br/>Thickness	7.7 mm<br/>Weight	174.0 g <br/> Type	RETINA<br/>Diagonal	6.1 inches<br/>Resolution	1170x2532 px<br/>Pixel density	457 ppi<br/>Colors	16M" );

        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
}                      


    
    
}




/*************************/



function logInfo(){
   
    card3=document.getElementById("card3");
                card3.style.display=("none");
    
    var username= document.getElementById("emailVerify").value;
    
    var myMainLay = document.getElementById("MainLay");
    var myInfoLay = document.getElementById("InfoLay");

            myMainLay.style.display=("none");
            myInfoLay.style.display=("block");
    
    var mainInfo = document.getElementById("mainInfo");
    var moreInfo = document.getElementById("moreInfo");


    if(username=="Masele"){
       mainInfo.innerHTML=("NextLay Nav test");
        moreInfo.innerHTML=("Succeeded");
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
    }

    
}





