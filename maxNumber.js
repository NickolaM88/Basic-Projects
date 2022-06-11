function maxNumber(input){

let num = input[0];
let index = 1;
let max = Number.MIN_SAFE_INTEGER;

while(num !== "Stop"){
    let currentNum = Number(num);
    if(max < currentNum){
       max = currentNum;
       
    }
    num = input[index];
    index++;
    
}
console.log(max)
}
