function moving(input) {

    let index = 0;
    let lengthPlace = Number(input[index]);
    index++;
    let widthPlace = Number(input[index]);
    index++;
    let higthPlace = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let boxPlace = 0;

    let place = lengthPlace * widthPlace * higthPlace;
    let isHaveSpace = true;

    while (command !== "Done") {
        let box = Number(command);
        place -= box

        if (place <= 0) {
            let diff = Math.abs(place - boxPlace);
            isHaveSpace = false;
            console.log(`No more free space! You need ${diff} Cubic meters more.`);
            break;
        }

        command = input[index];
        index++;
    }
    if (isHaveSpace) {
        console.log(`${place} Cubic meters left.`);
    }

}
moving([10, 1, 2, 4, 6, "Done"])