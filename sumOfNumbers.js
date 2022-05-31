function sumOfNumbers(input){

    let ourInput = input[0];
    let sumOfDigits = 0;

    for(let i = 0; i < ourInput.length; i++){
        let currentDigit = Number(ourInput[i]);
        sumOfDigits += currentDigit;
    }
    console.log(`The sum of the digits is:${sumOfDigits}`);

}