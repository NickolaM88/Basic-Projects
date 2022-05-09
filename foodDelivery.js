function foodDelivery(input){

    let chiken = Number(input[0]);
    let fish = Number(input[1]);
    let vegan = Number(input[2]);

    let sum = chiken * 10.35 + fish * 12.40 + vegan * 8.15;
    let desert = sum * 0.20;
    let totalsum = sum + desert + 2.50;
    
    console.log(totalsum)
}

foodDelivery([2,4,3])