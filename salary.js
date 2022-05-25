function salary(input) {

    let index = 0;
    let tabs = Number(input[index]);
    index++;
    let money = Number(input[index]);
    index++;
    isHaveMoney = true;

    for (let i = 0; i <= tabs; i++) {
        let currentTabs = input[index];
        index++;

        if (currentTabs === "Facebook") {
            money -= 150;
        } else if (currentTabs === "Instagram") {
            money -= 100;
        } else if (currentTabs === "Reddit") {
            money -= 50;
        }
        if (money <= 0) {
            isHaveMoney = false;
            console.log("You have lost your salary.");
            break;
        }
    }
    if(isHaveMoney){
        console.log(money);
    }
}
salary([10, 750, "Facebook", "Dev.bg", "Instagram", "Reddit", "Facebook", "Facebook", "Facebook"])