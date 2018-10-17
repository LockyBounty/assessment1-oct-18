let userInput = prompt(`Veuillez entrer un chiffre entre 0 et 999: `);
let userConverti = parseInt(userInput);
console.log(userInput);

let tabUnit = ["", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix"];
let tabSpec10 = ["dix", "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf"];
let tabDeca = ["et", "vingt", "trente", "quarante", "cinquante", "soixante", "quatre-vingt"];
let tabCenti = ["cent"];

let unites = (num) => {
    for (i = 0; i < tabUnit.length; i++) {
        if (num === i) {
            if(num !== 1){
            return tabUnit[i];}else{
                return `et-un`;
            }
        }
    }
}
let dizaines = (num) => {
    let a = Math.floor(num / 10);
    let b = num % 10;

    if (a !== 0) {
        for (i = 0; i < tabDeca.length; i++) {
            console.log(a);
            if (a === i + 1) {
                console.log(a);
                return `${tabDeca[i]}`;
            }
        }
    } else if (a === 0) {
        return `${tabDeca[0]}`
    }
}
let special10 = (num) => {
    let a = num % 10;
    for (i = 0; i < tabSpec10.length; i++) {
        if (a === i) {
            return tabSpec10[i];
        }
    }

}

let centaines = (num) => {
    let a = Math.floor(num / 100);
    let b = Math.floor(num /100);
    console.log(b);
    let d = 0;
    if (b !==1 ){
        d = `${unites(a)}-${tabCenti[0]}`;
    }else if (b === 1){
        d = `${tabCenti[0]}`;
    }
    return d;

}


if (userConverti < 0 || userConverti > 999 || isNaN(userConverti)) {
    confirm(`Un chiffre entre 0 et 999, bon sang !`);
} else if (userConverti >= 0 && userConverti <= 10) {

    confirm(`${unites(userConverti)}`);

} else if (userConverti > 10 && userConverti < 20) {


    confirm(`${special10(userConverti)}`);

} else if (userConverti >= 20 && userConverti <= 99) {
    

        confirm(`${dizaines(userConverti)}-${unites(userConverti%10)}`);

    

} else if (userConverti > 100 && userConverti < 1000) {
    if (userConverti % 100 < 10 || userConverti % 100 > 19 || userConverti % 100 !== 0) {

        confirm(`${centaines(userConverti)}-${dizaines(userConverti%100)}-${unites(userConverti%10)}`);

    } else {
        confirm(`${centaines(userConverti)}-${special10(userConverti%100)}`);
    }
} else if (userConverti === 100){
    confirm(`${tabCenti[0]}`);
}