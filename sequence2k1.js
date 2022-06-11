function sequence2k1(input){

let targetNum = Number(input[0]);
let num = 1;

while( targetNum >= num){
    console.log(num); 
    num = num * 2 + 1;
}
}