//=============variableSelection====================//
var search = document.getElementById("search");
var navLastDiv = document.getElementById("navLastDiv");
var logo = document.getElementById("logoId");
var section_box = document.querySelector(".section-box");
var imageDiv = document.querySelector(".imageDiv")
var tgl2 = document.querySelector(".tgl2");
var toggleBar = document.querySelector(".toggleBar");
var tglFwd = document.querySelector(".tglFwd");
var toggleBar2 = document.querySelector(".toggleBar2");
var first = document.getElementById("first");
var second = document.getElementById("second");
var third = document.getElementById("third");
var fourth = document.getElementById("fourth");
var fifth = document.getElementById("fifth");
var sixth = document.getElementById("sixth");
var login = document.getElementById("login");
var dress = document.getElementById("dress");
var top = document.getElementById("top");
var jeans = document.getElementById("jeans");
var blazer = document.getElementById("blazer");
var d1 = document.getElementById("d1");
var t1 = document.getElementById("t1");
var j1 = document.getElementById("j1");
var b1 = document.getElementById("b1");
// var tops = document.getElementById("tops")
var deleteAll = document.getElementById("deleteAll")
var cart0 = document.getElementById("cart0");
var help = document.getElementById("help");
var b = document.getElementById("b")
var c = document.getElementById("c")
var d = document.getElementById("d")
var e = document.getElementById("e")

var b1 = document.getElementById("b1")
var c1 = document.getElementById("c1")
var d1 = document.getElementById("d1")
var e1 = document.getElementById("e1")

var del = document.getElementById("f")

//=============functionSelection====================//

function activation(){
    toggleBar.style.display = "block";
    toggleBar2.style.display = "block"
    tglFwd.style.display = "none";
}

function deactivation(){
    toggleBar.style.display = "none";
    tglFwd.style.display = "block";
    toggleBar2.style.display = "none"
    console.log("helo");
}

function goToWomenPage(){
    console.log("hello")
  }
  function goToKidsPage(){
      console.log("helo")
  }
  function goToLilPage(){
      console.log("helo")
  }
  function goToManPage(){
      console.log("helo")
  }
  function goToAthleticzPage(){
      console.log("hleo")
  }
  function goToShoesBagsPage(){
      console.log("hlo")
  }
  //========== toggle functions ends here============ //

function goToHome(){
    window.location.href = "index.html"
}

function goToLogin(){
    window.location.href = "login.html"

}

function goToCartPage(){
    window.location.href = "cart.html"
    console.log("cart")
  }

  
  function goToHelpPage(){
    window.location.href = "help.html"
    console.log("hleo")
  }

  function showB(){
      b1.textContent = b.textContent
      b.style.color = "black"
      c.style.color = "rgba(0, 0, 0, 0.397)"
      d.style.color = "rgba(0, 0, 0, 0.397)"
      e.style.color = "rgba(0, 0, 0, 0.397)"
  }

  
  function showC(){
    c1.textContent = c.textContent
    b.style.color = "rgba(0, 0, 0, 0.397)"
    c.style.color = "black"
    d.style.color = "rgba(0, 0, 0, 0.397)"
    e.style.color = "rgba(0, 0, 0, 0.397)"
}

function showD(){
    d1.textContent = d.textContent
    b.style.color = "rgba(0, 0, 0, 0.397)"
    c.style.color = "rgba(0, 0, 0, 0.397)"
    d.style.color = "black"
    e.style.color = "rgba(0, 0, 0, 0.397)"
}

function showE(){
    e1.textContent =e.textContent
    b.style.color = "rgba(0, 0, 0, 0.397)"
    c.style.color = "rgba(0, 0, 0, 0.397)"
    d.style.color = "rgba(0, 0, 0, 0.397)"
    e.style.color = "black"
}

function deletingAll(){
    b1.textContent = ""
    c1.textContent = ""
    d1.textContent = ""
    e1.textContent = ""
}


//=============eventsSelection====================//

tgl2.addEventListener("click",deactivation);
tglFwd.addEventListener("click",activation);
first.addEventListener("click",goToWomenPage);
second.addEventListener("click",goToManPage);
third.addEventListener("click",goToKidsPage);
fourth.addEventListener("click",goToLilPage);
fifth.addEventListener("click",goToShoesBagsPage);
sixth.addEventListener("click",goToAthleticzPage);
logo.addEventListener("click",goToHome);
login.addEventListener("click",goToLogin);
help.addEventListener("click",goToHelpPage);
cart0.addEventListener("click",goToCartPage);
b.addEventListener("click",showB)
c.addEventListener("click",showC)
d.addEventListener("click",showD)
e.addEventListener("click",showE)
del.addEventListener("click",deletingAll)