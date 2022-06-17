function sumNumbers(input){

let targetSum = Number(input[0]);
let sum = 0;
let index = 1;

while(sum < targetSum){
    let currentNumber = Number(input[index]);
    sum += currentNumber;
    index++;
}
    console.log(sum);
}