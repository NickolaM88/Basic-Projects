function summerOutfit(input){

let degree = Number(input[0]);
let time = input[1];

switch(time){
    case `Morning`:  
    if(degree >= 10 && degree <= 18){
        console.log(`It's ${degree} degrees, get your Sweatshirt and Sneakers.`);
    }else if( degree > 18 && degree <= 24){
        console.log(`It's ${degree} degrees, get your Shirt and Moccasins.`);
    }else if(degree >= 25){
        console.log(`It's ${degree} degrees, get your T-Shirt and Sandals.`);
    }
    break;
    case `Afternoon`: 
    if(degree >= 10 && degree <= 18){
        console.log(`It's ${degree} degrees, get your Shirt and Moccasins.`);
    }else if( degree > 18 && degree <= 24){
        console.log(`It's ${degree} degrees, get your T-Shirt and Sandals.`);
    }else if(degree >= 25){
        console.log(`It's ${degree} degrees, get your Swim Suit and Barefoot.`);
    }  
    break;
    case `Evening` :   
    if(degree >= 10 && degree <= 18){
        console.log(`It's ${degree} degrees, get your Shirt and Moccasins.`);
    }else if( degree > 18 && degree <= 24){
        console.log(`It's ${degree} degrees, get your Shirt and Moccasins.`);
    }else if(degree >= 25){
        console.log(`It's ${degree} degrees, get your Shirt and Moccasins.`);
    }  
    break;
}

}