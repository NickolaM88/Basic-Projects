function tradeCommissions(input) {

    let city = input[0];
    let num = Number(input[1]);
    let finalSum ;

    switch (city) {
        case `Sofia`:
            if (num >= 0 && num <= 500) {
                finalSum = num * 0.05;
            } else if (num > 500 && num <= 1000) {
                finalSum = num * 0.07;
            } else if (num > 1000 && num <= 10000) {
                finalSum = num * 0.08;
            } else if (num > 10000) {
                finalSum = num * 0.12;
            } else {
                console.log(`error`);
            }
            break;


        case `Varna`:
            if (num >= 0 && num <= 500) {
                finalSum = num * 0.045;
            } else if (num > 500 && num <= 1000) {
                finalSum = num * 0.075;
            } else if (num > 1000 && num <= 10000) {
                finalSum = num * 0.10;
            } else if (num > 10000) {
                finalSum = num * 0.13;
            } else {
                console.log(`error`);
            }
            break;


        case `Plovdiv`:
            if (num >= 0 && num <= 500) {
                finalSum = num * 0.055;
            } else if (num > 500 && num <= 1000) {
                finalSum = num * 0.08;
            } else if (num > 1000 && num <= 10000) {
                finalSum = num * 0.12;
            } else if (num > 10000) {
                finalSum = num * 0.145;
            } else {
                console.log(`error`);
            }
            break;

    }
    if(finalSum > 0){
        console.log(finalSum.toFixed(2));
    }else{
        console.log(`error`);
    }
    
}

tradeCommissions([`Sofia`, `-20`])