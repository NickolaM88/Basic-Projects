function onTimeForTheExam(input) {

    let examHour = Number(input[0]);
    let examMin = Number(input[1]);
    let arrivedHour = Number(input[2]);
    let arrivedMin = Number(input[3]);

    let examTimeInMin = examHour * 60 + examMin;
    let arrivedTimeInMin = arrivedHour * 60 + arrivedMin;

    if (arrivedTimeInMin > examTimeInMin) {
        console.log(`Late`);

        let diff = arrivedTimeInMin - examTimeInMin;

        if (diff >= 60) {
            let hours = Math.floor(diff / 60);
            let mins = diff % 60;
            if (mins < 10) {
                console.log(`${hours}:0${mins} hours after the start`);
            } else {
                console.log(`${hours}:${mins} hours after the start`);
            }
        } else {
            let mins = diff % 60;
            console.log(`${mins} minutes after the start`);
    }
}else if(examTimeInMin - arrivedTimeInMin <= 30){
    console.log(`On time`);
    let diff = examTimeInMin - arrivedTimeInMin;
    if(diff !== 0){
        let min = diff % 60;
        console.log(`${min} minutes before the start`);
    }
}else {
    console.log(`Early`);
    
    let diff = examTimeInMin - arrivedTimeInMin;
    if(diff >= 60){
        let hours = Math.floor(diff / 60);
        let mins = diff % 60;
        if(mins < 10){
            console.log(`${hours}:0${mins} hours before the start`);
        }else {
            console.log(`${hours}:${mins} hours before the start`);
        }
    }else {
        let mins = diff % 60;
        console.log(`${mins} minutes before the start`);
    }
}

}