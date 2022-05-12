function lunchBreak(input){

let name = input[0];
let filmTime = Number(input[1]);
let restTime = Number(input[2]);

let lunchTime = restTime / 8;
let coolTime = restTime / 4;
let otherTime = restTime - lunchTime - coolTime;

let diff = Math.abs(filmTime - otherTime);

if(filmTime > otherTime){
    console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(diff)} more minutes.`)
}else{
    console.log(`You have enough time to watch ${name} and left with ${Math.ceil(diff)} minutes free time.`)
}

}

lunchBreak(["Game of Thrones",
    "48",
    "60"])