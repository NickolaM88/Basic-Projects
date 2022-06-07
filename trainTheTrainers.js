function trainTheTrainers(input) {

    let people = Number(input[0]);
    let index = 1;
    let commnad = input[index];
    index++;
    let sumOfGrade = 0;
    let counter = 0;


    while (commnad !== "Finish") {
        let name = commnad;
        let tempSumOfGrade = 0;
        for (let a = 0; a < people; a++) {
            counter++;
            let grade = Number(input[index]);
            index++;
            tempSumOfGrade += grade;
            sumOfGrade += grade;
        }

        let averageTempGrade = tempSumOfGrade / people;
        console.log(`${name} - ${averageTempGrade.toFixed(2)}.`);

        commnad = input[index];
        index++;
    }
    let averageGrade = sumOfGrade / counter;
    console.log(`Student's final assessment is ${averageGrade.toFixed(2)}.`);
}