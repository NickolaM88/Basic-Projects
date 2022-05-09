function fishTank(input){

    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let precentageReserve = Number(input[3]);

    let tankVolume = lenght * width * height;
    let tankVolumeInDM = tankVolume * 0.001;
    let total = tankVolumeInDM - (tankVolumeInDM * (precentageReserve / 100 ));

    console.log(total)
}