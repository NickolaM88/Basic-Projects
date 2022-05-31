function tennisRanklist(input) {

    let index = 0;
    let tournaments = Number(input[index]);
    index++;
    let startPoints = Number(input[index]);
    index++
    let currentPoints = 0;
    let points = 0
    let winCounts = 0;
    let stageOfTournaments = input[index];
    index++

    for (let i = 1; i <= tournaments; i++) {
        if (stageOfTournaments === "F") {
            points = 1200;
        } else if (stageOfTournaments === "W") {
            points = 2000;
            winCounts++;
        } else if (stageOfTournaments === "SF") {
            points = 720;
        }
      
        startPoints += points;
        currentPoints += points;
        stageOfTournaments = input[index];
        index++;
    }
    let averagePoints = currentPoints / tournaments;
    let percentageOfWinning = winCounts / tournaments * 100;

    console.log(`Final points: ${startPoints}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(percentageOfWinning.toFixed(2) + "%");

}
tennisRanklist([5, 1400, "F", "W", "W", "SF", "SF"])