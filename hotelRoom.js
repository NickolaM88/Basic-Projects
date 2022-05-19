function hotelRoom(input) {

    let month = input[0];
    let night = Number(input[1]);
    let studio;
    let apartment;

    switch (month) {
        case `May`:
        case `October`:
            studio = 50;
            apartment = 65;
            break;
        case `June`:
        case `September`:
            studio = 75.20;
            apartment = 68.70;
            break;
        case `July`:
        case `August`:
            studio = 76;
            apartment = 77;
            break;
    }
    if(night > 7 && night <= 14 && month === `May` || month === `October`){
        studio = studio * 0.95;
    }else if( night > 14 && month === `May` || month === `October`){
        studio = studio * 0.70;
        apartment = apartment * 0.90;
    }else if(night > 14 && month === `June` || month === `September`){
        studio = studio * 0.80;
        apartment = apartment * 0.90;
    }else if(night > 14){
        apartment = apartment * 0.90;
    }
    let studioPrice = studio * night;
    let apartmentPrice = apartment * night;

    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}

hotelRoom([`August`,20])