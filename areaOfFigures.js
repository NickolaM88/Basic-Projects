function areaOfFigures(input){

let figure = input[0];
let a = Number(input[1]);
let b = Number(input[2]);

if (figure === "square"){
    let result = a * a;
    console.log((result).toFixed(3))
}else if (figure === "rectangle"){
    let result = a * b;
    console.log((result).toFixed(3))
}else if (figure === "circle"){
    let result = Math.PI * a * a;
    console.log((result).toFixed(3)) 
}else if (figure === "triangle"){
    let result = a * b / 2;
    console.log((result).toFixed(3))
}

}