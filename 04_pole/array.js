// Pole k úkolu
let postavy = ["Asterix", "Obelix", "Caesar", "Idefix", "Panoramix", "Alfabetix",
"Caius Bonus", "Gaius Papulus", "Kleopatra", "Archaix", "Lapiduchus", "Lovestorix",
"Lucius Detritus", "Marcus Junius Brutus", "Numerobis", "Tojehnus", "Amonbofis",
"Caius Antivirus", "Caligula Minus", "Falbala", "Oceanix", "Kovomatix", "Trubadix"];

/////////////////////////////////
//////* Zde piš svůj kód *//////

let pole = [25, "Ahoj", false, "Asterix"];
pole[2] = true; //změní hodnotu na pozici 2 na true
pole.push("Obelix"); //přidá nakonec
pole.unshift("Panoramix"); //přidá na začátek

pole.push("říman", "říman","říman");

console.log(pole);

let riman = pole.pop(); //smaze poslední hodnotu
let Panoramix = pole.shift(); //smaze první hodnotu

console.log(pole);
console.log("Vyhozeno z konce: " + riman);
console.log("Vyhozeno ze začátku: " + Panoramix);

console.log(pole)
console.log(pole.indexOf(true));