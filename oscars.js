function oscars(input) {
    let actorName = input[0];
    let academyPoints = Number(input[1]);
    let evaluaterName = "";
    let evaluaterPoints = 0;
    let pointsNeeded = 1250.5;
   
    for (let i = 3; i < input.length; i++) {
      evaluaterName = input[i++];
      evaluaterPoints = input[i];
   
      academyPoints = academyPoints + (evaluaterName.length * evaluaterPoints) / 2;
      if (academyPoints >= pointsNeeded) {
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${academyPoints.toFixed(1)}!`);
        break;
      }
    }
    let diff = Math.abs(academyPoints - pointsNeeded).toFixed(1);
    if (academyPoints < pointsNeeded) {
      console.log(`Sorry, ${actorName} you need ${diff} more!`);
    }
  }