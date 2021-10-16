// Funkce
function pozdrav() {
    console.log("Hello world");
}

pozdrav()

function secti(cislo1, cislo2) {
    let soucet = cislo1 + cislo2;
    return soucet;
}

console.log(secti(5,8));

/* function obarviNaCerveno () {
    // ziskat element obdelniku
    let obdelnik = document.querySelector(".obdelnik");

    // obarvit na cervenou
    obdelnik.style.backgroundColor = "darkred";
}
obarviNaCerveno(); */

// Události
let ctverec = document.querySelector(".ctverec");
let obdelnik = document.querySelector(".obdelnik");

ctverec.addEventListener("click", zaobli);

function zaobli () {
    //ctverec.style.borderRadius = "50%";
    ctverec.classList.toggle("kruh");
    //pridani ctverec.classList.add("kruh");
    //odebrani ctverec.classList.remove("kruh");
    
}
//zkrácený zápis ctverec.addEventListener("click", function () {ctverec.classList.toggle("kruh"); });

obdelnik.addEventListener('mouseenter', function() {
    obdelnik.style.backgroundColor = "#ff4242";
});

obdelnik.addEventListener('mouseleave', function() {
    obdelnik.style.backgroundColor = "white";
});

window.addEventListener("keydown", function (udalost){
    if (udalost.key === " ") {
        obdelnik.classList.toggle("otoc");
    }
    console.log(udalost.key);
})

