let userInput = prompt(`Please enter a number between 0 and 999: `);
let userConverti = parseInt(userInput);
console.log(userInput);

let tabUnit = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
let tabSpec10 = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
let tabDeca = ["and", "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"];
let tabCenti = ["hundred"];

let unites = (num) => {
    for (i = 0; i < tabUnit.length; i++) {
        if (num === i) {
            return tabUnit[i];
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
    let b = num % 100;
    let c = Math.floor(num / 10);

    return `${unites(a)}-${tabCenti[0]}`;

}


if (userConverti < 0 || userConverti > 999 || isNaN(userConverti)) {
    confirm(`You must enter a number between 0 and 999, you idiot!`);
} else if (userConverti >= 0 && userConverti <= 10) {
    if (userConverti !== 0){

    
    confirm(`${unites(userConverti)}`);
    }else{
        confirm("zero");
    }
} else if (userConverti > 10 && userConverti < 20) {


    confirm(`${special10(userConverti)}`);

} else if (userConverti >= 20 && userConverti < 100) {

    confirm(`${dizaines(userConverti)}-${unites(userConverti%10)}`);

} else if (userConverti >= 100 && userConverti < 1000) {
    if (userConverti % 100 < 10 || userConverti % 100 > 19) {

        confirm(`${centaines(userConverti)}-${dizaines(userConverti%100)}-${unites(userConverti%10)}`);

    } else {
        confirm(`${centaines(userConverti)}-${special10(userConverti%100)}`);
    }
}