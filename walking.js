function walking(input){
let goal = 10000;

let index = 0;
let command = input[index];
index++;
let currentSteps = 0;

while(command !== "Going home"){
    let steps = Number(command)
    currentSteps += steps;

    if(currentSteps >= goal){
        break;
    }
    command = input[index];
    index++;
}
if(command === "Going home"){
    let steps = Number(input[index]);
    index++;
    currentSteps += steps;
}

let diff = Math.abs(currentSteps - goal);

if(currentSteps >= goal){
    console.log("Goal reached! Good job!");
    console.log(`${diff} steps over the goal!`);
}else {
    console.log(`${diff} more steps to reach goal.`);
}

}