function cleverLily(input) {

    let age = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let singleToyPrice = Number(input[2]);
    let toyCounter = 0;
    let saveMoney = 0;
    let money = 10;

    for (i = 1; i <= age; i++) {
        if (i % 2 !== 0) {
            toyCounter++;
        }else{
            saveMoney += money;
            money += 10;
            saveMoney -= 1;
        }
    }

    saveMoney += toyCounter * singleToyPrice;
    let diff = Math.abs(saveMoney - washingMachinePrice);

    if(saveMoney >= washingMachinePrice){
        console.log(`Yes! ${diff.toFixed(2)}`);
    }else {
        console.log(`No! ${diff.toFixed(2)}`);
    }
}