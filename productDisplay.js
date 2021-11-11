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
var data = JSON.parse(localStorage.getItem("blazers"))

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



//============================= Now product displaying of this page ============================= //

var zaraData = JSON.parse(localStorage.getItem("zaraProductData"));


displayProduct(zaraData);


function displayProduct(zaraData){
    zaraData.map(function(item){
        var div = document.createElement("div")
        div.setAttribute("id","clothesDiv")
         var h1 = document.createElement("h2");
         var img = document.createElement("img");
         var h2 = document.createElement("h3")
         var h3 = document.createElement("h4")

        h1.textContent = item.name;
        h2.textContent = item.price;
        h3.textContent = item.color;
        img.setAttribute("src",item.image_url);

        div.append(img,h1,h3,h2)
        imageDiv.append(div)
    })

}
