document.getElementById("landlord").style.visibility = "hidden";
var numer = 1000-10;
var denom = 100000-1000;




//////////////////

////////////////////////////
window.onscroll = function() {myFunction()};



// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

function landlord ()
{  
  document.getElementById("tenant").style.visibility = "hidden";
  document.getElementById("landlord").style.visibility = "visible";
  
}

function tenant ()
{  
  document.getElementById("landlord").style.visibility = "hidden";
  document.getElementById("tenant").style.visibility = "visible";
  
}

function showThree ()
{  
  document.getElementById("demo1").style.visibility = "visible";
  document.getElementById("demo2").style.visibility = "visible";
  document.getElementById("demo3").style.visibility = "visible";                        
  
}

function showTwo ()
{  
  document.getElementById("demo1").style.visibility = "hidden";
  document.getElementById("demo2").style.visibility = "visible";
  document.getElementById("demo3").style.visibility = "visible";                        
  
}

function showOne ()
{  
  document.getElementById("demo1").style.visibility = "hidden";
  document.getElementById("demo2").style.visibility = "hidden";
  document.getElementById("demo3").style.visibility = "visible";                        
  
}


///////////////////////////////////The sliders logic//
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;
var outRewards = document.getElementById("rewards");
var outDiscounts = document.getElementById("discounts");
slider.oninput = function() {
  output.innerHTML = this.value;
  var val = this.value;
  outDiscounts.innerHTML =Math.round((val/denom)*numer + 100) ;
  outRewards.innerHTML = Math.round((val/denom)*numer ) ;
}

var slid = document.getElementById("myRange1");
var out = document.getElementById("referals");
out.innerHTML = 0;

slid.oninput = function() {
  out.innerHTML = this.value;
}


////////////////////////
