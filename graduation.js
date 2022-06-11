function graduation(input) {

    let name = input[0];
    let grade = 1;
    let totalSum = 0;
    let index = 1;
    let num = input[index];
    let isGraduated = true;

    while (grade <= 12) {
        grade++;
        totalSum += num;
        num = input[index]
        index++;
    }

    let averageSum = totalSum / 12;

    if (averageSum >= 4.00 && isGraduated) {
        console.log(`${name} graduated. Average grade: ${averageSum.toFixed(2)}`);
    } else {
        console.log(`${name} has been excluded at ${grade} grade`);
    }



}
graduation(["Gosho", 5, 5.5, 6, 5.43, 5.5, 6, 5.55, 5, 6, 6, 5.43])