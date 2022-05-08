function depositCalculator(input){

    let sum = Number(input[0]);
    let depositSum = Number(input[1]);
    let interestRate = Number(input[2]) / 100;

    let totalSum = sum + depositSum * ((sum * interestRate) / 12 );

    console.log(totalSum)
}   

depositCalculator([200, 3, 5.7])