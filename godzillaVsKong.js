function godzillaVsKong(input){

let filmBuget = Number(input[0]);
let statics = Number(input[1]);
let wear = Number(input[2]);

let decor = filmBuget * 0.10;

if(statics > 150){
    wear = wear * 0.90;
}

let wearSum = statics * wear;
let totalSum = decor + wearSum;
let diff = Math.abs(filmBuget - totalSum);

if(totalSum > filmBuget){
    console.log(`Not enough money!
    Wingard needs ${diff.toFixed(2)} leva more.`)
}else {
    console.log(`Action!
   Wingard starts filming with ${diff.toFixed(2)} leva left.`)
}



}

godzillaVsKong(["20000", "120", "55.5"])