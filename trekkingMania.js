function trekkingMania(input) {
 
    let sum = 0;
    let index = 0;
    let n = Number(input[0]);
    index++;
    for (let ind = 0; ind < n; ind++) {
        sum += Number(input[index]);
        index++;
 
    }
    let musala = 0;
    let monblan = 0;
    let kulimanj = 0;
    let k2 = 0;
    let everest = 0;
 
    for (i = 1; i <= n; i++) {
        let x = Number(input[i]);
        if (x <= 5) {
            musala += Number(input[i]);
        } else if (x >= 6 && x <= 12) {
            monblan += Number(input[i]);
        } else if (x >= 13 && x <= 25) {
            kulimanj += Number(input[i]);
        } else if (x >= 26 && x <= 40) {
            k2 += Number(input[i]);
        } else if(x >= 41) {
            everest += Number(input[i]);
        }
 
    }
    let musalaPr = musala / sum * 100;
    let monblanPr = monblan / sum * 100;
    let kulimanjPr = kulimanj / sum * 100;
    let k2Pr = k2 / sum * 100;
    let everestPr = everest / sum * 100;
 
    console.log(musalaPr.toFixed(2) + "%");
    console.log(monblanPr.toFixed(2) + "%");
    console.log(kulimanjPr.toFixed(2) + "%");
    console.log(k2Pr.toFixed(2) + "%");
    console.log(everestPr.toFixed(2) + "%");
 
}