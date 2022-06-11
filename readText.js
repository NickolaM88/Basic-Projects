function readText(input){

let index = 0;

while(true){
    let word = input[index];
    index++;
  if(word === "Stop"){
      break;
  }else {
      console.log(word);
  }
}

}
readText(['Nakov , ivan , georgi , Stop'])