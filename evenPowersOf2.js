function evenPowersOf2(input){

let power = Number(input[0])

for(let num = 0; num <= power; num += 2){
    console.log(Math.pow(2,num));
}
}