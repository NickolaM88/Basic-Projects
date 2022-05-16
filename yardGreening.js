function yardGreening(input){

    let meters = input[0];
    let price = meters * 7.61;
    let discount = price * 0.18;
    let finalprice = price - discount;

    console.log(`The final price is: ${finalprice} lv.
    The discount is: ${discount} lv.`)
}

yardGreening([550])