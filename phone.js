

  



function one(){
    
  var inputValue = "1";
  document.getElementById("input").value += inputValue;

}
function two(){
    var inputValue = "2";
    document.getElementById("input").value += inputValue;

}
function three(){
    var inputValue = "3";
    document.getElementById("input").value += inputValue;
}
function four(){
    var inputValue = "4";
    document.getElementById("input").value += inputValue;
}
function five(){
    var inputValue = "5";
    document.getElementById("input").value += inputValue;
}
function six(){
    var inputValue = "6";
    document.getElementById("input").value += inputValue;
}
function seven(){
    var inputValue = "7";
    document.getElementById("input").value += inputValue;
}
function eight(){
    var inputValue = "8";
    document.getElementById("input").value += inputValue;
}
function nine(){
    var inputValue = "9";
    document.getElementById("input").value += inputValue;
}
function zero(){
    var inputValue = "0";
    document.getElementById("input").value += inputValue;
}
function star(){
    var inputValue = "*";
    document.getElementById("input").value += inputValue;
}
function hash(){
    var inputValue = "#";
    document.getElementById("input").value += inputValue;
}


function call(){
    
    container0=document.getElementById("input").value;
    
    if(container0=="*145#"){
   
      var loader = document.getElementById("loader");
      loader.classList.add("shown");
   
   
        var timeout = setTimeout(function() {
            
            alertAir=document.getElementById("alertAirtime");
            var loader = document.getElementById("loader");
            om1=document.getElementById("orangeM1");
            om2=document.getElementById("orangeM2");
            omBal=document.getElementById("orangeBal");
            
            loader.style.display=("none");
            om1.style.display=("Block");
            
            var inputValue = "";
            document.getElementById("input").value = inputValue;
        }, 3000);

    } else if(container0=="*155#"){
        
        var loader = document.getElementById("loader");
        loader.classList.add("shown");
   
   
        var timeout = setTimeout(function() {
            
            alertAir=document.getElementById("alertAirtime");
            var loader = document.getElementById("loader");
            om1=document.getElementById("orangeM1");
            om2=document.getElementById("orangeM2");
            omBal=document.getElementById("orangeBal");
            
            loader.style.display=("none");
            alertAir.style.display=("Block");
            
            var inputValue = "";
            document.getElementById("input").value = inputValue;
        }, 3000);
    }
      else if (container0=="*120*2272#"){
   
      var loader = document.getElementById("loader");
      loader.classList.add("shown");
   
   
        var timeout = setTimeout(function() {
            
            alertAir=document.getElementById("alertAirtime");
            var loader = document.getElementById("loader");
            om1=document.getElementById("orangeM1");
            om2=document.getElementById("orangeM2");
            omBal=document.getElementById("orangeBal");
            
            loader.style.display=("none");
            om1.style.display=("none");
            om2.style.display=("Block");
            
            var inputValue = "";
            document.getElementById("input").value = inputValue;
        }, 3000);

    } 
      
}

function ok(){
      alertAir=document.getElementById("alertAirtime");
      alertAir.style.display=("none");
      
      var inputValue = "";
      document.getElementById("input").value = inputValue;
}

function cancel(){
    var inputValue = "";
    document.getElementById("input").value = inputValue;
}


//------------------------------------------------------------------------------/



function send1(){
    
      var loader = document.getElementById("loader");
      loader.classList.add("shown");
   
   
       
            om1=document.getElementById("orangeM1");
            om2=document.getElementById("orangeM2");
            omBal=document.getElementById("orangeBal");
            
            
            om1.style.display=("none");
            om2.style.display=("block");
            
}

function send2(){
    
      pin=document.getElementById("inputPin").value;
      
      var loader = document.getElementById("loader");
      loader.classList.add("shown");
     
     
     
     if(pin=="7379"){
    
      var loader = document.getElementById("loader");
      loader.classList.add("shown");
   
   
       
            om1=document.getElementById("orangeM1");
            om2=document.getElementById("orangeM2");
            omBal=document.getElementById("orangeBal");
            orangeAbs=document.getElementById("orangeAbs");
            
            
            om1.style.display=("none");
            om2.style.display=("none");
            omBal.style.display=("none");
            orangeAbs.style.display=("block");
      }else{
          alert("Wrong Pin");
          
          om1.style.display=("none");
            om2.style.display=("none");
            omBal.style.display=("none");
          
      }
            
}

function absErr(){
    alert("Please visit Absa outlet to re-enable cellphone banking")
}














