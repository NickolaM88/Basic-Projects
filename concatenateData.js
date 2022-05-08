function concatenateData(input){

    let firstname = input[0];
    let lastname = input[1];
    let age = input[2];
    let city = input[3];

    console.log(`You are ${firstname} ${lastname}, a ${age}-years old person from ${city}.`)
}

concatenateData([`maria` , `ivanova `, 20 , `sofia`])