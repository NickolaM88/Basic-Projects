function basketballEquipment(input){

    let trainers = Number(input[0]);
    let sneakers = trainers - trainers * 0.4;
    let suit = sneakers - sneakers * 0.2;
    let ball = suit / 4;
    let acc = ball / 5;

    let sum = trainers + sneakers + suit + ball + acc;

    console.log(sum)
}