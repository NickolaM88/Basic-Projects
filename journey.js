function journey(input){

let budget = Number(input[0]);
let season = input[1];
let destination ;
let place ;

if(budget <=100 ){
destination = `Bulgaria`;
switch(season){
    case `summer`: 
    place = `Camp`;
    budget = budget * 0.30;
    break;
    case `winter`: 
    place = `Hotel`
    budget = budget * 0.70;
    break;
}
}else if( budget <= 1000){
    destination = `Balkans`;
switch(season){
    case `summer`: 
    place = `Camp`
    budget = budget * 0.40;
    break;
    case `winter`: 
    place = `Hotel`
    budget = budget * 0.80;
    break;
}
}else if(budget > 1000){
    destination = `Europe`;
switch(season){
    case `summer`: 
    place = `Hotel`
    budget = budget * 0.90;
    break;
    case `winter`: 
    place = `Hotel`
    budget = budget * 0.90;
    break;
}
}
console.log(`Somewhere in ${destination}`);
console.log(`${place} - ${budget.toFixed(2)}`);

}

journey([50,`summer`])