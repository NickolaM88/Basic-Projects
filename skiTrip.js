function skiTrip(input) {

    let days = Number(input[0]);
    let place = input[1];
    let score = input[2];
    let nights = days - 1;

    let roomPrice = 18.00;
    let apPrice = 25.00;
    let prPrice = 35.00;
    totalPrice = 0;

    switch (place) {
        case `room for one person`:
            totalPrice = nights * roomPrice;
            break;
        case `apartment`:
            totalPrice = nights * apPrice;
            if (days < 10) {
                totalPrice = totalPrice * 0.70;
            } else if (days >= 10 && days <= 15) {
                totalPrice = totalPrice * 0.65;
            } else if (days > 15) {
                totalPrice = totalPrice* 0.50;
            }
            break;
        case `president apartment`:
            totalPrice = nights * prPrice;
            if (days < 10) {
                totalPrice = totalPrice * 0.90;
            } else if (days >= 10 && days <= 15) {
                totalPrice = totalPrice * 0.85;
            } else if (days > 15) {
                totalPrice = totalPrice * 0.80;
            }
            break;
    }
    if (score === `positive`) {
        totalPrice = totalPrice * 1.25;
    } else if (score === `negative`) {
        totalPrice = totalPrice * 0.90;
    }
    console.log(`${totalPrice.toFixed(2)}`);

}
skiTrip([14, `apartment`, `positive`])