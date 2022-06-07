function sumOfTwoNumbers(input) {

    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let goalNum = Number(input[2]);
    let combinations = 0;

    for (let i = startNum; i <= endNum; i++) {
        for (let k = startNum; k <= endNum; k++) {
            combinations++;
            if (i + k === goalNum) {
                console.log(`Combination N:${combinations} (${i} + ${k} = ${goalNum})`);
                return;
            } 
        }
    }
    console.log(`${combinations} combinations - neither equals ${goalNum}`);
}
sumOfTwoNumbers([23, 24, 20])