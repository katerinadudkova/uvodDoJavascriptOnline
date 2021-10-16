console.log("Hello World!!!");
//proměnné
let vek = 84;

let jmeno;
jmeno="Paramix";

//alert+vstup od uživatele pomocí prompt a console.log
// alert("Jmenuji se " + jmeno + " a je mi " + vek + " let.");

// let asterixuvVek = prompt("Zadej Asterixův věk");
//console.log(asterixuvVek);

//podmínky
let asterixVaha = 55;
let obelixVaha = 55;

if (asterixVaha > obelixVaha) {
    console.log("Asterix je těžší než Obelix");
} else if (obelixVaha > asterixVaha) {
    console.log("Obelix je těžší než Asterix");
} else {
    console.log("Oba dva váží stejně");
}
//podmínky úkol č.3
let asterixVek = 55;
let obelixVek = 55;
let galoveVek = asterixVek+obelixVek;
let panoramixVek = 84;

if (galoveVek > panoramixVek) {
    console.log("Asterix a Obelix jsou dohromady starší než Panoramix");
} else if (panoramixVek > galoveVek) {
    console.log("Panoramix je starší než galové dohoromady");
} else {
    console.log("Panoramix a galové dohromady jsou stejně staří");
}
//for-cyklus
for (let i = 1; i < 5; i++) {
    console.log(i + " říman");
}
//while-cyklus
let opakuj = true;
while (opakuj) {
    let hod = Math.ceil(Math.random() * 6);
  console.log(hod);

  if (hod == 6) {
      opakuj = false
  }
}
//jednořádkový komentář
/* víceřádkový
 komentář*/
