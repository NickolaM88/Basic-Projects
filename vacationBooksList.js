function vacationBooksList(input){

    let paper = Number(input[0]);
    let paperPerHour = Number(input[1]);
    let days = Number(input[2]);

    let hours = (paper / paperPerHour) / days;

    console.log(hours)
}

