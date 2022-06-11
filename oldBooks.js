function oldBooks(input){

let favBook = input[0];
let index = 1;
let isFound = false;
let nextBook = input[index];

while(nextBook !== "No More Books"){
    if(nextBook === favBook){
        isFound = true;
        break;
    }
    index++;
    nextBook = input[index];

}

if(isFound === false){
console.log("The book you search is not here!");
console.log(`You checked ${index - 1} books.`);
}else {
    console.log(`You checked ${index - 1} books and found it.`);
}

}