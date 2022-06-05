function building(input) {
    let floors = Number(input[0]);
    let numOfRooms = Number(input[1]);
 
    for (let i = floors; i >0; i--) {
        let printline = "";
        for (let j = 0; j < numOfRooms; j++) {
            if (i === floors) {
               printline+=`L${i}${j} `;
            } else {
                if (i % 2 === 0) {
                   printline+=`O${i}${j} `
                } else {
                    printline+= `A${i}${j} `;
                }
            }
        }
       console.log(printline)
    }
}
building([4, 4])