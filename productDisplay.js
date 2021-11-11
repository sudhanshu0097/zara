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

// var blazers = [
// 	{
// 		image_url:"https://static.zara.net/photos///2021/I/0/1/p/2369/676/800/3/w/288/2369676800_1_1_1.jpg?ts=1636046578942",
// 		name:"LONG BLAZER WITH INVERTED LAPEL COLLAR",
// 		desc:"BLAZER WITH AN INVERTED LAPEL COLLAR. LONG SLEEVES AND PRONOUNCED SHOULDERS. FRONT WELT POCKETS. METAL HOOK FASTENING AT THE FRONT.",
// 		price:"₹ 5,590.00",
// 		color:"black",
// 	},
// 	{
// 		image_url:"https://static.zara.net/photos///2021/I/0/1/p/7822/457/600/2/w/288/7822457600_1_1_1.jpg?ts=1633518459326",
// 		name:"TEXTURED DOUBLE-BREASTED BLAZER",
// 		desc:"LONG SLEEVE BLAZER WITH A LAPEL COLLAR. FEATURING PRONOUNCED SHOULDERS, FRONT FLAP POCKETS AND DOUBLE-BREASTED METAL BUTTON FASTENING AT THE FRONT.",
// 		price:"₹ 5,590.00",
// 		color:"red",
// 	},
// 	{
// 		image_url:"https://static.zara.net/photos///2021/I/0/1/p/8412/218/070/2/w/288/8412218070_1_1_1.jpg?ts=1634832300137",
// 		name:"TEXTURED BLAZER WITH CONTRAST PIPING",
// 		desc:"LONG SLEEVE TAILORED BLAZER WITH A LAPEL COLLAR. FEATURING PRONOUNCED SHOULDERS, CONTRAST PIPING DETAILS, AND DOUBLE-BREASTED BUTTON FASTENING AT THE FRONT.",
// 		price:"₹ 6,990.00",
// 		color:"gray",
// 	},
// 	{
// 		image_url:"https://static.zara.net/photos//mkt/misc/watermarks/joinlife-ss19-v2/joinlife-large.svg?ts=1587055628000",
// 		name:"OVERSIZE MASCULINE BLAZER",
// 		desc:"LONG SLEEVE OVERSIZE BLAZER WITH A LAPEL COLLAR AND SHOULDER PADS. FRONT WELT FLAP POCKETS. BUTTON FASTENING AT THE FRONT.",
// 		price:"₹ 5,590.00",
// 		color:"blue",
// 	},
// 	{
// 		image_url:"https://static.zara.net/photos///2021/I/0/1/p/9431/620/330/4/w/288/9431620330_1_1_1.jpg?ts=1635510803767",
// 		name:"FITTED JACQUARD BLAZER",
// 		desc:"BLAZER WITH A LAPEL COLLAR, LONG SLEEVES AND DEFINED SHOULDERS. FEATURING FRONT POCKETS WITH FLAPS AND TEXTURED GOLDEN BUTTONS AT THE FRONT.",
// 		price:"₹ 6,990.00",
// 		color:"brown",
// 	},
// 	{
// 		image_url:"https://static.zara.net/photos//mkt/misc/watermarks/joinlife-ss19-v2/joinlife-large.svg?ts=1587055628000",
// 		name:"CROPPED BUTTONED BLAZER",
// 		desc:"SHORT BLAZER WITH LAPEL COLLAR AND LONG SLEEVES. FEATURING FALSE FRONT WELT POCKETS, RAISED METALLIC BUTTON DETAIL AND MATCHING LINING. DOUBLE-BREASTED BUTTON FASTENING AT THE FRONT.",
// 		price:"₹ 7,990.00",
// 		color:"black",
// 	},
// 	{
// 		image_url:"https://static.zara.net/photos//mkt/misc/watermarks/joinlife-ss19-v2/joinlife-large.svg?ts=1587055628000",
// 		name:"MASCULINE BLAZER",
// 		desc:"LONG SLEEVE BLAZER WITH A LAPEL COLLAR AND SHOULDER PADS. FRONT WELT FLAP POCKETS. BUTTON FASTENING AT THE FRONT.",
// 		price:"₹ 5,590.00",
// 		color:"red",
// 	},
// 	{
// 		image_url:"https://static.zara.net/photos///2021/I/0/1/p/2239/295/251/2/w/288/2239295251_1_1_1.jpg?ts=1629185088626",
// 		name:"LONG DOUBLE-BREASTED BLAZER",
// 		desc:"BLAZER WITH A LAPEL COLLAR, LONG SLEEVES AND PRONOUNCED SHOULDERS. FRONT FLAP POCKETS. DOUBLE-BREASTED FRONT WITH METAL BUTTON FASTENING.",
// 		price:"₹ 5,490.00",
// 		color:"white",
// 	},
// 	{
// 		image_url:"https://static.zara.net/photos///2021/I/0/1/p/7776/553/644/2/w/288/7776553644_1_1_1.jpg?ts=1626954228624",
// 		name:"BASIC BLAZER",
// 		desc:"BLAZER WITH A LAPEL COLLAR, LONG SLEEVES AND PRONOUNCED SHOULDERS. FRONT WELT POCKETS. FRONT BUTTON FASTENING.",
// 		price:"₹ 2,990.00",
// 		color:"pink",
// 	},
// 	{
// 		image_url:"https://static.zara.net/photos///2021/I/0/1/p/8300/112/500/2/w/288/8300112500_1_1_1.jpg?ts=1632829951904",
// 		name:"TEXTURED FITTED BLAZER",
// 		desc:"BLAZER WITH A LAPEL COLLAR, LONG SLEEVES AND PRONOUNCED SHOULDERS. FEATURING FRONT WELT POCKETS AND DOUBLE-BREASTED FRONT WITH TEXTURED GOLDEN BUTTONS.",
// 		price:"₹ 5,590.00",
// 		color:"green",
// 	},
// 	{
// 		image_url:"https://static.zara.net/photos///2021/I/0/1/p/2761/244/800/2/w/288/2761244800_1_1_1.jpg?ts=1630566509045",
// 		name:"DOUBLE-BREASTED BLAZER WITH SHOULDER PADS",
// 		desc:"BLAZER FEATURING A LAPEL COLLAR AND LONG SLEEVES WITH VERY PRONOUNCED SHOULDER PADS. FRONT WELT POCKETS. INTERIOR LINING. DOUBLE-BREASTED FRONT WITH METAL BUTTON FASTENING.",
// 		price:"₹ 6,990.00",
// 		color:"black",
// 	},
// 	{
// 		image_url:"https://static.zara.net/photos///2021/V/0/1/p/3187/273/250/2/w/288/3187273250_1_1_1.jpg?ts=1619601165162",
// 		name:"TEXTURED CROPPED BLAZER",
// 		desc:"CROPPED BLAZER WITH A LAPEL COLLAR AND SHORT SLEEVES. FRONT PATCH POCKETS. MATCHING LINING. FRONT FASTENING WITH METAL TEXTURED BUTTONS.",
// 		price:"₹ 5,490.00",
// 		color:"white",
// 	},
// 	{
// 		image_url:"https://static.zara.net/photos///2021/I/0/1/p/8015/374/712/2/w/288/8015374712_1_1_1.jpg?ts=1622620797047",
// 		name:"BLAZER WITH PATCH POCKETS",
// 		desc:"BLAZER WITH A LAPEL COLLAR AND PRONOUNCED SHOULDERS. FEATURING FRONT PATCH POCKETS AND BUTTON FASTENING AT THE FRONT.",
// 		price:"₹ 5,590.00",
// 		color:"white",
// 	},
// 	{
// 		image_url:"https://static.zara.net/photos//mkt/misc/watermarks/joinlife-ss19-v2/joinlife-large.svg?ts=1587055628000",
// 		name:"STRAIGHT CUT BLAZER",
// 		desc:"LONG SLEEVE BLAZER WITH A LAPEL COLLAR, PRONOUNCED SHOULDERS, FRONT FLAP POCKETS AND A FRONT BUTTON FASTENING.",
// 		price:"₹ 5,590.00",
// 		color:"green",
// 	},
// 	{
// 		image_url:"https://static.zara.net/photos//mkt/misc/watermarks/joinlife-ss19-v2/joinlife-large.svg?ts=1587055628000",
// 		name:"FITTED DOUBLE-BREASTED BLAZER",
// 		desc:"BLAZER WITH A LAPEL COLLAR AND LONG SLEEVES. FEATURING PRONOUNCED SHOULDERS, FRONT WELT POCKETS, A BACK VENT AND DOUBLE-BREASTED FASTENING WITH METAL BUTTONS.",
// 		price:"₹ 5,590.00",
// 		color:"red",
// 	},
// 	{
// 		image_url:"https://static.zara.net/photos///2021/I/0/1/p/8541/122/131/2/w/288/8541122131_1_1_1.jpg?ts=1630067359585",
// 		name:"TEXTURED DOUBLE-BREASTED BLAZER",
// 		desc:"LAPELLESS BLAZER WITH LONG SLEEVES AND PRONOUNCED SHOULDERS. FEATURING FRONT WELT POCKETS AND CROSSOVER FASTENING WITH RHINESTONE BUTTONS.",
// 		price:"₹ 6,990.00",
// 		color:"green",
// 	},

// 	{
// 		image_url:"https://static.zara.net/photos//mkt/misc/watermarks/joinlife-ss19-v2/joinlife-large.svg?ts=1587055628000",
// 		name:"DOUBLE-BREASTED BLAZER",
// 		desc:"BLAZER WITH A LAPEL COLLAR, CROSSOVER V-NECKLINE AND LONG SLEEVES. FEATURING FRONT FLAP POCKETS AND DOUBLE-BREASTED FRONT BUTTON FASTENING.",
// 		price:"₹ 5,590.00",
// 		color:"green",
// 	},
// 	{
// 		image_url:"https://static.zara.net/photos///2021/I/0/1/p/8505/676/600/2/w/288/8505676600_1_1_1.jpg?ts=1632467643104",
// 		name:"LONG FITTED BLAZER",
// 		desc:"FITTED BLAZER FEATURING A ROUND COLLAR AND LONG SLEEVES WITH SHOULDER PADS. FRONT POCKETS. FRONT METAL BUTTON FASTENING.",
// 		price:"₹ 5,590.00",
// 		color:"red",
// 	},
// 	{
// 		image_url:"https://static.zara.net/photos///2021/I/0/1/p/9929/126/405/2/w/288/9929126405_1_1_1.jpg?ts=1632736473253",
// 		name:"FLECKED TAILORED BLAZER",
// 		desc:"BLAZER WITH A V-NECKLINE, LONG SLEEVES AND PRONOUNCED SHOULDERS. FRONT POCKETS WITH FLAPS. BUTTON-UP FRONT.",
// 		price:"₹ 2,990.00",
// 		color:"gray",
// 	},
// 	{
// 		image_url:"https://static.zara.net/photos///2021/I/0/1/p/7822/150/250/2/w/288/7822150250_1_1_1.jpg?ts=1620821844974",
// 		name:"TEXTURED FITTED BLAZER",
// 		desc:"BLAZER WITH A LAPEL COLLAR, LONG SLEEVES AND PRONOUNCED SHOULDERS. FRONT FLAP POCKETS. CHEST WELT POCKET. DOUBLE-BREASTED METAL BUTTON FASTENING AT THE FRONT.",
// 		price:"₹ 5,590.00",
// 		color:"white",
// 	},
// 	{
// 		image_url:"https://static.zara.net/photos///2021/I/0/1/p/8510/730/676/2/w/288/8510730676_1_1_1.jpg?ts=1629711309674",
// 		name:"TAILORED DOUBLE-BREASTED BLAZER",
// 		desc:"BLAZER FEATURING A LAPEL COLLAR AND LONG SLEEVES WITH PRONOUNCED SHOULDERS. FRONT FLAP POCKETS. BACK VENT. DOUBLE-BREASTED FRONT WITH METAL BUTTON FASTENING.",
// 		price:"₹ 5,590.00",
// 		color:"pink",
// 	},
// 	{
// 		image_url:"https://static.zara.net/photos///2021/I/0/1/p/2753/328/812/2/w/288/2753328812_1_1_1.jpg?ts=1631277971882",
// 		name:"DOUBLE-BREASTED BLAZER WITH BELT",
// 		desc:"BLAZER WITH A LAPEL COLLAR, LONG SLEEVES AND PRONOUNCED SHOULDERS. FEATURING FRONT FLAP POCKETS AND DOUBLE-BREASTED FASTENING WITH BUTTONS AND MATCHING BELT.",
// 		price:"₹ 5,590.00",
// 		color:"gray",
// 	},
// 	{
// 		image_url:"https://static.zara.net/photos//mkt/misc/watermarks/joinlife-ss19-v2/joinlife-large.svg?ts=1587055628000",
// 		name:"DINNER JACKET",
// 		desc:"BLAZER WITH A SATIN LAPEL COLLAR, LONG SLEEVES AND DEFINED SHOULDERS. FRONT FLAP POCKETS. FRONT FASTENING WITH COVERED BUTTON.",
// 		price:"₹ 5,590.00",
// 		color:"red",
// 	},
// 	{
// 		image_url:"https://static.zara.net/photos///2021/I/0/1/p/2674/712/305/17/w/288/2674712305_1_1_1.jpg?ts=1630946318082",
// 		name:"TEXTURED JACKET",
// 		desc:"CROPPED CARDIGAN WITH A ROUND NECKLINE AND LONG SLEEVES WITH SHOULDER PADS. FALSE WELT POCKETS ON THE CHEST. INTERIOR LINING. METAL BUTTON FASTENING ON THE FRONT.",
// 		price:"₹ 4,590.00",
// 		color:"yellow",
// 	},
// 	{
// 		image_url:"https://static.zara.net/photos///2021/I/0/1/p/8476/505/800/2/w/288/8476505800_1_1_1.jpg?ts=1631202960361",
// 		name:"JACKET WITH SHOULDER PADS - LIMITED EDITION",
// 		desc:"TAILORED JACKET WITH A LAPEL COLLAR AND LONG SLEEVES WITH SHOULDER PADS. FEATURING FRONT PATCH POCKETS WITH FLAPS AND SNAP-BUTTON FASTENING AT THE FRONT.",
// 		price:"₹ 7,990.00",
// 		color:"black",
// 	},
// ];

// localStorage.setItem("blazers",JSON.stringify(blazers));

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
