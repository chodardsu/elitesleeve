let rbtn = document.querySelector('#right-btn');
let lbtn = document.querySelector('#left-btn');
let pictures = document.querySelectorAll('.slider-images img');
let imgNum = 0;

let tekst = document.querySelector('.text1');
let slika = document.querySelector('.sl2');
let scrollPosition = window.pageYOffset;

let engLanguage = document.querySelector("#eng");
let srbLanguage = document.querySelector("#srb");
let order = document.querySelector(".hover-underline-animation");
let lorem = document.querySelector("#lorem");
let textAboutPrvi = document.querySelector("#prvi");
let textAboutDrugi = document.querySelector("#drugi");
let textAboutTreci = document.querySelector("#treci");
let textSecondPrvi = document.querySelector(".about-text1 #prvi1");
let textSecondDrugi = document.querySelector(".about-text1 #drugi1");
let textSecondTreci = document.querySelector(".about-text1 #treci1");
let buttonOrder = document.querySelector(".text button");

let aboutText = document.querySelectorAll(".about-text p");
let txtNum = -1;
let secondText = document.querySelectorAll(".about-text1 p");
let secondNum = -1;

let underpic = document.querySelector('.slika');
let undertext = document.querySelector('.text');

var header = document.querySelector(".header");
var sticky = header.offsetTop;

window.addEventListener("scroll", function() {
    let elementRect = underpic.getBoundingClientRect();
    let windowHeight = window.innerHeight;

 if (elementRect.top < windowHeight) {
    underpic.classList.add('underanimation');
}
});

window.addEventListener("scroll", function() {
    let elementRect = undertext.getBoundingClientRect();
    let windowHeight = window.innerHeight;

 if (elementRect.top < windowHeight) {
    undertext.classList.add('undertxtanimation');
}
});

window.addEventListener("scroll", function() {
    let elementRect = tekst.getBoundingClientRect();
    let windowHeight = window.innerHeight;

 if (elementRect.top < windowHeight) {
    tekst.classList.add('animation');
}
});

window.addEventListener("scroll", function() {
    let elementRect = slika.getBoundingClientRect();
    let windowHeight = window.innerHeight;

 if (elementRect.top < windowHeight) {
    slika.classList.add('animationPic');
}
});

window.onunload = function(){ window.scrollTo(0,0); }

//Menjanje teksta

const showNextText = () =>{
    displayNoneText();
    txtNum++;
    if(txtNum === aboutText.length){
        txtNum = 0;
    }
    aboutText[txtNum].style.display = 'block';
}

const displayNoneText = () =>{
    aboutText.forEach((txt) =>{
        txt.style.display = 'none';
    });
}
const startAutoText = () => {
    displayNoneText();
    aboutText[0].style.display = 'block'; 
    setInterval(showNextText, 5000);
};

startAutoText();




const NextText = () =>{
    displayNoneText1();
    secondNum ++;
    if(secondNum === secondText.length){
        secondNum = 0;
    }
    secondText[secondNum].style.display = 'block';
}

const displayNoneText1 = () =>{
    secondText.forEach((txt) =>{
        txt.style.display = 'none';
    });
}

const startAutoText1 = () => {
    displayNoneText1();
    secondText[0].style.display = 'block'; 
    setInterval(NextText, 5000);
};

startAutoText1();


window.addEventListener('scroll', myFunction);



function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}




// Menjanje jezika
srbLanguage.addEventListener("click", function() {
    order.innerText = "Naruci";
    order.setAttribute("class","hover-underline-animation");
    lorem.innerText = "Sprski";
    buttonOrder.innerText = "Naruci";
    textAboutPrvi.innerText = "Udobnost: Rukavi za gaming trebaju biti udobni kako biste mogli uživati u dugim sesijama igranja bez nelagode. Odaberite rukave koji su izrađeni od mekanih, prozračnih materijala koji neće iritirati vašu kožu.";
    textAboutDrugi.innerText = "Prianjanje: Dobri rukavi za gaming trebaju se prilagoditi vašem tijelu i čvrsto držati na mjestu kako bi vam omogućili slobodno kretanje. Rukavi s elastičnim trakama ili silikonskim trakama mogu pružiti dobro prianjanje bez klizanja.";
    textAboutTreci.innerText = "Zaštita od vlage: Tekom dugih gaming sesija, vaše ruke mogu se znojiti. Rukavi koji imaju ugrađene materijale za upijanje vlage ili koji omogućuju prozračnost pomoći će u održavanju suhih ruku i sprječavanju klizanja prstiju po kontrolerima.";
    textSecondPrvi.innerText = "Termoregulacija: Rukavi koji pružaju termoregulaciju mogu biti korisni jer će održavati optimalnu temperaturu vaših ruku tijekom igranja. Ako su rukavi previše debeli i ne prozračni, mogli bi uzrokovati pregrijavanje, dok previše tanki rukavi mogu biti neučinkoviti u održavanju topline tijekom hladnijih uvjeta."
    textSecondDrugi.innerText = "Stil: Rukavi za gaming dolaze u različitim dizajnima i stilovima. Možete odabrati rukave koji odražavaju vašu osobnost ili se podudaraju s temom vaše omiljene igre. Ovo je više estetski faktor, ali stilski rukavi mogu pridonijeti cjelokupnom iskustvu gaminga."
    textSecondTreci.innerText = "Trajnost: Kvalitetni rukavi za gaming trebali bi biti izdržljivi i izdržati dugotrajnu upotrebu. Pripazite na rukave koji su izrađeni od čvrstih materijala i imaju dobro šivanje kako bi izdržali stalno rastezanje i habanje."
    lorem2.innerText = "Srpski";
});

engLanguage.addEventListener("click", function(){
    order.innerText = "Order";
    lorem.innerText = "English";
    buttonOrder.innerText = "Order";
    textAboutPrvi.innerText = "Comfort: Gaming sleeves should be comfortable so that you can enjoy long gaming sessions without any discomfort. Choose sleeves made of soft, breathable materials that won't irritate your skin.";
    textAboutDrugi.innerText = "Grip: Good gaming sleeves should adapt to your body and stay in place firmly, allowing you free movement. Sleeves with elastic bands or silicone straps can provide a secure grip without slipping.";
    textAboutTreci.innerText = "Moisture Protection: During long gaming sessions, your hands can get sweaty. Sleeves that have built-in moisture-wicking materials or allow for breathability will help keep your hands dry and prevent your fingers from slipping on the controllers.";
    textSecondPrvi.innerText = "Thermal Regulation: Sleeves that provide thermal regulation can be useful as they will maintain the optimal temperature of your hands during gaming. If the sleeves are too thick and not breathable, they could cause overheating, while sleeves that are too thin may be ineffective in maintaining heat during colder conditions."
    textSecondDrugi.innerText = "Style: Gaming sleeves come in various designs and styles. You can choose sleeves that reflect your personality or match the theme of your favorite game. This is more of an aesthetic factor, but stylish sleeves can contribute to the overall gaming experience."

});

