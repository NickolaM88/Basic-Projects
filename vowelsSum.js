function vowelsSum (input){

let n = input[0];
let sum = 0;

for(let i = 0; i < n.length; i++){
    let num = n[i];

    if(num === `a`){
        sum += 1;
    }else if(num === `e`){
        sum += 2;
    }else if(num === `i`){
        sum += 3;
    }else if(num === `o`){
        sum += 4;
    }else if(num === `u`){
        sum += 5;
    }
}
console.log(sum);

}